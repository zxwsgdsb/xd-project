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
	public List<ServiceShopping> getShoppingInfoByld(String buyuserid) {
	
		ShoppingExample ShoppingExample = new ShoppingExample();
		//创建具体的条件实例
		ShoppingExample.Criteria criteria = ShoppingExample.createCriteria();
		//设置具体的条件
		criteria.andBuyuserIdEqualTo(buyuserid);
		
		//执行查询并返回
		return ShoppingMapper.selectByshopping(buyuserid);
	}
	@Override
	public int shoppingcaraddre(Shopping shop) {
		// TODO Auto-generated method stub
				//新建查询条件对象
				ShoppingExample shoppingExample = new ShoppingExample();
				//创建具体的条件实例
				ShoppingExample.Criteria criteria = shoppingExample.createCriteria();
				criteria.andIdEqualTo(shop.getId());
				
				return ShoppingMapper.updateByExampleSelective(shop, shoppingExample);
		
	}
	@Override
	public int ShoppingDelete(HttpServletRequest request) {
		
		int id = (Integer.parseInt(request.getParameter("id")));
		System.out.println(id);
		ShoppingExample shoppingExample = new ShoppingExample();
		ShoppingExample.Criteria criteria = shoppingExample.createCriteria();
		criteria.andIdEqualTo(id);
		return ShoppingMapper.deleteByExample(shoppingExample);
	}


}
