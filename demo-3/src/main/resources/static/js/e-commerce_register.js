$(".login-btn").on("click", function(){
    location.href="e-commerce_login.html"
})
 $(".font-aqua").on("click", function(){
    	 //处理用户数据
    	var ph= $(".buyuser_ph").val();
    	var pw= $(".buyuser_pw").val();
    	 console.log(ph,pw);
    	 
    	  $.ajax({
     		//请求类型
     		type:"post",
     		//请求路径
     		url:"/buyuser/buyuserregister",
     		//请求参数
     		data:{
     	     ph:ph,
     	     pw:pw,
     		},
     		//返回数据类型
     		dataType:"json",
     		//请求成功后调用函数
     		success:function(data){
     			console.log("成功后返回的数据",data);
     			alert(data.msg);
     	    }, 
     		 
     		error:function(data){
     			console.log("失败后返回的数据",data);
     		}
     	})
     })