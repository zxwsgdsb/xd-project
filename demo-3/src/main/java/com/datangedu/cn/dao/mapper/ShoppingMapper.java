package com.datangedu.cn.dao.mapper;

import com.datangedu.cn.model.xd.shopping.Shopping;
import com.datangedu.cn.model.xd.shopping.ShoppingExample;
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
<<<<<<< HEAD

	List<ServiceShopping> selectByshopping();


=======
>>>>>>> f3406570f14710d84bddf65eb135114d7a838180
}