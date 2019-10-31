package com.datangedu.cn.administrators.service.impl;

import java.util.List;

import javax.annotation.Resource;

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

}
