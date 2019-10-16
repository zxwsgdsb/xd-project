package com.datangedu.cn.controller.pub;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PublicController {
	
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
	
	@RequestMapping("/de")
	public String de(HttpServletRequest request) {
		String url = request.getParameter("page");
		System.out.println(url);
		return url;
	}
	
	@RequestMapping("/dl")
	public String dl(HttpServletRequest request) {
		String url = request.getParameter("page");
		System.out.println(url);
		return url;
	}
}