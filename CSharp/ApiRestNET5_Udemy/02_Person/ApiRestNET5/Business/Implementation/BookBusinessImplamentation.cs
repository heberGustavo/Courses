using ApiRestNET5.Model;
using ApiRestNET5.Repository;

namespace ApiRestNET5.Business.Implementation
{
	public class BookBusinessImplamentation : IBookBusiness
	{
		private readonly IBookRepository _bookRepository;

		public BookBusinessImplamentation(IBookRepository bookRepository)
		{
			_bookRepository = bookRepository;
		}

		#region Read

		public List<Book> FindAll() => _bookRepository.FindAll();

		public Book FindById(long id)
		{
			if (id <= 0) return null; 

			return _bookRepository.FindById(id);
		} 

		#endregion

		#region Write

		public Book Create(Book book)
		{
			if (book == null) return null;
			return _bookRepository.Create(book);
		}

		public Book Update(Book book)
		{
			if (book == null) return null;
			return _bookRepository.Update(book);
		}

		public void Delete(long id) => _bookRepository.Delete(id);
		

		#endregion

	}
}
