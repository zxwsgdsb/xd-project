package com.datangedu.cn.service.Impl;

import java.util.List;
import java.util.UUID;

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
	
		String uuid = UUID.randomUUID().toString().replace("-","").replace("m","").replace("n","").replace("b","").replace("v","").replace("c","").replace("x","").replace("z","").replace("l","").replace("k","").replace("j","").replace("h","").replace("g","").replace("f","").replace("d","").replace("s","").replace("a","").replace("p","").replace("o","").replace("i","").replace("u","").replace("y","").replace("t","").replace("r","").replace("e","").replace("w","").replace("q","");  
		String id=uuid.substring(1,10); 
		Shopping shopping= new Shopping();
		shopping.setBuyuserId( request.getParameter("buyuserid"));
		shopping.setProductId( request.getParameter("id"));
		shopping.setNum(1);
		shopping.setId(Integer.parseInt(id));
		if(ShoppingMapper.selectdifferent(request.getParameter("id"),request.getParameter("buyuserid"))==null) {
		return ShoppingMapper.insert(shopping);
		}else {
			List<Shopping> shoppingList = ShoppingMapper.selectdifferent(request.getParameter("id"),request.getParameter("buyuserid"));
			shopping.setNum(shoppingList.get(0).getNum()+1);
			shopping.setId(shoppingList.get(0).getId());
			return ShoppingMapper.updateByPrimaryKey(shopping);
		}
		
		
	}

}
