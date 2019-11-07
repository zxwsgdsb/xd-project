package com.datangedu.cn.administrators.service;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.datangedu.cn.model.xd.buy_user.BuyUser;


public interface Buy_userService {
	public List<BuyUser> getUser(HttpServletRequest request);
	
	
	public List<BuyUser> selectByPage(HttpServletRequest request);
}
