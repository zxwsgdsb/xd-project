var page = 1;
$(function() {
//	location.href = "product"
		$.ajax({
			url:"/orderform/cost",
			type:"get",
			data:{
				name: "",
				pageNum: 1,
				pageSize: 2,
			},
			success: function(data){
				console.log("成功")
				console.log(data);
				for(var i=0; i<data.userList.length; i++){
					var txt = `<tr>
                        <td>${data.userList[i].buyName}</td>
                        <td>${new Date(data.userList[i].ts).Format("yyyy-M-d")}</td>
                        <td>${data.userList[i].id}</td>
                        <td>${data.userList[i].orderPrice}</td>
                        <td>${data.userList[i].pay}</td>
                        <td>${data.userList[i].orderContent}</td>
                        </tr>
                        `;	
					$("tbody").append(txt);
				}
//				$("tbody").append(txt);
				var tat = ` <span onclick="pageOn(1)">首页</span>
							<span onclick="pageOn('-')">上一页</span>`
				for(var j = 0; j<Math.ceil(data.coco/2); j++){
					tat += `<span class="main-pagination-page" id="pagevalue" onclick= "pageOn(${j+1})">${j+1}</span>`
				}
					tat += `<span onclick="pageOn('+')">下一页</span>
					<span>尾页</span>
					`
				$(".pagez").append(tat);
				len = Math.ceil(data.coco/2);
				$(`.pagez span`).removeClass("main-pagination-page");
				if($(`.pagez span:eq(${page+1})`).text() == 1){
					$(`.pagez span:eq(${page+1})`).attr("class","main-pagination-page");
				}
				var ph = sessionStorage.getItem("phone");
				console.log(ph)
				$(".user_info").html("");
				var tat = `<li><a href="/re?page=operator_product"><i class="fa fa-cog fa-fw"></i>服务管理</a></li>
				            <li><i class="fa fa-cube fa-fw"></i>业务管理</li>
				            <li>
				                <img src="/images/default_user.png">
				                <span>${ph}</span>
				                <i class="fa fa-chevron-down fa-fw user-arrow-down"></i>
				                <ul class="dropdown">
				                    <li>更改信息</li>
				                    <li>退出登录</li>
				                </ul>
				            </li>`;
				$(".user_info").append(tat);
				
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

function dateFormatDay(date){  //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate()) + ' ';
    return Y + M + D ;
}

function getNowFormatDate() {
         var date = new Date();
         var seperator1 = "-";
         var year = date.getFullYear();
         var month = date.getMonth() + 1;
         var strDate = date.getDate();
         if (month >= 1 && month <= 9) {
             month = "0" + month;
         }
         if (strDate >= 0 && strDate <= 9) {
             strDate = "0" + strDate;
         }
         var currentdate = year + seperator1 + month + seperator1 + strDate;
         return currentdate;
     }

function getSevenFormatDate() {
	var startTime = new Date();
	console.log(startTime);
	var SevenDayAgo = new Date(startTime.getTime() - 168*60*60*1000);
	console.log(SevenDayAgo);
	SevenDayAgo = dateFormatDay(SevenDayAgo);
    return SevenDayAgo;
}

function getmonthFormatDate() {
	var startTime = new Date();
	console.log(startTime);
	var SevenDayAgo = new Date(startTime.getTime() - 720*60*60*1000);
	console.log(SevenDayAgo);
	SevenDayAgo = dateFormatDay(SevenDayAgo);
    return SevenDayAgo;
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
		url:"/orderform/cost",
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
			for(var i=0; i<data.userList.length; i++){
				var txt = `<tr>
                    <td>${data.userList[i].buyName}</td>
                    <td>${new Date(data.userList[i].ts).Format("yyyy-M-d")}</td>
                    <td>${data.userList[i].id}</td>
                    <td>${data.userList[i].orderPrice}</td>
                    <td>${data.userList[i].pay}</td>
                    <td>${data.userList[i].orderContent}</td>
                    </tr>
                    `;	
				$("tbody").append(txt);
			}
//			$("tbody").append(txt);
			
		
		},
		error: function(){
			console.log("失败")
		}
	})
}

$(".search li:eq(0)").on("click", function(){
	var b = new Date();
	var a =  new Date();
	var startdate = new Date(a.getTime());
	var enddate = new Date(b.getTime());
	startdate = dateFormatDay(startdate);
	enddate = dateFormatDay(enddate);
	$.ajax({
		url:"/orderform/query",
		type:"get",
		data:{
			startdate: startdate,
			enddate: enddate,
			pageNum: 1,
			pageSize: 2,
		},
		success: function(data){
			
			console.log(data);
			$("tbody").html("");
			for(var i=0; i<data.orderList.length; i++){
				var txt = `<tr>
                    <td>${data.orderList[i].buyName}</td>
                    <td>${data.orderList[i].ts}</td>
                    <td>${data.orderList[i].id}</td>
                    <td>${data.orderList[i].orderPrice}</td>
                    <td>${data.orderList[i].pay}</td>
                    <td>${data.orderList[i].orderContent}</td>
                    </tr>
                    `;
				
				
					$("tbody").append(txt);
			}
			$(".pagez").html("");
			var tat = ` <span onclick="pageOn(1)">首页</span>
				<span onclick="pageOn('-')">上一页</span>`
				for(var j = 0; j<(data.coco/2); j++){
					tat += `<span class="main-pagination-page" id="pagevalue" onclick= "pageOn(${j+1})">${j+1}</span>`
				}
			tat += `<span onclick="pageOn('+')">下一页</span>
				<span>尾页</span>
				`
				$(".pagez").append(tat);
			
		},
		error: function(){
			console.log("失败")
		}
	})
})

$(".search li:eq(1)").on("click", function(){
	var a =  new Date();
	var startdate = new Date(a.getTime() + 24*60*60*1000);
	startdate = dateFormatDay(startdate);
	var enddate = getSevenFormatDate();
	$.ajax({
		url:"/orderform/query",
		type:"get",
		data:{
			startdate: startdate,
			enddate: enddate,
			pageNum: 1,
			pageSize: 2,
		},
		success: function(data){
			
			console.log(data);
			$("tbody").html("");
			for(var i=0; i<data.orderList.length; i++){
				var txt = `<tr>
                    <td>${data.orderList[i].buyName}</td>
                    <td>${data.orderList[i].ts}</td>
                    <td>${data.orderList[i].id}</td>
                    <td>${data.orderList[i].orderPrice}</td>
                    <td>${data.orderList[i].pay}</td>
                    <td>${data.orderList[i].orderContent}</td>
                    </tr>
                    `;
				
				
					$("tbody").append(txt);
			}
			$(".pagez").html("");
			var tat = ` <span onclick="pageOn(1)">首页</span>
				<span onclick="pageOn('-')">上一页</span>`
				for(var j = 0; j<(data.coco/2); j++){
					tat += `<span class="main-pagination-page" id="pagevalue" onclick= "pageOn(${j+1})">${j+1}</span>`
				}
			tat += `<span onclick="pageOn('+')">下一页</span>
				<span>尾页</span>
				`
				$(".pagez").append(tat);
			
		},
		error: function(){
			console.log("失败")
		}
	})
})

$(".search li:eq(2)").on("click", function(){
	var a =  new Date();
	var startdate = new Date(a.getTime() + 24*60*60*1000);
	startdate = dateFormatDay(startdate);
	var enddate = getmonthFormatDate();
	$.ajax({
		url:"/orderform/query",
		type:"get",
		data:{
			startdate: startdate,
			enddate: enddate,
			pageNum: 1,
			pageSize: 2,
		},
		success: function(data){
			
			console.log(data);
			$("tbody").html("");
			for(var i=0; i<data.orderList.length; i++){
				var txt = `<tr>
                    <td>${data.orderList[i].buyName}</td>
                    <td>${data.orderList[i].ts}</td>
                    <td>${data.orderList[i].id}</td>
                    <td>${data.orderList[i].orderPrice}</td>
                    <td>${data.orderList[i].pay}</td>
                    <td>${data.orderList[i].orderContent}</td>
                    </tr>
                    `;
				
				
					$("tbody").append(txt);
			}
			$(".pagez").html("");
			var tat = ` <span onclick="pageOn(1)">首页</span>
				<span onclick="pageOn('-')">上一页</span>`
				for(var j = 0; j<(data.coco/2); j++){
					tat += `<span class="main-pagination-page" id="pagevalue" onclick= "pageOn(${j+1})">${j+1}</span>`
				}
			tat += `<span onclick="pageOn('+')">下一页</span>
				<span>尾页</span>
				`
				$(".pagez").append(tat);
			
		},
		error: function(){
			console.log("失败")
		}
	})
})

$(".search li:eq(3)").on("click", function(){
	$("tbody").html("");
	$.ajax({
		url:"/orderform/cost",
		type:"get",
		data:{
			name: "",
			pageNum: 1,
			pageSize: 2,
		},
		success: function(data){
			console.log("成功")
			console.log(data);
			for(var i=0; i<data.userList.length; i++){
				var txt = `<tr>
                    <td>${data.userList[i].buyName}</td>
                    <td>${data.userList[i].ts}</td>
                    <td>${data.userList[i].id}</td>
                    <td>${data.userList[i].orderPrice}</td>
                    <td>${data.userList[i].pay}</td>
                    <td>${data.userList[i].orderContent}</td>
                    </tr>
                    `;
				
				
					$("tbody").append(txt);
			}
			
		},
		error: function(){
			console.log("失败")
		}
	})
})


$(".user-arrow-down").on("click", function () {
    if ($(".dropdown").is(":hidden")) {
        $(".dropdown").show();
    } else {
        $(".dropdown").hide();
    }
})
$(".business-order").on("click", function () {
    $(".main-content").show();
    $("table").show();
    $(".main-pagination").show();
    $(".main-sercive").hide();
    $(".business-order").addClass("border-red");
    $(".service-order").removeClass("border-red");
    $(".main-top li").eq(3).text("支付中心");
})
$(".service-order").on("click", function () {
    $(".main-content").hide();
    $("table").hide();
    $(".main-pagination").hide();
    $(".main-sercive").show();
    $(".service-order").addClass("border-red");
    $(".business-order").removeClass("border-red");
    $(".main-top li").eq(3).text("结算中心");
})
$(".search li").eq(0).on("click", function () {
    $(".search li").removeClass("font-red");
    $(this).addClass("font-red");
})
$(".search li").eq(1).on("click", function () {
    $(".search li").removeClass("font-red");
    $(this).addClass("font-red");
})
$(".search li").eq(2).on("click", function () {
    $(".search li").removeClass("font-red");
    $(this).addClass("font-red");
})
$(".search li").eq(3).on("click", function () {
    $(".search li").removeClass("font-red");
    $(this).addClass("font-red");
})