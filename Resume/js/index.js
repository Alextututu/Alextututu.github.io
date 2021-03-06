$(function(){
	var arrnum=0;
	var arr=[
		{
			name:"音乐播放器",
			texts:"闲假时的小页面，采用H5的audio标签，并利用其属性特点实现歌词同步，进度条同步，播放时间同步，音量控制，歌曲切换，随机播放等等基础功能，页面响应式设定范围为PC",
			hrefs:"https://alextututu.github.io/Music/index.html"
		},   
		{
			name:"购物商城",
			texts:"单页式，初版为一元投资，后改为普通移动端购物商城，包括登陆、注册、商品详情，商品加载，各组件的数据渲染及处理，使用React+AmazeUI实现该项目整体需求",
			hrefs:"https://github.com/Alextututu/Alextututu.github.io/tree/master/good-lock/src"
		},
		{
			name:"个人简历",
			texts:"	本人的电子版简历，使用单页全屏滚动布局，尽可能响应PC至移动端全范围，mousewheel事件做到兼容firefox、chrome、IE；移动端采用touchstart事件响应浏览者的触屏操作，动画效果采用CSS3搭配jQuery实现",
			hrefs:"https://alextututu.github.io/Resume/index.html"
		}
	]
	var hg=0;
	function onresize(){
		//获取屏幕高宽 
		var width=$(window).width();
		var height=$(window).height();
		$("body").width(width+"px");
		$("body").height(height+"px");
		$("#box").width(width+"px").height(height*6+"px");
		$("#box .libox").height(height+"px");
		$(".my_2_top_title").css("line-height",$(".my_2_top_title").height()+"px");
		$("#box").css("top","-"+$(".my-1").height()*num+"px");
		$(".my_4_title").css("line-height",$(".my_4_title").height()+"px");
		if($(window).width()<700){
			$(".my_4_box_li").removeClass("my_box");
		}else{
			$(".my_4_box_li").addClass("my_box");
		}
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
	    //上滑
	    if ( Y < 0 ) {
	     move("down");
	    }
	    //下滑
	    else if ( Y > 0 ) {
	    	move("up");
	    }else{
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
	    	}else if(e.target.getAttribute('class')=="my_4_btn_right"){
    			rights();
    		}else if(e.target.getAttribute('class')=="my_4_btn_left"){
    			lefts();
    		}else if(e.target.tagName=="A"){
    			window.location.href=e.target.getAttribute("href");
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
	        		num<4?num++:num=4;
	        		$("#box").stop().animate({top:"-"+$(window).height()*num+"px"},400);
	        		if(num==4){
	        			$(".my_6_box p").eq(0).addClass("six_1");
		        		$(".my_6_box p").eq(1).addClass("six_2");
		        		$(".my_6_box p").eq(2).addClass("six_3");
		        		$(".my_6_box p").eq(3).addClass("six_4");
		        		$(".my_6_box p").eq(4).addClass("six_5");
		        		$(".my_6_box a").addClass("heights");
	        		}
	        	}else if(direction=="up"){
	        		num--;
	        		if(num<0){
	        			num=0;
	        		}
	        		$("#box").stop().animate({top:"-"+$(window).height()*num+"px"},400);
	        	}
	        	if($(window).width()>700){
	        		if(num==3){
		        		$(".my_4_box_li").eq(0).addClass("trasition0");
		        		$(".my_4_box_li").eq(1).addClass("trasition1");
		        		$(".my_4_box_li").eq(2).addClass("trasition2");
		        	}else{
		        		$(".my_4_box_li").eq(0).removeClass("trasition0");
		        		$(".my_4_box_li").eq(1).removeClass("trasition1");
		        		$(".my_4_box_li").eq(2).removeClass("trasition2");
		        	}
	        	}
		    }, 400));
		    return false;
	}
	//点击波纹效果class
	$(".my_2_icon").click(function(){
		$(this).addClass("waves");
		var this_=$(this);
		var time=setInterval(function(){
			this_.removeClass("waves");
			clearInterval(time);
		},1300);
	});
	//点击切换
	$(".my_4_btn_right").click(function(){
		rights();
	});
	$(".my_4_btn_left").click(function(){
		lefts();
	});
	
	//上一个函数
	function lefts(){
		$(".my_4_block").animate({
                'height': '0',
                'top': '50%'
            }, 140,function(){
	            	var timer=setInterval(function(){
					$(".my_4_block p").text(arr[arrnum].name);
					$(".my_4_block span").text(arr[arrnum].texts);
					$(".my_4_block a").attr("href",arr[arrnum].hrefs);
					clearInterval(timer);
				},100)
            }).animate({
            	'height': '100%',
                'top': '0'
            },140)
            arrnum--;
            if(arrnum<0){
            	arrnum=2;
            }
			
	}
	//下一个函数
	function rights(){
		$(".my_4_block").animate({
                'height': '0',
                'top': '50%'
            }, 140,function(){
            		var timer=setInterval(function(){
					$(".my_4_block p").text(arr[arrnum].name);
					$(".my_4_block span").text(arr[arrnum].texts);
					$(".my_4_block a").attr("href",arr[arrnum].hrefs);
					clearInterval(timer);
				},100)
            }).animate({
            	'height': '100%',
                'top': '0'
            },140)
            arrnum++;
            if(arrnum>2){
            	arrnum=0;
            }
	}
	
	//监测设备
	var system = {
        win: false,
        mac: false,
        xll: false,
        ipad:false
    };

    //检测平台
    var p = navigator.platform;

    system.win = p.indexOf("Win") == 0;
    system.mac = p.indexOf("Mac") == 0;
    system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
    system.ipad = (navigator.userAgent.match(/iPad/i) != null)?true:false;

    if (system.win || system.mac || system.xll ||system.ipad) {
		$(".myqq").attr("href","tencent://message/?uin=969289239&Site=http://vps.shuidazhe.com&Menu=yes");
    } else {
		$(".myqq").attr("href","mqqwpa://im/chat?chat_type=wpa&uin=969289239&version=1&src_type=web&web_src=oicqzone.com");
    }

});

