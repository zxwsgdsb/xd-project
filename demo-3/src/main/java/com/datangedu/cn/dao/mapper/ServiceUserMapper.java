package com.datangedu.cn.dao.mapper;

import com.datangedu.cn.model.xd.service_user.ServiceUser;
import com.datangedu.cn.model.xd.service_user.ServiceUserExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface ServiceUserMapper {
    long countByExample(ServiceUserExample example);

    int deleteByExample(ServiceUserExample example);

    int deleteByPrimaryKey(String id);

    int insert(ServiceUser record);

    int insertSelective(ServiceUser record);

    List<ServiceUser> selectByExample(ServiceUserExample example);

    ServiceUser selectByPrimaryKey(String id);

    int updateByExampleSelective(@Param("record") ServiceUser record, @Param("example") ServiceUserExample example);

    int updateByExample(@Param("record") ServiceUser record, @Param("example") ServiceUserExample example);

    int updateByPrimaryKeySelective(ServiceUser record);

    int updateByPrimaryKey(ServiceUser record);
}