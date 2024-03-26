using ApiRestNET5.Data.Converter.Contract;
using ApiRestNET5.Data.VO;
using ApiRestNET5.Model;

namespace ApiRestNET5.Data.Converter.Implementations
{
	public class PersonConverter : IParser<PersonVO, Person>, IParser<Person, PersonVO>
	{
		#region Return Person 

		public Person Parser(PersonVO origem)
		{
			if (origem == null) return null;
			return new Person
			{
				Id = origem.Id,
				FirstName = origem.FirstName,
				LastName = origem.LastName,
				Gender = origem.Gender,
				Address = origem.Address
			};
		}

		public List<Person> Parser(List<PersonVO> origem)
		{
			if (origem == null) return null;
			return origem.Select(item => Parser(item)).ToList();
		}

		#endregion
		
		#region Return PersonVO

		public PersonVO Parser(Person origem)
		{
			if (origem == null) return null;
			return new PersonVO
			{
				Id = origem.Id,
				FirstName = origem.FirstName,
				LastName = origem.LastName,
				Gender = origem.Gender,
				Address = origem.Address
			};
		}

		public List<PersonVO> Parser(List<Person> origem)
		{
			if (origem == null) return null;
			return origem.Select(item => Parser(item)).ToList();
		}

		#endregion

	}
}
