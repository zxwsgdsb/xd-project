package com.datangedu.cn.service;



import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.datangedu.cn.model.xd.administrators_user.AdministratorsUser;
import com.datangedu.cn.model.xd.buy_user.BuyUser;





public interface BuyUserService {
	public List<BuyUser> buyuser_login(String ph);
	public int setBuyUserRegister(HttpServletRequest request);
	public int  commerce_repassword(BuyUser user);
	
}
