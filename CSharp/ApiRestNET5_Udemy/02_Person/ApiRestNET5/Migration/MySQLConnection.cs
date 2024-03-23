using ApiRestNET5.Model;
using Microsoft.EntityFrameworkCore;

namespace ApiRestNET5.Migration
{
	public class MySQLConnection : DbContext
	{
        public MySQLConnection() {}

        public MySQLConnection(DbContextOptions<MySQLConnection> options) : base(options) {}

        public DbSet<Person> Persons { get; set; }
    }
}
