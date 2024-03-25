using ApiRestNET5.Model;

namespace ApiRestNET5.Business
{
	public interface IBookBusiness
	{
		List<Book> FindAll();
		Book FindById(long id);

		Book Create(Book book);
		Book Update(Book book);
		Book Delete(long id);
	}
}
