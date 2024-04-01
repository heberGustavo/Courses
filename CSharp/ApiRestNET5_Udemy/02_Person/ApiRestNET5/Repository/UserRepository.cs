using ApiRestNET5.Data.VO;
using ApiRestNET5.Model;
using ApiRestNET5.Model.Context;
using System.Security.Cryptography;
using System.Text;

namespace ApiRestNET5.Repository
{
	public class UserRepository : IUserRepository
	{
		private readonly MySQLContext _context;

		public UserRepository(MySQLContext context)
		{
			_context = context;
		}

		public User? ValidateCredentials(UserVO user)
		{
			var passCrypt = ComputeHash(user.Password, SHA256.Create());
			return _context.Users.FirstOrDefault(u => (u.UserName == user.UserName) && (u.Password == passCrypt));
		}

		private string ComputeHash(string input, HashAlgorithm algorithm)
		{
			byte[] hashedBytes = algorithm.ComputeHash(Encoding.UTF8.GetBytes(input));

			var sBuilder = new StringBuilder();

			for (int i = 0; i < hashedBytes.Length; i++)
			{
				sBuilder.Append(hashedBytes[i].ToString("x2"));
			}

			return sBuilder.ToString();
		}
	}
}
