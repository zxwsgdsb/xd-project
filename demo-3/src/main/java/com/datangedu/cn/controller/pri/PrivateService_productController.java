package com.datangedu.cn.controller.pri;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.datangedu.cn.administrators.service.Service_productService;
import com.datangedu.cn.model.xd.administrators_user.AdministratorsUser;
import com.datangedu.cn.model.xd.service_product.ServiceProduct;

@Controller
@RequestMapping("/product")
public class PrivateService_productController {
	
	@Resource
	Service_productService service_productService;
	
	@ResponseBody
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public Map<String, Object> product(HttpServletRequest request) {
		Map<String,Object> map = new HashMap<String,Object>();
		List<ServiceProduct> service_productList = service_productService.getService_product();
		map.put("service_productList", service_productList);
		return map;
	}
	
	@RequestMapping("/downline")
	public String downline(HttpServletRequest request) {
		ServiceProduct user = new ServiceProduct();
		String id = request.getParameter("id");
		System.out.println("======"+id);
		user = service_productService.selectByPrimaryKey(id);
		user.setServiceState("0");
		int code = service_productService.updateByPrimaryKey(user);
		
		return "operator_product";
	}
	
	@RequestMapping("/deletel")
	public String deletel(HttpServletRequest request) {
		String id = request.getParameter("id");
		int code = service_productService.deleteByPrimaryKey(id);
		return "operator_product";
	}
	
	@RequestMapping("/upline")
	public String upline(HttpServletRequest request) {
		ServiceProduct user = new ServiceProduct();
		String id = request.getParameter("id");
		System.out.println("======"+id);
		user = service_productService.selectByPrimaryKey(id);
		user.setServiceState("1");
		int code = service_productService.updateByPrimaryKey(user);
		
		return "operator_product";
	}
}
