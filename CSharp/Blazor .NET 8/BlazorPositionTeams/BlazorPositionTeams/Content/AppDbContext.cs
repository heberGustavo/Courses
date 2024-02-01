using BlazorPositionTeams.Entities;
using Microsoft.EntityFrameworkCore;

namespace BlazorPositionTeams.Content
{
	public class AppDbContext : DbContext
	{
		public AppDbContext(DbContextOptions options) : base(options)
		{
		}

        public DbSet<Team> Teams { get; set; }

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<Team>().HasData(
				new Team
				{
					Id = 1,
					Name = "Botafogo",
					Games = 32,
					Points = 65,
					Victories = 30,
					Draws = 1,
					Defeats = 1,
					GoalDifference = 60,
					GoalsScored = 90,
					HasMundial = false,
					Status = "Libertadores"
				},
				new Team
				{
					Id = 2,
					Name = "Palmeiras",
					Games = 30,
					Points = 60,
					Victories = 20,
					Draws = 5,
					Defeats = 5,
					GoalDifference = 60,
					GoalsScored = 90,
					HasMundial = true,
					Status = "Libertadores"
				},
				new Team
				{
					Id = 3,
					Name = "São Paulo",
					Games = 32,
					Points = 50,
					Victories = 30,
					Draws = 1,
					Defeats = 1,
					GoalDifference = 60,
					GoalsScored = 90,
					HasMundial = true,
					Status = "Sulamericana"
				},
				new Team
				{
					Id = 4,
					Name = "Atletico Paranaense",
					Games = 15,
					Points = 10,
					Victories = 5,
					Draws = 1,
					Defeats = 1,
					GoalDifference = 60,
					GoalsScored = 90,
					HasMundial = false,
					Status = "Rebaixamento"
				}
			);

			base.OnModelCreating(modelBuilder);
		}
	}
}
