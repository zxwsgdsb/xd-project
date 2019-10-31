package com.datangedu.cn.administrators.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.datangedu.cn.administrators.service.Service_productService;
import com.datangedu.cn.dao.mapper.ServiceProductMapper;
import com.datangedu.cn.model.xd.service_product.ServiceProduct;
import com.datangedu.cn.model.xd.service_product.ServiceProductExample;

@Service
public class Service_productServiceImpl implements Service_productService {
	
	
	@Resource
	ServiceProductMapper serviceProductMapper;
	@Override
	public List<ServiceProduct> getService_product() {
		// TODO Auto-generated method stub
		ServiceProductExample serviceProductExample = new ServiceProductExample();
		ServiceProductExample.Criteria criteria = serviceProductExample.createCriteria();
		
		return serviceProductMapper.selectByExample(serviceProductExample);
	}
	@Override
	public ServiceProduct selectByPrimaryKey(String id) {
		// TODO Auto-generated method stub
		return serviceProductMapper.selectByPrimaryKey(id);
	}
	@Override
	public int updateByPrimaryKey(ServiceProduct user) {
		// TODO Auto-generated method stub
		return serviceProductMapper.updateByPrimaryKey(user);
	}
	@Override
	public int deleteByPrimaryKey(String id) {
		// TODO Auto-generated method stub
		return serviceProductMapper.deleteByPrimaryKey(id);
	}

}
