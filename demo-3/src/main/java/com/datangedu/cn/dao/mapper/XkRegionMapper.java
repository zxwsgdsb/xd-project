package com.datangedu.cn.dao.mapper;

import com.datangedu.cn.model.xd.xk_region.XkRegion;
import com.datangedu.cn.model.xd.xk_region.XkRegionExample;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface XkRegionMapper {
    long countByExample(XkRegionExample example);

    int deleteByExample(XkRegionExample example);

    int insert(XkRegion record);

    int insertSelective(XkRegion record);

    List<XkRegion> selectByExample(XkRegionExample example);
    
    List<XkRegion> selectByProvince();
    
    List<XkRegion> selectByCity(String id);
    
    List<XkRegion> selectByArea(String id);

    int updateByExampleSelective(@Param("record") XkRegion record, @Param("example") XkRegionExample example);

    int updateByExample(@Param("record") XkRegion record, @Param("example") XkRegionExample example);
}