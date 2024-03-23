using ApiRestNET5.Services;
using Microsoft.AspNetCore.Mvc;

namespace ApiRestNET5.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
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

	}
}
