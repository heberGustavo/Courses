using ApiRestNET5.Model;
using ApiRestNET5.Services;
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
		private readonly IPersonService _personService;

		public PersonController(ILogger<PersonController> logger, IPersonService personService)
		{
			_logger = logger;
			_personService = personService;
		}

		[HttpGet]
		public IActionResult Get()
		{
			var persons = _personService.FindAll();
			if (!persons.Any()) return BadRequest();

			return Ok(persons);
		}

		[HttpGet("{id}")]
		public IActionResult Get(int id)
		{
			var person = _personService.FindById(id);
			if (person == null) return NotFound();

			return Ok(person);
		}

		[HttpPost]
		public IActionResult Create([FromBody] Person model)
		{
			if(model == null) return BadRequest();
			return Ok(_personService.Create(model));
		}

		[HttpPut]
		public IActionResult Update([FromBody] Person model)
		{
			if (model == null) return BadRequest();
			return Ok(_personService.Update(model));
		}

		[HttpDelete("{id}")]
		public IActionResult Delete(long id)
		{
			if (id <= 0) return BadRequest();
			
			_personService.Delete(id);

			return NoContent();
		}

	}
}
