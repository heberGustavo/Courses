﻿namespace ApiRestNET5.Data.VO
{
	public class TokenVO
	{
		public TokenVO(bool authenticated)
		{
			Authenticated = authenticated;
		}

		public TokenVO(bool authenticated, string created, string expiration, string accessToken, string refreshToken)
		{
			Authenticated = authenticated;
			Created = created;
			Expiration = expiration;
			AccessToken = accessToken;
			RefreshToken = refreshToken;
		}

		public bool Authenticated { get; set; } = false;
		public string Created { get; set; } = string.Empty;
		public string Expiration { get; set; } = string.Empty;
		public string AccessToken { get; set; } = string.Empty;
		public string RefreshToken { get; set; } = string.Empty;
	}
}
