package com.datangedu.cn.service;



import java.util.List;

import javax.servlet.http.HttpServletRequest;


import com.datangedu.cn.model.xd.buy_user.BuyUser;





public interface BuyUserService {
	public List<BuyUser> buyuser_login(String ph);
	public int setBuyUserRegister(HttpServletRequest request);
	public int  commerce_repassword(BuyUser user);
	public int commerce_updata(BuyUser user);
	public List<BuyUser> buyuser_pw(String ph);
	
}
