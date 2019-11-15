package com.datangedu.cn.service.Impl;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;

import com.datangedu.cn.dao.mapper.ServiceProductMapper;
import com.datangedu.cn.dao.mapper.ShoppingMapper;
import com.datangedu.cn.model.xd.service_product.ServiceProduct;
import com.datangedu.cn.model.xd.service_product.ServiceProductExample;
import com.datangedu.cn.model.xd.shopping.Shopping;
import com.datangedu.cn.service.ProductService;
@Service
public class ProductServiceImpl implements ProductService {

	@Resource
	ServiceProductMapper ServiceProductMapper;
	@Override
	public List<ServiceProduct> getProductInfoByld() {
	   ServiceProductExample serviceProductExample = new ServiceProductExample();
	   return ServiceProductMapper.selectByExample(serviceProductExample);
	}
	@Override
	public List<ServiceProduct> getProductListorderby() {
		ServiceProductExample serviceProductExample = new ServiceProductExample();
		serviceProductExample.setOrderByClause("service_price");
		return ServiceProductMapper.selectByExample(serviceProductExample);
	}
	@Resource
	ShoppingMapper ShoppingMapper;
	@Override
	public int addcar(HttpServletRequest request) {
		Shopping shopping= new Shopping();
		shopping.setBuyuserId("buyuserid");
		shopping.setProductId("id");
		shopping.setNum(1);
		return ShoppingMapper.insert(shopping);
	}

}
