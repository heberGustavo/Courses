using CrudDapper.DTO;
using CrudDapper.Models;

namespace CrudDapper.Services
{
	public interface IUsuarioInterface
	{
		Task<ResponseModel<List<UsuarioListarDTO>>> BuscarUsuarios();
	}
}
