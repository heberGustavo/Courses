using BlazorClientesNet8.Shared.Entities;
using Microsoft.EntityFrameworkCore;

namespace BlazorClientesNet8.Context
{
	public class ClienteContext : DbContext
	{
        public ClienteContext(DbContextOptions<ClienteContext> options) : base(options) { }

        public DbSet<Cliente> Clientes { get; set; }
    }
}
