package com.datangedu.cn.administrators.service;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.datangedu.cn.model.xd.order.OrderL;

public interface OrderService {
	public List<OrderL> getOrder();

	public List<OrderL> getExpenses();
	
	public List<OrderL> selectByDate(HttpServletRequest request);
	
	public List<OrderL> selectByDate1(HttpServletRequest request);
	
	public OrderL selectById(HttpServletRequest request);
	
	public List<OrderL> selectByLike(HttpServletRequest request);
}
