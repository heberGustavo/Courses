using ApiRestNET5.Model;
using ApiRestNET5.Model.Context;

namespace ApiRestNET5.Repository.Implementation
{
	public class BookRepositoryImplamentation : IBookRepository
	{
		private MySQLContext _context;

		public BookRepositoryImplamentation(MySQLContext context)
		{
			_context = context;
		}

		#region Read

		public List<Book> FindAll() => _context.Books.ToList();

		public Book FindById(long id) => _context.Books.SingleOrDefault(x => x.Id == id);

		#endregion

		#region Write

		public Book Create(Book book)
		{
			try
			{
				_context.Books.Add(book);
				_context.SaveChanges();
			}
			catch (Exception)
			{
				throw;
			}

			return book;
		}

		public Book Update(Book book)
		{
			var result = _context.Books.SingleOrDefault(b => b.Id == book.Id);
			if (result != null)
			{
				try
				{
					_context.Entry(result).CurrentValues.SetValues(book);
					_context.SaveChanges();
				}
				catch (Exception)
				{
					throw;
				}
			}

			return book;
		}

		public void Delete(long id)
		{
			try
			{
				var book = _context.Books.SingleOrDefault(b => b.Id == id);
				if (book != null)
				{
					_context.Books.Remove(book);
					_context.SaveChanges();
				}
			}
			catch (Exception)
			{
				throw;
			}
		}

		#endregion

	}
}
