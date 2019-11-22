package com.datangedu.cn.orderform;

import java.util.List;

import com.datangedu.cn.model.xd.order.OrderL;

public interface ServiceOrderform {
public List<OrderL> getOrder();
public	List<OrderL> selectByLike(String name);

}
