using EFCore.WebAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace EFCore.WebAPI.Data
{
	public class HeroiContext : DbContext
	{
		public DbSet<Heroi> Herois { get; set; }
		public DbSet<Batalha> Batalhas { get; set; }
		public DbSet<Arma> Armas { get; set; }
		public DbSet<HeroiBatalha> HeroisBatalhas { get; set; }
		public DbSet<IdentidadeSecreta> IdentidadesSecretas { get; set; }

		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			optionsBuilder.UseSqlServer("Password=root;Persist Security Info=True;User ID=root;Initial Catalog=HeroiApp;Data Source=DESKTOP-N25IT39\\SQLEXPRESS;TrustServerCertificate=True;");
		}

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			AdicionarValidacaoChaveCompostaHeroiBatalha(modelBuilder);
		}

		private void AdicionarValidacaoChaveCompostaHeroiBatalha(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<HeroiBatalha>(entity =>
			{
				entity.HasKey(e => new { e.BatalhaId, e.HeroiId });
			});
		}
	}
}
