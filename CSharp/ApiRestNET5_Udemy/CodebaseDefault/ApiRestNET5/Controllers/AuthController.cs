using ApiRestNET5.Business;
using ApiRestNET5.Data.VO;
using Asp.Versioning;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ApiRestNET5.Controllers
{
	[ApiVersion("1")]
	[Route("api/[controller]/v{version:apiVersion}")]
	[ApiController]
	public class AuthController : ControllerBase
	{
		private readonly ILoginBusiness _loginBusiness;

		public AuthController(ILoginBusiness loginBusiness)
		{
			_loginBusiness = loginBusiness;
		}

		[HttpPost]
		[Route("signin")]
		public IActionResult Signin([FromBody] UserVO user)
		{
			if (user == null) return BadRequest("Invalid client request");

			var token = _loginBusiness.ValidateCredentials(user);
			if (token == null) return Unauthorized();

			return Ok(token);
		}

        [HttpPost]
        [Route("refresh")]
        public IActionResult Refresh([FromBody] TokenVO tokenVO)
        {
            if (tokenVO == null) return BadRequest("Invalid client request");

            var token = _loginBusiness.ValidateCredentials(tokenVO);
            if (token == null) return BadRequest("Invalid request");

            return Ok(token);
        }

		[HttpGet]
		[Route("logout")]
		[Authorize("Bearer")]
		public IActionResult Revoke()
		{
			var userName = User.Identity.Name;
			if (userName == null) return BadRequest();

			var result = _loginBusiness.RevokeToken(userName);
			if (!result) return BadRequest("Invalid request");

			return NoContent();
		}
	}
}
