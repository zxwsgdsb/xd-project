$(function() {
//	location.href = "product"
		$.ajax({
			url:"/orderform/login",
			type:"get",
			success: function(data){
				console.log("成功")
				console.log(data);
				for(var i=0; i<data.orderList.length; i++){
					var txt = `<tr>
                        <td>${data.orderList[i].id}</td>
                        <td>${data.orderList[i].buyName}</td>
                        <td>${data.orderList[i].orderContent}</td>
                        <td>${data.orderList[i].orderPrice}</td>
                        <td>${new Date(data.orderList[i].ts).Format("yyyy-M-d")}</td>
                        
                        `;
					if(+data.orderList[i].state == 1){
						txt += `<td>已支付</td>
						<td>
                            <span class="handle-btn"><i class="fa fa-edit fa-fw"></i>详情</span>
                        </td>`;
						
				
					} else{
						txt += `<td>未支付</td>
						<td>
                            <span class="handle-btn"><i class="fa fa-edit fa-fw"></i>详情</span>
                        </td>`;
					}
					txt +=`</tr>`
				
						$("tbody").append(txt);
				}
				var name = sessionStorage.getItem("name");
				var id = sessionStorage.getItem("id");
				$(".username").text(name);
				$("#aaa").attr("src","/headImg?id="+id);
				
			},
			error: function(){
				console.log("失败")
			}
		})
		
})

Date.prototype.Format = function(fmt)   
{
  var o = {   
    "M+" : this.getMonth()+1,                 //月份   
    "d+" : this.getDate(),                    //日   
    "h+" : this.getHours(),                   //小时   
    "m+" : this.getMinutes(),                 //分   
    "s+" : this.getSeconds(),                 //秒   
    "q+" : Math.floor((this.getMonth()+3)/3), //季度   
    "S"  : this.getMilliseconds()             //毫秒   
  };   
  if(/(y+)/.test(fmt))   
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(var k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
  return fmt;   
}

$(".fa-search").on("click", function(){
	var num = $(".ordernum").val();
	$.ajax({
		url:"/orderform/search",
		type:"get",
		data:{
			num: num,
		},
		success: function(data){
			console.log(data);
			if(!data.orderList.id){
				alert("订单不存在");
			}else{
				$("tbody").html("");
				var txt = "";
					 txt = `<tr>
	                    <td>${data.orderList.id}</td>
	                    <td>${data.orderList.buyName}</td>
	                    <td>${data.orderList.orderContent}</td>
	                    <td>${data.orderList.orderPrice}</td>
	                    <td>${data.orderList.ts}</td>
	                    
	                    `;
					if(+data.orderList.state == 1){
						txt += `<td>已支付</td>
						<td>
	                        <span class="handle-btn"><i class="fa fa-edit fa-fw"></i>详情</span>
	                    </td>`;
						
				
					} else{
						txt += `<td>未支付</td>
						<td>
	                        <span class="handle-btn"><i class="fa fa-edit fa-fw"></i>详情</span>
	                    </td>`;
					}
					txt +=`</tr>`
		
				console.log(txt);
				$("tbody").append(txt);
			}
			
		},
		error: function(){
			console.log("失败")
		}
	})
})

$(".user-arrow-down").on("click",function(){
    if($(".dropdown").is(":hidden")){
        $(".dropdown").show();
 }else{
       $(".dropdown").hide();
 }
})
$(".business-order").on("click", function(){
    $(".main-content").show();
    $("table").show();
    $(".main-sercive").hide();
    $(".business-order").addClass("border-red");
    $(".service-order").removeClass("border-red");
    $(".main-top li").eq(3).text("业务订单");
})
$(".service-order").on("click", function(){
    $(".main-content").hide();
    $("table").hide();
    $(".main-sercive").show();
    $(".service-order").addClass("border-red");
    $(".business-order").removeClass("border-red");
    $(".main-top li").eq(3).text("服务订单");
})