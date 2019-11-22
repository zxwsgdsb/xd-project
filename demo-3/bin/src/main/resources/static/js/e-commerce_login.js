


$(function() {
	var img = document.getElementsByClassName("code")[0];
	var time = new Date().getTime();
	img.src = "images?t=" + time;
})

$(".code").on("click", function() {
	var img = document.getElementsByClassName("code")[0];
	var time = new Date().getTime();
	img.src = "images?t=" + time;
})

$(".login-btn").on("click", function(){
	var ph = $(".buyuser_ph").val();
	var pw = $(".buyuser_pw").val();
	var imgcode = $(".input-code").val();  //id的话就是#
	$.ajax({
		//请求类型
		type:"post",
		//请求路径
		url:"/buyuser/buyuserlogin",
		//请求参数
		data:{
			ph: ph,
			pw: pw,
			imgcode: imgcode,
		},
		//返回数据类型
		//请求成功后调用函数
		success: function(data){
			console.log("成功后返回数据",data);
			if(data.code == 1){
				location.href = "re?page=e-commerce_product"
					sessionStorage.setItem("ph",ph)
			}
			
			else{
				alert("信息输入错误!");
				
			}
		},
		//请求失败后调用函数
		error: function(data){
			console.log("失败后返回数据",data);
			
		}
	})
})