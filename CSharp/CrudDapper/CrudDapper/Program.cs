using CrudDapper.Profiles;
using CrudDapper.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<IUsuarioInterface, UsuarioService>();

builder.Services.AddAutoMapper(typeof(Program));

builder.Services.AddCors(options =>
{
	options.AddPolicy("usuariosApp", builder =>
	{
		builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
	});
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
	app.UseSwagger();
	app.UseSwaggerUI();
}

app.UseCors("usuariosApp");
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
