using ApiRestNET5.Business;
using ApiRestNET5.Business.Implementation;
using ApiRestNET5.Configurations;
using ApiRestNET5.Hypermedia.Enricher;
using ApiRestNET5.Hypermedia.Filters;
using ApiRestNET5.Model.Context;
using ApiRestNET5.Repository;
using ApiRestNET5.Repository.Generic;
using ApiRestNET5.Services;
using ApiRestNET5.Services.Implamentations;
using EvolveDb;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Rewrite;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using MySqlConnector;
using Serilog;
using System.Text;

var builder = WebApplication.CreateBuilder(args);
var appTitle = "REST API's from 0 to Azure with ASP.NET 5 and Docker";
var appVersion = "v1";
var appDescription = $"API RESTful developed in course '{appTitle}'";

builder.Services.AddRouting(option => option.LowercaseUrls = true); //Set all URL to lowercase
builder.Services.AddControllers();

#region Token Configuration
var tokenConfiguration = new TokenConfiguration();
new ConfigureFromConfigurationOptions<TokenConfiguration>(
		builder.Configuration.GetSection("TokenConfiguration")
).Configure(tokenConfiguration);
#endregion

#region Authentication
builder.Services.AddAuthentication(option =>
{
	option.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
	option.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(option =>
{
	option.TokenValidationParameters = new TokenValidationParameters
	{
		ValidateIssuer = true,
		ValidateAudience = true,
		ValidateLifetime = true,
		ValidateIssuerSigningKey = true,
		ValidIssuer	= tokenConfiguration.Issuer,
		ValidAudience = tokenConfiguration.Audience,
		IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(tokenConfiguration.Secret))
	};
});
#endregion

#region Authorization
builder.Services.AddAuthorization(auth =>
{
	auth.AddPolicy("Bearer", new AuthorizationPolicyBuilder()
		.AddAuthenticationSchemes(JwtBearerDefaults.AuthenticationScheme)
		.RequireAuthenticatedUser().Build());
});
#endregion

#region MySQL
var connection = builder.Configuration["MySQLConnection:MySQLConnectionString"];
builder.Services.AddDbContext<MySQLContext>(options => options.UseMySql(
	connection,
	new MySqlServerVersion(new Version(8,0,31))
	));
#endregion

#region Migrations
if (builder.Environment.IsDevelopment())
{
	MigrationDatabase(connection);
}
#endregion

#region HATEOES
var filterOptions = new HyperMediaFilterOptions();
filterOptions.ContentResponseEnricherList.Add(new PersonEnricher());
filterOptions.ContentResponseEnricherList.Add(new BookEnricher());
#endregion

#region Dependency Injection
builder.Services.AddSingleton(tokenConfiguration);

builder.Services.AddScoped<IPersonBusiness, PersonBusinessImplamentation>();
builder.Services.AddScoped<IBookBusiness, BookBusinessImplamentation>();
builder.Services.AddScoped<ILoginBusiness, LoginBusiness>();

builder.Services.AddTransient<ITokenService, TokenService>();

builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped(typeof(IRepository<>), typeof(GenericRepository<>));

builder.Services.AddSingleton(filterOptions);
#endregion

#region Versioning
builder.Services.AddApiVersioning();
#endregion

#region Swagger
builder.Services.AddSwaggerGen(s =>
{
	s.SwaggerDoc("v1",
		new OpenApiInfo
		{
			Title = appTitle,
			Version = appVersion,
			Description = appDescription,
			Contact = new OpenApiContact
			{
				Name = "Heber Gustavo",
				Email = "heber.gbarbosa@hotmail.com",
				Url = new Uri("https://www.linkedin.com/in/heber-gustavo/")
			}
		});
});
#endregion

#region Enabling Cores
builder.Services.AddCors(options => options.AddDefaultPolicy(b =>
{
	b.AllowAnyOrigin()
	.AllowAnyMethod()
	.AllowAnyHeader();
}));
#endregion

var app = builder.Build();
app.UseHttpsRedirection();
app.UseAuthorization();

app.UseCors(); //It's necessary to be before Controllers and after UseHttpsRedirection

app.MapControllers();
app.MapControllerRoute("DefaultApi", "{controller=values}/v{version=apiVersion}/{id?}");

app.UseSwagger(); //Your responsible is: Generate JSON with Documentation

//Your responsible is: Generate a page HTML
app.UseSwaggerUI(s => { s.SwaggerEndpoint("/swagger/v1/swagger.json", $"{appTitle} - {appVersion}"); });

var option = new RewriteOptions();
option.AddRedirect("^$", "swagger");
app.UseRewriter(option);

app.Run();

void MigrationDatabase(string? connection)
{
	try
	{
		var evolveConnection = new MySqlConnection(connection);
		var evolte = new Evolve(evolveConnection, Log.Information)
		{
			Locations = new List<string> { "db/migration", "db/dataset"},
			IsEraseDisabled = true
		};
		evolte.Migrate();
	}
	catch (Exception ex)
	{
		Log.Error("Database migration failed", ex);
		throw;
	}
}