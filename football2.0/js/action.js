define(function(require, exports, module) {
	var $ = require("jquery");
	
	//头部固定
	function topFix(){
		var offs=$('#fixed').offset();
		scrollLis();
		function scrollLis(){
			var toTop = offs.top-$(window).scrollTop();
			if(toTop==0||toTop<0){
				if($("#insert").length == 0){$(".hotmatch-box").before("<section id='insert' style='width:100%;height:6.2rem!important;'></section>")}
				if(!$('#fixed').hasClass('margeheight'))$('#fixed').addClass('margeheight');
			}else{
				if($("#insert").length == 1){$("#insert").remove()}
				$('#fixed').removeClass('margeheight');
			}
		}
	
		
			$(window).scroll(function(){
				scrollLis();
			});
	}
	//直播滚动功能
	function roll(){
		var speed=100
		var tabLeft=document.getElementById("demoLeft");
		var tab1=document.getElementById("demo1");
		var tab2=document.getElementById("demo2");
		tab2.innerHTML=tab1.innerHTML;
		
		function Marquee1(){
		if(tabLeft.scrollLeft>=tab2.offsetWidth)
		tabLeft.scrollLeft-=tab1.offsetWidth
		else{
		tabLeft.scrollLeft+=3;
		}
		}
		var MyMar=setInterval(Marquee1,speed);
		
		
	}
	//热门比赛轮播图功能
	function slideshow(){
		$(function(){
			var mySwiper = new Swiper ('.swiper-container', {
				
					direction:"horizontal",
					loop: true,
					autoplay : 100000,
					pagination:".swiper-pagination",
					observer:true,
					observerParents:true
			})  
			mySwiper.updateSlidesSize();
			mySwiper.updatePagination();
		})
	}
	//足球指数点击，出现下拉
	function clickBot(){
		
		var a = null;
		$('.exp-box-one .exp-one-tabtop').attr("data-toggle","0");
		$('.exponent-box div:eq(0)').find('.exp-one-tabtop').attr("data-toggle","1");
			$(".exp-box-one").on("click",".exp-one-tabtop",function(){
				
				$(this).next('div').toggle();
				
				if($(this).attr("data-toggle") == 0){$(this).find('#expup').removeClass("b").addClass("e")}
				if($(this).attr("data-toggle") == 1){$(this).find('#expup').removeClass("e").addClass('b')}
//				if(a == null){
//					if($(this).attr("data-toggle") == 1){$(this).find('#expup').addClass('b');$(this).find('#expup').removeClass('a')}
//					a = 1;
//				}
//				else if(a != null){
//					if($(this).attr("data-toggle") == 1){$(this).find('#expup').addClass('a');$(this).find('#expup').removeClass('b')}
//					 a = null;
//				}
//			
			
			})
		
		
	}
	//点击热门比赛单场比赛，跳转阵容-直播页面
	function click_hot(){
		
			$(".swiper-slide").delegate("a","click",function(){	
				//console.log(666);
					//记录所选球赛id
					
					
					//$(this).find('a').attr("name","666");
					var mid=$(this).attr("data-mid");
					
					//记录所选球赛日期
					var ri_qi=$(this).attr("data-ri_qi");
					//console.log(ri_qi);
					var shijian=$(this).attr("data-shijian");
					var zhu=$(this).attr("data-zhu");
					var ke=$(this).attr("data-ke");
					//console.log(gid);
					
					var state = $(this).attr("data-state");
					var sai = $(this).attr("data-sai");
					var as = $(this).attr("data-as");
					var hs = $(this).attr("data-hs");
					var bas = $(this).attr("data-bas");
					var bhs = $(this).attr("data-bhs");
					var state = $(this).attr("data-state");
					var onIng = $(this).attr("data-on");
					var pl = $(this).attr("data-pl");
					if(!$(this).text()){
						
					}else{
						location.href = "http://football1.310data.com/living.html?matchId="+mid+"&data_time="+ri_qi+"&time="+shijian+"&zhu="+zhu+"&ke="+ke+"&sai="+sai+"&hs="+hs+"&as="+as+"&bhs="+bhs+"&bas="+bas+"&onIng="+onIng+"&pl="+pl;				
					}
							
			})
		
	}
	//单击足球指数单场赛事，跳转指数详情页。
	function click_zhi(){
		
		$(".exponent-box").on("click","#exptabbox",function(){	
			console.log(666);
				
				
				//记录所选择的公司
				var gid=$(this).attr("data-gid");
				//console.log(gid);
				//记录所选球赛日期
				var ri_qi=$(this).attr("data-ri_qi");
				//console.log(ri_qi);
				var shi_time=$(this).attr("data-shi_time");
				var zhu=$(this).attr("data-zhu");
				var ke=$(this).attr("data-ke");
				var sai = $(this).attr("data-sai");
				var mid = $(this).attr("data_mid");
				var state = $(this).attr("data-state");
				var onIng = $(this).attr("data-on");
				//console.log(mid);
				location.href = "http://football2.310data.com/odds.html?tdm=沙巴&win=亚盘&ri_qi="+ri_qi+'&shi_time='+shi_time+'&zhu='+zhu+'&ke='+ke+'&sai='+sai+'&mid='+mid+'&gt='+2+'&state='+state+'&onIng='+onIng;
			
				
		})
	}
	//点击头部选项卡，实现清除缓存
	function clear_caches(){
		$(".acor-nav-li").on("click","a",function(){
			localStorage.clear();
		})
	}
	return {
		topFix : topFix,
		clickBot : clickBot,
		roll : roll,
		slideshow : slideshow,
		click_hot : click_hot,
		click_zhi : click_zhi,
		clear_caches : clear_caches
		
	}
})