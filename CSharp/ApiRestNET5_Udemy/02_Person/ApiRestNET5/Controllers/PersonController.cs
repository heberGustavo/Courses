using Microsoft.AspNetCore.Mvc;

namespace ApiRestNET5.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class PersonController : ControllerBase
	{
		private readonly ILogger<PersonController> _logger;

		public PersonController(ILogger<PersonController> logger)
		{
			_logger = logger;
		}

		
	}
}
