package com.datangedu.cn.administrators.service;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.datangedu.cn.model.xd.service_user.ServiceUser;


public interface Service_userService {
	public List<ServiceUser> getService_user(HttpServletRequest request);
	
	public int reState(ServiceUser user);
	
	public int reState1(ServiceUser user);
	
	public List<ServiceUser> getUser(HttpServletRequest request);
	
	public List<ServiceUser> selectByPage(HttpServletRequest request);
}
