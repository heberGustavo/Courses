using ApiRestNET5.Data.VO;
using ApiRestNET5.Hypermedia.Utils;
using ApiRestNET5.Model;

namespace ApiRestNET5.Business
{
	public interface IPersonBusiness
	{
		List<PersonVO> FindAll();
		PagedSeachVO<PersonVO> FindWithPageSeach(string name, string sortDirection, int pageSize, int page);
		PersonVO FindById(long id);
		List<PersonVO> FindByName(string firstName, string lastName);
		PersonVO Create(PersonVO person);
		PersonVO Update(PersonVO person);
		PersonVO Disable(long id);
		void Delete(long id);
	}
}
