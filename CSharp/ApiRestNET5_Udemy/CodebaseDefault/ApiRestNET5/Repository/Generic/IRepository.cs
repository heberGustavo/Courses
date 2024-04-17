using ApiRestNET5.Model;
using ApiRestNET5.Model.Base;

namespace ApiRestNET5.Repository.Generic
{
	public interface IRepository<T> where T : BaseEntity
	{
		List<T> FindAll();
		T FindById(long id);
		T Create(T item);
		T Update(T item);
		void Delete(long id);
		bool Exists(long id);

		List<T> FindWithPagedSeach(string query);
		int GetCount(string query);
	}
}
