var page = 0;
$(function() {
	page = 1;
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
                            <span class="handle-btn" onclick="close1(${data.service_userList[i].id})"><i class="fa fa-circle-c fa-fw"></i>停用</span>
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
					<span>尾页</span>
					`
				$(".pagez").append(tat);
				
				
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
		page += 1;
		pageNum = page;
	}else if(pageNum == "-"){
		page = page-1;
		pageNum = page;
	}
	$.ajax({
		url:"/facilitator/page",
		type:"post",
		data:{
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
                        <span class="handle-btn"><i class="fa fa-circle-c fa-fw"></i>停用</span>
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
			for(var j = 0; j<(data.service_userList.length/2); j++){
				tat += `<span class="main-pagination-page" onclick= "pageOn(${j+1})">${j+1}</span>`
			}
				tat += `<span>下一页</span>
				<span>尾页</span>
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
			for(var j = 0; j<(data.service_userList.length/2); j++){
				tat += `<span class="main-pagination-page" onclick= "pageOn(${j+1})">${j+1}</span>`
			}
				tat += `<span>下一页</span>
				<span>尾页</span>
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
				<span>上一页</span>`
			for(var j = 0; j<(data.stateList.length/2); j++){
				tat += `<span class="main-pagination-page" onclick= "pageOn(${j+1})">${j+1}</span>`
			}
				tat += `<span>下一页</span>
				<span>尾页</span>
				`
			$(".pagez").append(tat);
			
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
			for(var i=0; i<data.stateList.length; i++){
				
				if(+data.stateList[i].state == 0){
					var txt = `<tr>
                        <td>${data.stateList[i].name}</td>
                        <td>${data.stateList[i].area}</td>
                        <td>${data.stateList[i].servicePh}</td>
                        <td>${data.stateList[i].adminIntroduction}</td>
                        
                        `;
					txt += `<td>
                        <span class="handle-btn"><i class="fa fa-edit fa-fw"></i>详情</span>
                        <span class="handle-btn open" onclick="open1('${data.stateList[i].id}')"><i class="fa fa-circle-c fa-fw"></i>启用</span>
                    </td>
                    </tr>`;
					
			
				} 
					$("tbody").append(txt);
			}
			$(".pagez").html("");
			var tat = ` <span>首页</span>
				<span>上一页</span>`
			for(var j = 0; j<(data.stateList.length/2); j++){
				tat += `<span class="main-pagination-page" onclick= "pageClose(${j+1})">${j+1}</span>`
			}
				tat += `<span>下一页</span>
				<span>尾页</span>
				`
			$(".pagez").append(tat);
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
                        <span class="handle-btn" onclick="open1(data.service_userList[i].id)"><i class="fa fa-circle-c fa-fw"></i>启用</span>
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
			for(var i=0; i<data.service_userList.length; i++){
				
				if(+data.service_userList[i].state == 1){
					txt += `<tr>
                        <td>${data.service_userList[i].name}</td>
                        <td>${data.service_userList[i].area}</td>
                        <td>${data.service_userList[i].servicePh}</td>
                        <td>${data.service_userList[i].adminIntroduction}</td>
                        <td>
                        <span class="handle-btn"><i class="fa fa-edit fa-fw"></i>详情</span>
                        <span class="handle-btn"><i class="fa fa-circle-c fa-fw"></i>停用</span>
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
