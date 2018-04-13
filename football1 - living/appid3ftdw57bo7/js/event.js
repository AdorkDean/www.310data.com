define(function(require, exports, module) {
	var $ = require("jquery");
	var a = require("getData");
	var href = a.href();
	
	//living.html的footer底部固定切换
	function footerTab(){
		
		$(".zb-fot-nav li").click(function(){
		    $(".zb-fot-nav li").removeClass("zb-on2");
		    $(this).addClass("zb-on2");
		
		    $(".pro-bar-box").hide();
		    var index=$(".zb-fot-nav li").index($(this));
		    $(".pro-bar-box:eq("+index+")").show();
		})
	}
	//index.html的点击事件
	function in_select(){
		
		//筛选里header切换
		$(".footb-sx-tabs li").click(function(){ 
			$(".footb-sx-tabs li").removeClass("footb-sx-on");  
			$(this).addClass("footb-sx-on");											
			$(".footb-sx-box").hide(); 
			var index=$(".footb-sx-tabs li").index($(this)); 
			$(".footb-sx-box:eq("+index+")").show();
			var tm = $('.footb-data .oTime').text();
			var oTime = tm.substr(0,4)+'-'+tm.substr(5,2)+'-'+tm.substr(8,2);
			if($("li[class='footb-on']").text() == '即时'){var playStat = 1;var oTime = '';} 
			if($("li[class='footb-on']").text() == '完赛'){var playStat = 2;var oTime = oTime;} 
			if($("li[class='footb-on']").text() == '赛程'){var playStat = 3;var oTime = oTime;} 
			//初始化焦点页面的联赛数据开始
			if($("li[class='footb-sx-on']").text() == '焦点'){
				
				$('.allNum_xian2 span:nth-child(2)').text('');
				$('.allNum_yin2 span:nth-child(2)').text('');;
				$('.jiao_top').empty();
				$('.jiao_bottom').empty();
				a.loader("show",$(".jiao_top"));
				a.getSet({oTime:oTime,playStat:playStat},function(data){
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
							
							str='<li data-select="'+id+'"><span class="dl">'+oName+'</span><span class="dr num">'+oMatch+'</span></li>';
							a.loader("hide",$(".jiao_top"));
	
							$('.jiao_top').append(str);
						}else if(oMatch == 0){
							a.loader("hide",$(".jiao_top"));
							str='<li><span class="dl">'+oName+'</span><span class="dr">'+oMatch+'</span></li>';
							$('.jiao_bottom').append(str);
						}
					})
						var arr = $(".jiao_top .num");
						var allNum_xian =$('.allNum_xian2 span:nth-child(2)');
						var allNum_yin =$('.allNum_yin2 span:nth-child(2)');
						all_allNum(arr,allNum_xian,allNum_yin);	
					
				});
			}
			//初始化焦点页面的联赛数据结束
			//初始化热门页面的联赛数据开始
			if($("li[class='footb-sx-on']").text() == '热门'){
				$('.allNum_xian1 span:nth-child(2)').text('');
				$('.allNum_yin1 span:nth-child(2)').text('');
				$('.hot_top').empty();
				$('.hot_bottom').empty();
				a.loader("show",$(".hot_top"));
				a.getSet({oTime:oTime,playStat:playStat},function(data){
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
							console.log(id);
							str='<li data-lid="1" data-select="'+id+'"><span class="dl">'+oName+'</span><span class="dr num">'+oMatch+'</span></li>';
							a.loader("hide",$(".hot_top"));
							$('.hot_top').append(str);
						}else if(oMatch == 0){
							//console.log(777);
							str='<li><span class="dl">'+oName+'</span><span class="dr">'+oMatch+'</span></li>';
							a.loader("hide",$(".hot_top"));
							$('.hot_bottom').append(str);
						}
					})
						var arr = $(".hot_top .num");
						
						var allNum_xian =$('.allNum_xian1 span:nth-child(2)');
						var allNum_yin =$('.allNum_yin1 span:nth-child(2)');
						all_allNum(arr,allNum_xian,allNum_yin);	
					
				});
			}
			//初始化焦点页面的联赛数据结束
			//初始化筛选全部页面的联赛数据开始
			if($("li[class='footb-sx-on']").text() == '全部'){
				
				$('.allNum_xian3 span:nth-child(2)').empty();
				$('.allNum_yin3 span:nth-child(2)').empty();
				$('.top_league').empty();
				$('.bottom_league').empty();
				$(".sx-box-asid3 #sx-img").attr("data-id","0");
				$(".sx-box-asid3 #sx-img").attr("src","img/score/zb_c9.png");
				a.loader("show",$(".top_league"));
				a.getSet({oTime:oTime,playStat:playStat},function(data){
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
							
							str='<li data-lid="1" data-select="'+id+'"><span class="dl">'+oName+'</span><span class="dr num">'+oMatch+'</span></li>';
							a.loader("hide",$(".top_league"));
							$('.top_league').append(str);
						}else if(oMatch == 0){
							str='<li><span class="dl">'+oName+'</span><span class="dr">'+oMatch+'</span></li>';
							a.loader("hide",$(".top_league"));
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
		//设置页面点击左上角退出按钮
		$(".in_back").click(function(){
			$("#sx-box").hide();
			$("#index_clear").show();
		})
		
		//index的header选项卡切换
		$(".footb-tabs li").click(function(){ 
			$(".footb-tabs li").removeClass("footb-on");  
			$(this).addClass("footb-on");											
			$(".footb-box").hide(); 
			var index=$(".footb-tabs li").index($(this)); 
			$(".footb-box:eq("+index+")").show();  
		})
		//点击设置按钮按钮
		$(".index_set").click(function(){
			$("#set").show();
			$("#all-index").hide();
		})	
		$("#header-live .in_back").click(function(){
			$("#set").hide();
			$("#all-index").show();
		})
		//点击筛选页面出现
		
		$("#sx-scree").on('click','a',function(){
			$('.allNum_xian3 span:eq(1)').empty();
			$('.allNum_yin3 span:eq(1)').empty();
			$("#index_clear").hide();
			$("#sx-box").show();
			a.loader("show",$(".top_league"));
			$(".other").hide();
			var tm = $('.footb-data .oTime').text();
			var oTime = tm.substr(0,4)+'-'+tm.substr(5,2)+'-'+tm.substr(8,2);
			if($("li[class='footb-on']").text() == '即时'){var playStat = 1;} 
			if($("li[class='footb-on']").text() == '完赛'){var playStat = 2;} 
			if($("li[class='footb-on']").text() == '赛程'){var playStat = 3;} 
			
			//初始化全部页面的联赛数据开始
				a.getSet({playStat:playStat},function(data){
					var str = '';
					$(".other").show();
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
						var id = this.id;
						//console.log(oMatch);
						if(oMatch != 0){
							
							
							str='<li data-lid="1" data-select="'+id+'" data-pan="0"><span class="dl">'+oName+'</span><span class="dr num">'+oMatch+'</span></li>';
							a.loader("hide",$(".top_league"));
							$('.top_league').append(str);
						}else if(oMatch == 0){
							
							str='<li><span class="dl">'+oName+'</span><span class="dr">'+oMatch+'</span></li>';
							a.loader("hide",$(".top_league"));
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
		//点击筛选页面里返回按钮
		$('#out-btn').on('click','img',function(){
			$("#sx-box").hide();
			$("#index_clear").show();
			
		})
		//设置里面公司切换
		$(".filter-box li").click(function(){ 
			$(this).attr("data-id",'1').siblings().attr("data-id","0");
			$(this).addClass("fil-hove").siblings().removeClass("fil-hove");  
														
		})
		//设置里面玩法切切换
		$(".datatype-box li").click(function(){ 
			
			$(this).attr("data-type",'1').siblings().attr("data-type","0");
			$(this).addClass("dat-hove").siblings().removeClass("dat-hove");											
		})
	}
	//初始化筛选里面联赛数量显示
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
	
	//比分页面筛选日期选项卡点击切换及调取数据
	function cli_data(){
		$('.mast-tab').on('click','li',function(){
			if($(this).text() == '近七天未开赛赛事'){}else if($(this).text() == '近七天完场赛事'){console.log(666)}
			
			else{
				$(this).addClass('mast-on').siblings().removeClass('mast-on');
				
				
				//console.log(oTime);
				//判断那那个页面
				if($("li[class='footb-on']").text() == '赛程'){var playStat = 3;}
				
				if($("li[class='footb-on']").text() == '完赛'){var playStat = 2;}
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
				var tdm = arr.join();
				localStorage.setItem('gameType',gameType);
				localStorage.setItem('tdm',tdm);
				localStorage.setItem('playStat',playStat);
				//获取联赛id
				if($(this).text() == '最近'){
					
					a.getSet({playStat:playStat}, function(data) {
						//获取热门联赛ID
						var arr = [];
						for(var i = 0; i < data.length; i++) {
								arr.push(data[i].id);
						}
						var leagues = arr.join();
						localStorage.setItem('leagues',leagues);
						$("#live-mask").hide();
						$("body,html").css({"overflow":"visible"});
						$(".box-two").empty();
						$(".box-three").empty();
						if(playStat == 2){a.loader("show",$(".box-two"));}
						if(playStat == 3){a.loader("show",$(".box-three"));}
						//console.log(playStat);
						a.getData_fix_company({playStat:playStat,leagues:leagues,gameType:gameType,tdm:tdm},function(data){
							//console.log(data);
							a.get_doing(data,playStat,gameType)
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
				
					a.getSet({playStat:playStat,oTime:Time}, function(data) {
						//获取热门联赛ID
						var arr = [];
						for(var i = 0; i < data.length; i++) {
								arr.push(data[i].id);
						}
						var leagues = arr.join();
						localStorage.setItem('leagues',leagues);
						$("#live-mask").hide();
						$("body,html").css({"overflow":"visible"});
						$(".box-two").empty();
						$(".box-three").empty();
						if(playStat == 2){a.loader("show",$(".box-two"));}
						if(playStat == 3){a.loader("show",$(".box-three"));}
						//console.log(playStat);
						a.getData_fix_company({playStat:playStat,oTime:Time,leagues:leagues,gameType:gameType,tdm:tdm},function(data){
							//console.log(data);
							a.get_doing(data,playStat,gameType)
						})
					})
				}
			}
		})
	}
	//点击联赛，跳转直播页面
	function click_Competition(){
		$(".footb-box").delegate(".footb-lists","click",function(){	
				//记录所选球赛id
				//var num = location.hash.substr(20,1);
				//var spe = location.hash.substr(22,5);
				//$(this).find('a').attr("name","666");
				
				var mid=$(this).attr("data-mid");
				//console.log(mid);
				//记录所选球赛日期
				var ri_qi=$(this).attr("data-ri_qi");
				
				//console.log(ri_qi);
				var shijian=$(this).attr("data-shijian");
				var zhu=$(this).attr("data-zhu");
				var ke=$(this).attr("data-ke");
				//console.log(gid);
				
				var sai = $(this).attr("data-sai");
				var as = $(this).attr("data-as");
				var hs = $(this).attr("data-hs");
				var bas = $(this).attr("data-bas");
				var bhs = $(this).attr("data-bhs");
				var state = $(this).attr("data-state");
				var onIng = $(this).attr("data-on");
				var pid = $(this).attr("data-pid");
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
					var tdm = arr.join();
					
				//判断那那个页面
				if($("li[class='footb-on']").text() == '赛程'){var playStat = 3;}
				if($("li[class='footb-on']").text() == '即时'){var playStat = 1;}
				if($("li[class='footb-on']").text() == '完赛'){var playStat = 2;}
				
					
						a.getSet({playStat:playStat}, function(data) {
							
							//if(window.localStorage.length == 0){
								//console.log(222);
							
								var arr = [];
								for(var i = 0; i < data.length; i++) {
									if(data[i].matchCount != 0){
										arr.push(data[i].id);
									}		
								}
							var leagues = arr.join();
							if(window.localStorage.leagues){
								window.localStorage.matchId = matchId;
							localStorage.setItem('pid',pid);
							localStorage.setItem('gameType',gt);
							localStorage.setItem('tdm',tdm);
							localStorage.setItem('playStat',playStat);
							
						location.href = "living.html?matchId="+mid+"&data_time="+ri_qi+"&time="+shijian+"&zhu="+zhu+"&ke="+ke+"&sai="+sai+"&state="+state+"&hs="+hs+"&as="+as+"&bhs="+bhs+"&bas="+bas+"&onIng="+onIng+"&gt="+gt+"&tdm="+tdm+"&pid="+pid;		
							}else{
							localStorage.setItem('leagues',leagues);
							console.log(leagues);
							window.localStorage.matchId = matchId;
							localStorage.setItem('pid',pid);
							localStorage.setItem('gameType',gt);
							localStorage.setItem('tdm',tdm);
							localStorage.setItem('playStat',playStat);
							
						location.href = "living.html?matchId="+mid+"&data_time="+ri_qi+"&time="+shijian+"&zhu="+zhu+"&ke="+ke+"&sai="+sai+"&state="+state+"&hs="+hs+"&as="+as+"&bhs="+bhs+"&bas="+bas+"&onIng="+onIng+"&gt="+gt+"&tdm="+tdm+"&pid="+pid;		
							}
							
//							}else{
//								console.log(333)
//								var leagues = localStorage.getItem('leagues');
//								localStorage.setItem('leagues',leagues);
//								
//							}
							
					});		
		})
	}
	function cli_select(){
		//筛选里面单选操作
		var flag = 0,
			old_num = 0;
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
				$(this).attr("data-pan","1");
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
				$(this).attr("data-pan","0");
				$(this).attr("data-lid",1);
				$(this).css({"background":"rgb(136,196,37)","color":"rgb(250,250,250)"});
			}
			
			//记录删选联赛的样式
			var list_box = $(".index_cen li");
			$(list_box).each(function(){
				if($(this).attr("data-lid") == 0){
					$('.title_t img').attr("src","img/score/zb_c8.png");
					flag = 0;
					return;
				}else{
					old_num ++;
				}
				//console.log(old_num)
				if(old_num === $(list_box).length){
				 	console.log(666);
				 	$('.title_t img').attr("src","img/score/zb_c9.png");
					flag = 1;
					old_num = 0;
				 }
				
			})
		
					
		})
		
		//点击删选确定按钮
		$(".selectIng").on('click','a',function(){
				//点击获取当前日期
//					var myDate = new Date(); 
//					var years = myDate.getFullYear();
//					var yue = $(this).find('span').text();
//					if(yue < 10){yue = '0'+yue;}
//					var ri = $(this).find('b').text();
//					var Time = (years+"-"+yue+"-"+ri);
//					localStorage.setItem('Time',Time);
				//判断是那个公司
				var tdm = $(".filter-box").find("li[data-id=1]").text();
				if(tdm == '利记'){tdm = 'lj';}
				if(tdm == '澳彩'){tdm = 'ms';}
				if(tdm == '智博'){tdm = 'bw';}
				if(tdm == '皇冠'){tdm = 'hg';}
				if(tdm == '浩博'){tdm = 'hb';}
				if(tdm == '沙巴'){tdm = 'sb';}	 
				//获取玩法类型
				if($("li[data-type=1]").text() == '欧赔'){var gameType = 1}
				if($("li[data-type=1]").text() == '亚盘'){var gameType = 2}
				if($("li[data-type=1]").text() == '大小球'){var gameType = 3}
				//判断是那个赛时
				if($("li[class='footb-on']").text() == '赛程'){var playStat = 3;}
				if($("li[class='footb-on']").text() == '即时'){var playStat = 1;}
				if($("li[class='footb-on']").text() == '完赛'){var playStat = 2;}
				//记录被删掉的联赛
				var arr1 = [];
				$("li[data-lid=0]").each(function(){
					if($(this).attr('data-lid')==0){
						arr1.push($(this).attr('data-select'));	
					}
				})
				var dataSelect = arr1.join();
				
				localStorage.setItem('dataSelect',dataSelect); 
				//记录选中的联赛
				var arr = [];
				$("li[data-lid=1]").each(function(){
					if($(this).attr('data-lid')==1){
						arr.push($(this).attr('data-select'));	
					}
				})
				var leagues = arr.join();
				console.log(leagues);
				localStorage.setItem('tdm',tdm);
				localStorage.setItem('gameType',gameType);
				localStorage.setItem('playStat',playStat);
				localStorage.setItem('leagues',leagues);
				a.get_instant({leagues:leagues,gameType:gameType,tdm:tdm,playStat:playStat},function(data){
					//console.log(data);
					$("#sx-box").hide();
					$("#index_clear").show();
					
					if(data == '') {
						if(playStat == 1){$(".box-one").empty();return $(".box-one").html(a.kong_zhi("<img src='img/kong.png'>","暂无数据"));}
						if(playStat == 2){$(".box-two").empty();return $(".box-two").html(a.kong_zhi("<img src='img/kong.png'>","暂无数据"));}
						if(playStat == 3){$(".box-three").empty();return $(".box-three").html(a.kong_zhi("<img src='img/kong.png'>","暂无数据"));}
					}else{
						a.get_doing(data,playStat,gameType);
					}
				})
			
		})
	}
	//living页面左上角返回按钮
	function living_fan(){
		$('#header-live').on('click','.living_fan',function(){
			
			if(href.pl){
				localStorage.clear();
				window.location.href = 'http://www.310data.com';
			}else{
				window.location.href = 'index.html';
			}
			
		})
	}
	//living主页返回按钮，返回大主页
	function index_back(){
		$(".live-header-tit img").click(function(){
			localStorage.clear();
			window.location.href = 'http://www.310data.com';
		})
	}
	function click_url(){
		$(".wrong-main").on('click','.wrong-btn',function(){
			window.location.href = "index.html";
			localStorage.clear();
		})
	}
	
	return {
		footerTab : footerTab,
		in_select : in_select,
		cli_data : cli_data,
		click_Competition : click_Competition,
		cli_select : cli_select,
		living_fan : living_fan,
		click_url : click_url,
		index_back : index_back
		
	}
})