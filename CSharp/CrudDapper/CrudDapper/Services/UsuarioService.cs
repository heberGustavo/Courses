using AutoMapper;
using CrudDapper.DTO;
using CrudDapper.Models;
using Dapper;
using System.Collections;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Security.Cryptography.Xml;

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

				if (usuariosBanco.Count() <= 0)
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

		public async Task<ResponseModel<Usuario>> BuscarUsuariosPorId(int id)
		{
			var response = new ResponseModel<Usuario>();

			using (var conn = new SqlConnection(_configuration.GetConnectionString("DefaultConnection")))
			{
				var usuario = await conn.QueryFirstOrDefaultAsync<Usuario>("SELECT * FROM Usuarios WHERE Id = @Id", new { Id = id });

				if(usuario == null)
				{
					response.Mensagem = "Nenhum usuário localizado!";
					response.Status = false;
					return response;
				}

				response.Dados = usuario;
				response.Mensagem = "Usuário localizado!";
			}

			return response;
		}

		public async Task<ResponseModel<List<UsuarioListarDTO>>> CriarUsuario(UsuarioCriarDTO usuario)
		{
			var response = new ResponseModel<List<UsuarioListarDTO>>();

			using (var conn = new SqlConnection(_configuration.GetConnectionString("DefaultConnection")))
			{
				var usuarioCriado = await conn.ExecuteAsync(@"INSERT INTO Usuarios (NomeCompleto, Email, Cargo, CPF, Salario, Situacao, Senha)
															 VALUES (@NomeCompleto, @Email, @Cargo, @CPF, @Salario, @Situacao, @Senha)", usuario);

				if(usuarioCriado <= 0)
				{
					response.Mensagem = "Ocorreu um erro ao salvar usuário. Tente novamente!";
					response.Status = false;
					return response;
				}

				var usuarios = await ListarUsuarios(conn);

				var usuariosMapeados = _mapper.Map<List<UsuarioListarDTO>>(usuarios);

				response.Dados = usuariosMapeados;
				response.Mensagem = "Usuário cadastrado com sucesso!";
			}

			return response;
		}

		public async Task<ResponseModel<List<UsuarioListarDTO>>> EditarUsuario(UsuarioEditarDTO usuario)
		{
			var response = new ResponseModel<List<UsuarioListarDTO>>();

			using (var conn = new SqlConnection(_configuration.GetConnectionString("DefaultConnection")))
			{
				var usuarioEditado = await conn.ExecuteAsync(@"UPDATE [dbo].[Usuarios]
															   SET [NomeCompleto] = @NomeCompleto
																  ,[Email] = @Email
																  ,[Cargo] = @Cargo
																  ,[CPF] = @CPF
																  ,[Salario] = @Salario
																  ,[Situacao] = @Situacao
															 WHERE Id = @Id", usuario);

				if (usuarioEditado <= 0)
				{
					response.Mensagem = "Ocorreu um erro ao editar usuário. Tente novamente!";
					response.Status = false;
					return response;
				}

				var usuarios = await ListarUsuarios(conn);

				var usuariosMapeados = _mapper.Map<List<UsuarioListarDTO>>(usuarios);

				response.Dados = usuariosMapeados;
				response.Mensagem = "Usuário alterado com sucesso!";
			}

			return response;
		}

		public async Task<ResponseModel<List<UsuarioListarDTO>>> ExcluirUsuario(int id)
		{
			var response = new ResponseModel<List<UsuarioListarDTO>>();

			using (var conn = new SqlConnection(_configuration.GetConnectionString("DefaultConnection")))
			{
				var usuarioExclusao = await conn.ExecuteAsync(@"DELETE FROM Usuarios WHERE Id = @Id", new { Id = id });

				if (usuarioExclusao <= 0)
				{
					response.Mensagem = "Ocorreu um erro ao excluir usuário. Tente novamente!";
					response.Status = false;
					return response;
				}

				var usuarios = await ListarUsuarios(conn);

				var usuariosMapeados = _mapper.Map<List<UsuarioListarDTO>>(usuarios);

				response.Dados = usuariosMapeados;
				response.Mensagem = "Usuário deletado com sucesso!";
			}

			return response;
		}

		#region Métodos Privados

		private static async Task<IEnumerable<Usuario>> ListarUsuarios(SqlConnection connection)
		{
			return await connection.QueryAsync<Usuario>("SELECT * FROM Usuarios");
		}

		#endregion
	}
}
