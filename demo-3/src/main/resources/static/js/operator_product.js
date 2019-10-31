$(".user-arrow-down").on("click", function() {
	if ($(".dropdown").is(":hidden")) {
		$(".dropdown").show();
	} else {
		$(".dropdown").hide();
	}
})

$(function() {
//	location.href = "product"
		$.ajax({
			url:"/product/login",
			type:"get",
			success: function(data){
				console.log("成功")
				console.log(data);
				for(var i=0; i<data.service_productList.length; i++){
					var txt = `<tr>
						<td><input type="checkbox" class="checkbox"></td>
                        <td>${data.service_productList[i].serviceName}</td>
                        <td>${data.service_productList[i].serviceExplain}</td>
                        <td>¥${data.service_productList[i].servicePrice}元</td>
                        <td></td>
                        `;
					if(+data.service_productList[i].serviceState == 1){
						txt += `<td><span class="up-line-mark up-line-mark-red">在线</span></td>
							<td><span class="handle-btn" onclick="downLine(${data.service_productList[i].id})"><i class="fa fa-arrow-down fa-fw"></i>下线</span></td>`;
				
					} else{
						txt += `<td><span class="down-line-mark down-line-mark-orange">下线</span></td>`;
						txt += `<td>
							<span class="handle-btn"><i class="fa fa-edit fa-fw"></i>编辑</span>
							<span class="handle-btn" onclick="deletel(${data.service_productList[i].id})"><i class="fa fa-close fa-fw"></i>删除</span>
							<span class="handle-btn" onclick="upLine(${data.service_productList[i].id})"><i class="fa fa-arrow-up fa-fw"></i>上线</span>
							</td>`;
					}
					txt +=`</tr>`
				
						$("tbody").append(txt);
				}
				
			},
			error: function(){
				console.log("失败")
			}
		})
		
})

function downLine(id){
	location.href="/product/downline?id="+id;
}

function deletel(id){
	location.href="/product/deletel?id="+id;
}

function upLine(id){
	location.href="/product/upline?id="+id;
}