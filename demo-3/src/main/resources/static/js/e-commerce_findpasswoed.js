$(function() {
	var img = document.getElementsByClassName("codeimg")[0];
	var time = new Date().getTime();
	img.src = "images?t=" + time;
})

$(".codeimg").on("click", function() {
	var img = document.getElementsByClassName("codeimg")[0];
	var time = new Date().getTime();
	img.src = "images?t=" + time;
})


$(".login-btn").on("click", function(){
	var ph = $(".ph").val();
	var imgcode = $(".code").val();
	var pw = $(".pw").val();
	var pw1 = $(".pw1").val();
	$.ajax({
		//请求类型
		type:"post",
		//请求路径
		url:"buyuser/repassword",
		//请求参数
		data:{
			ph: ph,
			pw: pw,
			imgcode: imgcode,
			pw1: pw1,
		},
		//返回数据类型
		//请求成功后调用函数
		success: function(data){
			console.log("成功后返回数据",data);
			if(data.code == 1){
				location.href = "./re?page=e-commerce_login"
			}
			else if(data.code == 2){
				alert("两次密码输入不一致!");
			}
			else{
				alert("验证码输入错误!");
//				location.href = "re?page=e-commerce_findpassword"
			}
			
		},
		//请求失败后调用函数
		error: function(data){
			console.log("失败后返回数据",data);
			//location.href = "re?page=operator_findpassword"
		}
	})
})