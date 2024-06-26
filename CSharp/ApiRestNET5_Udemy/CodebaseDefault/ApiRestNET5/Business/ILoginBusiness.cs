﻿using ApiRestNET5.Data.VO;

namespace ApiRestNET5.Business
{
	public interface ILoginBusiness
	{
		TokenVO ValidateCredentials(UserVO user);
		TokenVO ValidateCredentials(TokenVO token);
		bool RevokeToken(string userName);
	}
}
