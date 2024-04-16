using ApiRestNET5.Model;
using ApiRestNET5.Repository.Generic;

namespace ApiRestNET5.Repository
{
	public interface IPersonRepository : IRepository<Person>
	{
		Person Disable(long id);
		List<Person> FindByFirstName(string firstName);
		List<Person> FindByLastName(string lastName);
		List<Person> FindByFirstLastName(string firstName, string lastName);
	}
}
