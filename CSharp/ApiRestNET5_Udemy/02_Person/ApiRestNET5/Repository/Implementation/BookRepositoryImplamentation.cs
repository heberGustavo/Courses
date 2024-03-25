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
			throw new NotImplementedException();
		}

		public Book Delete(long id)
		{
			throw new NotImplementedException();
		}

		public Book Update(Book book)
		{
			throw new NotImplementedException();
		}

		#endregion

	}
}
