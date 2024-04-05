using ApiRestNET5.Data.VO;
using ApiRestNET5.Model;

namespace ApiRestNET5.Business
{
	public interface IPersonBusiness
	{
		List<PersonVO> FindAll();
		PersonVO FindById(long id);
		PersonVO Create(PersonVO person);
		PersonVO Update(PersonVO person);
		PersonVO Disable(long id);
		void Delete(long id);
	}
}
