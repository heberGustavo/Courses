using ApiRestNET5.Business;
using ApiRestNET5.Business.Implementation;
using ApiRestNET5.Migration;
using ApiRestNET5.Repository;
using ApiRestNET5.Repository.Implementation;
using Microsoft.EntityFrameworkCore;

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
