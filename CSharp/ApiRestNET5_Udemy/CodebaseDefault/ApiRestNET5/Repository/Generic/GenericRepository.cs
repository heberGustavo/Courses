using ApiRestNET5.Model;
using ApiRestNET5.Model.Base;
using ApiRestNET5.Model.Context;
using Microsoft.EntityFrameworkCore;

namespace ApiRestNET5.Repository.Generic
{
	public class GenericRepository<T> : IRepository<T> where T : BaseEntity
	{
		protected MySQLContext _context;
		private DbSet<T> _dataset;

		public GenericRepository(MySQLContext context)
		{
			_context = context;
			_dataset = context.Set<T>();
		}

		#region Read

		public List<T> FindAll() => _dataset.ToList();

		public T FindById(long id) => _dataset.SingleOrDefault(p => p.Id == id);

		#endregion

		public T Create(T item)
		{
			try
			{
				_dataset.Add(item);
				_context.SaveChanges();
				return item;
			}
			catch (Exception)
			{
				throw;
			}
		}

		public void Delete(long id)
		{
			try
			{
				var item = _dataset.SingleOrDefault(b => b.Id == id);
				if (item != null)
				{
					_dataset.Remove(item);
					_context.SaveChanges();
				}
			}
			catch (Exception)
			{
				throw;
			}
		}

		public T Update(T item)
		{
			var result = _dataset.SingleOrDefault(b => b.Id == item.Id);
			if (result != null)
			{
				try
				{
					_context.Entry(result).CurrentValues.SetValues(item);
					_context.SaveChanges();
					return item;
				}
				catch (Exception)
				{
					throw;
				}
			}
			else
				return null;
		}
		
		public bool Exists(long id)
		{
			return _dataset.Any(p => p.Id.Equals(id));
		}
	}
}
