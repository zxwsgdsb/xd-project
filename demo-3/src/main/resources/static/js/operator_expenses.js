$(function() {
//	location.href = "product"
		$.ajax({
			url:"/orderform/cost",
			type:"get",
			success: function(data){
				console.log("成功")
				console.log(data);
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
				
			},
			error: function(){
				console.log("失败")
			}
		})
		
})

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
		success: function(data){
			console.log("成功")
			console.log(data);
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