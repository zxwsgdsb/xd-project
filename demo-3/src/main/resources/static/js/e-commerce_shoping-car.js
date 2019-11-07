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
	 $.ajax({
			// 请求类型
			type:"get",
			// 请求路径
			url:"/buyuser/getshoppinglist",
			// 请求参数
			/*
			 * data:{ id:id, },
			 */
			// 返回数据类型
			dataType:"json",
			// 请求成功后调用函数
			success:function(data){
				console.log("成功后返回的数据",data);
				var shoppingList =data.shoppingList
				var txt="";
				for(var i=0;i<shoppingList.length;i++){
					txt +=`
					 <ul class="merchandise">
				            <li>
				                <img src="" alt="图片">
				            </li>
				            <li>${shoppingList[i].serviceName}</li>
				            <li>${shoppingList[i].servicePrice}</li>
				            <li>
				                <span onclick="reducenum('123')">-</span>
				                <input value=${shoppingList[i].num} onblur="changenum('123')"/>
				                <span onclick="addnum('123')">+</span>
				            </li>
				            <li>
				                ${shoppingList[i].servicePrice}
				            </li>
				            <li>
				                <span class="delete">删除</span>
				            </li>
                    </ul>
   
                  `; 
					//Map.put("111",[a: [],b: [{123},{456}]])
					//List<Map<String, List<aaa>>>
				}
				$(".product_list_title").after(txt); 
			},
			// 请求成功后调用函数
			error:function(data){
				console.log("失败后返回的数据",data);
			}
		})

	　　});

/*$(".delete").on("click", function(){
    $.
	
})
*/

function reducenum(id){
	var e = window.event;
	var num=$(e.target).next().val()-1;
	console.log("取回的数值为",num);
	$.ajax({
  		//请求类型
  		type:"post",
  		//请求路径
  		url:"/buyuser/shoppingcaraddre",
  		//请求参数
  		data:{
  	    num:num,
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
	if($(e.target).next().val()<=1){
		alert("数量不能小于1");
	}
	else{
	
	$(e.target).prev().val(+$(e.target).prev().val()+1);
	}
	
}

function changenum(id){
	console.log("失焦触发");
	var e = window.event;
	console.log($(e.target).val());
}

