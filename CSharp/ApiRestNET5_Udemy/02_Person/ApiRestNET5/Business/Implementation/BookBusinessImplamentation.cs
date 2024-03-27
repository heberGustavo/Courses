using ApiRestNET5.Data.Converter.Implementations;
using ApiRestNET5.Data.VO;
using ApiRestNET5.Model;
using ApiRestNET5.Repository;
using ApiRestNET5.Repository.Generic;

namespace ApiRestNET5.Business.Implementation
{
	public class BookBusinessImplamentation : IBookBusiness
	{
		private readonly IRepository<Book> _bookRepository;
		private readonly BookConverter _converter;

		public BookBusinessImplamentation(IRepository<Book> bookRepository)
		{
			_bookRepository = bookRepository;
			_converter = new BookConverter();
		}

		#region Read

		public List<BookVO> FindAll() => _converter.Parser(_bookRepository.FindAll());

		public BookVO FindById(long id)
		{
			if (id <= 0) return null; 
			return _converter.Parser(_bookRepository.FindById(id));
		} 

		#endregion

		#region Write

		public BookVO Create(BookVO book)
		{
			if (book == null) return null;

			var bookEntity = _converter.Parser(book);
			bookEntity = _bookRepository.Create(bookEntity);
			return _converter.Parser(bookEntity);
		}

		public BookVO Update(BookVO book)
		{
			if (book == null) return null;

			var bookEntity = _converter.Parser(book);
			bookEntity = _bookRepository.Update(bookEntity);
			return _converter.Parser(bookEntity);
		}

		public void Delete(long id) => _bookRepository.Delete(id);
		

		#endregion

	}
}
