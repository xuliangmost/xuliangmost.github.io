

if($.cookie("flag")){
	checkCookie();
}else{
	$("#ul-mid").css('display','block');
	$("#ul-l-m").css('display','none');
}
var myId;
$("#ul-right li").eq(2).hover(function () {

	$("#gg").slideDown("fast");
	$(this).css({
		background:"white",
		border:"1px solid #dfdedf",
		borderBottom:0
	})
},function () {
	$("#gg").css("display","none");
	$(this).css({
		background:"#f3f3f5",
		border:"1px solid #f3f3f5",
		borderBottom:0
	})
});

$("#ul-right li").eq(3).hover(function () {
	$("#gd").slideDown("fast").css({background:"white"});
	$(this).css({
		background:"white",
		border:"1px solid #dfdedf",
		borderBottom:0
	})
},function () {
	$("#gd").css("display","none");
	$(this).css({
		background:"#f3f3f5",
		border:"1px solid #f3f3f5",
		borderBottom:0
	})
});

$("#yg").hover(function () {
	$(this).stop().css({
		background:"white",
		border:"1px solid #dfdedf",
		borderBottom:0

	}).animate({
		height:"64px"
	},300)
},function () {
	$(this).stop().css({
		background:"#f3f3f5",
		border:"1px solid #f3f3f5",
		borderBottom:0
	}).animate({
		height:"28px"
	},200)
});


//上面是右边的
$("#ul-left li").eq(1).hover(function () {
	// alert(1)
	$(this).children().css("font-size","12px").html("Seoul Station");
},function () {
	$(this).children().css("font-size","1vw").html("首尔站");
});




$("#ul-left li").eq(2).hover(function () {
	$("#Code").slideDown("fast");
	$(this).css({
		background:"white",
		border:"1px solid #dfdedf",
		borderBottom:0
	})
},function () {
	$("#Code").css("display","none");
	$(this).css({
		background:"#f3f3f5",
		border:"1px solid #f3f3f5",
		borderBottom:0
	})
});



$("#top2-right-shop").hover(function () {
	$(this).css("borderBottom",0);
	$("#top2-right-shop2").slideDown("fast");
},function () {
	$(this).css("borderBottom","1px solid #d1d3d4");
	$("#top2-right-shop2").css("display","none");
});

$("#signOut").click(function () {
	// $.removeCookie("flag");
	$.cookie("flag","1",{expires:-1,path:"/"});
	window.location.reload();

});

function checkCookie() {
	if($.cookie("user")){
		var oBject=JSON.parse($.cookie("user"));
		var arr=[];
		$.each(oBject,function (key) {
			if(key!="index"){
				arr.push(key);
			}
		});
		for(var i=0;i<arr.length-1;i++){
			for(var k=0;k<arr.length-1;k++){
				if(oBject[arr[i]]<oBject[arr[i+1]]){
					var temp=arr[i];
					arr[i]=arr[i+1];
					arr[i+1]=temp;
				}
			}
		}
		$("#uName").text(arr[0]);
		myId=arr[0];
		loadList(arr[0]);
		$("#ul-mid").css('display','none');
	}else{
		$("#ul-mid").css('display','block');
		$("#ul-l-m").css('display','none');
	}
}

//加载购物车
function loadList(id) {
	var url="http://qxw1152090270.my3w.com/Product/GetProductById_get";
	var setting={
		dataType:"jsonp",
		data:{
			Id:id,
			type:"Product"
		},
		success:function (data) {
			if(!data){
				$("#productList").html("<div style='width: 100%;height: 300px;color: red;text-align: center;line-height: 300px;font-size: 20px;'>你的购物车空啦!快滚去买东西!!</div>");
			}else{
				var list1=JSON.parse(data.Data);
				var obj={list:list1};
				var html1=template("list",obj);
				$("#productList").html(html1);



				$(".productList-in1").click(function () {
					var Index=$(this).parent().parent().index();
					$(this).next().val(parseInt($(this).next().val())-1);
					if($(this).next().val()<=0){
						deleteLine(Index);
					}else{
						deleteoneProduct(Index);
					}
				});

				$(".productList-in3").click(function () {
					var Index=$(this).parent().parent().index();
					addoneProduct(Index)
				});



				$(".deleteLine").click(function () {
					var Index=$(this).parent().parent().index();
						deleteLine(Index);
				});

				//删除按钮
			}
		}
	};
	$.ajax(url,setting)
}

function deleteoneProduct(index) {
	var url="http://qxw1152090270.my3w.com/Product/GetProductById_get";
	var setting={
		dataType:"jsonp",
		data:{
			Id:myId,
			type:"Product"
		},
		success:function (data) {
			var arrProduct=JSON.parse(data.Data);
			arrProduct[index].count=parseInt(arrProduct[index].count)-1;
			upDate(arrProduct);
		}

	};
	$.ajax(url,setting)
}


function addoneProduct(index) {
	var url="http://qxw1152090270.my3w.com/Product/GetProductById_get";
	var setting={
		dataType:"jsonp",
		data:{
			Id:myId,
			type:"Product"
		},
		success:function (data) {
			var arrProduct=JSON.parse(data.Data);
			arrProduct[index].count=parseInt(arrProduct[index].count)+1;
			upDate(arrProduct);
		}

	};
	$.ajax(url,setting)
}



function deleteLine(index) {
	var url="http://qxw1152090270.my3w.com/Product/GetProductById_get";
	var setting={
		dataType:"jsonp",
		data:{
			Id:myId,
			type:"Product"
		},
		success:function (data) {

			var arrProduct=JSON.parse(data.Data);
			// console.log(data.Data);
			arrProduct.splice(index,1);
			upDate(arrProduct);


		}

	};
	$.ajax(url,setting)
}



function upDate(item) {
	var url="http://qxw1152090270.my3w.com/Product/CreateUpdateProduct_get";
	var setting={
		type:"get",
		dataType:"jsonp",
		data:{
			Id:myId,
			datajson:JSON.stringify(item),
			type:"Product"
		},
		success:function (data) {

		},
		error:function () {
			// alert("加入购物车失败!")
		},
		complete:function () {
			loadList(myId);
		}
	};
	$.ajax(url,setting)
}





//清空购物车
$(".deleteCart").click(function () {
	var url="http://qxw1152090270.my3w.com/Product/DeleteProductById_get";
	var setting={
		dataType:"jsonp",
		data:{
			id:myId,
			type:"Product"
		},
		success:function () {
			alert("清空了");
			loadList(myId);
		},
		error:function () {
			alert("清空失败")
		}
	};
		$.ajax(url,setting)
});





