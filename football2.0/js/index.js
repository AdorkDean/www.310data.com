define(function(require, exports, module) {
	var $ = require("jquery");
	var g = require("getData");
	var ac = require("action");
	function init() {
		
		//头部固定
		ac.topFix();
   		//调取直播数据
   		g.get_liveing({},function(data){
   			//console.log(data);
   			g.getLive(data);
   		});
   		//调取轮播热门联赛数据
   		g.get_hotLea({},function(data){
   			g.getHot(data);
   		});
   		//获取足球指数联赛id
   		g.get_exponent({},function(data){
   			//调取足球指数数据 
	   		g.get_exp(data)
	   		var mId = $(".one_id").attr("data_id");
   			//获取第一场比赛足球指数
		   		g.get_index({matchId:mId},function(data){
		   			//调取足球指数数据 
			   		g.get_ex(data,0)
		   		});
   		});
   		//点击热门比赛，跳转页面
   		ac.click_hot();
   		//获取开奖大全里面双色球的数据
   		var lotId = 001;
   		g.get_lottery({lotId : lotId},function(data){
   			g.get_l(data);
   		})
   		//获取开奖大全里面大乐透的数据
   		var lot = 113;
   		g.get_biglotto({lotId:lot},function(data){
   			//console.log(data);
   			g.get_big(data);
   		})
   		ac.clickBot();
   		g.click_cli();
   		//点击足球指数，跳转详情
   		ac.clear_caches();
   		//点击头部选项卡实现清除缓存
   		ac.clear_caches();
	}
	return {
		init: init
	}
})