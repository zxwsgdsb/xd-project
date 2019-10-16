package com.datangedu.cn.dao.mapper;

import com.datangedu.cn.model.xd.administrators_user.AdministratorsUser;
import com.datangedu.cn.model.xd.administrators_user.AdministratorsUserExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface AdministratorsUserMapper {
    long countByExample(AdministratorsUserExample example);

    int deleteByExample(AdministratorsUserExample example);

    int deleteByPrimaryKey(String id);

    int insert(AdministratorsUser record);

    int insertSelective(AdministratorsUser record);

    List<AdministratorsUser> selectByExample(AdministratorsUserExample example);

    AdministratorsUser selectByPrimaryKey(String id);

    int updateByExampleSelective(@Param("record") AdministratorsUser record, @Param("example") AdministratorsUserExample example);

    int updateByExample(@Param("record") AdministratorsUser record, @Param("example") AdministratorsUserExample example);

    int updateByPrimaryKeySelective(AdministratorsUser record);

    int updateByPrimaryKey(AdministratorsUser record);
}