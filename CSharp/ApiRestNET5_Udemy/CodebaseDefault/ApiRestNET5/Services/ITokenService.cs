﻿using System.Security.Claims;

namespace ApiRestNET5.Services
{
	public interface ITokenService
	{
		string GenerateAccessToken(IEnumerable<Claim> claims);
		string GenerateRefreshToken();
		ClaimsPrincipal GetPrincipalFromExpiredToken(string token);
    }
}
