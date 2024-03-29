package com.datangedu.cn.dao.mapper;

import com.datangedu.cn.model.xd.shopping.Shopping;
import com.datangedu.cn.model.xd.shopping.ShoppingExample;
import com.datangedu.cn.util.ServiceShopping;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface ShoppingMapper {
    long countByExample(ShoppingExample example);

    int deleteByExample(ShoppingExample example);

    int deleteByPrimaryKey(Integer id);
    
    int deleteByProductId(String product_id);

    int insert(Shopping record);

    int insertSelective(Shopping record);

    List<Shopping> selectByExample(ShoppingExample example);

    Shopping selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") Shopping record, @Param("example") ShoppingExample example);

    int updateByExample(@Param("record") Shopping record, @Param("example") ShoppingExample example);

    int updateByPrimaryKeySelective(Shopping record);

    int updateByPrimaryKey(Shopping record);

	List<ServiceShopping> selectByshopping(String buyuserid);


	List<Shopping> selectdifferent(String productid,String buyuserid);

<<<<<<< HEAD
}

=======

}
>>>>>>> bab2212a4ed5f852d90fb69cfb906e526cbe2da6
