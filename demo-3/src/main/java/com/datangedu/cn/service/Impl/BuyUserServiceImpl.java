package com.datangedu.cn.service.Impl;


import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;

import com.datangedu.cn.dao.mapper.BuyUserMapper;
import com.datangedu.cn.model.xd.buy_user.BuyUser;
import com.datangedu.cn.service.BuyUserService;



@Service
public class BuyUserServiceImpl implements BuyUserService{

	@Resource
	BuyUserMapper buyUserMapper;
	@Override
	public int setBuyUserRegister(HttpServletRequest request) {
		//校验填写信息
		if(request.getParameter("password").length()<6) {
			return 2;
			
		}
		BuyUser buyUser= new BuyUser();
		buyUser.setPh(request.getParameter("ph"));
		buyUser.setPw(request.getParameter("pw"));
	    return buyUserMapper.insert(buyUser) ;
		
	}
    
}
