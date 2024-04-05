using ApiRestNET5.Configurations;
using ApiRestNET5.Data.VO;
using ApiRestNET5.Repository;
using ApiRestNET5.Services;
using Microsoft.IdentityModel.JsonWebTokens;
using System.Security.Claims;

namespace ApiRestNET5.Business.Implementation
{
	public class LoginBusiness : ILoginBusiness
	{
		private const string DATE_FORMAT = "yyyy-MM-dd HH:mm:ss";
		
		private TokenConfiguration _configuration;
		private readonly IUserRepository _userRepository;
		private readonly ITokenService _tokenService;

		public LoginBusiness(TokenConfiguration configuration, IUserRepository userRepository, ITokenService tokenService)
		{
			_configuration = configuration;
			_userRepository = userRepository;
			_tokenService = tokenService;
		}

		public TokenVO ValidateCredentials(UserVO userCredentials)
		{
			var user = _userRepository.ValidateCredentials(userCredentials);
			if (user == null) return null;

			var claims = new List<Claim>
			{
				new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString("N")),
				new Claim(JwtRegisteredClaimNames.UniqueName, user.UserName)
			};

			var accessToken = _tokenService.GenerateAccessToken(claims);
			var refreshToken = _tokenService.GenerateRefreshToken();
			var createdDate = DateTime.Now;
			var expirationDate = createdDate.AddDays(_configuration.DaysToExpiry);

			user.RefrashToken = refreshToken;
			user.RefrashTokenExpiryTime = expirationDate;
			_userRepository.RefrashUserInfo(user);

			return new TokenVO(
				true,
				createdDate.ToString(DATE_FORMAT),
				expirationDate.ToString(DATE_FORMAT),
				accessToken,
				refreshToken
			);
		}

		public TokenVO ValidateCredentials(TokenVO token)
		{
			var accessToken = token.AccessToken;
			var refreshToken = token.RefreshToken;

			var principal = _tokenService.GetPrincipalFromExpiredToken(accessToken);
			var userName = principal.Identity.Name;

			var user = _userRepository.ValidateCredentials(userName);
			if (user == null ||
			   user.RefrashToken != refreshToken ||
			   user.RefrashTokenExpiryTime <= DateTime.Now) return null;


            var createdDate = DateTime.Now;
            var expirationDate = createdDate.AddDays(_configuration.DaysToExpiry);

			refreshToken = _tokenService.GenerateRefreshToken();
            user.RefrashToken = refreshToken;
            user.RefrashTokenExpiryTime = expirationDate;
            _userRepository.RefrashUserInfo(user);

            return new TokenVO(
                true,
                createdDate.ToString(DATE_FORMAT),
                expirationDate.ToString(DATE_FORMAT),
                accessToken,
                refreshToken
            );
        }
	}
}
