package com.datangedu.cn.controller.pri;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.datangedu.cn.administrators.service.OrderService;
import com.datangedu.cn.model.xd.order.OrderL;




@Controller
@RequestMapping("/orderform")
public class PrivateOrderController {
	@Resource
	OrderService orderService;
	
	@ResponseBody
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public Map<String, Object> product(HttpServletRequest request) {
		Map<String,Object> map = new HashMap<String,Object>();
		List<OrderL> orderList = orderService.getOrder();
		map.put("orderList", orderList);
		return map;
	}
	
	@ResponseBody
	@RequestMapping(value = "/cost", method = RequestMethod.GET)
	public Map<String, Object> expenses(HttpServletRequest request) {
		Map<String,Object> map = new HashMap<String,Object>();
		List<OrderL> orderList = orderService.getExpenses();
		map.put("orderList", orderList);
		return map;
	}
	
	@ResponseBody
	@RequestMapping(value = "/query", method = RequestMethod.GET)
	public Map<String, Object> query(HttpServletRequest request) {
		Map<String,Object> map = new HashMap<String,Object>();
		List<OrderL> orderList = orderService.selectByDate(request);
		map.put("orderList", orderList);
		return map;
	}
	
	@ResponseBody
	@RequestMapping(value = "/search", method = RequestMethod.GET)
	public Map<String, Object> search(HttpServletRequest request) {
		Map<String,Object> map = new HashMap<String,Object>();
		OrderL order = orderService.selectById(request);
		map.put("orderList", order);
		return map;
	}
}
