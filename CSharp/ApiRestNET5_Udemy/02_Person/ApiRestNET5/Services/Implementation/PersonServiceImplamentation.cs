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

		public List<Person> FindAll()
		{
			return _context.Persons.ToList();
		}

		public Person FindById(long id)
		{
			throw new NotImplementedException();
		}

		#endregion

		#region Write

		public Person Create(Person person)
		{
			throw new NotImplementedException();
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
