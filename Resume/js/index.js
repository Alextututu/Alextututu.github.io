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
				move("up");
		    } else if (delta < 0) {
		        // 向下滚
		        move("down");
		   }   
	});
	//当手指触摸到屏幕的时候触发
	$("body").on("touchstart", function(e) {
    // 判断默认行为是否可以被禁用
    if (e.cancelable) {
        // 判断默认行为是否已经被禁用
        if (!e.defaultPrevented) {
            e.preventDefault();
        }
    }   
    startX = e.originalEvent.changedTouches[0].pageX,
    startY = e.originalEvent.changedTouches[0].pageY;
});
$("body").on("touchend", function(e) {         
    // 判断默认行为是否可以被禁用
    if (e.cancelable) {
        // 判断默认行为是否已经被禁用
        if (!e.defaultPrevented) {
            e.preventDefault();
        }
    }               
    moveEndX = e.originalEvent.changedTouches[0].pageX,
    moveEndY = e.originalEvent.changedTouches[0].pageY,
    X = moveEndX - startX,
    Y = moveEndY - startY;
    //左滑
    if ( X > 0 ) {
     move("up");
    }
    //右滑
    else if ( X < 0 ) {
        move("down");
    }
    //下滑
    else if ( Y > 0) {
    	move("up");
    }
    //上滑
    else if ( Y < 0 ) {
    	move("down");  
    }
    //单击
    else{
        alert('单击');    
    }
});
	//移动方法
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
	        		$("#box").stop().animate({top:$(window).height()*num+"px"},400);
	        	}
		    }, 400));
		    return false;
	}
})

