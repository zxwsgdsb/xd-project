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

$(".content-nav li").on("click", function(event){
    $(".content-nav a").removeClass("nav-active");
    $(event.target).addClass("nav-active");
})
$(".login-btn").on("click", function(){
    location.href="e-commerce_login.html"
})
$(".login-btn").on("click", function(){
    location.href="e-commerce_order.html"
})
$(".login-btn").on("click", function(){
    location.href="e-commerce_product.html"
})
$(".login-btn").on("click", function(){
    location.href="e-commerce_settlement.html"
})


$(function(){
	
	var name = sessionStorage.getItem("name");
	var txt = "";
	
	txt += `
	 <div><span>${name}</span>欢迎来到信达！<a href="re?page=e-commerce_login.html"><span class="user-quit">[退出]</span></div>
            <ul>
                <li><a href="re?page=e-commerce_shoping-car.html"><i class="fa fa-shopping-cart fa-lg"></i>
                        购物车</a></li>
                <li> <a href="re?page=e-commerce_order.html">
                        <i class="fa fa-file-text-o fa-lg"></i> 我的订单
                    </a></li>
                <li>服务商入口</li>
            </ul>
	`
		$(".headder-top-content").append(txt);
})


$(function(){
	var buyuserid=sessionStorage.getItem("buyuserid")
	 $.ajax({
			// 请求类型
			type:"get",
			// 请求路径
			url:"buyuser/getshoppinglist",
			// 请求参数
		
			  data:{
				  buyuserid:buyuserid,
				     },
			
			// 返回数据类型
			dataType:"json",
			// 请求成功后调用函数
			success:function(data){
				console.log("成功后返回的数据",data);
				var shoppingList =data.shoppingList
				var txt="";
				var txt1="";
				var s=0;
				var ordername="";
				for(var i=0;i<shoppingList.length;i++){
					s=s+shoppingList[i].servicePrice*shoppingList[i].num;
					ordername=ordername+shoppingList[i].serviceName;
					txt +=`
					 <ul class="merchandise">
				            <li>
				                <img src="" alt="图片">
				            </li>
				            <li>${shoppingList[i].serviceName}</li>
				            <li>${shoppingList[i].servicePrice}</li>
				            <li>
				                <span onclick="reducenum('${shoppingList[i].id}')">-</span>
				                <input value=${shoppingList[i].num} onblur="changenum('${shoppingList[i].id}')"/>
				                <span onclick="addnum('${shoppingList[i].id}')">+</span>
				            </li>
				            <li>
				              ${shoppingList[i].servicePrice*shoppingList[i].num}
				            </li>
				            <li>
				                <span class="delete" onclick="deleteid('${shoppingList[i].id}')">删除</span>
				            </li>
			
                    </ul>
                  `	          
						;}
//				for(var i=0;i<shoppingList.length;i++){
					txt1 +=`
							<ul class="price">
					            <li>金额合计<span>${s}</span></li>
					            <li>
					                <a href="re?page=e-commerce_product.html">继续购物</a>
					                <a onclick="settle('${buyuserid}')">去结算</a>
					            </li>
					        </ul>
					`
//						}
					//Map.put("111",[a: [],b: [{123},{456}]])
					//List<Map<String, List<aaa>>>
				sessionStorage.setItem("s",s);
				sessionStorage.setItem("ordername",ordername);
				$(".product_list_title").after(txt); 
				$(".content").append(txt1); 
			},
			// 请求成功后调用函数
			error:function(data){
				console.log("失败后返回的数据",data);
			}
		})

	　　});



function reducenum(id){
	var e = window.event;
	var num=$(e.target).next().val()-1;
	console.log("取回的数值为",num);
	$.ajax({
  		//请求类型
  		type:"post",
  		//请求路径
  		url:"buyuser/shoppingcaraddre",
  		//请求参数
  		data:{
  	    num:num,
  	    id:id,
  		}, 
  		//返回数据类型
  		dataType:"json",
  		//请求成功后调用函数
  		success:function(data){
  			
  			
	if($(e.target).next().val()<=1){
		alert("数量不能小于1");
	}
	else{
	$(e.target).next().val($(e.target).next().val()-1);
	location.href = "./re?page=e-commerce_shoping-car"
	}
  		},
  		error:function(data){
  			console.log("失败后返回的数据",data);
  		}
  	})
}


function addnum(id){
	var e = window.event;
	
	var num=+$(e.target).prev().val()+1;
	
	console.log("取回的数值为",num);
	$.ajax({
  		//请求类型
  		type:"post",
  		//请求路径
  		url:"buyuser/shoppingcaraddre",
  		//请求参数
  		data:{
  	    num:num,
  	    id:id,
  		}, 
  		//返回数据类型
  		dataType:"json",
  		//请求成功后调用函数
  		success:function(data){
  			
	if($(e.target).next().val()<=1){
		alert("数量不能小于1");
	}
	else{
	
	$(e.target).prev().val(+$(e.target).prev().val()+1);
	location.href = "./re?page=e-commerce_shoping-car"

	}
  		},
  		error:function(data){
  			console.log("失败后返回的数据",data);
  		}
  	})
	
}

function changenum(id){
	console.log("失焦触发");
	var e = window.event;
	var num=$(e.target).val()
	$.ajax({
  		//请求类型
  		type:"post",
  		//请求路径
  		url:"buyuser/shoppingcaraddre",
  		//请求参数
  		data:{
  	    num:num,
  	    id:id,
  		}, 
  		//返回数据类型
  		dataType:"json",
  		//请求成功后调用函数
  		success:function(data){
  			location.href = "./re?page=e-commerce_shoping-car"

  		},
  		 error:function(data){
  			console.log("失败后返回的数据",data);
  		}
  	})
  		
	console.log($(e.target).val());
}


function deleteid(id){
	$.ajax({
  		//请求类型
  		type:"post",
  		//请求路径
  		url:"buyuser/shoppingcardelete",
  		//请求参数
  		data:{
  	    id:id,
  		}, 
  		//返回数据类型
  		dataType:"json",
  		//请求成功后调用函数
  		success:function(data){
  			console.log("删除成功!")
  			location.href = "./re?page=e-commerce_shoping_car"
  		},
  		 error:function(data){
  			console.log("失败后返回的数据",data);
  		}
  	})
}

function settle(buyuserid){
	var price = sessionStorage.getItem("s")
	var name = sessionStorage.getItem("name")
	var ordername=sessionStorage.getItem("ordername")
	$.ajax({
  		//请求类型
  		type:"post",
  		//请求路径
  		url:"buyuser/settle",
  		//请求参数
  		data:{
  			buyuserid:buyuserid,
  			name:name,
  			price:price,
  			ordername:ordername,
  		}, 
  		//返回数据类型
  		dataType:"json",
  		//请求成功后调用函数
  		success:function(data){
  			var id=data.id
  			sessionStorage.setItem("id",id);
 			location.href = "./re?page=e-commerce_settlement.html"
  				
  		},
  		 error:function(data){
  			console.log("失败后返回的数据",data);
  		}
  	})
	
	
	
}