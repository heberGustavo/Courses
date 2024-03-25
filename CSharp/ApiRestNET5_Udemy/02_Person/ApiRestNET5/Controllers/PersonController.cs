using ApiRestNET5.Business;
using ApiRestNET5.Model;
using Asp.Versioning;
using Microsoft.AspNetCore.Mvc;

namespace ApiRestNET5.Controllers
{
	[ApiVersion("1")]
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	public class PersonController : ControllerBase
	{
		private readonly ILogger<PersonController> _logger;
		private readonly IPersonBusiness _personBusiness;

		public PersonController(ILogger<PersonController> logger, IPersonBusiness personBusiness)
		{
			_logger = logger;
			_personBusiness = personBusiness;
		}

		[HttpGet]
		public IActionResult Get()
		{
			var persons = _personBusiness.FindAll();
			if (!persons.Any()) return BadRequest();

			return Ok(persons);
		}

		[HttpGet("{id}")]
		public IActionResult Get(int id)
		{
			var person = _personBusiness.FindById(id);
			if (person == null) return NotFound();

			return Ok(person);
		}

		[HttpPost]
		public IActionResult Create([FromBody] Person model)
		{
			if(model == null) return BadRequest();
			return Ok(_personBusiness.Create(model));
		}

		[HttpPut]
		public IActionResult Update([FromBody] Person model)
		{
			if (model == null) return BadRequest();
			return Ok(_personBusiness.Update(model));
		}

		[HttpDelete("{id}")]
		public IActionResult Delete(long id)
		{
			if (id <= 0) return BadRequest();
			
			_personBusiness.Delete(id);

			return NoContent();
		}

	}
}
