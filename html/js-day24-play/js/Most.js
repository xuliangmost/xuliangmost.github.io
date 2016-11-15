


			// ajax通过JSON获取
var ajax={
	getajaxJSON:function(url,Esuccess,Error){
		
		
//		var str="("+data+")";
//		var obj=eval(str);		//JSON.parse(xhr.responseText);第二种写法


		var xhr=new XMLHttpRequest();
		xhr.open("GET",url,true);
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4){
				if(xhr.status==200){
					var arrobject=JSON.parse(xhr.responseText);
					Esuccess(arrobject);
				}else{
					Error();						
				}
			}
		}
		xhr.send();
		
	},
	
	
	// ajax通过text获取
	getajax:function(url,Esuccess,Error){
		var xhr=new XMLHttpRequest();
		xhr.open("GET",url,true);
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4){
				if(xhr.status==200){
					var arrobject=xhr.responseText;
					Esuccess(arrobject);
				}else{
					Error();
				}
			}								
		}
		xhr.send();
	},
	
	
	
	
	// ajax通过post获取
	postajax:function(url,Esuccess,Error,data){
		var xhr=new XMLHttpRequest();
		xhr.open("POST",url,true);
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4){
				if(xhr.status==200){
					var arrobject=xhr.responseText;
					Esuccess(arrobject);
				}else{
					Error();					
				}
			}
		}
		xhr.send(data);
	}
}

	//返回cookie值
var shopping={
	getCookie:function(name){
		var result="";
		var strDivposition=document.cookie;
		var arrstr=strDivposition.split("; ");
		for(var i=0;i<arrstr.length;i++){
			var arrposition=arrstr[i].split("=");
			if(arrposition[0]==name){
				name=arrposition[1];
				result=name;
			}
		}	return decodeURIComponent(result);		
	},		
	
	
	
	//添加cookie值
	addCookie:function(name,value,days){
		var date=new Date();
		date.setDate(date.getDate()+days)
		document.cookie=name+"="+encodeURIComponent(value)+";expires="+date;
		
	},
	
	
	
	//删除cookie值
	deleteCookie:function(name){
		var date=new Date();
		date.setDate(date.getDate()-1)
		document.cookie=name+"="+""+";expires="+date;
		
	}
}


// 组织冒泡
var MP={
	stopPropagation: function(e){
		if(e.stopPropagation){
			e.stopPropagation();
		}else{
			e.cancelBubble=true;
		}
	}	
}



// 获取非内联样式
var ys={
	getStyle:function(obj, attr) {
	//obj==元素名称eg：div
	//attr：属性名称
        if (obj.currentStyle) {   //ie
            return obj.currentStyle[attr];
        } else {
            return window.getComputedStyle(obj, false)[attr];  //非ie
        }
    }
	
}


//跟数字有关的变化框架
var yd={
	move:function(obj, json, fn) {
    clearInterval(obj.timer);   //先清除之前的定时器。分对象的。只关注当前对象是否有定时器。
    obj.timer = setInterval(function() {  //obj 对象；obj.timer 在对象上创建了一个动态属性。
        var isClear=true;//默认是true 是我最初目的，清理定时器
        /*var countCompelte=0;
         var countTotal=0;*/
        for (attr in json) {
            //countTotal++;
            //获取当前属性值  //兼容
            if (attr == 'opacity') {
                var iCur = Math.round(parseFloat(ys.getStyle(obj, attr)) * 100);
            } else {
                var iCur = Math.round(parseFloat(ys.getStyle(obj, attr)));
            }
            if(!iCur){
                iCur=0;
            }
            //document.title = iCur;
            //计算速度
            var iSpeed = (json[attr] - iCur) / 10;
            iSpeed > 0 ? iSpeed = Math.ceil(iSpeed) : iSpeed = Math.floor(iSpeed);
            //iSpeed>0?iSpeed=Math.ceil(iSpeed):iSpeed=Math.floor(iSpeed);
            //判断停止
            if (iCur == json[attr]) { //当前属性等于 目标值，运动可以结束。
                //currentCount++;
                /*clearInterval(obj.timer); //清理当前对象下面的定时器
                 if (fn) {//如果fn有的话，为真。 //当完成运动的时候，如果有回调函数，则执行回调函数
                 fn();
                 }*/
                //count++;
            } else { //兼容
                isClear=false;// 有运动未完成。 变更标识isClear ，不能清理。
                if (attr == 'opacity') {
                    obj.style.filter = 'alpha(opacity:' + parseInt(iCur + iSpeed) + ')';
                    obj.style.opacity = (iCur + iSpeed) / 100;
                } else {
                    obj.style[attr] = (iCur + iSpeed) + 'px';
                }
            }
        }

        /*if(countCompelte==countTotal){
         //也就表示 所有运动结束。
         clearInterval(obj.timer); //清理当前对象下面的定时器
         if (fn) {//如果fn有的话，为真。 //当完成运动的时候，如果有回调函数，则执行回调函数
         fn();
         }
         }*/
        if(isClear){ //如果当前达到目标值得 个数（currentCount）；与所有属性的个数（totalCount）相等；
            //也就表示 所有运动结束。
            clearInterval(obj.timer); //清理当前对象下面的定时器
            if (fn) {//如果fn有的话，为真。 //当完成运动的时候，如果有回调函数，则执行回调函数
                fn();
            }
        }
    }, 30);
}
//原理，每次执行一轮属性
}

var detail={
	getAll:function(obj){
				var i;
				var content = "";
				for  (i in obj){  //把OBJ里面的  属性  每次赋值给i
					if(typeof obj[i] == "object"){		//如果obj里面的第i个属性的类型是个对象
						content = content + getAll(obj[i]) + "\n";		//就再调用一下本身
					}else{
						content = content + obj[i] + "\n";			//不是对象就直接加
					}
				}
				return content;
			}
}

 