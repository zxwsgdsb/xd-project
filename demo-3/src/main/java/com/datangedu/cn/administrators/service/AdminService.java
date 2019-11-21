package com.datangedu.cn.administrators.service;

import java.util.List;

import com.datangedu.cn.model.xd.administrators_user.AdministratorsUser;

public interface AdminService {
	public List<AdministratorsUser> operator_login(String phone);
	
	public int operator_repassword(AdministratorsUser user);

	public AdministratorsUser getAdminInfo(String id);

	public void saveUserImg(AdministratorsUser user) throws Exception;
}
