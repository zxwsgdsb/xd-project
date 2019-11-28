package com.datangedu.cn.controller.pub;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

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
				map.put("name", password.getName());
				map.put("id", password.getId());
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
	
//	@RequestMapping(value = "/headImg", produces = MediaType.IMAGE_PNG_VALUE)
//	public ResponseEntity<byte[]> headImg( String id) throws Exception{
//
//		byte[] imageContent ;
//		// 根据id获取当前用户的信息
//		AdministratorsUser user = adminService.getAdminInfo(id);
//		System.out.println(id);
//		imageContent = user.getHp();
//		System.out.println("图片==="+user.getHp()+user.getMail());
//				        getHp
//		// 设置http头部信息
//		final HttpHeaders headers = new HttpHeaders();
//		headers.setContentType(MediaType.IMAGE_PNG);
//		// 返回响应实体
//		return new ResponseEntity<byte[]>(imageContent, headers, HttpStatus.OK);
//	}
	
	@RequestMapping(value = "/headImg", produces = MediaType.IMAGE_PNG_VALUE)
	public ResponseEntity<byte[]> headImg( String id) throws Exception{

		byte[] imageContent ;
		// 根据id获取当前用户的信息
		AdministratorsUser user = adminService.getAdminInfo(id);
				        
		imageContent = user.getHp();
		System.out.println("图片==="+user.getHp());
				        
		// 设置http头部信息
		final HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.IMAGE_PNG);
		// 返回响应实体
		return new ResponseEntity<byte[]>(imageContent, headers, HttpStatus.OK);
	}
	
	@RequestMapping("/saveUserImg")
	public String saveUserImg(MultipartFile file,String id) {
		Map<Object,Object> result = new HashMap<Object,Object>();
		try {
		// 获取客户端传图图片的输入流
		InputStream ins = file.getInputStream();
		byte[] buffer=new byte[1024];//bit---byte---1k---1m
		int len=0;
		 // 字节输出流
		 ByteArrayOutputStream bos=new ByteArrayOutputStream();
		while((len=ins.read(buffer))!=-1){
			bos.write(buffer,0,len);
		 }
		 bos.flush();
		byte data[] = bos.toByteArray();
		// 调用接口对图片进行存储
		AdministratorsUser user = new AdministratorsUser();
		 user.setId(id);
		user.setHp(data);
		adminService.saveUserImg(user);
				            
		result.put("code",1);
			result.put("msg", "保存头像成功");
		} catch (Exception e) {
			result.put("code",0);
			result.put("msg", "保存头像失败");
			return "uploaderror";
		 }				
		return "operator_product";	
	}



}
