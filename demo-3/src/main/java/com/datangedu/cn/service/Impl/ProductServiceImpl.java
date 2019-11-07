package com.datangedu.cn.service.Impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.datangedu.cn.dao.mapper.ServiceProductMapper;

import com.datangedu.cn.model.xd.service_product.ServiceProduct;
import com.datangedu.cn.model.xd.service_product.ServiceProductExample;
import com.datangedu.cn.service.ProductService;
@Service
public class ProductServiceImpl implements ProductService {

	@Resource
	ServiceProductMapper ServiceProductMapper;
	@Override
	public List<ServiceProduct> getProductInfoByld() {
	   ServiceProductExample serviceProductExample = new ServiceProductExample();
	   ServiceProductExample.Criteria criteria = serviceProductExample.createCriteria();
		return ServiceProductMapper.selectByExample(serviceProductExample);
	}
	@Override
	public List<ServiceProduct> getProductListorderby() {
		ServiceProductExample serviceProductExample = new ServiceProductExample();
		ServiceProductExample.Criteria criteria = serviceProductExample.createCriteria();
		serviceProductExample.setOrderByClause("service_price");
		return ServiceProductMapper.selectByExample(serviceProductExample);
	}

}
