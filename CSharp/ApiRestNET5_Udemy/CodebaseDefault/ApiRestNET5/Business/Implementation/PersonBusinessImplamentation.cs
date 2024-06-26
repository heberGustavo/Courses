﻿using ApiRestNET5.Data.Converter.Implementations;
using ApiRestNET5.Data.VO;
using ApiRestNET5.Hypermedia.Utils;
using ApiRestNET5.Model;
using ApiRestNET5.Repository;
using ApiRestNET5.Repository.Generic;

namespace ApiRestNET5.Business.Implementation
{
	public class PersonBusinessImplamentation : IPersonBusiness
	{
		private readonly IPersonRepository _personRepository;
		private readonly PersonConverter _converter;

		public PersonBusinessImplamentation(IPersonRepository personRepository)
		{
			_personRepository = personRepository;
			_converter = new PersonConverter();
		}

		#region Read

		public List<PersonVO> FindAll() => _converter.Parser(_personRepository.FindAll());

		public PagedSeachVO<PersonVO> FindWithPageSeach(string name, string sortDirection, int pageSize, int page)
		{
			var sort = (!string.IsNullOrWhiteSpace(sortDirection) && !sortDirection.Equals("desc")) ? "asc" : "desc";
			var size = (pageSize < 1) ? 10 : pageSize;
			var offset = (page > 0) ? (page - 1) * size : 0;

			var query = "SELECT * FROM person p WHERE 1 = 1 ";
			if (!string.IsNullOrWhiteSpace(name)) query = query + $" AND p.first_name LIKE '%{name}%'";
			query = query + $" ORDER BY p.first_name {sort} LIMIT {size} offset {offset}";

			string countResults = "SELECT COUNT(*) FROM person p WHERE 1 = 1 ";
			if (!string.IsNullOrWhiteSpace(name)) countResults = countResults + $" AND p.first_name LIKE '%{name}%'";

			var persons = _personRepository.FindWithPagedSeach(query);
			int totalResults = _personRepository.GetCount(countResults);

			return new PagedSeachVO<PersonVO> { 
				CurrentPage = page,
				List = _converter.Parser(persons),
				PageSize = size,
				SortDirections = sort,
				TotalResults = totalResults
			};
		}

		public PersonVO FindById(long id) => _converter.Parser(_personRepository.FindById(id));

		public List<PersonVO> FindByName(string firstName, string lastName)
		{
			if (!string.IsNullOrWhiteSpace(firstName) && !string.IsNullOrWhiteSpace(lastName))
				return _converter.Parser(_personRepository.FindByFirstLastName(firstName, lastName));
			else if (!string.IsNullOrWhiteSpace(firstName))
				return _converter.Parser(_personRepository.FindByFirstName(firstName));
			else if (!string.IsNullOrWhiteSpace(lastName))
				return _converter.Parser(_personRepository.FindByLastName(firstName));
			else
				return null;
		}

		#endregion

		#region Write

		public PersonVO Create(PersonVO person) 
		{
			var personEntity = _converter.Parser(person);
			personEntity = _personRepository.Create(personEntity);
			return _converter.Parser(personEntity);
		} 

		public PersonVO Update(PersonVO person)
		{
			var personEntity = _converter.Parser(person);
			personEntity = _personRepository.Update(personEntity);
			return _converter.Parser(personEntity);
		}

		public PersonVO Disable(long id)
		{
			var personEntity = _personRepository.Disable(id);
			return _converter.Parser(personEntity);
		}

		public void Delete(long id) => _personRepository.Delete(id);

		#endregion

	}
}
