$(".user-arrow-down").on("click",function(){
    if($(".dropdown").is(":hidden")){
        $(".dropdown").show();
 }else{
       $(".dropdown").hide();
 }
})
$(".order1").on("click", function(){
    $(".main-content").show();
    $("table").show();
    $(".main-pagination").show();
    $(".main-sercive").hide();
    $(".order1").addClass("border-red");
    $(".order2").removeClass("border-red");
    $(".main-top li").eq(3).text("正常用户");
})
$(".order2").on("click", function(){
    $(".main-content").hide();
    $("table").hide();
    $(".main-pagination").hide();
    $(".main-sercive").show();
    $(".order2").addClass("border-red");
    $(".order1").removeClass("border-red");
    $(".main-top li").eq(3).text("停用用户");
})
$(".order3").on("click", function(){
    $(".main-top li").eq(3).text("未通过用户");
})
$(function() {
// location.href = "product"
		$.ajax({
			url:"/orderform/research",
			type:"get",
			data: {
				pageNum:2,
				pageSize: 0,
				 name: null,
			},
			success: function(data){
				console.log("成功")
				console.log(data);
				$("tbody").html("");
				for(var i=0; i<data.orderList.length; i++){
					var txt = `<tr>
	                    <td>${data.orderList[i].buyId}</td>
	                    <td>${data.orderList[i].id}</td>
	                    <td>${data.orderList[i].buyName}</td>
	                    <td>${data.orderList[i].orderContent}</td>
                         <td>${data.orderList[i].pay}</td>
	                     <td>${data.orderList[i].orderPrice}</td>
	                     <td>${data.orderList[i].ts}</td>
	                     
	                    
	                    
	                    </tr>
	                    `;
							$("tbody").append(txt);
							$(".pagez").html("");
							var tat = ` <span onclick= "pageOn(1)">首页</span>
								<span onclick="pageOn('-')">上一页</span>`
							for(var j = 0; j<Math.ceil(data.orderList.length/2); j++){
								tat += `<span class="main-pagination-page" onclick= "pageOn(${j+1})">${j+1}</span>`
							}
								tat += `<span onclick="pageOn('+')">下一页</span>
								<span>尾页</span>
								`
							$(".pagez").append(tat);
							
				}
				error: function error(){
					console.log("失败")
				}
			}
		})
})	
				 
$(".search-btn").on("click", function(){
   var value = $(".search input").val();
   console.log(value);
   $.ajax({
	   type:"get",
	   url:"/orderform/research",
	   data:{
		   pageNum: 2,
		   pageSize: 0,
		   name: value,
	   },
	   success:function(data){
		   console.log("成功",data);
		   $("tbody").html("");
			for(var i=0; i<data.orderList.length; i++){
				var txt = `<tr>
                   <td>${data.orderList[i].buyId}</td>
	                    <td>${data.orderList[i].id}</td>
	                    <td>${data.orderList[i].buyName}</td>
	                    <td>${data.orderList[i].orderContent}</td>
                         <td>${data.orderList[i].pay}</td>
	                     <td>${data.orderList[i].orderPrice}</td>
	                     <td>${data.orderList[i].ts}</td>
                   
                   </tr>
                   `;
						$("tbody").append(txt);
						
			}
	   },
	   error:function(data){
		   console.log("失败",data);
		   }
	   
   
   })
})


$(".pagenext-btn").on("click", function(){
   var value = $(".pagenext input").val();
   console.log(value);
   $.ajax({
	   type:"get",
	   url:"/orderform/research",
	   data:{
		   pageNum: 2,
		   pageSize: 0,
		   name: value,
	   },
	   success:function(data){
		   console.log("成功",data);
		   $("tbody").html("");
			for(var i=0; i<data.orderList.length; i++){
				var txt = `<tr>
                   <td>${data.orderList[i].buyId}</td>
	                    <td>${data.orderList[i].id}</td>
	                    <td>${data.orderList[i].buyName}</td>
	                    <td>${data.orderList[i].orderContent}</td>
                         <td>${data.orderList[i].pay}</td>
	                     <td>${data.orderList[i].orderPrice}</td>
	                     <td>${data.orderList[i].ts}</td>
                   
                   </tr>
                   `;
						$("tbody").append(txt);
						
			}
	   },
	   error:function(data){
		   console.log("失败",data);
		   }
	   
   
   })
})
function pageOn(pageNum){
	if((typeof pageNum) == "number"){
		page = pageNum;
	} else if(pageNum == "+"){
		if(page == len){
			alert("没有下一页");
			return;
		}
		page += 1;
		pageNum = page;
	}else if(pageNum == "-"){
		if(page == len){
			alert("没有上一页");
			return;
		}
		page = page-1;
		pageNum = page;
	}
	if(page<= len){
		$(`.pagez span`).removeClass("main-pagination-page");
		$(`.pagez span:eq(${page+1})`).attr("class","main-pagination-page");
	}
	$.ajax({
		url:"/",
		type:"get",
		data:{
			name: "",
			pageNum: pageNum,
			pageSize: 2,
		},
		success: function(data){
			console.log(data);
			$("tbody").html("");
			var txt = '';
			for(var i=0; i<data.orderList[i].length; i++){
				
				if(+data.orderList[i].state == 1){
					txt += `<tr>
                      <td>${data.orderList[i].buyId}</td>
	                    <td>${data.orderList[i].id}</td>
	                    <td>${data.orderList[i].buyName}</td>
	                    <td>${data.orderList[i].orderContent}</td>
                         <td>${data.orderList[i].pay}</td>
	                     <td>${data.orderList[i].orderPrice}</td>
	                     <td>${data.orderList[i].ts}</td>
                   
                   </tr>
                    `;
				} 
			}
			$("tbody").append(txt);
		
		},
		error: function(){
			console.log("失败")
		}
	})
}
