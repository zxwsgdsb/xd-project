package com.datangedu.cn.administrators.service;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.datangedu.cn.model.xd.service_product.ServiceProduct;


public interface Service_productService {
	public List<ServiceProduct> getService_product();
	
	public ServiceProduct selectByPrimaryKey(String id);
	
	public int updateByPrimaryKey(ServiceProduct user);
	
	public int deleteByPrimaryKey(String id);
	
	public int deleteByProductId(String id);
	
	public List<ServiceProduct> selectByLike(HttpServletRequest request);
}
