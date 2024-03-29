﻿using ApiRestNET5.Data.Converter.Implementations;
using ApiRestNET5.Data.VO;
using ApiRestNET5.Model;
using ApiRestNET5.Repository;
using ApiRestNET5.Repository.Generic;

namespace ApiRestNET5.Business.Implementation
{
	public class PersonBusinessImplamentation : IPersonBusiness
	{
		private readonly IRepository<Person> _personRepository;
		private readonly PersonConverter _converter;

		public PersonBusinessImplamentation(IRepository<Person> personRepository)
		{
			_personRepository = personRepository;
			_converter = new PersonConverter();
		}

		#region Read

		public List<PersonVO> FindAll() => _converter.Parser(_personRepository.FindAll());

		public PersonVO FindById(long id) => _converter.Parser(_personRepository.FindById(id));

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

		public void Delete(long id) => _personRepository.Delete(id);
		
		#endregion

	}
}
