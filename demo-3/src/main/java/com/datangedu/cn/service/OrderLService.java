package com.datangedu.cn.service;

import java.util.List;

import com.datangedu.cn.model.xd.order.OrderL;

public interface OrderLService {

	public List<OrderL> orderlist(String name);

	public List<OrderL> getsettle(String id);

	public int payfororder(OrderL orderl);

}
