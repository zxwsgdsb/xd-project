package com.datangedu.cn.controller.pub;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.datangedu.cn.administrators.service.Xk_regionService;
import com.datangedu.cn.model.xd.buy_user.BuyUser;
import com.datangedu.cn.model.xd.order.OrderL;
import com.datangedu.cn.model.xd.service_product.ServiceProduct;
import com.datangedu.cn.model.xd.shopping.Shopping;
import com.datangedu.cn.model.xd.xk_region.XkRegion;
import com.datangedu.cn.service.BuyUserService;
import com.datangedu.cn.service.OrderLService;
import com.datangedu.cn.service.ProductService;
import com.datangedu.cn.service.ShoppingService;
import com.datangedu.cn.util.ServiceShopping;

@Controller
@RequestMapping("/buyuser")

public class BuyUserController {

	@Resource
	BuyUserService buyUserService;
	@Resource
	Xk_regionService xk_regionService;
	@ResponseBody
	// 请求地址，请求类型
	@RequestMapping(value = "/provinceregister", method = RequestMethod.POST)
	public Map<String, Object> buyuserRegister(HttpServletRequest request) {

		Map<String, Object> map = new HashMap<String, Object>();
		List<XkRegion> provinceList = xk_regionService.selectByProvince();
		map.put("provinceList", provinceList);
		return map;
	}
	
	@ResponseBody
	// 请求地址，请求类型
	@RequestMapping(value = "/cityregister", method = RequestMethod.POST)
	public Map<String, Object> cityRegister(HttpServletRequest request) {

		Map<String, Object> map = new HashMap<String, Object>();
		String id = request.getParameter("id");
		id = id.substring(0, 2);
		List<XkRegion> cityList = xk_regionService.selectBycity(id);
		map.put("cityList", cityList);
		return map;
	}
	
	
	@ResponseBody
	// 请求地址，请求类型
	@RequestMapping(value = "/arearegister", method = RequestMethod.POST)
	public Map<String, Object> areaRegister(HttpServletRequest request) {

		Map<String, Object> map = new HashMap<String, Object>();
		String id = request.getParameter("id");
		id = id.substring(0, 4);
		List<XkRegion> areaList = xk_regionService.selectByarea(id);
		map.put("areaList", areaList);
		return map;
	}
	
	@ResponseBody
	// 请求地址，请求类型
	@RequestMapping(value = "/nowregister", method = RequestMethod.POST)
	public Map<String, Object> nowRegister(HttpServletRequest request) {

		HttpSession session = request.getSession();
		String code1 = (String)session.getAttribute("code");
		String imgcode = request.getParameter("imgcode");
		Map<String, Object> map = new HashMap<String, Object>();
		int code = 0;
		if(imgcode.toUpperCase().equals(code1)) {
			code = buyUserService.insert(request);
		}
		map.put("code", code);
		return map;
	}
	
