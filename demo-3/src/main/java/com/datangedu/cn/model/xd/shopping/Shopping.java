package com.datangedu.cn.model.xd.shopping;

public class Shopping {
    private Integer id;

    private String productId;

    private Integer num;

    private String buyuserId;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId == null ? null : productId.trim();
    }

    public Integer getNum() {
        return num;
    }

    public void setNum(Integer num) {
        this.num = num;
    }

    public String getBuyuserId() {
        return buyuserId;
    }

    public void setBuyuserId(String buyuserId) {
        this.buyuserId = buyuserId == null ? null : buyuserId.trim();
    }
}