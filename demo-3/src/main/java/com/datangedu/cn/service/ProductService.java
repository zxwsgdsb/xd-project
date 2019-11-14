package com.datangedu.cn.service;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.datangedu.cn.model.xd.service_product.ServiceProduct;



public interface ProductService {
	public List<ServiceProduct> getProductInfoByld();
	public List<ServiceProduct> getProductListorderby();
	public int addcar(HttpServletRequest request);
}
