package com.datangedu.cn.dao.mapper;

import com.datangedu.cn.model.xd.service_product.ServiceProduct;
import com.datangedu.cn.model.xd.service_product.ServiceProductExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface ServiceProductMapper {
    long countByExample(ServiceProductExample example);

    int deleteByExample(ServiceProductExample example);

    int deleteByPrimaryKey(String id);

    int insert(ServiceProduct record);

    int insertSelective(ServiceProduct record);

    List<ServiceProduct> selectByExample(ServiceProductExample example);

    ServiceProduct selectByPrimaryKey(String id);

    int updateByExampleSelective(@Param("record") ServiceProduct record, @Param("example") ServiceProductExample example);

    int updateByExample(@Param("record") ServiceProduct record, @Param("example") ServiceProductExample example);

    int updateByPrimaryKeySelective(ServiceProduct record);

    int updateByPrimaryKey(ServiceProduct record);
}