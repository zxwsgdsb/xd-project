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

$(".user-action a").on("click", function(event){
    $(".user-action a").removeClass("bg-gray");
    $(event.target).addClass("bg-gray");
})
$(".content-nav li").on("click", function(event){
    $(".content-nav li").removeClass("nav-active");
    $(event.target).addClass("nav-active");
})
$(".evaluate_btn").on("click", function(event){
    $(".masking").show();
})
$(".save").on("click", function(event){
    $(".masking").hide();
    console.log("保存");
})
$(".cancel").on("click", function(event){
    $(".masking").hide();
    console.log("取消");
})
$(".login-btn").on("click", function(){
    location.href="e-commerce_shoping-car.html"
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
    location.href="e-commerce_account.html"
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