using ApiRestNET5.Business;
using ApiRestNET5.Data.VO;
using ApiRestNET5.Hypermedia.Filters;
using ApiRestNET5.Model;
using Asp.Versioning;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ApiRestNET5.Controllers
{
	[ApiController]
	[ApiVersion("1")]
	[Route("api/[controller]/v{version:apiVersion}")]
	[Authorize("Bearer")]
	public class PersonController : ControllerBase
	{
		private readonly ILogger<PersonController> _logger;
		private readonly IPersonBusiness _personBusiness;

		public PersonController(ILogger<PersonController> logger, IPersonBusiness personBusiness)
		{
			_logger = logger;
			_personBusiness = personBusiness;
		}

		[HttpGet("{sortDirection}/{pageSize}/{page}")]
		[ProducesResponseType((200), Type = typeof(List<PersonVO>))]
		[ProducesResponseType(204)]
		[ProducesResponseType(400)]
		[ProducesResponseType(401)]
		[TypeFilter(typeof(HyperMediaFilter))]
		public IActionResult Get([FromQuery] string? name, string sortDirection, int pageSize, int page)
		{
			return Ok(_personBusiness.FindWithPageSeach(name, sortDirection, pageSize, page));
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

		[HttpGet("findByName")]
		[ProducesResponseType((200), Type = typeof(List<PersonVO>))]
		[ProducesResponseType(204)]
		[ProducesResponseType(400)]
		[ProducesResponseType(401)]
		public IActionResult Get([FromQuery] string? firstName, [FromQuery] string? lastName)
		{
			var persons = _personBusiness.FindByName(firstName, lastName);
			if(persons == null) return NotFound();
			return Ok(persons);
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

		[HttpPatch("{id}")]
		[ProducesResponseType((200), Type = typeof(PersonVO))]
		[ProducesResponseType(204)]
		[ProducesResponseType(400)]
		[ProducesResponseType(401)]
		[TypeFilter(typeof(HyperMediaFilter))]
		public IActionResult Patch(int id)
		{
			var person = _personBusiness.Disable(id);
			if (person == null) return NotFound();

			return Ok(person);
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
