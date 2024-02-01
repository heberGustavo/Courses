namespace BlazorPositionTeams.Entities
{
	public class Team
	{
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public int Points { get; set; }
        public int Games { get; set; }
        public int Victories { get; set; }
        public int Draws { get; set; }
        public int Defeats { get; set; }
        public int GoalDifference { get; set; }
        public int GoalsScored { get; set; }
        public string Status { get; set; } = string.Empty;
        public bool HasMundial { get; set; }
    }
}
