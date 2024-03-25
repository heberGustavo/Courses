using ApiRestNET5.Model;

namespace ApiRestNET5.Repository
{
    public interface IBookRepository
    {
        List<Book> FindAll();
        Book FindById(long id);

        Book Create(Book book);
        Book Update(Book book);
        Book Delete(long id);
    }
}
