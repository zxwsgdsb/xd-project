$(".search-product").on("click", function () {
    $(".search-product").addClass("font-aqua");
    $(".search-service").removeClass("font-aqua");
})
$(".search-service").on("click", function () {
    $(".search-service").addClass("font-aqua");
    $(".search-product").removeClass("font-aqua");
})

$(".banner a").on("click", function (event) {
    $(".banner a").removeClass("border-b");
    $(event.target).addClass("border-b");
})

$(".user-action a").on("click", function (event) {
    $(".user-action a").removeClass("bg-gray");
    $(event.target).addClass("bg-gray");
})
$(".content-nav li").on("click", function (event) {
    $(".content-nav li").removeClass("nav-active");
    $(event.target).addClass("nav-active");
})

$(".content-banner li").eq(0).on("click", function (event) {
    $(".content-banner li").removeClass("border-b1");
    $(event.target).addClass("border-b1");
    $(".change-password").hide();
    $(".account-info").show();
})
$(".content-banner li").eq(1).on("click", function (event) {
    $(".content-banner li").removeClass("border-b1");
    $(event.target).addClass("border-b1");
    $(".change-password").show();
    $(".account-info").hide();
})
$(".login-btn").on("click", function(){
    location.href="e-commerce_login.html"
})
$(".login-btn").on("click", function(){
    location.href="e-commerce_shoping-car.html"
})
$(".login-btn").on("click", function(){
    location.href="e-commerce_order.html"
})
$(".login-btn").on("click", function(){
    location.href="e-commerce_product.html"
})
$(".login-btn").on("click", function(){
    location.href="e-commerce_account.html"
})
$(".login-btn").on("click", function(){
    location.href="e-commerce_evaluate.html"
})

//$(".save").on("click", function(){
//	
//	var oldpw= $(".oldpw").val();
//	var newpw= $(".newpw").val();
//	var newpw1= $(".newpw1").val();
//	$.ajax({
//			// 请求类型
//			type:"post",
//			// 请求路径
//			url:"/buyuser/updatepw",
//			// 请求参数
//			  data:{ oldpw:oldpw,
//				     newpw:newpw,
//				     newpw1:newpw1,	 
//			 },
//			// 返回数据类型
//			dataType:"json",
//			// 请求成功后调用函数
//			success:function(data){
//				console.log("成功后返回的数据",data);
//				
//			}
//			// 请求成功后调用函数
//			error:function(data){
//				console.log("失败后返回的数据",data);
//			}
//		
//})