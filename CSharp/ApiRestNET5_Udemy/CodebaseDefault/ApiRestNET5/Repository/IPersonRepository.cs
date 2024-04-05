using ApiRestNET5.Model;
using ApiRestNET5.Repository.Generic;

namespace ApiRestNET5.Repository
{
	public interface IPersonRepository : IRepository<Person>
	{
		Person Disable(long id);
	}
}
