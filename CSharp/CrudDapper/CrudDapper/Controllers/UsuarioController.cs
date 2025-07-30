using CrudDapper.DTO;
using CrudDapper.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CrudDapper.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuarioInterface _usuarioInterface;

        public UsuarioController(IUsuarioInterface usuarioInterface)
        {
            _usuarioInterface = usuarioInterface;
        }

        [HttpGet]
        public async Task<IActionResult> BuscarUsuarios()
        {
            var usuarios = await _usuarioInterface.BuscarUsuarios();

            if (usuarios.Status == false)
                return NotFound(usuarios);

            return Ok(usuarios);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> BuscarUsuarioPorId(int id)
        {
            var usuario = await _usuarioInterface.BuscarUsuariosPorId(id);

            if (usuario.Status == false)
                return NotFound(usuario);

            return Ok(usuario);
        }

        [HttpPost]
        public async Task<IActionResult> CriarUsuario(UsuarioCriarDTO usuario)
        {
            var usuarioCriar = await _usuarioInterface.CriarUsuario(usuario);

            if(usuarioCriar.Status == false)
                return BadRequest(usuarioCriar);

            return Ok(usuarioCriar);
        }

		[HttpPut]
		public async Task<IActionResult> EditarUsuario(UsuarioEditarDTO usuario)
		{
			var usuarioEditar = await _usuarioInterface.EditarUsuario(usuario);

			if (usuarioEditar.Status == false)
				return BadRequest(usuarioEditar);

			return Ok(usuarioEditar);
		}

		[HttpDelete("{id}")]
		public async Task<IActionResult> ExcluirUsuario(int id)
		{
			var usuarioExcluir = await _usuarioInterface.ExcluirUsuario(id);

			if (usuarioExcluir.Status == false)
				return BadRequest(usuarioExcluir);

			return Ok(usuarioExcluir);
		}
	}
}
