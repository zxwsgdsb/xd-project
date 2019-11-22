package com.datangedu.cn.orderform.Impl;

import java.util.List;

import javax.annotation.Resource;

import com.datangedu.cn.dao.mapper.OrderLMapper;
import com.datangedu.cn.model.xd.order.OrderL;
import com.datangedu.cn.model.xd.order.OrderLExample;
import com.datangedu.cn.orderform.ServiceOrderform;

public class ServiceOrderformImpl implements ServiceOrderform{
	@Resource
	OrderLMapper OrderLMapper;
	@Override
	public List<OrderL> selectByLike(String name){
		OrderLExample orderLExample = new OrderLExample();
		OrderLExample.Criteria criteria = orderLExample.createCriteria();
		return OrderLMapper.selectByLike１(0, 0, name);
	}

	@Override
	public List<OrderL> getOrder() {
		// TODO Auto-generated method stub
		return null;
	}
	
}
