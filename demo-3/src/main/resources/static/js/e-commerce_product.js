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
                    <span>加入购物车</span>
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
	                    <span>加入购物车</span>
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
	                    <span>加入购物车</span>
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

