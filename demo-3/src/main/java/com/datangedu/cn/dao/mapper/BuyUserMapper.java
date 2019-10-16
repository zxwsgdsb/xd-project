package com.datangedu.cn.dao.mapper;

import com.datangedu.cn.model.xd.buy_user.BuyUser;
import com.datangedu.cn.model.xd.buy_user.BuyUserExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface BuyUserMapper {
    long countByExample(BuyUserExample example);

    int deleteByExample(BuyUserExample example);

    int deleteByPrimaryKey(String id);

    int insert(BuyUser record);

    int insertSelective(BuyUser record);

    List<BuyUser> selectByExample(BuyUserExample example);

    BuyUser selectByPrimaryKey(String id);

    int updateByExampleSelective(@Param("record") BuyUser record, @Param("example") BuyUserExample example);

    int updateByExample(@Param("record") BuyUser record, @Param("example") BuyUserExample example);

    int updateByPrimaryKeySelective(BuyUser record);

    int updateByPrimaryKey(BuyUser record);
}