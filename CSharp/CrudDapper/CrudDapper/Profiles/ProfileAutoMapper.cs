using AutoMapper;
using CrudDapper.DTO;
using CrudDapper.Models;

namespace CrudDapper.Profiles
{
	public class ProfileAutoMapper : Profile
	{
		public ProfileAutoMapper() 
		{
			CreateMap<Usuario, UsuarioListarDTO>();
		}
	}
}
