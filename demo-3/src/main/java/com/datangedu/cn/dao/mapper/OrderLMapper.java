package com.datangedu.cn.dao.mapper;

import com.datangedu.cn.model.xd.order.OrderL;
import com.datangedu.cn.model.xd.order.OrderLExample;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface OrderLMapper {
    long countByExample(OrderLExample example);

    int deleteByExample(OrderLExample example);

    int deleteByPrimaryKey(String id);

    int insert(OrderL record);

    int insertSelective(OrderL record);

    List<OrderL> selectByExample(OrderLExample example);
    
    List<OrderL> selectByLike(String name, OrderLExample example);

    OrderL selectByPrimaryKey(String id);

    int updateByExampleSelective(@Param("record") OrderL record, @Param("example") OrderLExample example);

    int updateByExample(@Param("record") OrderL record, @Param("example") OrderLExample example);

    int updateByPrimaryKeySelective(OrderL record);

    int updateByPrimaryKey(OrderL record);
    
    List<OrderL> selectByDate(String startdate, String enddate,OrderLExample example);
    
    List<OrderL> selectByDate1(String startdate, String enddate);
    List<OrderL> selectByDate(String startdate, String enddate);
    List<OrderL> selectByLike１(int pageNum,int pageSize,String buy_name);
   
}