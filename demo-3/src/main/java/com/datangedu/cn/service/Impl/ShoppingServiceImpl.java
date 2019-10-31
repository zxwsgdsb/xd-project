package com.datangedu.cn.service.Impl;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;

import com.datangedu.cn.dao.mapper.ShoppingMapper;

import com.datangedu.cn.model.xd.shopping.Shopping;
import com.datangedu.cn.model.xd.shopping.ShoppingExample;
import com.datangedu.cn.service.ShoppingService;
import com.datangedu.cn.util.ServiceShopping;
@Service
public class ShoppingServiceImpl implements ShoppingService {

	@Resource
	ShoppingMapper ShoppingMapper;
	@Override
	public List<ServiceShopping> getShoppingInfoByld() {
	
		ShoppingExample ShoppingExample = new ShoppingExample();
		//创建具体的条件实例
		ShoppingExample.Criteria criteria = ShoppingExample.createCriteria();
		//设置具体的条件
		//criteria.andIdEqualTo(id);
		//执行查询并返回
		return ShoppingMapper.selectByshopping();
	}

}
