
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

$(function(){
	$.ajax({
 		//请求类型
 		type:"post",
 		//请求路径
 		url:"/buyuser/provinceregister",
 		//请求参数
 		//返回数据类型
 		dataType:"json",
 		//请求成功后调用函数
 		success:function(data){
 			console.log("成功后返回的数据",data);
 			$("#aaa").html("");
 			var txt = `<option value="">省</option>`;
 			for(var i =0;i<data.provinceList.length;i++){
 				txt +=`<option value="${data.provinceList[i].id}">${data.provinceList[i].name}</option>`
 			}
 			$("#aaa").append(txt);
 	    }, 
 		 
 		error:function(data){
 			console.log("失败后返回的数据",data);
 		}
 	})
})

$(".province").on("change", function(){
	var id = $("#aaa").val();
	$.ajax({
 		//请求类型
 		type:"post",
 		//请求路径
 		url:"/buyuser/cityregister",
 		//请求参数
 		data:{
 			id: id,
 		},
 		//返回数据类型
 		dataType:"json",
 		//请求成功后调用函数
 		success:function(data){
 			console.log("成功后返回的数据",data);
 			$("#bbb").html("");
 			var txt = `<option value="">市</option>`;
 			for(var i =0;i<data.cityList.length;i++){
 				txt +=`<option value="${data.cityList[i].id}">${data.cityList[i].name}</option>`
 			}
 			$("#bbb").append(txt);
 	    }, 
 		 
 		error:function(data){
 			console.log("失败后返回的数据",data);
 		}
 	})
})

$(".city").on("change", function(){
	var id = $("#bbb").val();
	$.ajax({
 		//请求类型
 		type:"post",
 		//请求路径
 		url:"/buyuser/arearegister",
 		//请求参数
 		data:{
 			id: id,
 		},
 		//返回数据类型
 		dataType:"json",
 		//请求成功后调用函数
 		success:function(data){
 			console.log("成功后返回的数据",data);
 			$("#ccc").html("");
 			var txt = `<option value="">区</option>`;
 			for(var i =0;i<data.areaList.length;i++){
 				txt +=`<option value="${data.areaList[i].id}">${data.areaList[i].name}</option>`
 			}
 			$("#ccc").append(txt);
 	    }, 
 		 
 		error:function(data){
 			console.log("失败后返回的数据",data);
 		}
 	})
})

$(".nowregister").on("click", function(){
    	 //处理用户数据
	var province = $("#aaa").val();
	var city = $("#bbb").val();
	var area = $("#ccc").val();
    var ph= $(".buyuser_ph").val();
    var name= $(".buyuser_name").val();
   	var pw= $(".buyuser_pw").val();
   	var imgcode = $(".input-code").val();	 
    	  $.ajax({
     		//请求类型
     		type:"post",
     		//请求路径
     		url:"/buyuser/nowregister",
     		//请求参数
     		data:{
     		 name: name,
     	     ph:ph,
     	     pw:pw,
     	     province: province,
     	     city: city,
     	     area: area,
     	     imgcode: imgcode,
     		},
     		//返回数据类型
     		dataType:"json",
     		//请求成功后调用函数
     		success:function(data){
     			if(data.code == 1){
     				alert("注册成功，请登录");
     				location.href = "re?page=e-commerce_login"
     			}else{
     				alert("注册失败")
     			}
     	    }, 
     		 
     		error:function(data){
     			console.log("失败后返回的数据",data);
     		}
     	})
     })