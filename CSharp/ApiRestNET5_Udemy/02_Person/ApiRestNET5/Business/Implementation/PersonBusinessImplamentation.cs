using ApiRestNET5.Migration;
using ApiRestNET5.Model;

namespace ApiRestNET5.Business.Implementation
{
	public class PersonBusinessImplamentation : IPersonBusiness
	{
		private MySQLContext _context;

		public PersonBusinessImplamentation(MySQLContext context)
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
			if (!Exists(person.Id)) return new Person();

			var result = _context.Persons.SingleOrDefault(p => p.Id.Equals(person.Id));
			if (result != null) {
				try
				{
					_context.Entry(result).CurrentValues.SetValues(person);
					_context.SaveChanges();
				}
				catch (Exception)
				{
					throw;
				}
			}
			
			return person;
		}

		public void Delete(long id)
		{
			var result = _context.Persons.SingleOrDefault(p => p.Id.Equals(id));
			if(result != null)
			{
				try
				{
					_context.Persons.Remove(result);
					_context.SaveChanges();
				}
				catch (Exception)
				{
					throw;
				}
			}
		}

		#endregion

		#region Methods Public

		public bool Exists(long id)
		{
			return _context.Persons.Any(p => p.Id.Equals(id));
		}

		#endregion
	}
}
