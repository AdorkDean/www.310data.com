define(function(require, exports, module) {
	var $ = require("jquery");
	var getD = require("getData");
	var href = getD.href();
	//odds页footer选项卡切换
	function odds_tab(){
		$(".zs-nav2 li").click(function(){
		    $(this).addClass("zs-on2").siblings().removeClass("zs-on2");
		    $(".new-yp-box").hide();
		    var index=$(".zs-nav2 li").index($(this));
		    $(".new-yp-box:eq("+index+")").show();
		})
	}
	//指数首页header选项卡切换
	function bt(){
		$(".live-tabs li").click(function(){ 
			$(".live-tabs li").removeClass("livezs-on");  
			$(this).addClass("livezs-on");					
								
			$(".livezs-box").hide(); 
			var index=$(".live-tabs li").index($(this)); 
			$(".livezs-box:eq("+index+")").show();  
		})
	}
	//指数页面筛选日期选项卡点击切换及调取数据
	function cli_data(){
		
		$('.mast-tab').on('click','li',function(){
			console.log(666);
			if($(this).text() == '近七天未开赛赛事'){}else if($(this).text() == '近七天完场赛事'){}
			else{
				$(this).attr("data-mon","1").siblings().attr("data-mon","0");
				$(this).addClass('mast-on').siblings().removeClass('mast-on');
				
				//判断那那个页面
				if($("li[class='livezs-on']").text() == '未开赛'){var playStat = 0;}
				
				if($("li[class='livezs-on']").text() == '完场'){var playStat = 1;}
				//获取玩法类型
				if($("li[data-type=1]").text() == '欧赔'){var gameType = 1}
				if($("li[data-type=1]").text() == '亚盘'){var gameType = 2}
				if($("li[data-type=1]").text() == '大小球'){var gameType = 3}
				//判断选择那几个公司
				var arr = [];
				$("li[data-id=1]").each(function(){	
					if($(this).attr('data-id')==1){
						var a = $(this).text();
						if(a == '利记'){a = 'lj';}
						if(a == '澳彩'){a = 'ms';}
						if(a == '智博'){a = 'bw';}
						if(a == '皇冠'){a = 'hg';}
						if(a == '浩博'){a = 'hb';}
						if(a == '沙巴'){a = 'sb';}	 				
					}
					arr.push(a);
				})
				var tdms = arr.join();
				localStorage.setItem('gameType',gameType);
				localStorage.setItem('tdms',tdms);
				localStorage.setItem('playStat',playStat);
				if($(this).text() == '最近'){
					//获取联赛id
					getD.getSet({playStat:playStat}, function(data) {
						//获取热门联赛ID
						
						var arr = [];
						for(var i = 0; i < data.length; i++) {
							if(data[i].matchCount != 0){
								arr.push(data[i].id);
							}
								
						}
						var leagues = arr.join();
						//console.log(leagues);
						localStorage.setItem('leagues', leagues);
						$("#live-mask").hide();
						$("body,html").css({"overflow":"visible"});
						$(".box-one").empty();
						$(".box-three").empty();
						if(playStat == 0){console.log(666);getD.loader("show",$(".box-one"));}
						if(playStat == 1){getD.loader("show",$(".box-three"));}
						//console.log(playStat);
						getD.getData_fix_company({playStat:playStat,leagues:leagues,gameType:gameType,tdms:tdms},function(data){
							getD.getFuture(data,playStat,gameType)
						})
					})
				}else{
					
					//点击获取当前日期
					var myDate = new Date(); 
					var years = myDate.getFullYear();
					var yue = $(this).find('span').text();
					if(yue < 10){yue = '0'+yue;}
					var ri = $(this).find('b').text();
					var Time = (years+"-"+yue+"-"+ri);
					localStorage.setItem('Time',Time);
					//获取联赛id
					getD.getSet({playStat:playStat,oTime:Time}, function(data) {
						//获取热门联赛ID
						
						var arr = [];
						for(var i = 0; i < data.length; i++) {
							if(data[i].matchCount != 0){
								arr.push(data[i].id);
							}
								
						}
						var leagues = arr.join();
						console.log(leagues);
						localStorage.setItem('leagues', leagues);
						$("#live-mask").hide();
						$("body,html").css({"overflow":"visible"});
						$(".box-one").empty();
						$(".box-three").empty();
						if(playStat == 0){console.log(666);getD.loader("show",$(".box-one"));}
						if(playStat == 1){getD.loader("show",$(".box-three"));}
						
						getD.getData_fix_company({playStat:playStat,leagues:leagues,gameType:gameType,tdms:tdms,oTime:Time},function(data){
							getD.getFuture(data,playStat,gameType)
						})
					})
				}
			}
		})
	}
	//指数主页筛选页面事件
	function select_page(){
		//点击筛选页面出现
		$(".live-header").on('click','.live-scree',function(){
			$('.allNum_xian3 span:eq(1)').empty();
			$('.allNum_yin3 span:eq(1)').empty();
			//console.log(666);
			$("#index_top").hide();
			$("#sx-box").show();
			getD.loader("show",$(".top_league"));
			var tm = $('.livezs-data .oTime').text();
			var oTime = tm.substr(0,4)+'-'+tm.substr(5,2)+'-'+tm.substr(8,2);
			if($("li[class='livezs-on']").text() == '滚球'){var playStat = 2;var oTime = oTime;} 
			if($("li[class='livezs-on']").text() == '完场'){var playStat = 1;var oTime = oTime;} 
			if($("li[class='livezs-on']").text() == '未开赛'){var playStat = 0;var oTime = oTime;} 
			//初始化全部页面的联赛数据开始
				getD.getSet({playStat:playStat},function(data){
					//console.log(data);
					var str = '';
					
					$('.top_league').empty();
					$('.bottom_league').empty();
					$(data).each(function(){
						//console.log(this)
						if(this.shortName){
							oName = this.shortName;
							//console.log(oName)
						}else{
							var oName = this.name.substring(0,6);
						}
						var hot = this.hot;
						//console.log(hot);
						var oMatch = this.matchCount;
						//console.log(oMatch);
						var id = this.id;
						if(oMatch != 0){
							
							str='<li data-select="'+id+'" data-lid="1"><span class="dl">'+oName+'</span><span class="dr num">'+oMatch+'</span></li>';
							getD.loader("hide",$(".top_league"));
							$('.top_league').append(str);
						}else if(oMatch == 0){
							
							str='<li><span class="dl">'+oName+'</span><span class="dr">'+oMatch+'</span></li>';
							getD.loader("hide",$(".top_league"));
							$('.bottom_league').append(str);
						}
					})
					if(playStat == window.localStorage.playStat){
						//判断删选公司的样式
						var arr = [];
						$("li[data-lid=1]").each(function(){	
							if($(this).attr('data-lid')==1){
								arr.push($(this).attr("data-select"));			
							}
						})
						//删除的公司id
						if(window.localStorage.dataSelect){
							var dataSelect = localStorage.getItem('dataSelect').split(',');		
						}
						for(var i = 0 ; i < arr.length; i++){
							for(var j = 0;j <  dataSelect.length; j++){
								if(arr[i] === dataSelect[j]){
									
									$("li[data-lid=1]").each(function(){	
										if($(this).attr('data-select') == arr[i]){
											$(this).css({"background":"white","color":"rgb(136,196,37)"})
											$(this).attr("data-lid","0");
											$(this).parents().prev().find("#sx-img").attr("src","img/score/zb_c8.png");
										}
									})
								}
							}
						}
						$("li[data-lid=1]").each(function(){
							var arr = $(this).find('.num');
							var allNum_xian =$('.allNum_xian3 span:nth-child(2)');
							var allNum_yin =$('.allNum_yin3 span:nth-child(2)');
							all_allNum(arr,allNum_xian,allNum_yin);	
						})
					}else{
						var arr = $(".top_league .num");
						var allNum_xian =$('.allNum_xian3 span:nth-child(2)');
						var allNum_yin =$('.allNum_yin3 span:nth-child(2)');
						all_allNum(arr,allNum_xian,allNum_yin);	
					}
					
					
				});
			//初始化全部页面的联赛数据结束
		})
		function all_allNum(arr,allNum_xian,allNum_yin){
		
			var num = 0;
			var str = '';
			var str1 = '';
			$(arr).each(function(){
				num +=Number($(this).text());	
				
			})
			var yin = 0;
			//console.log(yin);
			str =  num;
			str1 = yin;
			allNum_xian.append(str);
			allNum_yin.append(str1);
		}
		//点击筛选页面里返回按钮
		$('#out-btn').on('click','img',function(){
			$("#sx-box").hide();
			$("#index_top").show();
			
		})
		
		//筛选里header切换
		$(".footb-sx-tabs li").click(function(){ 
			$(".footb-sx-tabs li").removeClass("footb-sx-on");  
			$(this).addClass("footb-sx-on");											
			$(".footb-sx-box").hide(); 
			var index=$(".footb-sx-tabs li").index($(this)); 
			$(".footb-sx-box:eq("+index+")").show();
//			var tm = $('.footb-data .oTime').text();
//			var oTime = tm.substr(0,4)+'-'+tm.substr(5,2)+'-'+tm.substr(8,2);
			if($("li[class='livezs-on']").text() == '滚球'){var playStat = 2;} 
			if($("li[class='livezs-on']").text() == '完场'){var playStat = 1;} 
			if($("li[class='livezs-on']").text() == '未开赛'){var playStat = 0;} 
			//初始化焦点页面的联赛数据开始
			if($("li[class='footb-sx-on']").text() == '焦点'){
				$('.allNum_xian2 span:nth-child(2)').text('');
				$('.allNum_yin2 span:nth-child(2)').text('');
				$('.jiao_top').empty();
				$('.jiao_bottom').empty();
				$(".sx-box-asid2 #sx-img").attr("data-id","0");
				$(".sx-box-asid2 #sx-img").attr("src","img/score/zb_c9.png");
				getD.loader("show",$(".jiao_top"));
				getD.getSet({playStat:playStat},function(data){
					var str = '';
					$(data).each(function(){
						if(this.shortName){
							oName = this.shortName;
							//console.log(oName)
						}else{
							var oName = this.name.substring(0,6);
						}
						var hot = this.hot;
						var oMatch = this.matchCount;
						var id = this.id;
						//console.log(oMatch);
						if(oMatch != 0 && hot == 2){
							
							str='<li data-select="'+id+'" data-lid="1"><span class="dl">'+oName+'</span><span class="dr num">'+oMatch+'</span></li>';
							getD.loader("hide",$(".jiao_top"));
							$('.jiao_top').append(str);
						}else if(oMatch == 0){
							str='<li><span class="dl">'+oName+'</span><span class="dr">'+oMatch+'</span></li>';
							getD.loader("hide",$(".jiao_top"));
							$('.jiao_bottom').append(str);
						}	
					})
						var arr = $(".jiao_top .num");
						var allNum_xian =$('.allNum_xian2 span:nth-child(2)');
						var allNum_yin =$('.allNum_yin2 span:nth-child(2)');
						all_allNum(arr,allNum_xian,allNum_yin);	
					
				});
			}
			//初始化焦点面的联赛数据结束
			//初始热门页面的联赛数据开始
			if($("li[class='footb-sx-on']").text() == '热门'){
				$('.allNum_xian1 span:nth-child(2)').text('');
				$('.allNum_yin1 span:nth-child(2)').text('');
				$('.hot_top').empty();
				$('.hot_bottom').empty();
				$(".sx-box-asid1 #sx-img").attr("data-id","0");
				$(".sx-box-asid1 #sx-img").attr("src","img/score/zb_c9.png");
				getD.loader("show",$(".hot_top"));
				getD.getSet({playStat:playStat},function(data){
					var str = '';
					$(data).each(function(){
						if(this.shortName){
							oName = this.shortName;
							//console.log(oName)
						}else{
							var oName = this.name.substring(0,6);
						}
						var hot = this.hot;
						var oMatch = this.matchCount;
						var id = this.id;
						//console.log(oMatch);
						if(oMatch != 0 && hot == 1 || oMatch != 0 && hot == 2){
							
							str='<li data-select="'+id+'" data-lid="1"><span class="dl">'+oName+'</span><span class="dr num">'+oMatch+'</span></li>';
							getD.loader("hide",$(".hot_top"));
							$('.hot_top').append(str);
						}else if(oMatch == 0){
							str='<li><span class="dl">'+oName+'</span><span class="dr">'+oMatch+'</span></li>';
							getD.loader("hide",$(".hot_top"));
							$('.hot_bottom').append(str);
						}	
					})
						var arr = $(".hot_top .num");
						var allNum_xian =$('.allNum_xian1 span:nth-child(2)');
						var allNum_yin =$('.allNum_yin1 span:nth-child(2)');
						all_allNum(arr,allNum_xian,allNum_yin);	
					
				});
			}
			//初始化热门页面的联赛数据结束
			//初始化筛选全部页面的联赛数据开始
			if($("li[class='footb-sx-on']").text() == '全部'){
				$('.allNum_xian3 span:nth-child(2)').text('');
				$('.allNum_yin3 span:nth-child(2)').text('');
				$('.top_league').empty();
				$('.bottom_league').empty();
				$(".sx-box-asid3 #sx-img").attr("data-id","0");
				$(".sx-box-asid3 #sx-img").attr("src","img/score/zb_c9.png");
				getD.loader("show",$(".top_league"));
				getD.getSet({playStat:playStat},function(data){
					var str = '';
					$(data).each(function(){
						if(this.shortName){
							oName = this.shortName;
							//console.log(oName)
						}else{
							var oName = this.name.substring(0,6);
						}
						var hot = this.hot;
						var oMatch = this.matchCount;
						var id = this.id;
						//console.log(oMatch);
						if(oMatch != 0){
							
							str='<li data-select="'+id+'" data-lid="1"><span class="dl">'+oName+'</span><span class="dr num">'+oMatch+'</span></li>';
							getD.loader("hide",$(".top_league"));
							$('.top_league').append(str);
						}else if(oMatch == 0){
							str='<li><span class="dl">'+oName+'</span><span class="dr">'+oMatch+'</span></li>';
							getD.loader("hide",$(".top_league"));
							$('.bottom_league').append(str);
						}
					})
						var arr = $(".top_league .num");
						var allNum_xian =$('.allNum_xian3 span:nth-child(2)');
						var allNum_yin =$('.allNum_yin3 span:nth-child(2)');
						all_allNum(arr,allNum_xian,allNum_yin);	
					
				});
			}
			//初始化筛选全部页面的联赛数据结束
		})
		//点击全选按钮，实现效果
		$(".sx-box-asid1").on('click','#sx-img',function(){
				if($(this).attr("data-id") == 0){
					$(this).attr("src","img/score/zb_c8.png");
					$(".sx-box-list1 li").css({"background":"rgb(250,250,250)","color":"rgb(136,196,37)"});
					$(this).attr("data-id","1");
					$(".sx-box-list1 li").attr("data-lid","0");
				}else if($(this).attr("data-id") == 1){
					$(this).attr("src","img/score/zb_c9.png");
					$(".sx-box-list1 li").css({"background":"rgb(136,196,37)","color":"rgb(250,250,250)"});
					$(this).attr("data-id","0");
					$(".sx-box-list1 li").attr("data-lid","1");
				}
			
		})
		$(".sx-box-asid2").on('click','#sx-img',function(){
				if($(this).attr("data-id") == 0){
					$(this).attr("src","img/score/zb_c8.png");
					$(".sx-box-list2 li").css({"background":"rgb(250,250,250)","color":"rgb(136,196,37)"});
					$(this).attr("data-id","1");
					$(".sx-box-list2 li").attr("data-lid","0");
				}else if($(this).attr("data-id") == 1){
					$(this).attr("src","img/score/zb_c9.png");
					$(".sx-box-list2 li").css({"background":"rgb(136,196,37)","color":"rgb(250,250,250)"});
					$(this).attr("data-id","0");
					$(".sx-box-list2 li").attr("data-lid","1");
				}
			
		})
		$(".sx-box-asid3").on('click','#sx-img',function(){
				if($(this).attr("data-id") == 0){
					$(this).attr("src","img/score/zb_c8.png");
					$(".sx-box-list3 li").css({"background":"rgb(250,250,250)","color":"rgb(136,196,37)"});
					$(this).attr("data-id","1");
					$(".sx-box-list3 li").attr("data-lid","0");
				}else if($(this).attr("data-id") == 1){
					$(this).attr("src","img/score/zb_c9.png");
					$(".sx-box-list3 li").css({"background":"rgb(136,196,37)","color":"rgb(250,250,250)"});
					$(this).attr("data-id","0");
					$(".sx-box-list3 li").attr("data-lid","1");
				}
			
		})
	}
	function click_odds(){
		$("#index_top").delegate(".ya_c","click",function(){	
				//console.log(666);
				
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
				var mid = $(this).attr("data-mid");
				var as = $(this).attr("data-as");
				var hs = $(this).attr("data-hs");
				var bas = $(this).attr("data-bas");
				var bhs = $(this).attr("data-bhs");
				var state = $(this).attr("data-state");
				var onIng = $(this).attr("data-on");
				var gid = $(this).attr("data-gid");
				var matchId = $(this).attr("data-mid");
				//判断选择哪种玩法
				if($("li[data-type=1]").text() == '欧赔'){var gt = 1}
				if($("li[data-type=1]").text() == '亚盘'){var gt = 2}
				if($("li[data-type=1]").text() == '大小球'){var gt = 3}
			
				//判断选择那几个公司
					var arr = [];
					$("li[data-id=1]").each(function(){	
						if($(this).attr('data-id')==1){
							var a = $(this).text();
							if(a == '利记'){a = 'lj';}
							if(a == '澳彩'){a = 'ms';}
							if(a == '智博'){a = 'bw';}
							if(a == '皇冠'){a = 'hg';}
							if(a == '浩博'){a = 'hb';}
							if(a == '沙巴'){a = 'sb';}	 				
						}
						arr.push(a);
					})
					var tdms = arr.join();
				//判断那那个页面
				if($("li[class='livezs-on']").text() == '未开赛'){var playStat = 0;}
				if($("li[class='livezs-on']").text() == '滚球'){var playStat = 2;}
				if($("li[class='livezs-on']").text() == '完场'){var playStat = 1;}
			
				
				
				getD.getSet({playStat:playStat}, function(data) {
					//获取热门联赛ID
					//if(localStorage.length == 0){
						var arr = [];
						for(var i = 0; i < data.length; i++) {
							if(data[i].matchCount != 0){
								arr.push(data[i].id);
							}		
						}
						var leagues = arr.join();
						
					if(window.localStorage.leagues){
						console.log(window.location.leagues);
						window.localStorage.matchId = matchId;
						localStorage.setItem('gameType',gt);
						localStorage.setItem('tdms',tdms);
						localStorage.setItem('playStat',playStat);
						if($("li[class='dat-hove']").text() == '亚盘'){
							console.log(666);
							location.href = "odds.html?gameType="+gt+"&tdm="+gid+"&win=亚盘&ri_qi="+ri_qi+'&shi_time='+shi_time+'&zhu='+zhu+'&ke='+ke+'&sai='+sai+'&mid='+mid+"&state="+state+"&hs="+hs+"&as="+as+"&bhs="+bhs+"&bas="+bas+"&onIng="+onIng;
						}
						if($("li[class='dat-hove']").text() == '欧赔'){
							location.href = "odds.html?gameType="+gt+"&tdm="+gid+"&win=欧赔&ri_qi="+ri_qi+'&shi_time='+shi_time+'&zhu='+zhu+'&ke='+ke+'&sai='+sai+'&mid='+mid+"&state="+state+"&hs="+hs+"&as="+as+"&bhs="+bhs+"&bas="+bas+"&onIng="+onIng;
						}
						if($("li[class='dat-hove']").text() == '大小球'){
							location.href = "odds.html?gameType="+gt+"&tdm="+gid+"&win=大小球&ri_qi="+ri_qi+'&shi_time='+shi_time+'&zhu='+zhu+'&ke='+ke+'&sai='+sai+'&mid='+mid+"&state="+state+"&hs="+hs+"&as="+as+"&bhs="+bhs+"&bas="+bas+"&onIng="+onIng;
						}	
					}else{
						localStorage.setItem('leagues',leagues);
						console.log(window.location.leagues);
						window.localStorage.matchId = matchId;
						localStorage.setItem('gameType',gt);
						localStorage.setItem('tdms',tdms);
						localStorage.setItem('playStat',playStat);
						if($("li[class='dat-hove']").text() == '亚盘'){
							console.log(666);
							location.href = "odds.html?gameType="+gt+"&tdm="+gid+"&win=亚盘&ri_qi="+ri_qi+'&shi_time='+shi_time+'&zhu='+zhu+'&ke='+ke+'&sai='+sai+'&mid='+mid+"&state="+state+"&hs="+hs+"&as="+as+"&bhs="+bhs+"&bas="+bas+"&onIng="+onIng;
						}
						if($("li[class='dat-hove']").text() == '欧赔'){
							location.href = "odds.html?gameType="+gt+"&tdm="+gid+"&win=欧赔&ri_qi="+ri_qi+'&shi_time='+shi_time+'&zhu='+zhu+'&ke='+ke+'&sai='+sai+'&mid='+mid+"&state="+state+"&hs="+hs+"&as="+as+"&bhs="+bhs+"&bas="+bas+"&onIng="+onIng;
						}
						if($("li[class='dat-hove']").text() == '大小球'){
							location.href = "odds.html?gameType="+gt+"&tdm="+gid+"&win=大小球&ri_qi="+ri_qi+'&shi_time='+shi_time+'&zhu='+zhu+'&ke='+ke+'&sai='+sai+'&mid='+mid+"&state="+state+"&hs="+hs+"&as="+as+"&bhs="+bhs+"&bas="+bas+"&onIng="+onIng;
						}	
					}
				});
				

		})
	}
	//指数筛选单选操作
	function cli_select(){
		var flag = 0,
			old_num = 0;
		//筛选里面单选操作
		$(".sx-box-list").on('click','li',function(){
			old_num = 0;
			if($(this).attr("data-lid") == 1){
				//全部
				var a = Number($(".allNum_xian3 span:eq(1)").text());
				var c = Number($(this).find("span:nth-child(2)").text());
				$(".allNum_xian3 span:eq(1)").text(a-c);
				var d = Number($('.allNum_yin3 span:nth-child(2)').text());
				var e = Number($(this).find("span:nth-child(2)").text());
				$('.allNum_yin3 span:nth-child(2)').text(d+e);
				//焦点
				var a = Number($(".allNum_xian1 span:eq(1)").text());
				var c = Number($(this).find("span:nth-child(2)").text());
				$(".allNum_xian1 span:eq(1)").text(a-c);
				var d = Number($('.allNum_yin1 span:nth-child(2)').text());
				var e = Number($(this).find("span:nth-child(2)").text());
				$('.allNum_yin1 span:nth-child(2)').text(d+e);
				
				$(this).attr("data-lid",0);
				$(this).css({"background":"rgb(250,250,250)","color":"rgb(136,196,37)"});
			}else{
				//全部
				var a = Number($(".allNum_xian3 span:eq(1)").text());
				var c = Number($(this).find("span:nth-child(2)").text());
				$(".allNum_xian3 span:eq(1)").text(a+c);
				var d = Number($('.allNum_yin3 span:nth-child(2)').text());
				var e = Number($(this).find("span:nth-child(2)").text());
				$('.allNum_yin3 span:nth-child(2)').text(d-e);
				//焦点
				var a = Number($(".allNum_xian1 span:eq(1)").text());
				var c = Number($(this).find("span:nth-child(2)").text());
				$(".allNum_xian1 span:eq(1)").text(a+c);
				var d = Number($('.allNum_yin1 span:nth-child(2)').text());
				var e = Number($(this).find("span:nth-child(2)").text());
				$('.allNum_yin1 span:nth-child(2)').text(d-e);
				$(this).attr("data-lid",1);
				$(this).css({"background":"rgb(136,196,37)","color":"rgb(250,250,250)"});
			}
			var list_box = $(".index_cen li");
			$(list_box).each(function(){
				if($(this).attr("data-lid") == 0){
					
					$('.sx-img').attr("src","img/score/zb_c8.png");
					flag = 0;
					return;
				}else{
					old_num ++;
				}
				//console.log(old_num)
				if(old_num === $(list_box).length){
				 	
				 	$('.sx-img').attr("src","img/score/zb_c9.png");
					flag = 1;
					old_num = 0;
				 }
				
			})
		})
		$(".selectIng").on('click','a',function(){
				//日期筛选
//				var myDate = new Date(); 
//				var years = myDate.getFullYear();
//				var yue = myDate.getMonth()+1;   
//				if(yue < 10){yue = '0'+yue}
//				var ri = myDate.getDate();
//				if(ri < 10){yue = '0'+ri}
//				var Time = (years+"-"+yue+"-"+ri);
//				var arr = [];
				//判断是那个公司
				var arr = [];
					$("li[data-id=1]").each(function(){	
						if($(this).attr('data-id')==1){
							var a = $(this).text();
							if(a == '利记'){a = 'lj';}
							if(a == '澳彩'){a = 'ms';}
							if(a == '智博'){a = 'bw';}
							if(a == '皇冠'){a = 'hg';}
							if(a == '浩博'){a = 'hb';}
							if(a == '沙巴'){a = 'sb';}	 				
						}
						arr.push(a);
					})
				var tdms = arr.join();
				//获取玩法类型
				if($("li[data-type=1]").text() == '欧赔'){var gameType = 1}
				if($("li[data-type=1]").text() == '亚盘'){var gameType = 2}
				if($("li[data-type=1]").text() == '大小球'){var gameType = 3}
				//判断是那个赛时
				if($("li[class='livezs-on']").text() == '未开赛'){var playStat = 0;}
				if($("li[class='livezs-on']").text() == '滚球'){var playStat = 2;}
				if($("li[class='livezs-on']").text() == '完场'){var playStat = 1;}
			//记录被删掉的联赛
				var arr1 = [];
				$("li[data-lid=0]").each(function(){
					if($(this).attr('data-lid')==0){
						arr1.push($(this).attr('data-select'));	
					}
				})
				var dataSelect = arr1.join();
				
				localStorage.setItem('dataSelect',dataSelect); 
			var arr = [];
			//全部筛选
			if($("li[class='footb-sx-on']").text() == '全部'){
				$(".sx-box-list3").find("li[data-lid=1]").each(function(){
					if($(this).attr('data-lid')==1){
						arr.push($(this).attr('data-select'));	
					}
				})
				var leagues = arr.join();
			}
			//焦点筛选
			if($("li[class='footb-sx-on']").text() == '焦点'){
				$(".sx-box-list2").find("li[data-lid=1]").each(function(){
					if($(this).attr('data-lid')==1){
						arr.push($(this).attr('data-select'));	
					}
				})
				var leagues = arr.join();
			}
			//热门筛选
			if($("li[class='footb-sx-on']").text() == '热门'){
				$(".sx-box-list1").find("li[data-lid=1]").each(function(){
					if($(this).attr('data-lid')==1){
						arr.push($(this).attr('data-select'));	
					}
				})
				var leagues = arr.join();
			}
			localStorage.setItem('leagues',leagues);
			
			getD.get_future({leagues:leagues,gameType:gameType,tdms:tdms,playStat:playStat},function(data){
				//console.log(data);
				$("#sx-box").hide();
				$("#index_top").show();
				$("#set").hide();
				getD.getFuture(data,playStat,gameType);
			})
				
			
			
		})
	}
	function odd_back(gt){
		if(gt){
			
			//左上角
			$("#header-live").on('click','.living_fan',function(){
				
				window.location.href = 'http://www.310data.com';
			})
			//返回列表
			$(".yp-nav").on('click','.return',function(){
				localStorage.clear();
				window.location.href = 'http://www.310data.com';
			})
			
		}else{
			//左上角
			$("#header-live").on('click','.living_fan',function(){
				
				window.location.href = 'index.html';
			})
			//返回列表
			$(".yp-nav").on('click','.return',function(){
				
				window.location.href = 'index.html';
			})
		}
		
	}
	//点击赔率主页返回按钮，返回大主页
	function index_back(){
		$('.live-header-tit a').click(function(){
			localStorage.clear();
			window.location.href = 'http://www.310data.com';
		})
	}
	function click_url(){
		$(".wrong-main").on('click','.wrong-btn',function(){
			localStorage.clear();
			window.location.href = "index.html";
		})
	}
	return {
		bt : bt,
		cli_data : cli_data,
		select_page : select_page,
		click_odds : click_odds,
		odds_tab : odds_tab,
		click_url : click_url,
		cli_select : cli_select,
		odd_back : odd_back,
		index_back : index_back
		
	}
})