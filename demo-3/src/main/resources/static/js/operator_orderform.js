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
                        <td>${data.orderList[i].ts}</td>
                        
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