using BlazorClientesNet8.Shared.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlazorClientesNet8.Shared.Interfaces
{
	public interface IClienteRepository
	{
		Task<Cliente> AddClientAsync(Cliente model);
		Task<Cliente> UpdateClientAsync(Cliente model);
		Task<Cliente> DeleteClientAsync(int clienteId);
		Task<List<Cliente>> GetAllClientAsync();
		Task<Cliente> GetByIdClientAsync(int clienteId);
	}
}
