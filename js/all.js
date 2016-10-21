//底部按钮点击变样式
$(".bt_icon").each(function(i) {
        $(this).click(function(){
			$(this).addClass("on").siblings().removeClass("on");
		});
});

//alluser
function windows_size(top,bottom,inmain,marginBottom,inmain_h){
	var top_h=$(top).outerHeight();
	var bottom_h=$(bottom).outerHeight()+marginBottom;
	$(inmain).css({"margin-top":top_h+"px","margin-bottom":bottom_h+"px"});
	if(inmain_h==1){$(inmain).css({"height":$(window).height()-top_h-bottom_h+"px"});}
}

function inwidth(where){
	$(where).css("width",$(window).width()+"px");
	}
	function inheight(where){
	$(where).css("height",$(window).height()+"px");
}

function w_go(html){
	window.location.href=html;
}
//index
function indexjs(){
	//导航点击跳转
	$(".nav_li").each(function(i) {
		$(this).click(function(){
			var type=$(this).attr("go");
			$(".main_mk").addClass("yc");
			$(".main_mk[type='"+type+"']").removeClass("zoomOutLeft").removeClass("yc").addClass("slideInRight");
			$(this).addClass("on").siblings().removeClass("on");
		});
    });
	
	//更多栏目按钮点击
	$("#more_lan").click(function(){
		
		$(".lanmu").show(10,function(){
			windows_size(".lanmu .top",".lanmu .bottom",".lanmu .main",10,0);
			$(".lanmu").removeClass("yitop100");
			setTimeout(function(){$(".index").hide();},600);
		});	
	});
	//从更多栏目回到主页
	$("#toindex").click(function(){
		$(".index").show(10,function(){$(".lanmu").addClass("yitop100");});	
		setTimeout(function(){$(".lanmu").hide();},800);	
	});
	//滑动导航
    var top_nav = new Swiper('.top_nav', {
        slidesPerView:4,
        freeMode: true
    });
	//滑动大图
	var ad_img = new Swiper('.ad_img', {
		pagination: '.swiper-pagination',
        paginationClickable: true,
		autoplay:4000,
		autoplayDisableOnInteraction : false
    });	
}

//app
function appjs(){
		//分类转换
	$(".app_box_left_li").each(function(i) {
        $(this).click(function(){
			$(".app_list").hide();
			$(".app_list").removeClass("tada").find(".app_list_but").hide();
			if($(this).attr("type")=="chang"){
				$(".app_list[ischang='yes']").show();
				}
			$(this).addClass("on");
			$(this).siblings().removeClass("on");
			$(".app_list[type='"+$(this).attr("type")+"']").show();
		});
    });
	//点击管理按钮
	$(".app_manage").click(function(){
		var intype=$(".app_box_left_li.on").attr("type");
		if(intype=="chang"){
			$(".app_list[ischang='yes']").toggleClass("tada").find(".close_but").toggle();	
		}else{
			$(".app_list[type='"+intype+"']").toggleClass("tada").find(".add_but").toggle();	
		}
	});
	//点击xx关闭的时候
   $(".close_but").each(function(i) {
    $(this).click(function(){
		$(this).parent().attr("ischang","no");
		$(".app_list[ischang='no']").hide();
	});
	});
	//点击++添加的时候
	$(".add_but").each(function(i) {
		$(this).click(function(){
			$(this).parent().attr("ischang","yes");//修改自身属性
			$(".app_list").removeClass("tada").find(".app_list_but").hide();//去掉右上角按钮
			$(".app_box_left_li[type='chang']").addClass("on");//转换分类
			$(".app_box_left_li[type='chang']").siblings().removeClass("on");
			$(".app_list").hide();//隐藏所有app
			$(".app_list[ischang='yes']").show();//是常用的才显示
			$(this).parent().hide().fadeIn(800);//自身有效果显示
		});
	});
}

function contsjs(){
	$(".list_icon").click(function(){
			$(".main,.top,.bottom").toggleClass("left26");
			$(".left_type_box").toggleClass("left0");
	});	
}