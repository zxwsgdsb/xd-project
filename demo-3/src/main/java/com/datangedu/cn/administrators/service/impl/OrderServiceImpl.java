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
		OrderLExample orderLExample = new OrderLExample();
		orderLExample.setPageSize(Integer.parseInt(request.getParameter("pageSize")));
		orderLExample.setPageNum(Integer.parseInt(request.getParameter("pageNum")));
		return orderLMapper.selectByDate(request.getParameter("enddate"), request.getParameter("startdate"), orderLExample);
	}

	@Override
	public OrderL selectById(HttpServletRequest request) {
		// TODO Auto-generated method stub
		return orderLMapper.selectByPrimaryKey(request.getParameter("num"));
	}

	@Override
	public List<OrderL> selectByLike(HttpServletRequest request) {
		// TODO Auto-generated method stub
		OrderLExample orderLExample = new OrderLExample();
		orderLExample.setPageSize(Integer.parseInt(request.getParameter("pageSize")));
		orderLExample.setPageNum(Integer.parseInt(request.getParameter("pageNum")));
		return orderLMapper.selectByLike(request.getParameter("name"), orderLExample);
	}

	@Override
	public List<OrderL> selectByDate1(HttpServletRequest request) {
		// TODO Auto-generated method stub
		 return orderLMapper.selectByDate1(request.getParameter("enddate"), request.getParameter("startdate"));
	}


	
	@Override
	public List<OrderL> selectBylike(HttpServletRequest request) {
		// TODO Auto-generated method stub
		System.out.println(request.getParameter("name"));
		return orderLMapper.selectByLike１(Integer.parseInt(request.getParameter("pageNum")), Integer.parseInt(request.getParameter("pageSize")), request.getParameter("name"));
	}
	

}
