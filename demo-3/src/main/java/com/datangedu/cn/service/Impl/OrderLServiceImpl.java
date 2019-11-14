package com.datangedu.cn.service.Impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.datangedu.cn.dao.mapper.OrderLMapper;
import com.datangedu.cn.model.xd.order.OrderL;
import com.datangedu.cn.model.xd.order.OrderLExample;
import com.datangedu.cn.service.OrderLService;

@Service
public class OrderLServiceImpl implements OrderLService {
	@Resource
	OrderLMapper orderLMapper;
	@Override
	public List<OrderL> orderlist(String name) {
		OrderLExample orderLExample = new OrderLExample();
		//创建具体的条件实例
		OrderLExample.Criteria criteria = orderLExample.createCriteria();
		//administratorsUserExample.setPageNum(1);
		//administratorsUserExample.setPageSize(2);
		//设置具体条件
		criteria.andBuyNameEqualTo(name);
		//执行查询并返回
		return orderLMapper.selectByExample(orderLExample);
	
	}

}
