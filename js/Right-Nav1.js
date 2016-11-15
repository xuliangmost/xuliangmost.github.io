var flag=true;
$("#rightNav-left .bibo").click(function () {
	if(flag){
		$("#rightNav").stop().animate({
			right:0
		},400)
	}else{
		$("#rightNav").stop().animate({
			right:"-270px"
		},400)
	}
	flag=!flag;
});
var tar1={
	scrollTop:0
};
$("#rightNav-left .biubiubiu1").click(function () {
	$("body,html").animate(tar1,4000,"easeOutBounce")
});



var Height1=parseInt($("body,html").css("height"))-200;
$("#rightNav-left").css({
	top:Height1
});

$("#carMain-top").children().last().click(function () {
	$("#rightNav").stop().animate({
		right:"-270px"
	},400);
	flag=true;
});

if($.cookie("flag")){
	$("#signtest").css('display','none');
}else{
	$("#signtest").css('display','block');
}




