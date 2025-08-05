using CrudDapper.DTO;
using CrudDapper.Models;

namespace CrudDapper.Services
{
	public interface IUsuarioInterface
	{
		Task<ResponseModel<List<UsuarioListarDTO>>> BuscarUsuarios();
		Task<ResponseModel<Usuario>> BuscarUsuariosPorId(int id);
		Task<ResponseModel<List<UsuarioListarDTO>>> CriarUsuario(UsuarioCriarDTO usuario);
		Task<ResponseModel<List<UsuarioListarDTO>>> EditarUsuario(UsuarioEditarDTO usuario);
		Task<ResponseModel<List<UsuarioListarDTO>>> ExcluirUsuario(int id);
	}
}
