using BlazorClientesNet8.Context;
using BlazorClientesNet8.Shared.Entities;
using BlazorClientesNet8.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace BlazorClientesNet8.Repositories
{
	public class ClienteRepository : IClienteRepository
	{
		private readonly ClienteContext _context;

		public ClienteRepository(ClienteContext context)
		{
			_context = context;
		}

		public async Task<Cliente> AddClientAsync(Cliente model)
		{
			if (model == null) return null!;

			var chk = await _context.Clientes.Where(_ => _.Nome.Equals(model.Nome)).FirstOrDefaultAsync();

			if (chk is not null) return null!;

			var newClient = await _context.Clientes.AddAsync(model);
			await _context.SaveChangesAsync();

			return newClient.Entity;
		}

		public async Task<Cliente> DeleteClientAsync(int clienteId)
		{
			var client = await _context.Clientes.FirstOrDefaultAsync(_ => _.Id == clienteId);
			
			if(client is null) return null!;

			_context.Clientes.Remove(client);
			await _context.SaveChangesAsync();
			return client;
		}

		public async Task<List<Cliente>> GetAllClientAsync()
			=> await _context.Clientes.ToListAsync();

		public async Task<Cliente> GetByIdClientAsync(int clienteId)
		{
			var client = await _context.Clientes.FirstOrDefaultAsync(_ => _.Id == clienteId);
			if(client is null) return null!;
			
			return client;
		}

		public async Task<Cliente> UpdateClientAsync(Cliente model)
		{
			var client = await GetByIdClientAsync(model.Id);
			if(client is null) return null!;

			client.Nome = model.Nome;
			client.Email = model.Email;
			client.Idade = model.Idade;
			
			await _context.SaveChangesAsync();

			return await GetByIdClientAsync(model.Id);
		}

	}
}
