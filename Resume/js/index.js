$(function(){
	function onresize(){
		//获取屏幕高宽
		var width=$(window).width();
		var height=$(window).height();
		$("body").width(width+"px");
		$("body").height(height+"px");
		$("#box").width(width+"px").height(height*5+"px");
		$("#box li").height(height+"px");
	}
	onresize();
	//浏览器窗口发生改变的时候
	window.onresize=onresize;
	var num=0;
	var boeal=false;
	//绑定滚动监听事件
	$(document).on("mousewheel DOMMouseScroll", function (e) {
    	var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
		    if (delta > 0) {
		        // 向上滚
		        
//		        $("#box").stop().animate({top:$(window).height()*num+"px"},500);
				move("up",num);
		    } else if (delta < 0) {
		        // 向下滚
		        
		        move("down");
//		        	boeal=true;
//			        if(boeal==true){
//			        	num<4?num++:num=4;
//			        	$("#box").stop().animate({top:"-"+$(window).height()*num+"px"},500);
//			        	boeal=false;
//			        }
		   }   
	});
	function move(direction){
		console.log($(this));
		 var $this = $(this);
	        timeoutId = $this.data('timeoutId');
		    if (timeoutId) {
		        clearTimeout(timeoutId);
		    }
		    $this.data('timeoutId', setTimeout(function() {
		        $this.removeData('timeoutId');
		        $this = null;
	        	if(direction=="down"){
	        		num<4?num++:num=4;
	        		$("#box").stop().animate({top:"-"+$(window).height()*num+"px"},400);
	        	}else{
	        		num<0?num--:num=0;
	        		$("#box").stop().animate({top:$(window).height()*num+"px"},500);
	        	}
		    }, 100));
		    return false;
	}
})

