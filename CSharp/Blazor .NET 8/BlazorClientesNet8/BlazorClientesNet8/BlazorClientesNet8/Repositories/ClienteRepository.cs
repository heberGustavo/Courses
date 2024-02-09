using BlazorClientesNet8.Context;
using BlazorClientesNet8.Shared.Entities;
using BlazorClientesNet8.Shared.Interfaces;

namespace BlazorClientesNet8.Repositories
{
	public class ClienteRepository : IClienteRepository
	{
		private readonly ClienteContext _context;

		public ClienteRepository(ClienteContext context)
		{
			_context = context;
		}

		public Task<Cliente> AddClientAsync(Cliente model)
		{
			throw new NotImplementedException();
		}

		public Task<Cliente> DeleteClientAsync(int clienteId)
		{
			throw new NotImplementedException();
		}

		public Task<List<Cliente>> GetAllClientAsync()
		{
			throw new NotImplementedException();
		}

		public Task<Cliente> GetByIdClientAsync()
		{
			throw new NotImplementedException();
		}

		public Task<Cliente> UpdateClientAsync(Cliente model)
		{
			throw new NotImplementedException();
		}
	}
}
