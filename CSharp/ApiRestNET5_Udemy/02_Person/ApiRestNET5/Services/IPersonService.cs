using ApiRestNET5.Model;

namespace ApiRestNET5.Services
{
	public interface IPersonService
	{
		List<Person> FindAll();
		Person FindById(long id);

		Person Create(Person person);
		Person Update(Person person);
		void Delete(long id);
	}
}
