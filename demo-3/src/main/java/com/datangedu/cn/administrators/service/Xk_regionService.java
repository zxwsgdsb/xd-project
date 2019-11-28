package com.datangedu.cn.administrators.service;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.datangedu.cn.model.xd.xk_region.XkRegion;

public interface Xk_regionService {
	List<XkRegion> selectByProvince();
	
	List<XkRegion> selectBycity(String id);
	
	List<XkRegion> selectByarea(String id);
}
