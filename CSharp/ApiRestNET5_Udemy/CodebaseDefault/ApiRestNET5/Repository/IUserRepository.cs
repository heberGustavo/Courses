﻿using ApiRestNET5.Data.VO;
using ApiRestNET5.Model;

namespace ApiRestNET5.Repository
{
	public interface IUserRepository
	{
		User? ValidateCredentials(UserVO user);
		User? RefrashUserInfo(User user);
    }
}