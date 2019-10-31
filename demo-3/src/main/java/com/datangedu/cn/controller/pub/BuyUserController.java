package com.datangedu.cn.controller.pub;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.datangedu.cn.model.xd.service_product.ServiceProduct;
import com.datangedu.cn.model.xd.shopping.Shopping;
import com.datangedu.cn.service.BuyUserService;
import com.datangedu.cn.service.ProductService;
import com.datangedu.cn.service.ShoppingService;
import com.datangedu.cn.util.ServiceShopping;

@Controller
@RequestMapping("/buyuser")

public class BuyUserController {

	@Resource
	BuyUserService buyUserService;

	@ResponseBody
	// 请求地址，请求类型
	@RequestMapping(value = "/buyuserregister", method = RequestMethod.POST)
	public Map<String, Object> buyuserRegister(HttpServletRequest request) {

		Map<String, Object> map = new HashMap<String, Object>();
		int buyUserList = buyUserService.setBuyUserRegister(request);
		if (buyUserList == 2) {
			map.put("msg", "密码小于6位请重新输入！");
		}
		map.put("msg", "恭喜注册成功，请登录！");
		return map;
	}
	@ResponseBody
	// 请求地址，请求类型
	@RequestMapping(value = "/updatepw", method = RequestMethod.POST)
	public Map<String, Object> updatepw(HttpServletRequest request) {

		Map<String, Object> map = new HashMap<String, Object>();
		int buyUserList = buyUserService.setBuyUserRegister(request);
		if (buyUserList == 2) {
			map.put("msg", "密码小于6位请重新输入！");
		}
		map.put("msg", "更改成功!");
		return map;
	}
	

	@Resource
	ShoppingService ShoppingService;


	@ResponseBody
	@RequestMapping(value = "/getshoppinglist", method = RequestMethod.GET)
	public Map<String, Object> getshoppinglist(HttpServletRequest request) {
		Map<String, Object> map = new HashMap<String, Object>();
		List<ServiceShopping> shoppingList = ShoppingService.getShoppingInfoByld();
		map.put("shoppingList", shoppingList);
		System.out.println("="+map);
		return map;

	}

	@Resource
	ProductService ProductService;

	@ResponseBody
	// 请求地址，请求类型
	@RequestMapping(value = "/getproductlist", method = RequestMethod.GET)
	public Map<String, Object> getProductList(HttpServletRequest request) {
		Map<String, Object> map = new HashMap<String, Object>();
		List<ServiceProduct> productList = ProductService.getProductInfoByld();
		map.put("productList", productList);
		return map;

	}

	@ResponseBody
	// 请求地址，请求类型
	@RequestMapping(value = "/getproductlistorderby", method = RequestMethod.GET)
	public Map<String, Object> getProductListorderby(HttpServletRequest request) {

		Map<String, Object> map = new HashMap<String, Object>();
		List<ServiceProduct> productList = ProductService.getProductListorderby();
		map.put("productList", productList);
		System.out.println("=" + productList);
		return map;

	}
}
