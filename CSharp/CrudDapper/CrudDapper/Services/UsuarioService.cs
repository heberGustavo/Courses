using AutoMapper;
using CrudDapper.DTO;
using CrudDapper.Models;
using Dapper;
using System.Data.SqlClient;

namespace CrudDapper.Services
{
	public class UsuarioService : IUsuarioInterface
	{
		private readonly IConfiguration _configuration;
		private readonly IMapper _mapper;

		public UsuarioService(IConfiguration configuration, IMapper mapper)
        {
            _configuration = configuration;
			_mapper = mapper;
        }

        public async Task<ResponseModel<List<UsuarioListarDTO>>> BuscarUsuarios()
		{
			var response = new ResponseModel<List<UsuarioListarDTO>>();

			using (var conn = new SqlConnection(_configuration.GetConnectionString("DefaultConnection")))
			{
				var usuariosBanco = await conn.QueryAsync<Usuario>("SELECT * FROM Usuarios");

				if (usuariosBanco.Count() > 0)
				{
					response.Mensagem = "Nenhum usuário localizado!";
					response.Status = false;
					return response;
				}

				var usuarioMapeado = _mapper.Map<List<UsuarioListarDTO>>(usuariosBanco);

				response.Dados = usuarioMapeado;
				response.Mensagem = "Usuários localizados com sucesso!";
			}

			return response;
		}
	}
}
