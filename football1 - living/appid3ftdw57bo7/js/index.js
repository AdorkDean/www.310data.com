define(function(require, exports, module) {
	var $ = require("jquery");
	var e = require("event");
	var a = require("getData");
	var href = a.href();
	function init() {
		
		a.loader("show",$(".box-one"));
		//index主页点击事件
		e.in_select();
		//点击返回按钮，返回到总主页
		if(!window.localStorage.leagues && !window.localStorage.matchId && !window.localStorage.tmd){
			
			var	gameType = 2;
			var tdm = 'lj';
			var playStat = 1;
			//console.log(666);
			//获取全部联赛id		
			a.getSet({playStat:playStat}, function(data) {
				
				//获取热门联赛ID
				var arr = [];
				for(var i = 0; i < data.length; i++) {
					if(data[i].matchCount != 0){
						arr.push(data[i].id);
					}		
				}
				var leagues = arr.join();
				//console.log(leagues);
				init_data(gameType,tdm,playStat,Time,leagues)
			});
		
		
		}else{
			
			var tdm = localStorage.getItem('tdm');
			var gameType = localStorage.getItem('gameType');
			var playStat = localStorage.getItem('playStat');
			var leagues = localStorage.getItem('leagues');
			
			var Time = localStorage.getItem('Time');
			var matchId = localStorage.getItem('matchId');
			console.log(leagues);
			//localStorage.clear();
			if(playStat == 1){
				
				var playStat = 1;
				a.get_instant({leagues:leagues,gameType:gameType,tdm:tdm,playStat:playStat,oTime:Time},function(data){
					
					for(var i = 0;i < data.length;i++){
						
						if(data[i].id == matchId){
							//console.log(data[i].playstateId);
							//console.log(playStat);
							if(data[i].playstateId == 0&&playStat==1){
								var playstateId = data[i].playstateId;
								var oTime = '';
								
								$(".footb-tabs li:eq(0)").addClass("footb-on").siblings().removeClass("footb-on");$("#index_clear .footb-box:eq(0)").show().siblings().hide(),$("#header-fix").show();
								init_data(gameType,tdm,playStat,Time,leagues,playstateId);
							}
							if(data[i].playstateId == 3&&playStat==1){
								
								var playstateId = data[i].playstateId;
								var oTime = '';
								$(".footb-tabs li:eq(0)").addClass("footb-on").siblings().removeClass("footb-on");$("#index_clear .footb-box:eq(0)").show().siblings().hide(),$("#header-fix").show();
								init_data(gameType,tdm,playStat,Time,leagues,playstateId);
							}
						}else{
							ending();
						}
					}
				})
			}
//			if(playStat == 1){var oTime = '';$(".footb-tabs li:eq(0)").addClass("footb-on").siblings().removeClass("footb-on");$("#index_clear .footb-box:eq(0)").show().siblings().hide(),$("#header-fix").show();}
			if(playStat == 2){var oTime = Time;$(".footb-tabs li:eq(1)").addClass("footb-on").siblings().removeClass("footb-on");$("#index_clear .footb-box:eq(1)").show().siblings().hide(),$("#header-fix").show();}
			if(playStat == 3){var oTime = Time;$(".footb-tabs li:eq(2)").addClass("footb-on").siblings().removeClass("footb-on");$("#index_clear .footb-box:eq(2)").show().siblings().hide(),$("#header-fix").show();}
			//初始化设置里面样式
			if(gameType == 1){$('.datatype-box li:eq(1)').addClass("dat-hove").siblings().removeClass("dat-hove");$('.datatype-box li:eq(1)').attr("data-type","1").siblings().attr("data-type","0")}
			if(gameType == 2){$('.datatype-box li:eq(0)').addClass("dat-hove").siblings().removeClass("dat-hove");$('.datatype-box li:eq(1)').attr("data-type","1").siblings().attr("data-type","0")}
			if(gameType == 3){$('.datatype-box li:eq(2)').addClass("dat-hove").siblings().removeClass("dat-hove");$('.datatype-box li:eq(1)').attr("data-type","1").siblings().attr("data-type","0")}
			//初始化公司样式
			if($(".filter-box li:eq(0)").attr("data-tdm")==tdm){
					$(".filter-box li:eq(0)").addClass("fil-hove").attr("data-id","1");
					//console.log(0);
				}else{$(".filter-box li:eq(0)").removeClass("fil-hove").attr("data-id","0");}
				if($(".filter-box li:eq(1)").attr("data-tdm")==tdm){
					$(".filter-box li:eq(1)").addClass("fil-hove").attr("data-id","1");
					//console.log(1);
				}if($(".filter-box li:eq(2)").attr("data-tdm")==tdm){
					$(".filter-box li:eq(2)").addClass("fil-hove").attr("data-id","1");
					//console.log(2);
				}if($(".filter-box li:eq(3)").attr("data-tdm")==tdm){
					$(".filter-box li:eq(3)").addClass("fil-hove").attr("data-id","1");
					//console.log(3);
				}if($(".filter-box li:eq(4)").attr("data-tdm")==tdm){
					$(".filter-box li:eq(4)").addClass("fil-hove").attr("data-id","1");
					//console.log(4);
				}if($(".filter-box li:eq(5)").attr("data-tdm")==tdm){
					$(".filter-box li:eq(5)").addClass("fil-hove").attr("data-id","1");
					//console.log(5);
				}
			init_data(gameType,tdm,playStat,Time,leagues);
		}
			function ending(){
				a.get_instant({leagues:leagues,gameType:gameType,tdm:tdm,playStat:'2',oTime:Time},function(data){
					console.log(leagues);
					for(var i = 0;i < data.length;i++){
						
						if(data[i].id == matchId){
							//console.log(data[i].playstateId);
							//console.log(playStat);
							if(data[i].playstateId == 1&&playStat==2){
								var playstateId = data[i].playstateId;
								var oTime = '';
								
								$(".footb-tabs li:eq(1)").addClass("footb-on").siblings().removeClass("footb-on");$("#index_clear .footb-box:eq(1)").show().siblings().hide(),$("#header-fix").show();
								init_data(gameType,tdm,playStat,Time,leagues,playstateId);
							}
							
						}else{
							
						}
					}
				})
			}	
		
		function init_data(gameType,tdm,playStat,Time,leagues,playstateId){	
			click_wei();
			click_circle();
			click_end();
			a.get_instant({playstateId:playstateId,leagues:leagues,gameType:gameType,tdm:tdm,playStat:playStat,oTime:Time},function(data){
				//console.log(data);
				if(data.length === 0) {
				
					if(playStat == 1){
						$(".box-one").empty();return $(".box-one").html(a.kong_zhi("<img src='img/kong.png'>","暂无数据"));
					}if(playStat == 2){
						$(".box-two").empty();return $(".box-two").html(a.kong_zhi("<img src='img/kong.png'>","暂无数据"));
					}
					if(playStat == 3){
						$(".box-three").empty();return $(".box-three").html(a.kong_zhi("<img src='img/kong.png'>","暂无数据"));
					}
				}else{
					//console.log(666);
					a.get_doing(data,playStat,gameType,playstateId);
				}
				
			});
		}	
			//点击头部赛程调取数据
			
			function click_wei(){
				$(".footb-tabs ul").on("click","li:nth-of-type(3)",function(){
					
					a.loader("show",$(".box-three"));
					if(localStorage.length == 0){
						if($("li[data-type=1]").text() == '欧赔'){var gameType = 1}
						if($("li[data-type=1]").text() == '亚盘'){var gameType = 2}
						if($("li[data-type=1]").text() == '大小球'){var gameType = 3}
					
						var tdm = $("li[data-id=1]").text();
							if(tdm == '利记'){tdm = 'lj';}
							if(tdm == '澳彩'){tdm = 'ms';}
							if(tdm == '智博'){tdm = 'bw';}
							if(tdm == '皇冠'){tdm = 'hg';}
							if(tdm == '浩博'){tdm = 'hb';}
							if(tdm == '沙巴'){tdm = 'sb';}	 	
						var playStat = 3;
						a.getSet({playStat:playStat}, function(data) {
							//console.log(data);
							//获取热门联赛ID
							var arr = [];
							for(var i = 0; i < data.length; i++) {
								if(data[i].matchCount != 0){
									arr.push(data[i].id);
								}		
							}
							var leagues = arr.join();
						//	console.log(leagues);
							sai(leagues,gameType,tdm,playStat);
						});
					}else{
						var playStat = 3;
						var tdm = localStorage.getItem('tdm');
						var gameType = localStorage.getItem('gameType');
						a.getSet({playStat:playStat}, function(data) {
							//console.log(data);
							//获取热门联赛ID
							var arr = [];
							for(var i = 0; i < data.length; i++) {
								if(data[i].matchCount != 0){
									arr.push(data[i].id);
								}		
							}
							var leagues = arr.join();	
							var Time = localStorage.getItem('Time');
						
							sai(leagues,gameType,tdm,playStat);
						})
						
					}
					function sai(leagues,gameType,tdm,playStat,Time){
						a.get_instant({leagues:leagues,gameType:gameType,tdm:tdm,playStat:playStat,oTime:Time},function(data){
							console.log(data);
							if(data == '') {
								$(".box-three").empty();return $(".box-three").html(a.kong_zhi("<img src='img/kong.png'>","暂无数据"));
							}else{
								
								a.get_doing(data,playStat,gameType)
							}
							
						});
					}
				})
			}
			//点击头部完赛调取数据
			
			function click_circle(){
				$(".footb-tabs ul").on("click","li:nth-of-type(2)",function(){
					
					a.loader("show",$(".box-two"));

					if(localStorage.length == 0){
						if($("li[data-type=1]").text() == '欧赔'){var gameType = 1}
						if($("li[data-type=1]").text() == '亚盘'){var gameType = 2}
						if($("li[data-type=1]").text() == '大小球'){var gameType = 3}
					
						var tdm = $("li[data-id=1]").text();
							if(tdm == '利记'){tdm = 'lj';}
							if(tdm == '澳彩'){tdm = 'ms';}
							if(tdm == '智博'){tdm = 'bw';}
							if(tdm == '皇冠'){tdm = 'hg';}
							if(tdm == '浩博'){tdm = 'hb';}
							if(tdm == '沙巴'){tdm = 'sb';}	 	
						var playStat = 2;
						a.getSet({playStat:playStat}, function(data) {
							//console.log(data);
							//获取热门联赛ID
							var arr = [];
							for(var i = 0; i < data.length; i++) {
								if(data[i].matchCount != 0){
									arr.push(data[i].id);
								}		
							}
							var leagues = arr.join();
						//	console.log(leagues);
							wan(leagues,gameType,tdm,playStat);
						});
					}else{
						var tdm = localStorage.getItem('tdm');
						var gameType = localStorage.getItem('gameType');
						var playStat = 2;
						
						a.getSet({playStat:playStat}, function(data) {
							//console.log(data);
							//获取热门联赛ID
							var arr = [];
							for(var i = 0; i < data.length; i++) {
								if(data[i].matchCount != 0){
									arr.push(data[i].id);
								}		
							}
							var leagues = arr.join();	
							var Time = localStorage.getItem('Time');
							wan(leagues,gameType,tdm,playStat);
						})
						
					}
					
					function wan(leagues,gameType,tdm,playStat,Time){	
									
						a.get_instant({leagues:leagues,gameType:gameType,tdm:tdm,playStat:playStat,oTime:Time},function(data){
							//console.log(data);
							if(data == '') {
								console.log(666);
								$(".box-two").empty();return $(".box-two").html(a.kong_zhi("<img src='img/kong.png'>","暂无数据"));
							}else{
								a.get_doing(data,playStat,gameType);
							}
							
						});
					}
				})
			}
			//点击头部即时调取数据
			
			function click_end(){
				$(".footb-tabs ul").on("click","li:nth-of-type(1)",function(){
					
					a.loader("show",$(".box-three"));
					if(localStorage.length == 0){
						if($("li[data-type=1]").text() == '欧赔'){var gameType = 1}
						if($("li[data-type=1]").text() == '亚盘'){var gameType = 2}
						if($("li[data-type=1]").text() == '大小球'){var gameType = 3}
					
						var tdm = $("li[data-id=1]").text();
							if(tdm == '利记'){tdm = 'lj';}
							if(tdm == '澳彩'){tdm = 'ms';}
							if(tdm == '智博'){tdm = 'bw';}
							if(tdm == '皇冠'){tdm = 'hg';}
							if(tdm == '浩博'){tdm = 'hb';}
							if(tdm == '沙巴'){tdm = 'sb';}	 	
						var playStat = 1;
						a.getSet({playStat:playStat}, function(data) {
							//console.log(data);
								//获取热门联赛ID
							var arr = [];
							for(var i = 0; i < data.length; i++) {
								if(data[i].matchCount != 0){
									arr.push(data[i].id);
								}		
							}
							var leagues = arr.join();
							ji(leagues,gameType,tdm,playStat);
						});
					}else{
						var tdm = localStorage.getItem('tdm');
						var gameType = localStorage.getItem('gameType');
						var playStat = 1;
						a.getSet({playStat:playStat}, function(data) {
							//console.log(data);
							//获取热门联赛ID
							var arr = [];
							for(var i = 0; i < data.length; i++) {
								if(data[i].matchCount != 0){
									arr.push(data[i].id);
								}		
							}
							var leagues = arr.join();	
							var Time = localStorage.getItem('Time');
							ji(leagues,gameType,tdm,playStat);
						})
						
						
					}
					function ji(leagues,gameType,tdm,playStat){
						a.get_instant({leagues:leagues,gameType:gameType,tdm:tdm,playStat:playStat},function(data){
							if(data == '') {
								$(".box-one").empty();return $(".box-one").html(a.kong_zhi("<img src='img/kong.png'>","暂无数据"));
							}else{
								a.get_doing(data,playStat,gameType)
							}
							
						});
					}
				})
			}
			//点击弹出日历遮罩层，调取数据
			e.cli_data();
			//点击联赛，跳转直播界面
			e.click_Competition();
			
			
		
		//点击设置
		a.setUp();
		//点击筛选里确定
		e.cli_select();
		//点击livng主页返回按钮，返回大主页
		e.index_back();
	}
	return {
		init : init
	}
})