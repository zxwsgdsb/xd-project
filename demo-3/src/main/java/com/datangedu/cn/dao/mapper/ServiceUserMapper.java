package com.datangedu.cn.dao.mapper;

import com.datangedu.cn.model.xd.service_user.ServiceUser;
import com.datangedu.cn.model.xd.service_user.ServiceUserExample;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;


@Mapper
public interface ServiceUserMapper {
    long countByExample(ServiceUserExample example);

    int deleteByExample(ServiceUserExample example);

    int deleteByPrimaryKey(String id);

    int insert(ServiceUser record);

    int insertSelective(ServiceUser record);

    List<ServiceUser> selectByExampleWithBLOBs(ServiceUserExample example);

    List<ServiceUser> selectByExample(ServiceUserExample example);

    ServiceUser selectByPrimaryKey(String id);

    int updateByExampleSelective(@Param("record") ServiceUser record, @Param("example") ServiceUserExample example);

    int updateByExampleWithBLOBs(@Param("record") ServiceUser record, @Param("example") ServiceUserExample example);

    int updateByExample(@Param("record") ServiceUser record, @Param("example") ServiceUserExample example);

    int updateByPrimaryKeySelective(ServiceUser record);

    int updateByPrimaryKeyWithBLOBs(ServiceUser record);

    int updateByPrimaryKey(ServiceUser record);
}