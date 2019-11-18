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

import com.datangedu.cn.administrators.service.AdminService;
import com.datangedu.cn.model.xd.administrators_user.AdministratorsUser;

@Controller
public class PublicController {
	
	@Resource
	AdminService adminService;
	
	
	@RequestMapping("/re") 
	public String re(HttpServletRequest request) {
		String url = request.getParameter("page");
		System.out.println(url);
		return url;
	}
	@RequestMapping("/se") 
	public String se(HttpServletRequest request) {
		String url = request.getParameter("page");
		System.out.println(url);
		return url;
	}
	@RequestMapping("/ser") 
	public String ser(HttpServletRequest request) {
		String url = request.getParameter("page");
		System.out.println(url);
		return url;
	}
	@RequestMapping("e") 
	public String e(HttpServletRequest request) {
		String url = request.getParameter("page");
		System.out.println(url);
		return url;
	}
	@RequestMapping("cost") 
	public String cost(HttpServletRequest request) {
		String url = request.getParameter("page");
		System.out.println(url);
		return url;
	}
	@RequestMapping("store") 
	public String store(HttpServletRequest request) {
		String url = request.getParameter("page");
		System.out.println(url);
		return url;
	}
	@RequestMapping("o") 
	public String o(HttpServletRequest request) {
		String url = request.getParameter("page");
		System.out.println(url);
		return url;
	}
	@ResponseBody
	@RequestMapping(value = "/login",method= RequestMethod.POST)
	public Map<String,Object> login(HttpServletRequest request) {
		HttpSession session = request.getSession();
		String code = (String)session.getAttribute("code");
		String imgcode = request.getParameter("imgcode");
		System.out.println("getCommodity===="+request.getParameter("phone"));
		System.out.println("getCommodity===="+request.getParameter("password"));
		int code1 = 0;
		String phone = request.getParameter("phone");
		Map<String,Object> map = new HashMap<String,Object>();
		System.out.println(imgcode+"====="+code+"===");
		if(imgcode.toUpperCase().equals(code)) {
			List<AdministratorsUser> loginList = adminService.operator_login(phone);
			AdministratorsUser password = loginList.get(0);
		
			if(password.getAdministratorsPw().equals(request.getParameter("password"))) {
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
	
	@ResponseBody
	@RequestMapping(value = "/repassword",method= RequestMethod.POST)
	public Map<String,Object> repassword(HttpServletRequest request) {
		HttpSession session = request.getSession();
		String code = (String)session.getAttribute("code");
		String imgcode = request.getParameter("imgcode");
		System.out.println("getCommodity===="+request.getParameter("phone"));
		String phone = request.getParameter("phone");
		int code1 = 0;
		Map<String,Object> map = new HashMap<String,Object>();
		if(imgcode.toUpperCase().equals(code)) {
			List<AdministratorsUser> loginList = adminService.operator_login(phone);
			AdministratorsUser password = loginList.get(0);
			AdministratorsUser user = new AdministratorsUser();
			user.setId(password.getId());
			user.setAdministratorsPh(password.getAdministratorsPh());
			user.setAdministratorsPw(request.getParameter("password"));
			user.setHp(password.getHp());
			user.setMail(password.getMail());
			user.setName(password.getName());
			user.setState(password.getState());
			user.setTs(password.getTs());
			if(request.getParameter("password").equals(request.getParameter("password1"))) {
				adminService.operator_repassword(user);
				code1 = 1;
				map.put("code", code1);
			}
			else {
				map.put("code", code1);
			}
		}
		else {
			map.put("code", code1);
		}
		System.out.println(imgcode+"====="+code+"===");
		return map;
	}
}
