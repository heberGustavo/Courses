using ApiRestNET5.Data.VO;
using ApiRestNET5.Model;

namespace ApiRestNET5.Business
{
	public interface IBookBusiness
	{
		List<BookVO> FindAll();
		BookVO FindById(long id);

		BookVO Create(BookVO book);
		BookVO Update(BookVO book);
		void Delete(long id);
	}
}