	@ResponseBody
	@RequestMapping(value = "/getbuyuserlist", method = RequestMethod.GET)
	public Map<String, Object> getbuyuserlist(HttpServletRequest request) {
		Map<String, Object> map = new HashMap<String, Object>();
		String ph = request.getParameter("ph");
		List<BuyUser> buyuserList = buyUserService.buyuser_login(ph);
		map.put("buyuserList", buyuserList);
		System.out.println(buyuserList.get(0).getName());
		System.out.println("buyuser="+map);
		return map;

	}
	@ResponseBody
	// 请求地址，请求类型
	@RequestMapping(value = "/updatepw", method = RequestMethod.POST)
	public Map<String, Object> updatepw(HttpServletRequest request) {
		String ph = request.getParameter("ph");
		int code = 0;
		List<BuyUser> loginList = buyUserService.buyuser_pw(ph);
		BuyUser buyUser = new BuyUser();
		System.out.println(loginList.size()+"==="+ph);
		buyUser = loginList.get(0);
		Map<String, Object> map = new HashMap<String, Object>();
		BuyUser user = new BuyUser();
		user.setPh(request.getParameter("ph"));
		user.setPw(request.getParameter("newpw"));
		if(buyUser.getPw().equals(request.getParameter("oldpw"))){
			if(request.getParameter("newpw").equals(request.getParameter("newpw1"))) {
				buyUserService.commerce_updata(user);
				code =1;
				map.put("code", code);
			}else {
				System.out.println("else");
				code = 2;
				map.put("code", code);
			}
		}else {
			code = 3;
			map.put("code", code);
		}
	
		return map;
		
	}
	@ResponseBody
	// 请求地址，请求类型
	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public Map<String, Object> update(HttpServletRequest request) {
		String ph = request.getParameter("ph");
		List<BuyUser> loginList = buyUserService.buyuser_pw(ph);
		System.out.println(loginList.size()+"==="+ph);
		Map<String, Object> map = new HashMap<String, Object>();
		BuyUser user = new BuyUser();
		user.setPh(request.getParameter("ph"));
		user.setName(request.getParameter("name"));
		user.setMail(request.getParameter("mail"));
		user.setSex(request.getParameter("sex"));
		System.out.println("name=="+request.getParameter("name"));
		System.out.println("mail=="+request.getParameter("mail"));
		System.out.println("sex=="+request.getParameter("sex"));
		buyUserService.commerce_updata(user);
		return map;
		
	}
	
	
	@ResponseBody
	@RequestMapping(value = "/repassword",method= RequestMethod.POST)
	public Map<String,Object> repassword(HttpServletRequest request) {
		HttpSession session = request.getSession();
		String code = (String)session.getAttribute("code");
		String imgcode = request.getParameter("imgcode");
		System.out.println("getCommodity===="+request.getParameter("ph"));
		int code1 = 0;
		String ph = request.getParameter("ph");
		Map<String,Object> map = new HashMap<String,Object>();
		if(imgcode.toUpperCase().equals(code)) {
			BuyUser user = new BuyUser();
			user.setPh(request.getParameter("ph"));
			user.setPw(request.getParameter("pw"));
			if(request.getParameter("pw").equals(request.getParameter("pw1"))) {
				System.out.println("if");
				buyUserService.commerce_repassword(user);
				System.out.println("if");
				code1 = 1;
				map.put("code", code1);
			}
			else {
				System.out.println("else");
				code1 = 2;
				map.put("code", code1);
			}
		}
		else {
			map.put("code", code1);
		}
		System.out.println(imgcode+"====="+code+"===");
		return map;
	}


	
	@ResponseBody
	@RequestMapping(value = "/buyuserlogin",method= RequestMethod.POST)
	public Map<String,Object> login(HttpServletRequest request) {
		HttpSession session = request.getSession();
		String code = (String)session.getAttribute("code");
		String imgcode = request.getParameter("imgcode");
		System.out.println("getCommodity===="+request.getParameter("ph"));
		System.out.println("getCommodity===="+request.getParameter("pw"));
		int code1 = 0;
		String ph = request.getParameter("ph");
		Map<String,Object> map = new HashMap<String,Object>();
		System.out.println(imgcode+"====="+code+"===");
		if(imgcode.toUpperCase().equals(code)) {
			List<BuyUser> loginList = buyUserService.buyuser_login(ph);
			BuyUser pw = loginList.get(0);
			if(pw.getPw().equals(request.getParameter("pw"))) {
				code1 = 1;
				map.put("code", code1);
			}
			else {
				map.put("code", code1);
			}
		}else {
			map.put("code", code1);
		}
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
	
	@ResponseBody
	@RequestMapping(value = "/shoppingcaraddre", method = RequestMethod.POST)
	public Map<String, Object> shoppingcaraddre(HttpServletRequest request) {
		int code1 = 0;
		Map<String,Object> map = new HashMap<String,Object>();
			Shopping shop = new Shopping();
			shop.setId(Integer.parseInt(request.getParameter("id")));
			shop.setNum(Integer.parseInt(request.getParameter("num")));
			System.out.println("==="+request.getParameter("id")+"==="+request.getParameter("num"));
				ShoppingService.shoppingcaraddre(shop);
				code1 = 1;
				map.put("code", code1);
		return map;
	}
	
	@ResponseBody
	@RequestMapping(value = "/shoppingcardelete", method = RequestMethod.POST)
	public Map<String, Object> shoppingcardelete(HttpServletRequest request) {
		Map<String, Object> map = new HashMap<String, Object>();
		System.out.println("==="+request.getParameter("id"));
		int  ShoppingList = ShoppingService.ShoppingDelete(request);
		
      	map.put("msg","恭喜删除成功");
      	map.put("code",ShoppingList);
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
	@ResponseBody
	// 请求地址，请求类型
	@RequestMapping(value = "/addcar", method = RequestMethod.POST)
	public Map<String, Object> addcar(HttpServletRequest request) {
		Map<String, Object> map = new HashMap<String, Object>();
		int  shoppingList = ProductService.addcar(request);
		map.put("msg","添加成功!");
		map.put("shoppingList",shoppingList);
		return map;
	}
	
	
	@Resource
	OrderLService OrderLService;
	@ResponseBody
	// 请求地址，请求类型
	@RequestMapping(value = "/getorderlist", method = RequestMethod.GET)
	public Map<String, Object> getorderList(HttpServletRequest request) {
		Map<String, Object> map = new HashMap<String, Object>();
		String name = request.getParameter("name");
		List<OrderL> orderList = OrderLService.orderlist(name);
		System.out.println(orderList);
		map.put("orderList", orderList);
		return map;
	}
}
