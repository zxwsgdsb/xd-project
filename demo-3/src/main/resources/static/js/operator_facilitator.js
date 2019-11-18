var page = 1;
var len = 0.0;
$(function() {
//	location.href = "product"
	$(".stop-content").hide();
	var state = "1";
		$.ajax({
			url:"/facilitator/page",
			type:"post",
			data:{
				state: state,
				pageNum: 1,
				pageSize: 2,
			},
			success: function(data){
				console.log("成功")
				console.log(data);
				var txt = '';
				for(var i=0; i<data.service_userList.length; i++){
					
					if(+data.service_userList[i].state == 1){
						txt += `<tr>
	                        <td>${data.service_userList[i].name}</td>
	                        <td>${data.service_userList[i].area}</td>
	                        <td>${data.service_userList[i].servicePh}</td>
	                        <td>${data.service_userList[i].adminIntroduction}</td>
							<td>
                            <span class="handle-btn"><i class="fa fa-edit fa-fw"></i>详情</span>
                            <span class="handle-btn" onclick="close1('${data.service_userList[i].id}')"><i class="fa fa-circle-c fa-fw"></i>停用</span>
							</td>
							</tr>`;
						
				
					} 
				}
				$("tbody").append(txt);
				var tat = ` <span onclick="pageOn(1)">首页</span>
							<span onclick="pageOn('-')">上一页</span>`
				for(var j = 0; j<(data.userList/2); j++){
					tat += `<span class="main-pagination-page" id="pagevalue" onclick= "pageOn(${j+1})">${j+1}</span>`
				}
					tat += `<span onclick="pageOn('+')">下一页</span>
					<span onclick="pageOn(Math.ceil(${data.userList/2}))">尾页</span>
					`
				$(".pagez").append(tat);
				len = Math.ceil((data.userList/2));
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
	console.log($(`.pagez span:eq(${page+1})`));
	$.ajax({
		url:"/facilitator/page",
		type:"post",
		data:{
			state: 1,
			name: "",
			pageNum: pageNum,
			pageSize: 2,
		},
		success: function(data){
			console.log(data);
			$("tbody").html("");
			var txt = '';
			for(var i=0; i<data.service_userList.length; i++){
				
				if(+data.service_userList[i].state == 1){
					txt += `<tr>
                        <td>${data.service_userList[i].name}</td>
                        <td>${data.service_userList[i].area}</td>
                        <td>${data.service_userList[i].servicePh}</td>
                        <td>${data.service_userList[i].adminIntroduction}</td>
                        <td>
                        <span class="handle-btn"><i class="fa fa-edit fa-fw"></i>详情</span>
                        <span class="handle-btn" onclick="close1('${data.service_userList[i].id}')"><i class="fa fa-circle-c fa-fw"></i>停用</span>
						</td>
                    </tr>`;
				} 
			}
			$("tbody").append(txt);
		
		},
		error: function(){
			console.log("失败")
		}
	})
}

function pageOne(pageNum){
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
	console.log($(`.pagez span:eq(${page+1})`));
	$.ajax({
		url:"/facilitator/page",
		type:"post",
		data:{
			state: 0,
			name: "",
			pageNum: pageNum,
			pageSize: 2,
		},
		success: function(data){
			console.log(data);
			$("tbody").html("");
			var txt = '';
			for(var i=0; i<data.service_userList.length; i++){
				
				if(+data.service_userList[i].state == 0){
					txt += `<tr>
                        <td>${data.service_userList[i].name}</td>
                        <td>${data.service_userList[i].area}</td>
                        <td>${data.service_userList[i].servicePh}</td>
                        <td>${data.service_userList[i].adminIntroduction}</td>
                        <td>
                        <span class="handle-btn"><i class="fa fa-edit fa-fw"></i>详情</span>
                        <span class="handle-btn" onclick="open1('${data.service_userList[i].id}')"><i class="fa fa-circle-c fa-fw"></i>启用</span>
						</td>
                    </tr>`;
				} 
			}
			$("tbody").append(txt);
		
		},
		error: function(){
			console.log("失败")
		}
	})
}

function pageClose(pageNum){
	$.ajax({
		url:"/facilitator/page",
		type:"get",
		data:{
			name: "",
			pageNum: pageNum,
			pageSize: 2,
		},
		success: function(data){
			console.log(data);
			$("tbody").html("");
			for(var i=0; i<data.service_userList.length; i++){
				
				if(+data.service_userList[i].state == 0){
					var txt = `<tr>
                        <td>${data.service_userList[i].name}</td>
                        <td>${data.service_userList[i].area}</td>
                        <td>${data.service_userList[i].servicePh}</td>
                        <td>${data.service_userList[i].adminIntroduction}</td>
                        
                        `;
					txt += `<td>
                        <span class="handle-btn"><i class="fa fa-edit fa-fw"></i>详情</span>
                        <span class="handle-btn open" onclick="open1('${data.service_userList[i].id}')"><i class="fa fa-circle-c fa-fw"></i>启用</span>
                    </td>
                    </tr>`;
					
			
				} 
					$("tbody").append(txt);
			}
		
		},
		error: function(){
			console.log("失败")
		}
	})
}

$(".find1").on("click",function(){
	var name = $(".username").val();
	$.ajax({
		url:"/facilitator/page",
		type:"post",
		data:{
			name: name,
			pageNum: 1,
			pageSize: 2,
		},
		success: function(data){
			console.log(data);
			$("tbody").html("");
			var txt ='';
			for(var i=0; i<data.service_userList.length; i++){
				
				if(+data.service_userList[i].state == 1){
					txt += `<tr>
                        <td>${data.service_userList[i].name}</td>
                        <td>${data.service_userList[i].area}</td>
                        <td>${data.service_userList[i].servicePh}</td>
                        <td>${data.service_userList[i].adminIntroduction}</td>
						<td>
                        <span class="handle-btn"><i class="fa fa-edit fa-fw"></i>详情</span>
                        <span class="handle-btn open" onclick="open1('${data.service_userList[i].id}')"><i class="fa fa-circle-c fa-fw"></i>启用</span>
						</td>
						</tr>`;
					
			
				}
			}
			$("tbody").append(txt);
			$(".pagez").html("");
			var tat = ` <span>首页</span>
				<span>上一页</span>`
			for(var j = 0; j<Math.ceil((data.service_userList.length/2)); j++){
				tat += `<span class="main-pagination-page" onclick= "pageOn(${j+1})">${j+1}</span>`
			}
				tat += `<span>下一页</span>
				<span onclick="pageOn(Math.ceil(${data.service_userList.length/2}))">尾页</span>
				`
			$(".pagez").append(tat);
		
		},
		error: function(){
			console.log("失败")
		}
	})
})

$(".find2").on("click",function(){
	var name = $(".username1").val();
	$.ajax({
		url:"/facilitator/page",
		type:"post",
		data:{
			name: name,
			pageNum: 1,
			pageSize: 2,
		},
		success: function(data){
			console.log(data);
			$("tbody").html("");
			var txt ='';
			for(var i=0; i<data.service_userList.length; i++){
				
				if(+data.service_userList[i].state == 0){
					txt += `<tr>
                        <td>${data.service_userList[i].name}</td>
                        <td>${data.service_userList[i].area}</td>
                        <td>${data.service_userList[i].servicePh}</td>
                        <td>${data.service_userList[i].adminIntroduction}</td>
						<td>
                        <span class="handle-btn"><i class="fa fa-edit fa-fw"></i>详情</span>
                        <span class="handle-btn open" onclick="open1('${data.service_userList[i].id}')"><i class="fa fa-circle-c fa-fw"></i>启用</span>
						</td>
						</tr>`;
					
			
				}
			}
			$("tbody").append(txt);
			$(".pagez").html("");
			var tat = ` <span>首页</span>
				<span>上一页</span>`
			for(var j = 0; j<Math.ceil((data.service_userList.length/2)); j++){
				tat += `<span class="main-pagination-page" onclick= "pageOn(${j+1})">${j+1}</span>`
			}
				tat += `<span>下一页</span>
				<span onclick="pageOn(Math.ceil(${data.service_userList.length/2}))">尾页</span>
				`
			$(".pagez").append(tat);
		
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
$(".order1").on("click", function(){
    $(".main-content").show();
    $(".stop-content").hide();
    $("table").show();
    $(".main-sercive").hide();
    $(".order1").addClass("border-red");
    $(".order2").removeClass("border-red");
    $(".main-top li").eq(3).text("正常用户");
    var state = "1";
    $.ajax({
		url:"/facilitator/page",
		type:"post",
		data:{
			state: state,
			pageNum: 1,
			pageSize: 2,
		},
		success: function(data){
			console.log("成功")
			console.log(data);
			$("tbody").html("");
			for(var i=0; i<data.service_userList.length; i++){
				
				if(+data.service_userList[i].state == 1){
					var txt = `<tr>
                        <td>${data.service_userList[i].name}</td>
                        <td>${data.service_userList[i].area}</td>
                        <td>${data.service_userList[i].servicePh}</td>
                        <td>${data.service_userList[i].adminIntroduction}</td>
                        
                        `;
					txt += `<td>
                        <span class="handle-btn"><i class="fa fa-edit fa-fw"></i>详情</span>
                        <span class="handle-btn" onclick="close1('${data.service_userList[i].id}')"><i class="fa fa-circle-c fa-fw"></i>停用</span>
                    </td>
                    </tr>`;
					
			
				} 
					$("tbody").append(txt);
			}
			$(".pagez").html("");
			var tat = ` <span onclick= "pageOn(1)">首页</span>
				<span onclick="pageOn('-')">上一页</span>`
			for(var j = 0; j<Math.ceil(data.userList/2); j++){
				tat += `<span class="main-pagination-page" onclick= "pageOn(${j+1})">${j+1}</span>`
			}
				tat += `<span onclick="pageOn('+')">下一页</span>
				<span onclick="pageOn(Math.ceil(${data.userList/2}))">尾页</span>
				`
			$(".pagez").append(tat);
				len = Math.ceil(data.userList/2);
			
		},
		error: function(){
			console.log("失败")
		}
	})
})
$(".order2").on("click", function(){
    $(".main-content").hide();
    $(".stop-content").show();
    $("table").show();
    $(".main-sercive").hide();
    $(".order2").addClass("border-red");
    $(".order1").removeClass("border-red");
    $(".main-top li").eq(3).text("停用用户");
    var state = "0";
    $.ajax({
		url:"/facilitator/page",
		type:"post",
		data:{
			state: state,
			pageNum: 1,
			pageSize: 2,
		},
		success: function(data){
			console.log("成功")
			console.log(data);
			$("tbody").html("");
			for(var i=0; i<data.service_userList.length; i++){
				
				if(+data.service_userList[i].state == 0){
					var txt = `<tr>
                        <td>${data.service_userList[i].name}</td>
                        <td>${data.service_userList[i].area}</td>
                        <td>${data.service_userList[i].servicePh}</td>
                        <td>${data.service_userList[i].adminIntroduction}</td>
                        
                        `;
					txt += `<td>
                        <span class="handle-btn"><i class="fa fa-edit fa-fw"></i>详情</span>
                        <span class="handle-btn open" onclick="open1('${data.service_userList[i].id}')"><i class="fa fa-circle-c fa-fw"></i>启用</span>
                    </td>
                    </tr>`;
					
			
				} 
					$("tbody").append(txt);
			}
			$(".pagez").html("");
			var tat = ` <span onclick="pageOne(1)">首页</span>
				<span onclick="pageOne('-')">上一页</span>`
			for(var j = 0; j<Math.ceil(data.userList/2); j++){
				tat += `<span class="main-pagination-page" onclick= "pageClose(${j+1})">${j+1}</span>`
			}
				tat += `<span onclick="pageOne('+')">下一页</span>
				<span onclick="pageOn(Math.ceil(${data.userList/2}))">尾页</span>
				`
			$(".pagez").append(tat);
			len = Math.ceil(data.userList/2);
			$(`.pagez span`).removeClass("main-pagination-page");
			if($(`.pagez span:eq(${page+1})`).text() == 1){
				$(`.pagez span:eq(${page+1})`).attr("class","main-pagination-page");
			}
		},
		error: function(){
			console.log("失败")
		}
	})
})

function open1(id){
	var state = "0";
	$.ajax({
		url:"/facilitator/open",
		type:"post",
		data:{
			id: id,
			state: state,
		},
		success: function(data){
			console.log("成功")
			console.log(data);
			$("tbody").html("");
			for(var i=0; i<data.service_userList.length; i++){
				
				if(+data.service_userList[i].state == 0){
					var txt = `<tr>
                        <td>${data.service_userList[i].name}</td>
                        <td>${data.service_userList[i].area}</td>
                        <td>${data.service_userList[i].servicePh}</td>
                        <td>${data.service_userList[i].adminIntroduction}</td>
                        
                        `;
					txt += `<td>
                        <span class="handle-btn"><i class="fa fa-edit fa-fw"></i>详情</span>
                        <span class="handle-btn" onclick="open1('${data.service_userList[i].id}')"><i class="fa fa-circle-c fa-fw"></i>启用</span>
                    </td>
                    </tr>`;
					
			
				} 
			
				
					$("tbody").append(txt);
			}
			location.href="re?page=operator_facilitator";
			
		},
		error: function(){
			console.log("失败")
		}
	})
	
}

function close1(id){
	var state = "1";
	$.ajax({
		url:"/facilitator/close",
		type:"post",
		data:{
			id: id,
			state: state,
		},
		success: function(data){
			console.log("成功")
			console.log(data);
			$("tbody").html("");
			var txt = '';
			for(var i=0; i<Math.ceil(data.service_userList.length/2); i++){
				
				if(+data.service_userList[i].state == 1){
					txt += `<tr>
                        <td>${data.service_userList[i].name}</td>
                        <td>${data.service_userList[i].area}</td>
                        <td>${data.service_userList[i].servicePh}</td>
                        <td>${data.service_userList[i].adminIntroduction}</td>
                        <td>
                        <span class="handle-btn"><i class="fa fa-edit fa-fw"></i>详情</span>
                        <span class="handle-btn" onclick="close1('${data.service_userList[i].id}')"><i class="fa fa-circle-c fa-fw"></i>停用</span>
						</td>
						</tr>`;
					
				}		
			}
			$("tbody").append(txt);
			location.href="re?page=operator_facilitator";
		},
		error: function(){
			console.log("失败")
		}
	})
	
}
