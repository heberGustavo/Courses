using ApiRestNET5.Model;
using ApiRestNET5.Model.Context;
using ApiRestNET5.Repository.Generic;

namespace ApiRestNET5.Repository
{
	public class PersonRepository : GenericRepository<Person>, IPersonRepository
	{
		public PersonRepository(MySQLContext context) : base(context)
		{
		}

		public Person Disable(long id)
		{
			if (!_context.Persons.Any(p => p.Id == id)) return null;
			
			var person = _context.Persons.SingleOrDefault(p => p.Id == id);
			if (person != null)
			{
				person.Enabled = false;
				try
				{
					_context.Entry(person).CurrentValues.SetValues(person);
					_context.SaveChanges();
				}
				catch (Exception)
				{
					throw;
				}
			}
			return person;
		}
	}
}
