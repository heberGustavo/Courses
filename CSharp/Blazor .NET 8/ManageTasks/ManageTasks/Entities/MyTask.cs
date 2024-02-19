namespace ManageTasks.Entities
{
	public class MyTask
	{
		public Guid Id { get; set; }
		public string Description { get; set; }
		public bool Completed { get; set; }
		public DateTime DateCreation { get; set; }
	}
}
