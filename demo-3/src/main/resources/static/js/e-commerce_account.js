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
$(function(){
	
	var name = sessionStorage.getItem("name");
	var txt = "";
	
	txt += `
	 <div><span>${name}</span>欢迎来到信达！<a href="re?page=e-commerce_login.html"><span class="user-quit">[退出]</span></div>
            <ul>
                <li><a href="re?page=e-commerce_shoping-car.html"><i class="fa fa-shopping-cart fa-lg"></i>
                        购物车</a></li>
                <li> <a href="re?page=e-commerce_order.html">
                        <i class="fa fa-file-text-o fa-lg"></i> 我的订单
                    </a></li>
                <li>服务商入口</li>
            </ul>
	`
		$(".headder-top-content").append(txt);
})

$(".save").on("click", function(){
	
	var oldpw= $(".oldpw").val();
	var newpw= $(".newpw").val();
	var newpw1= $(".newpw1").val();
	var ph = sessionStorage.getItem("ph");
	$.ajax({
			// 请求类型
			type:"post",
			// 请求路径
			url:"buyuser/updatepw",
			// 请求参数
			  data:{ oldpw:oldpw,
				     ph:ph,
				     newpw:newpw,
				     newpw1:newpw1,	 
			 },
			// 返回数据类型
			dataType:"json",
			// 请求成功后调用函数
			success:function(data){
				console.log("成功后返回数据",data);
				if(data.code == 1){
					location.href = "./re?page=e-commerce_account"
				}
				else if(data.code == 2)
					alert("两次密码输入不一致!");
				else
					alert("旧密码输入错误。")
				
			},
			// 请求成功后调用函数
			error:function(data){
				console.log("失败后返回的数据",data);
			}
		
})
})



$(".save1").on("click", function(){
	
	var name= $(".name").val();
	var mail= $(".mail").val();
	var sex=$(":radio[name='sex']").val();
	var ph = sessionStorage.getItem("ph");
	$.ajax({
			// 请求类型
			type:"post",
			// 请求路径
			url:"buyuser/update",
			// 请求参数
			  data:{ name:name,
				     ph:ph,
				     mail:mail,
				     sex:sex,	 
			 },
			// 返回数据类型
			dataType:"json",
			// 请求成功后调用函数
			success:function(data){
				console.log("成功后返回数据",data);
		       
					location.href = "./re?page=e-commerce_account"
				
				},
			// 请求成功后调用函数
			error:function(data){
				console.log("失败后返回的数据",data);
			}
		
})
})