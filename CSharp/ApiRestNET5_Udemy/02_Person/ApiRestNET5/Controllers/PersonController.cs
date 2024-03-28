using ApiRestNET5.Business;
using ApiRestNET5.Data.VO;
using ApiRestNET5.Hypermedia.Filters;
using ApiRestNET5.Model;
using Asp.Versioning;
using Microsoft.AspNetCore.Mvc;

namespace ApiRestNET5.Controllers
{
	[ApiVersion("1")]
	[ApiController]
	[Route("api/[controller]/v{version:apiVersion}")]
	public class PersonController : ControllerBase
	{
		private readonly ILogger<PersonController> _logger;
		private readonly IPersonBusiness _personBusiness;

		public PersonController(ILogger<PersonController> logger, IPersonBusiness personBusiness)
		{
			_logger = logger;
			_personBusiness = personBusiness;
		}

		[HttpGet()]
		[ProducesResponseType((200), Type = typeof(List<PersonVO>))]
		[ProducesResponseType(204)]
		[ProducesResponseType(400)]
		[ProducesResponseType(401)]
		[TypeFilter(typeof(HyperMediaFilter))]
		public IActionResult Get()
		{
			var persons = _personBusiness.FindAll();
			if (!persons.Any()) return BadRequest();

			return Ok(persons);
		}

		[HttpGet("{id}")]
		[ProducesResponseType((200), Type = typeof(PersonVO))]
		[ProducesResponseType(204)]
		[ProducesResponseType(400)]
		[ProducesResponseType(401)]
		[TypeFilter(typeof(HyperMediaFilter))]
		public IActionResult Get(int id)
		{
			var person = _personBusiness.FindById(id);
			if (person == null) return NotFound();

			return Ok(person);
		}

		[HttpPost]
		[ProducesResponseType((200), Type = typeof(PersonVO))]
		[ProducesResponseType(400)]
		[ProducesResponseType(401)]
		[TypeFilter(typeof(HyperMediaFilter))]
		public IActionResult Create([FromBody] PersonVO model)
		{
			if(model == null) return BadRequest();
			return Ok(_personBusiness.Create(model));
		}

		[HttpPut]
		[ProducesResponseType((200), Type = typeof(PersonVO))]
		[ProducesResponseType(400)]
		[ProducesResponseType(401)]
		[TypeFilter(typeof(HyperMediaFilter))]
		public IActionResult Update([FromBody] PersonVO model)
		{
			if (model == null) return BadRequest();
			return Ok(_personBusiness.Update(model));
		}

		[HttpDelete("{id}")]
		[ProducesResponseType(204)]
		[ProducesResponseType(400)]
		[ProducesResponseType(401)]
		public IActionResult Delete(long id)
		{
			if (id <= 0) return BadRequest();
			
			_personBusiness.Delete(id);

			return NoContent();
		}

	}
}
