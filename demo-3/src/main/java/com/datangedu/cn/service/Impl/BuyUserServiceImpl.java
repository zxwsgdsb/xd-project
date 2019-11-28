package com.datangedu.cn.service.Impl;


import java.util.List;
import java.util.UUID;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;

import com.datangedu.cn.dao.mapper.AdministratorsUserMapper;
import com.datangedu.cn.dao.mapper.BuyUserMapper;
import com.datangedu.cn.model.xd.administrators_user.AdministratorsUser;
import com.datangedu.cn.model.xd.administrators_user.AdministratorsUserExample;
import com.datangedu.cn.model.xd.buy_user.BuyUser;
import com.datangedu.cn.model.xd.buy_user.BuyUserExample;
import com.datangedu.cn.service.BuyUserService;



@Service
public class BuyUserServiceImpl implements BuyUserService{

	@Resource
	BuyUserMapper buyUserMapper;
	@Override
	public int setBuyUserRegister(HttpServletRequest request) {
		//校验填写信息
		if(request.getParameter("pw").length()<6) {
			return 2;
			
		}
		BuyUser buyUser= new BuyUser();
		buyUser.setPh(request.getParameter("ph"));
		buyUser.setPw(request.getParameter("pw"));
	    return buyUserMapper.insert(buyUser) ;
		
	}
	
	
	@Override
	public List<BuyUser> buyuser_login(String ph) {
		// TODO Auto-generated method stub
		//新建查询条件对象
		BuyUserExample buyUserExample = new BuyUserExample();
		//创建具体的条件实例
		BuyUserExample.Criteria criteria = buyUserExample.createCriteria();
		//administratorsUserExample.setPageNum(1);
		//administratorsUserExample.setPageSize(2);
		//设置具体条件
		criteria.andPhEqualTo(ph);
		//执行查询并返回
		return buyUserMapper.selectByExample(buyUserExample);
	}


	@Override
	public int commerce_repassword(BuyUser user) {
		// TODO Auto-generated method stub
		//新建查询条件对象
		BuyUserExample buyUserExample = new BuyUserExample();
		//创建具体的条件实例
		BuyUserExample.Criteria criteria = buyUserExample.createCriteria();
		criteria.andPhEqualTo(user.getPh());
		//administratorsUserExample.setPageNum(1);
		//administratorsUserExample.setPageSize(2);
//		执行查询并返回
		return buyUserMapper.updateByExampleSelective(user, buyUserExample);
	}


	@Override
	public int commerce_updata(BuyUser user) {
		// TODO Auto-generated method stub
		//新建查询条件对象
		BuyUserExample buyUserExample = new BuyUserExample();
		//创建具体的条件实例
		BuyUserExample.Criteria criteria = buyUserExample.createCriteria();
		criteria.andPhEqualTo(user.getPh());
		//administratorsUserExample.setPageNum(1);
		//administratorsUserExample.setPageSize(2);
//		执行查询并返回
		return buyUserMapper.updateByExampleSelective(user, buyUserExample);
	}


	@Override
	public List<BuyUser> buyuser_pw(String ph) {
		BuyUserExample buyUserExample = new BuyUserExample();
		//创建具体的条件实例
		BuyUserExample.Criteria criteria = buyUserExample.createCriteria();
		//administratorsUserExample.setPageNum(1);
		//administratorsUserExample.setPageSize(2);
		//设置具体条件
		criteria.andPhEqualTo(ph);
		//执行查询并返回
		return buyUserMapper.selectByExample(buyUserExample);
		
	}


	@Override
	public int insert(HttpServletRequest request) {
		// TODO Auto-generated method stub
		String uuid = UUID.randomUUID().toString().replace("-","").replace("m","").replace("n","").replace("b","").replace("v","").replace("c","").replace("x","").replace("z","").replace("l","").replace("k","").replace("j","").replace("h","").replace("g","").replace("f","").replace("d","").replace("s","").replace("a","").replace("p","").replace("o","").replace("i","").replace("u","").replace("y","").replace("t","").replace("r","").replace("e","").replace("w","").replace("q","");  
		String id=uuid.substring(1,9);
		BuyUser buyUser= new BuyUser();
		buyUser.setId(id);
		buyUser.setName(request.getParameter("name"));
		buyUser.setPh(request.getParameter("ph"));
		buyUser.setPw(request.getParameter("pw"));
		buyUser.setBuyArea(request.getParameter("area"));
		return buyUserMapper.insertRegister(buyUser);
	}
}
    

