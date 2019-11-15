package com.datangedu.cn.administrators.service.impl;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;

import com.datangedu.cn.administrators.service.Service_userService;
import com.datangedu.cn.dao.mapper.ServiceUserMapper;
import com.datangedu.cn.model.xd.service_user.ServiceUser;
import com.datangedu.cn.model.xd.service_user.ServiceUserExample;

@Service
public class Service_userServiceImpl implements Service_userService {
	
	@Resource
	ServiceUserMapper serviceUserMapper;
	
	@Override
	public List<ServiceUser> getService_user(HttpServletRequest request) {
		// TODO Auto-generated method stub
		return serviceUserMapper.selectByState(request.getParameter("state"));
	}

	@Override
	public int reState(ServiceUser user) {
		// TODO Auto-generated method stub
		ServiceUser serviceUser = new ServiceUser();
		serviceUser.setId(user.getId());
		serviceUser.setName(user.getName());
		serviceUser.setHp(user.getHp());
		serviceUser.setArea(user.getArea());
		serviceUser.setServicePh(user.getServicePh());
		serviceUser.setServicePw(user.getServicePw());
		serviceUser.setAdminIntroduction(user.getAdminIntroduction());
		serviceUser.setMail(user.getMail());
		serviceUser.setTs(user.getTs());
		serviceUser.setUserIntroduction(user.getUserIntroduction());
		serviceUser.setWorkTs(user.getWorkTs());
		serviceUser.setQq(user.getQq());
		serviceUser.setWx(user.getWx());
		serviceUser.setCustomerPh(user.getCustomerPh());
		serviceUser.setBusinessLicense(user.getBusinessLicense());
		serviceUser.setState("1");
		return serviceUserMapper.updateByPrimaryKey(serviceUser);
	}

	@Override
	public List<ServiceUser> getUser(HttpServletRequest request) {
		// TODO Auto-generated method stub
		System.out.println(request.getParameter("id"));
		return serviceUserMapper.selectById(request.getParameter("id"));
	}

	@Override
	public int reState1(ServiceUser user) {
		// TODO Auto-generated method stub
		ServiceUser serviceUser = new ServiceUser();
		serviceUser.setId(user.getId());
		serviceUser.setName(user.getName());
		serviceUser.setHp(user.getHp());
		serviceUser.setArea(user.getArea());
		serviceUser.setServicePh(user.getServicePh());
		serviceUser.setServicePw(user.getServicePw());
		serviceUser.setAdminIntroduction(user.getAdminIntroduction());
		serviceUser.setMail(user.getMail());
		serviceUser.setTs(user.getTs());
		serviceUser.setUserIntroduction(user.getUserIntroduction());
		serviceUser.setWorkTs(user.getWorkTs());
		serviceUser.setQq(user.getQq());
		serviceUser.setWx(user.getWx());
		serviceUser.setCustomerPh(user.getCustomerPh());
		serviceUser.setBusinessLicense(user.getBusinessLicense());
		serviceUser.setState("0");
		return serviceUserMapper.updateByPrimaryKey(serviceUser);
	}

	@Override
	public List<ServiceUser> selectByPage(HttpServletRequest request) {
		// TODO Auto-generated method stub
		ServiceUserExample serviceUserExample = new ServiceUserExample();
		serviceUserExample.setPageSize(Integer.parseInt(request.getParameter("pageSize")));
		serviceUserExample.setPageNum(Integer.parseInt(request.getParameter("pageNum")));
		return serviceUserMapper.selectByLike(request.getParameter("name"), serviceUserExample,request.getParameter("state"));
	}

}
