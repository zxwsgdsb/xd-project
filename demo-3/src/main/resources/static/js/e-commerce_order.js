$(".search-product").on("click", function(){
    $(".search-product").addClass("font-aqua");
    $(".search-service").removeClass("font-aqua");
})
$(".search-service").on("click", function(){
    $(".search-service").addClass("font-aqua");
    $(".search-product").removeClass("font-aqua");
})

$(".banner a").on("click", function(event){
    $(".banner a").removeClass("border-b");
    $(event.target).addClass("border-b");
})

$(".user-action a").on("click", function(event){
    $(".user-action a").removeClass("bg-gray");
    $(event.target).addClass("bg-gray");
})
$(".login-btn").on("click", function(){
    location.href="e-commerce_settlement.html"
})
$(".login-btn").on("click", function(){
    location.href="e-commerce_login.html"
})
$(".login-btn").on("click", function(){
    location.href="e-commerce_shoping-cai.html"
})
$(".login-btn").on("click", function(){
    location.href="e-commerce_order.html"
})
$(".login-btn").on("click", function(){
    location.href="e-commerce_product.html"
})
$(".login-btn").on("click", function(){
    location.href="e-commerce_evaluate.html"
})
$(".login-btn").on("click", function(){
    location.href="e-commerce_account.html"
})


$(function(){
	var name = sessionStorage.getItem("name");
	console.log(name)
　　  $.ajax({
		// 请求类型
		type:"get",
		// 请求路径
		url:"/buyuser/getorderlist",
		// 请求参数
		
		   data:{ name:name, },
		 
		// 返回数据类型
		dataType:"json",
		// 请求成功后调用函数
		success:function(data){
			console.log("成功后返回的数据",data);
			var orderList =data.orderList
		console.log(orderList)
			var txt="";
			for(var i=0;i<orderList.length;i++){
			
				txt +=`
				
				  <div class="orders">
                    <div class="order-num">订单号：${orderList[i].id} 下单时间：${orderList[i].ts}</div>
                    <ul class="order-details">
                        <li>
                            <img src="./images/user-lg.png" alt="图片">
                            <ul>
                                <li>${orderList[i].orderContent}</li>
                               
                            </ul>
                            <p>${orderList[i].orderPrice}</p>
                            <p>1</p>
                        </li>
                        <li class="font-aqua">${orderList[i].orderPrice}</li>
                      
                    </ul>
                </div>
				`;
				
			}
			var txt1="";
			var txt2="";
			for(var i=0;i<orderList.length;i++){
				if(+orderList[i].state == 0){
					txt1 +=`
				<li class="font-aqua">未付款</li>
                <li>
                    <p><a href="re?page=e-commerce_settlement.html">付款</p>
                    <span class="delete" >删除订单</span>
                </li>`;
                }else{
                	txt2 +=`
                	<li class="font-aqua">已付款</li>
                	<li>
                	<span class="delete" >删除订单</span>
                	</li>`;
                }
			}
			console.log(txt);
			$(".content-right").append(txt); 
			$(".order-details").append(txt1);
			$(".order-details").append(txt2);
			
		},
		// 请求成功后调用函数
		error:function(data){
			console.log("失败后返回的数据",data);
		}
	})

　　});


