using ApiRestNET5.Business;
using ApiRestNET5.Business.Implementation;
using ApiRestNET5.Model.Context;
using ApiRestNET5.Repository;
using ApiRestNET5.Repository.Implementation;
using EvolveDb;
using Microsoft.EntityFrameworkCore;
using MySqlConnector;
using Serilog;
using System.Security.Cryptography.Xml;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

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

#region Dependency Injection

builder.Services.AddScoped<IPersonBusiness, PersonBusinessImplamentation>();
builder.Services.AddScoped<IPersonRepository, PersonRepositoryImplamentation>();

#endregion

#region Versioning
builder.Services.AddApiVersioning();
#endregion

#region Swagger
builder.Services.AddSwaggerGen();
#endregion

var app = builder.Build();
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.UseSwagger();
app.UseSwaggerUI();

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