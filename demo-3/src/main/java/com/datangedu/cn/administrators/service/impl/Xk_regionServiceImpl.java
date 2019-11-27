package com.datangedu.cn.administrators.service.impl;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;

import com.datangedu.cn.administrators.service.Xk_regionService;
import com.datangedu.cn.dao.mapper.XkRegionMapper;
import com.datangedu.cn.model.xd.xk_region.XkRegion;

@Service
public class Xk_regionServiceImpl implements Xk_regionService {
	
	@Resource
	XkRegionMapper xkRegionMapper;

	@Override
	public List<XkRegion> selectByProvince() {
		// TODO Auto-generated method stub
		return xkRegionMapper.selectByProvince();
	}

	@Override
	public List<XkRegion> selectBycity(String id) {
		// TODO Auto-generated method stub
		return xkRegionMapper.selectByCity(id);
	}

	@Override
	public List<XkRegion> selectByarea(String id) {
		// TODO Auto-generated method stub
		return xkRegionMapper.selectByArea(id);
	}

}
