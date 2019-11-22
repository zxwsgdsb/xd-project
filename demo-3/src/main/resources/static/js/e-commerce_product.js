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
    $(".content-nav li").removeClass("nav-active");
    $(event.target).addClass("nav-active");
})
$(".login-btn").on("click", function(){
    location.href="e-commerce_product.html"
})
$(".login-btn").on("click", function(){
    location.href="e-commerce_settlement.html"
})
$(".login-btn").on("click", function(){
    location.href="e-commerce_settlement.html"
})
$(".login-btn").on("click", function(){
    location.href="e-commerce_shoping-car.html"
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
	var ph = sessionStorage.getItem("ph");
　　  $.ajax({
		// 请求类型
		type:"get",
		// 请求路径
		url:"/buyuser/getbuyuserlist",
		// 请求参数
		
		  data:{ ph:ph, },
		 
		// 返回数据类型
		dataType:"json",
		// 请求成功后调用函数
		success:function(data){
			console.log("成功后返回的数据",data);
			var name =data.buyuserList[0].name;
			var buyuserid=data.buyuserList[0].id;
			sessionStorage.setItem("name",name)
			sessionStorage.setItem("buyuserid",buyuserid)
			console.log(name);
			console.log(buyuserid);
		},
		// 请求成功后调用函数
		error:function(data){
			console.log("失败后返回的数据",data);
		}
	})

　　});
$(function(){
　　  $.ajax({
		// 请求类型
		type:"get",
		// 请求路径
		url:"/buyuser/getproductlist",
		// 请求参数
		/*
		 * data:{ id:id, },
		 */
		// 返回数据类型
		dataType:"json",
		// 请求成功后调用函数
		success:function(data){
			console.log("成功后返回的数据",data);
			var productList =data.productList
		
			var txt="";
			for(var i=0;i<productList.length;i++){
				if(+productList[i].serviceState == 1){
				txt +=`
				
				 <div class="article">
            <img src="" alt="图片" />
            <ul class="article-info">
   
                <li>${productList[i].serviceName}</li>
				<li>${productList[i].serviceExplain}</li>
				<li>${productList[i].name}</li>
            </ul>
            <ul class="article-price">
                <li>${productList[i].servicePrice}元</li>
                <li>
                    <a href="re?page=e-commerce_settlement.html">立即购买</a>
                    <span onclick="addcar('${productList[i].id}')">加入购物车</span>
                </li>
            </ul>
        </div>
        
        <hr color="#ededed" size="1">
				`;
				}
			}
			console.log(txt);
			$(".content").append(txt); 
			
			
		},
		// 请求成功后调用函数
		error:function(data){
			console.log("失败后返回的数据",data);
		}
	})

　　});


$(".nav-active").on("click", function(){
	 $.ajax({
			// 请求类型
			type:"get",
			// 请求路径
			url:"/buyuser/getproductlist",
			// 请求参数
			/*
			 * data:{ id:id, },
			 */
			// 返回数据类型
			dataType:"json",
			// 请求成功后调用函数
			success:function(data){
				console.log("成功后返回的数据",data);
				var productList =data.productList
				$(".article+hr").remove();
				$(".article").remove();

				var txt="";
				for(var i=0;i<productList.length;i++){
					if(+productList[i].serviceState == 1){
					txt +=`
					
					 <div class="article">
	            <img src="" alt="图片" />
	            <ul class="article-info">
	   
	                <li>${productList[i].serviceName}</li>
					<li>${productList[i].serviceExplain}</li>
					<li>${productList[i].name}</li>
	            </ul>
	            <ul class="article-price">
	                <li>${productList[i].servicePrice}元</li>
	                <li>
	                    <a href="re?page=e-commerce_settlement.html">立即购买</a>
	                    <span onclick="addcar('${productList[i].id}')">加入购物车</span>
	                </li>
	            </ul>
	        </div>
	        
	        <hr color="#ededed" size="1">
					`;
					}
				}
				$(".content").append(txt); 
				
				
			},
			// 请求成功后调用函数
			error:function(data){
				console.log("失败后返回的数据",data);
			}
		})
})


$(".content-nav li:eq(1)").on("click", function(){
	 $.ajax({
			// 请求类型
			type:"get",
			// 请求路径
			url:"/buyuser/getproductlistorderby",
			// 请求参数
			/*
			 * data:{ id:id, },
			 */
			// 返回数据类型
			dataType:"json",
			// 请求成功后调用函数
			success:function(data){
				console.log("成功后返回的数据",data);
				var productList =data.productList
				$(".article+hr").remove();
				$(".article").remove();
				console.log($(".article").nextAll());
				var txt="";
				for(var i=0;i<productList.length;i++){
					if(+productList[i].serviceState == 1){
					txt +=`
					
					 <div class="article">
	            <img src="" alt="图片" />
	            <ul class="article-info">
	   
	                <li>${productList[i].serviceName}</li>
					<li>${productList[i].serviceExplain}</li>
					<li>${productList[i].name}</li>
	            </ul>
	            <ul class="article-price">
	                <li>${productList[i].servicePrice}元</li>
	                <li>
	                    <a href="re?page=e-commerce_settlement.html">立即购买</a>
	                    <span onclick="addcar('${productList[i].id}')">加入购物车</span>
	                </li>
	            </ul>
	        </div>
	        
	        <hr color="#ededed" size="1">
					`;
					}
				}
				$(".content").append(txt);
				
			},
			// 请求成功后调用函数
			error:function(data){
				console.log("失败后返回的数据",data);
			}
		})
})

function addcar(id){
	var buyuserid=sessionStorage.getItem("buyuserid")
	 $.ajax({
			// 请求类型
			type:"post",
			// 请求路径
			url:"/buyuser/addcar",
			// 请求参数
			
			  data:{ 
				  id:id,
				  buyuserid:buyuserid,
			  },
			 
			// 返回数据类型
			dataType:"json",
			// 请求成功后调用函数
			success:function(data){
				console.log("成功后返回的数据",data);
				alert(data.msg);
			},
			// 请求成功后调用函数
			error:function(data){
				console.log("失败后返回的数据",data);
			}
		})
}

$(".search-btn").on("click", function(){
	var text = $(".search-like").val();
	$.ajax({
		url:"/buyuser/searchlike",
		type:"get",
		data:{
			text: text,
		},
		success: function(data){
			var productList =data.productList
			$(".article+hr").remove();
			$(".article").remove();
			console.log($(".article").nextAll());
			var txt="";
			for(var i=0;i<productList.length;i++){
				if(+productList[i].serviceState == 1){
				txt +=`
				
				 <div class="article">
            <img src="" alt="图片" />
            <ul class="article-info">
   
                <li>${productList[i].serviceName}</li>
				<li>${productList[i].serviceExplain}</li>
				<li>${productList[i].name}</li>
            </ul>
            <ul class="article-price">
                <li>${productList[i].servicePrice}元</li>
                <li>
                    <a href="re?page=e-commerce_settlement.html">立即购买</a>
                    <span onclick="addcar('${productList[i].id}')">加入购物车</span>
                </li>
            </ul>
        </div>
        
        <hr color="#ededed" size="1">
				`;
				}
			}
			$(".content").append(txt);
			
		},
		error: function(){
			console.log("失败")
		}
	})
})
