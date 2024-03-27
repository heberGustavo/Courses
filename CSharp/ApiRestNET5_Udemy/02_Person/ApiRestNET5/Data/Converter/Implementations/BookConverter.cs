using ApiRestNET5.Data.Converter.Contract;
using ApiRestNET5.Data.VO;
using ApiRestNET5.Model;

namespace ApiRestNET5.Data.Converter.Implementations
{
	public class BookConverter : IParser<BookVO, Book>, IParser<Book, BookVO>
	{
		#region Return Book

		public Book Parser(BookVO origem)
		{
			if (origem == null) return null;
			return new Book
			{
				Id = origem.Id,
				Author = origem.Author,
				Title = origem.Title,
				Price = origem.Price,
				LaunchDate = origem.LaunchDate
			};
		}

		public List<Book> Parser(List<BookVO> origem)
		{
			if (origem == null) return null;
			return origem.Select(item => Parser(item)).ToList();
		}

		#endregion

		#region Return BookVO

		public BookVO Parser(Book origem)
		{
			if (origem == null) return null;
			return new BookVO
			{
				Id = origem.Id,
				Author = origem.Author,
				Title = origem.Title,
				Price = origem.Price,
				LaunchDate = origem.LaunchDate
			};
		}

		public List<BookVO> Parser(List<Book> origem)
		{
			if (origem == null) return null;
			return origem.Select(item => Parser(item)).ToList();
		}

		#endregion
	}
}
