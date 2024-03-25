using ApiRestNET5.Migration;
using ApiRestNET5.Model;
using ApiRestNET5.Repository;

namespace ApiRestNET5.Business.Implementation
{
	public class PersonBusinessImplamentation : IPersonBusiness
	{
		private readonly IPersonRepository _personRepository;

		public PersonBusinessImplamentation(IPersonRepository personRepository)
		{
			_personRepository = personRepository;
		}

		#region Read

		public List<Person> FindAll() => _personRepository.FindAll();

		public Person FindById(long id) => _personRepository.FindById(id);

		#endregion

		#region Write

		public Person Create(Person person) => _personRepository.Create(person);

		public Person Update(Person person) => _personRepository.Update(person);

		public void Delete(long id) => _personRepository.Delete(id);
		
		#endregion

	}
}
