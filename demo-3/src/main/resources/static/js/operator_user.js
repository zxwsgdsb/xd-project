var page = 1;
var len = 0.0;
$(function() {
//	location.href = "product"
		$.ajax({
			url:"/opeuser/login",
			type:"get",
			data: {
				pageNum: 1,
				pageSize: 2,
				name: '',
			},
			success: function(data){
				console.log("成功")
				console.log(data);
				$("tbody").html("");
				for(var i=0; i<2; i++){
					var txt = `<tr>
	                    <td>${data.buy_userList[i].id}</td>
	                    <td>${data.buy_userList[i].name}</td>
	                    <td>${data.buy_userList[i].ph}</td>
	                    <td>${data.buy_userList[i].buyArea}</td>
	                    <td>${new Date(data.buy_userList[i].ts).Format("yyyy-M-d")}</td>
	                    <td>${data.buy_userList[i].buyNum}</td>
	                    <td>${data.buy_userList[i].consumePrice}</td>
	                    <td>
	                        <span class="handle-btn">查看</span>
	                    </td>
	                    </tr>
	                    `;
							$("tbody").append(txt);
							
				}
					
				var tat = ` <span onclick="pageOn(1)">首页</span>
					<span onclick="pageOn('-')">上一页</span>`
				for(var j = 0; j<Math.ceil((data.buy_userList.length/2)); j++){
					if(page == j+1){
						tat += `<span class="main-pagination-page" onclick= "pageOn(${j+1})">${j+1}</span>`
					}else{
						tat += `<span onclick= "pageOn(${j+1})">${j+1}</span>`
					}
				}
					tat += `<span onclick="pageOn('+')">下一页</span>
					<span onclick="pageOn(Math.ceil(${data.buy_userList.length/2}))">尾页</span>
					`
				$(".pagez").append(tat);
				len = Math.ceil((data.buy_userList.length/2));
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
		if(page == 1){
			alert("没有前一页");
			return;
		}
		page = page-1;
		pageNum = page;
	}
	
	console.log(typeof pageNum);
	if(page<= len){
		$(`.pagez span`).removeClass("main-pagination-page");
		$(`.pagez span:eq(${page+1})`).attr("class","main-pagination-page");
	}
	
	console.log($(`.pagez span:eq(${page+1})`));
	$.ajax({
		url:"/opeuser/page",
		type:"get",
		data:{
			name: "",
			pageNum: pageNum,
			pageSize: 2,
		},
		success: function(data){
			console.log(data);
			$("tbody").html("");
			for(var i=0; i<data.buy_userList.length; i++){
					if(!data.buy_userList[i].id){
						alert("用户不存在");
					}else{
					var txt = `<tr>
                        <td>${data.buy_userList[i].id}</td>
                        <td>${data.buy_userList[i].name}</td>
                        <td>${data.buy_userList[i].ph}</td>
                        <td>${data.buy_userList[i].buyArea}</td>
                        <td>${new Date(data.buy_userList[i].ts).Format("yyyy-M-d")}</td>
                        <td>${data.buy_userList[i].buyNum}</td>
                        <td>${data.buy_userList[i].consumePrice}</td>
                        <td>
                            <span class="handle-btn">查看</span>
                        </td>
                        </tr>
                        `;
					
				}
				$("tbody").append(txt);
			}
		
		},
		error: function(){
			console.log("失败")
		}
	})
}

$(".fa-search").on("click", function(){
	var name = $(".username1").val();
	console.log("===",name);
	$.ajax({
		url:"/opeuser/page",
		type:"get",
		data:{
			name: name,
			pageNum: 1,
			pageSize: 2,
		},
		success: function(data){
			console.log(data);
			for(var i=0; i<data.buy_userList.length/2; i++){
					if(!data.buy_userList[i].id){
						alert("用户不存在");
					}else{
					$("tbody").html("");
					var txt = `<tr>
                        <td>${data.buy_userList[i].id}</td>
                        <td>${data.buy_userList[i].name}</td>
                        <td>${data.buy_userList[i].ph}</td>
                        <td>${data.buy_userList[i].buyArea}</td>
                        <td>${data.buy_userList[i].ts}</td>
                        <td>${data.buy_userList[i].buyNum}</td>
                        <td>${data.buy_userList[i].consumePrice}</td>
                        <td>
                            <span class="handle-btn">查看</span>
                        </td>
                        </tr>
                        `;
					$("tbody").append(txt);
					
				}
//				$("tbody").append(txt);
			}
			$(".pagez").html("");
			var tat = ` <span onclick="pageOn(1)">首页</span>
				<span onclick="pageOn('-')">上一页</span>`
			for(var j = 0; j<Math.ceil(data.buy_userList.length/2); j++){
				tat += `<span class="main-pagination-page" onclick= "pageOn(${j+1})">${j+1}</span>`
			}
				tat += `<span onclick="pageOn('+')">下一页</span>
				`
				if(data.buy_userList.length <= 2){
					tat +=`<span >尾页</span>`
				}else{
					tat += `<span onclick="pageOn(Math.ceil(${data.buy_userList.length/2}))">尾页</span>`
				}
			$(".pagez").append(tat);
			len = Math.ceil(data.buy_userList.length/2);
		
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
    $(".main-pagination").show();
    $(".main-sercive").hide();
    $(".business-order").addClass("border-red");
    $(".service-order").removeClass("border-red");
    $(".main-top li").eq(3).text("注册用户");
})
$(".service-order").on("click", function(){
    $(".main-content").hide();
    $("table").hide();
    $(".main-pagination").hide();
    $(".main-sercive").show();
    $(".service-order").addClass("border-red");
    $(".business-order").removeClass("border-red");
    $(".main-top li").eq(3).text("服务商用户");
})