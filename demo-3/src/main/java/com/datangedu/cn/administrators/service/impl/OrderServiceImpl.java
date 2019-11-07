package com.datangedu.cn.administrators.service.impl;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;

import com.datangedu.cn.administrators.service.OrderService;
import com.datangedu.cn.dao.mapper.OrderLMapper;
import com.datangedu.cn.model.xd.order.OrderL;
import com.datangedu.cn.model.xd.order.OrderLExample;

@Service
public class OrderServiceImpl implements OrderService {
	
	@Resource
	OrderLMapper orderLMapper;

	@Override
	public List<OrderL> getOrder() {
		// TODO Auto-generated method stub
		OrderLExample orderExample = new OrderLExample();
		OrderLExample.Criteria criteria = orderExample.createCriteria();
		
		return orderLMapper.selectByExample(null);
	}

	@Override
	public List<OrderL> getExpenses() {
		// TODO Auto-generated method stub
		return orderLMapper.selectByExample(null);
	}

	@Override
	public List<OrderL> selectByDate(HttpServletRequest request) {
		// TODO Auto-generated method stub
		
		return orderLMapper.selectByDate(request.getParameter("enddate"), request.getParameter("startdate"));
	}

	@Override
	public OrderL selectById(HttpServletRequest request) {
		// TODO Auto-generated method stub
		return orderLMapper.selectByPrimaryKey(request.getParameter("num"));
	}

}
