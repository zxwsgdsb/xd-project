$(".payment li").eq(1).on("click", function(){
    location.href="e-commerce_order.html";
})

$(function(){
	var id = sessionStorage.getItem("id");
	 $.ajax({
			// 请求类型
			type:"get",
			// 请求路径
			url:"buyuser/getsettle",
			// 请求参数
			
			  data:{ id:id, },
			 
			// 返回数据类型
			dataType:"json",
			// 请求成功后调用函数
			success:function(data){
				console.log("成功后返回的数据",data);
				$(".merchandise").html(""); 
				var order=data.order;
				var date = new Date();
				var y = date.getFullYear();
				var m = date.getMonth()+1;
				var d = date.getDate();
				var h = date.getHours();
				var minutes = date.getMinutes();
				var s = date.getSeconds();
				var strDate = y+"-"+m+"-"+d+" "+h+":"+minutes+":"+s;
				var txt="";
				var txt1="";
//				for(var i=0;i<orderlist.length;i++){
				txt +=`
				
            <li>
                订单编号：<span class="font-aqua">${order[0].id}</span>
            </li>
            <li>创建时间：${strDate}</li>
            <li>订单明细：${order[0].orderContent}</li>
            <li>订单总额：¥${order[0].orderPrice}</li>
        

				`
					txt1 +=`
					 <li>金额总计：<span>¥${order[0].orderPrice}</span></li>
					<a onclick="payfororder('${order[0].id}')"><li>支付</li>
					`
			$(".merchandise").append(txt); 
				$(".payment").append(txt1); 
//				}
					
			},
			// 请求成功后调用函数
			error:function(data){
				console.log("失败后返回的数据",data);
			}
		})
			
});

$(".radio1").on("change",function(){
	var a = "银联";
	sessionStorage.setItem("pay",a);
})
$(".radio2").on("change",function(){
	var b = "微信";
	sessionStorage.setItem("pay",b);
})
$(".radio3").on("change",function(){
	var c = "支付宝";
	sessionStorage.setItem("pay",c);
})
function payfororder(id){
	var pay = sessionStorage.getItem("pay");
	$.ajax({
  		//请求类型
  		type:"post",
  		//请求路径
  		url:"buyuser/payfororder",
  		//请求参数
  		data:{
  	    id:id,
  	    pay:pay,
  		}, 
  		//返回数据类型
  		dataType:"json",
  		//请求成功后调用函数
  		success:function(data){
  			console.log("成功后返回的数据",data);
  			location.href = "./re?page=e-commerce_order"

  		},
  		 error:function(data){
  			console.log("失败后返回的数据",data);
  		}
  	})
}


