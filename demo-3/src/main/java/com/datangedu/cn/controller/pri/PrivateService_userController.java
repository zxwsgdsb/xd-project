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

import com.datangedu.cn.administrators.service.Service_userService;
import com.datangedu.cn.model.xd.service_user.ServiceUser;


@Controller
@RequestMapping("/facilitator")
public class PrivateService_userController {
	
	@Resource
	Service_userService service_userService;
	
	@ResponseBody
	@RequestMapping(value = "/open", method = RequestMethod.POST)
	public Map<String, Object> open(HttpServletRequest request) {
		Map<String,Object> map = new HashMap<String,Object>();
		List<ServiceUser> userList = service_userService.getUser(request);
		ServiceUser user = userList.get(0);
		int i = service_userService.reState(user);
		List<ServiceUser> service_userList = service_userService.getService_user(request);
		map.put("service_userList", service_userList);
		return map;
	}
	
	@ResponseBody
	@RequestMapping(value = "/close", method = RequestMethod.POST)
	public Map<String, Object> close(HttpServletRequest request) {
		Map<String,Object> map = new HashMap<String,Object>();
		List<ServiceUser> userList = service_userService.getUser(request);
		System.out.println("-----"+userList.size());
		ServiceUser user = userList.get(0);
		int i = service_userService.reState1(user);
		List<ServiceUser> service_userList = service_userService.getService_user(request);
		map.put("service_userList", service_userList);
		return map;
	}
	
	@ResponseBody
	@RequestMapping(value = "/page", method = RequestMethod.POST)
	public Map<String, Object> page(HttpServletRequest request) {
		Map<String,Object> map = new HashMap<String,Object>();
		List<ServiceUser> service_userList = service_userService.selectByPage(request);
		List<ServiceUser> userList = service_userService.getService_user(request);
		map.put("service_userList", service_userList);
		map.put("userList", userList.size());
		map.put("stateList", userList);
		return map;
	}
	
}
