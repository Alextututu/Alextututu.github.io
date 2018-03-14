$(function(){
	function onresize(){
		//获取屏幕高宽
		var width=$(window).width();
		var height=$(window).height();
		$("body").width(width+"px");
		$("body").height(height+"px");
		$("#box").width(width+"px").height(height*5+"px");
		$("#box .libox").height(height+"px");
		$(".my_2_top_title").css("line-height",$(".my_2_top_title").height()+"px");
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
	     move("down");
	    }
	    //右滑
	    else if ( X < 0 ) {
	    	move("up");
	    }
	    //下滑
	    else if ( Y > 0) {
	    	move("up");
	    }
	    //上滑
	    else if ( Y < 0 ) {
	    	move("down"); 
	    }else{
	    	console.log(e.target);
	    	if(e.target.getAttribute('class')=="my_2_icon"||e.target.tagName.toLocaleLowerCase()=="i"){
	    		if(e.target.tagName=="DIV"){
	    			$(e.target).addClass("waves");
	    			var time=setInterval(function(){
						$(e.target).removeClass("waves");
						clearInterval(time);
					},1300);
	    		}else if(e.target.tagName.toLocaleLowerCase()=="i"){
	    			$(e.target).parent().addClass("waves");
	    			var time=setInterval(function(){
						$(e.target).parent().removeClass("waves");
						clearInterval(time);
					},1300);
	    		}
	    	}
	    }
	});
	//移动方法
	function move(direction){
		 var $this = $(this);
	        timeoutId = $this.data('timeoutId');
		    if (timeoutId) {
		        clearTimeout(timeoutId);
		    }
		    $this.data('timeoutId', setTimeout(function() {
		        $this.removeData('timeoutId');
		        $this = null;
	        	if(direction=="down"){
	        		num<5?num++:num=5;
	        		$("#box").stop().animate({top:"-"+$(window).height()*num+"px"},400);
	        	}else if(direction=="up"){
	        		num--;
	        		if(num<0){
	        			num=0;
	        		}
	        		$("#box").stop().animate({top:"-"+$(window).height()*num+"px"},400);
	        	}
		    }, 400));
		    return false;
	}
	
	$(".my_2_icon").click(function(){
		$(this).addClass("waves");
		var this_=$(this);
		var time=setInterval(function(){
			this_.removeClass("waves");
			clearInterval(time);
		},1300);
	})
})

