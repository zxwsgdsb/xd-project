package com.datangedu.cn.service;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.datangedu.cn.model.xd.shopping.Shopping;
import com.datangedu.cn.util.ServiceShopping;

public interface ShoppingService {
	public List<ServiceShopping>getShoppingInfoByld();

	public int shoppingcaraddre(Shopping shop);

	public int ShoppingDelete(HttpServletRequest request);
	
}
