using ApiRestNET5.Migration;
using ApiRestNET5.Model;

namespace ApiRestNET5.Services.Implementation
{
	public class PersonServiceImplamentation : IPersonService
	{
		private MySQLContext _context;

		public PersonServiceImplamentation(MySQLContext context)
		{
			_context = context;
		}

		#region Read

		public List<Person> FindAll() => _context.Persons.ToList();

		public Person FindById(long id) => _context.Persons.SingleOrDefault(p => p.Id.Equals(id));

		#endregion

		#region Write

		public Person Create(Person person)
		{
			try
			{
				_context.Persons.Add(person);
				_context.SaveChanges();
			}
			catch (Exception)
			{
				throw;
			}

			return person;
		}

		public Person Update(Person person)
		{
			throw new NotImplementedException();
		}

		public void Delete(Person person)
		{
			throw new NotImplementedException();
		}

		#endregion
	}
}
