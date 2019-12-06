$(function(){
	var name = sessionStorage.getItem("name");
	var id = sessionStorage.getItem("id");
	$(".username").text(name);
	$("#aaa").attr("src","./headImg?id="+id);
	$("#abc").attr("src","./headImg?id="+id);
})

$(".user-arrow-down").on("click", function() {
	if ($(".dropdown").is(":hidden")) {
		$(".dropdown").show();
	} else {
		$(".dropdown").hide();
	}
})