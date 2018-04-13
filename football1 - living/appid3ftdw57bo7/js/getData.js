define(function(require, exports, module) {
	var $ = require("jquery");
	//var e = require("event");
	
	function getData_fix_company(obj, fn){
		if(obj.oTime){
			var url = 'http://api1.310data.com/interface/v2/score/matchs?leagues='+obj.leagues+'&gameType='+obj.gameType+'&tdm='+obj.tdm+'&playStat='+obj.playStat+'&day='+obj.oTime;
		}else{
			var url = 'http://api1.310data.com/interface/v2/score/matchs?leagues='+obj.leagues+'&gameType='+obj.gameType+'&tdm='+obj.tdm+'&playStat='+obj.playStat;
		}
		console.log(url);
		getData(url, fn);
	}
	//初始化即时比赛数据
	function get_instant(obj, fn){
		if(obj.oTime){
			var url = 'http://api1.310data.com/interface/v2/score/matchs?leagues='+obj.leagues+'&gameType='+obj.gameType+'&tdm='+obj.tdm+'&playStat='+obj.playStat+'&day='+obj.oTime;
		}else{
			var url = 'http://api1.310data.com/interface/v2/score/matchs?leagues='+obj.leagues+'&gameType='+obj.gameType+'&tdm='+obj.tdm+'&playStat='+obj.playStat;
		}
		console.log(url);
		getData(url, fn);
	}
	function get_doing(data,playStat,gameType,playstateId){
		console.log(data);
		$(".box-one").empty();
		$(".box-two").empty();
		$(".box-three").empty();
		var omg = playstateId;
	
		var oData = data;
		//console.log(oData);
		var old_t1 = null;
		var str ='';
		var titleId = 0;
		for(var i = 0;i < oData.length;i++){
			
			//console.log(oData[i])
			//if(oData[i].homeScore == undefined){continue;}
			//if(oData[i].rio == undefined){continue;}	
			//console.log(oData[i].playstateId);
			//获取赔率
			if(oData[i].rio&&gameType == 2){
				//console.log(888);
				var index_zhu = oData[i].rio.split(',')[0];
				var index_ke = oData[i].rio.split(',')[1];
				var index_pan = oData[i].capNum;
				
			}else if(oData[i].rio&&gameType == 1){
				var index_zhu = oData[i].rio.split(',')[0];
				var index_ke = oData[i].rio.split(',')[2];
				var index_pan = oData[i].rio.split(',')[1];
			}else if(oData[i].rio&&gameType == 3){
					var index_zhu = oData[i].rio.split(',')[0];
				var index_ke = oData[i].rio.split(',')[1];
				var index_pan = oData[i].capNum;
			}else{
				//console.log(666);
				index_zhu = '';
				index_ke = '';
				index_pan = '';
			}
			//判断亚盘盘口
				//亚盘正数
				if(gameType == 2){
					if(index_pan == 0.25){
						index_pan = '平/半';
					}else if(index_pan == 0.0){
						index_pan = '平';
					}else if(index_pan == 0.5){
						index_pan = '半球';
					}
					else if(index_pan == 0.75){
						index_pan = '半/一';
					}else if(index_pan == 1.0){
						index_pan = '一球';
					}else if(index_pan == 1.25){
						index_pan = '一/一半';
					}else if(index_pan == 1.5){
						index_pan = '一球半';
					}else if(index_pan == 1.75){
						index_pan = '球半/两球';
					}else if(index_pan == 2.0){
						index_pan = '两球';
					}else if(index_pan == 2.25){
						index_pan = '两/两半';
					}else if(index_pan == 2.5){
						index_pan = '两球半';
					}else if(index_pan == 2.75){
						index_pan = '两半/三';
					}else if(index_pan == 3.0){
						index_pan = '三球';
					}else if(index_pan == 3.25){
						index_pan = '三/三半';
					}else if(index_pan == 3.5){
						index_pan = '三球半';
					}else if(index_pan == 3.75){
						index_pan = '三半/四';
					}else if(index_pan == 4.0){
						index_pan = '四球';
					}else if(index_pan == 4.25){
						index_pan = '四/四半';
					}else if(index_pan == 4.5){
						index_pan = '四球半';
					}else if(index_pan == 4.75){
						index_pan = '四半/五';
					}else if(index_pan == 5.0){
						index_pan = '五球';
					}else{}
					//负数
					if(index_pan == '-0.25'){
						index_pan = '受平/半';
					}else if(index_pan == 0.0){
						index_pan = '受平';
					}else if(index_pan == '-0.5'){
						index_pan = '受半球';
					}
					else if(index_pan == '-0.75'){
						index_pan = '受半/一';
					}else if(index_pan == '-1.0'){
						index_pan = '受一球';
					}else if(index_pan == '-1.25'){
						index_pan = '受一/一半';
					}else if(index_pan == '-1.5'){
						index_pan = '受一球半';
					}else if(index_pan == '-1.75'){
						index_pan = '受半/两';
					}else if(index_pan == '-2.0'){
						index_pan = '受两球';
					}else if(index_pan == '-2.25'){
						index_pan = '受两/两半';
					}else if(index_pan == '-2.5'){
						index_pan = '受两球半';
					}else if(index_pan == '-2.75'){
						index_pan = '受两半/三';
					}else if(index_pan == '-3.0'){
						index_pan = '受三球';
					}else if(index_pan == '-3.25'){
						index_pan = '受三/三半';
					}else if(index_pan == '-3.5'){
						index_pan = '受三球半';
					}else if(index_pan == '-3.75'){
						index_pan = '受三半/四';
					}else if(index_pan == '-4.0'){
						index_pan = '受四球';
					}else if(index_pan == '-4.25'){
						index_pan = '受四/四半';
					}else if(index_pan == '-4.5'){
						index_pan = '受四球半';
					}else if(index_pan == '-4.75'){
						index_pan = '受四半/五';
					}else if(index_pan == '-5.0'){
						index_pan = '受五球';
					}else{}
				}else{}
				//数据显示为封盘		
				if(index_zhu == 0 || index_ke == 0){
					index_zhu = '封盘';
					index_ke = '封盘';
					index_pan = '封盘';			
				}
		//console.log(oData[i]);
		//获得比赛时间
			var future_time=oData[i].date.split(' ')[1].substring(0,5);
			var oRed = '';
		//判断即时，完赛，赛程时间开始
			//赛程
			
			if(playStat == 3){			
				oData[i].minutes = future_time;	
				//判断比分开始
				if(oData[i].homeScore == undefined || oData[i].awayScore == undefined || oData[i].homeScore == 0 || oData[i].awayScore == 0){
					oData[i].homeScore = '-';
					oData[i].awayScore = '-';
				}
				//判断比分结束
			}
			//完赛
			if(playStat == 2){	
				if(oData[i].homeScore == null){
					oData[i].homeScore = '-';
					oData[i].homeScore = '-';
				}
				if(oData[i].homeHalfScore == null){
					oData[i].homeScore = '';
					oData[i].homeScore = '';
					
				}
				oData[i].minutes = '完赛';
				oData[i].gang = '-';
				oData[i].ban = '半场';
			}
			
			//即时
			if(playStat == 1){
	
				if(oData[i].homeScore == null){
					oData[i].homeScore='-';
					oData[i].awayScore='-';
					
				}
				if(oData[i].homeHalfScore == null){
					oData[i].homeHalfScore='';
					oData[i].awayHalfScore='';
					oData[i].gang = '';
					oData[i].ban = '';
				}else{
					console.log(666);
					oData[i].gang = '-';
					oData[i].ban = '半场';
				}
				//	console.log(oData[i].minutes);
				if(oData[i].minutes > 90){
					oData[i].minutes = '90+';
					
				}else if(oData[i].minutes>0 &&oData[i].minutes < 90){
					
					oData[i].minutes = oData[i].minutes+'’';
					
					
				}else{
					oData[i].minutes = '未赛';
					
				}
				
			}
			//console.log(oData[i]);
			//比赛开始时间
			var start_time = oData[i].date.split(' ')[1].substring(0,5);
			//年月日
			var d = oData[i].date.split(' ')[0].substring(0,4)+'/'+oData[i].date.split(' ')[0].substring(5,7)+'/'+oData[i].date.split(' ')[0].substr(8,2);
			//根据时间和日期判断是星期
			var i_time=oData[i].date.split(' ')[1];
			var o_week = d +','+ i_time;
			var endtime=new Date(o_week).getTime();
			var wek = week(endtime);
			var id = titleId++;
			//初始化自定义属性
			var time = oData[i].date.split(" ");
			var r_time = time[0].split("-")[2] + "日";
			var shi_time = time[1].split(":")[0] + ":" + time[1].split(":")[1];
			//console.log(shi_time);
			var z_time = r_time + shi_time;
			var mid = oData[i].id;
			var ri_qi = time[0];
			var shijian = shi_time;
			var zhu = oData[i].homeName.substring(0,10);
			var ke = oData[i].awayName.substring(0,10);
			var sai = oData[i].leagueName.substring(0,6);
			var state = playStat;
			var hs = oData[i].homeScore;
			var as = oData[i].awayScore;
			var bhs = oData[i].homeHalfScore;
			var bas = oData[i].awayHalfScore;
			var playstateId = oData[i].playstateId;
			//赔率颜色变化
			if(oData[i].upDown == null){
				
			}else{
				var color_zhu = oData[i].upDown.split(',')[0];
				var color_pan = oData[i].upDown.split(',')[1];
				var color_ke = oData[i].upDown.split(',')[2];
				
			}
			var css = "";
			var c = "";
			var cs = "";
						if(color_zhu == '1'){var css = 'zs-red';} else if(color_zhu == '0') {} else if(color_zhu == '-1') {var css = 'zs-green';}else{}if(color_pan == '1') {var c = 'zs-red';} else if(color_pan == '0') {} else if(color_pan == '-1') {var c = 'zs-green';}else{}if(color_ke == '1') {var cs = 'zs-red';} else if(color_ke == '0') {} else if(color_ke == '-1') {var cs = 'zs-green';}else{}
			//var gt = 
			if(oData[i].minutes){var onIng = oData[i].minutes;}else{}
			
			var domTitle = '<div class="footb-data oh"  title-id="'+id+'" id="box-'+id+'"><div class="dl t11 oTime">'+d+'&nbsp;'+wek+'</div><div class="dr" id="live-btn"><img src="img/score/zb_c4.png"></div></div>';
			var domContent = '<div class="footb-lists" data-pid="'+playstateId+'" data-on="'+onIng+'" data-state="'+state+'" data-mid="' + mid + '" data-ri_qi="' + ri_qi + '" data-shijian ="' + shijian  + '"  data-zhu="' + zhu + '"  data-ke="' + ke + '" data-sai="' + sai + '" data-hs="'+hs+'" data-as="'+as+'" data-bhs="'+bhs+'" data-bas="'+bas+'"><a href="javascript:;"><div class="footb-lists-box"><div class="fotb-lists-left">'+oData[i].minutes+'</div><div class="fotb-lists-conter"><div class="f-l-c-lis oh"><div>'+sai+'</div><div>'+start_time+'</div><div class="ban">'+oData[i].ban+'</div><div class="f-l-c-bf"><span>'+oData[i].homeHalfScore+'</span><span>'+oData[i].gang+'</span><span>'+oData[i].awayHalfScore+'</span></div></div><div class="f-l-c-name oh"><span class="oRed">'+oData[i].homeScore+'</span><span>'+zhu+'</span></div><div class="f-l-c-name oh"><span class="oRed">'+oData[i].awayScore+'</span><span>'+ke+'</span></div></div><div class="fotb-lists-right"><span class="'+css+'">'+index_zhu+'</span><span class="'+c+'">'+index_pan+'</span><span class="'+cs+'">'+index_ke+'</span></div></div></a></div>';
			if(old_t1 != d){str =domTitle+domContent;}else{str = domContent;}
			old_t1 = d;
			loader("hide");
			;
			if(omg){
				console.log(666);
				//赛程
				if(omg == 0){$(".box-three").append(str);$('.f-l-c-lis .ban').text('');$('.f-l-c-bf span').text('');click_calender();}
				//即时
				if(omg == 3&& playStat==3){$(".box-three").append(str);$('.box-three #live-btn').empty();}
				if(omg == 3&& playStat ==1){$(".box-one").append(str);$('.box-one #live-btn').empty();}
				//完赛
				if(omg == 1){$(".box-two").append(str);click_calender();}
			}else{
				//赛程
				if(playStat == 3){$(".box-three").append(str);$('.f-l-c-lis .ban').text('');$('.f-l-c-bf span').text('');click_calender();}
				//即时
				if(playStat == 1){$(".box-one").append(str);$('.box-one #live-btn').empty();}
				//完赛
				if(playStat == 2){
					$(".box-two").append(str);click_calender();
					var oRed = $(".box-two .oRed");
					for(var i =0 ; i< oRed.length; i++){
						$(oRed[i]).css({"color":"red"});
					}
				}
			}
			fon_color();
			
			//标题浮动跟随
			if($("li[class='footb-on']").text() == '即时'){
				$(".box-one .footb-data").each(function(){
			        var id = $(this).attr("title-id");
			        fixedTitle($("#box-"+id));
			    })
			}else if($("li[class='footb-on']").text() == '完赛'){
				$(".box-two .footb-data").each(function(){
			        var id = $(this).attr("title-id");
			        //console.log(666);
			        fixedTitle($("#box-"+id));
			    })
			}else if($("li[class='footb-on']").text() == '赛程'){
				$(".box-three .footb-data").each(function(){
			        var id = $(this).attr("title-id");
			        fixedTitle($("#box-"+id));
			    })
			}else{}
		}	
		if($(".box-one").text() == ''&&playStat == 1){$(".box-one").empty();return $(".box-one").html(kong_zhi("<img src='img/kong.png'>","暂无数据"));}else{$('.box-one').append('<div class="kong_bottom"></div>');}
		if($(".box-two").text() == ''&&playStat == 2){$(".box-two").empty();return $(".box-two").html(kong_zhi("<img src='img/kong.png'>","暂无数据"));}else{$('.box-two').append('<div class="kong_bottom"></div>');}
		if($(".box-three").text() == ''&&playStat == 3){$(".box-three").empty();return $(".box-three").html(kong_zhi("<img src='img/kong.png'>","暂无数据"));}else{$('.box-three').append('<div class="kong_bottom"></div>');}
		
		
		
		
	}
	//标题浮动跟随
	function fixedTitle($boxDom){
		var itemOffsetTop = $boxDom.offset().top;
		//console.log(itemOffsetTop);
		//var itemOuterHeight = $boxDom.outerHeight();
		var old = 0;
		$(window).scroll(function () {
			var winScrollTop = $(window).scrollTop();

				if(!(winScrollTop > itemOffsetTop-75)) {
                	
                    if (old != 1){
                    	//console.log(555)
                        fixedChange($boxDom,1);
                        old = 1;
                    }
               }else {
                    if (old != 0){
                    	//console.log(666)
                        fixedChange($boxDom,0);
                        old = 0;
                    }
                }
				
		})
		
		function fixedChange($boxDom,val){
                if (val){
                    $boxDom.removeClass("titleFix");
                }else{
                    $boxDom.addClass("titleFix");
                }
        }
	}
	//设置页面获取数据
	function setUp(){
		//设置页面公司类型和玩法点击确定
		$('.affbuttn-box').on('click','.aff-buttn',function(){
			confirm();
			function confirm(){
				
				if($("li[class='footb-on']").text() == '赛程'){var playStat = 3;}
				if($("li[class='footb-on']").text() == '即时'){var playStat = 1;}
				if($("li[class='footb-on']").text() == '完赛'){var playStat = 2;}
				//判断选择哪种玩法
				if($("li[data-type=1]").text() == '欧赔'){var gameType = 1}
				if($("li[data-type=1]").text() == '亚盘'){var gameType = 2}
				if($("li[data-type=1]").text() == '大小球'){var gameType = 3}
				//console.log(gameType);
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
					
				
				//获取联赛数据
				getSet({playStat:playStat}, function(data) {
					
					var arr = [];
					for(var i = 0; i < data.length; i++) {
						arr.push(data[i].id);
					}
					var leagues= arr.join();
					$("#set").hide();
					$("#all-index").show();
					$(".box-one").empty();
					$(".box-two").empty();
					$(".box-three").empty();
					if(playStat == 3){loader("show",$(".box-three"));}
					if(playStat == 1){loader("show",$(".box-one"));}
					if(playStat == 2){loader("show",$(".box-two"));}
					get_instant({leagues:leagues,gameType:gameType,tdm:tdm,playStat:playStat},function(data){
						if(data == ''){
							if(playStat == 3){$(".box-three").empty();return $(".box-two").html(kong_zhi("<img src='img/kong.png'>","暂无数据"));}
							if(playStat == 1){$(".box-one").empty();return $(".box-two").html(kong_zhi("<img src='img/kong.png'>","暂无数据"));}
							if(playStat == 2){$(".box-two").empty();return $(".box-two").html(kong_zhi("<img src='img/kong.png'>","暂无数据"));}
						}
						else{
							get_doing(data,playStat,gameType);
						}
						
					});
				})
			}					
		})		
	}
	//点击日期图片，出现日期遮罩层
	function click_calender(){
		$('#all-index #live-btn').each(function(){
			//点击日期遮罩层出现
			$(this).click(function(){
				//初始化指数页面筛选日期数据
				//console.log(666);
				get_rili();
				$("#live-mask").show();
				//$("body,html").css({"overflow":"hidden"});
			})	
			$("#mast-cloe").click(function(){
				$("#live-mask").hide();
				//$("body,html").css({"overflow":"visible"});
			})
		})
		
	}
	//获取指数日历数据
	function get_rili(){
		var myDate = new Date();
		var years = myDate.getFullYear();
		var months = myDate.getMonth() + 1;
		var days = myDate.getDate();
		var week = myDate.getDay();
		//获取总的毫秒数
		var minutes = myDate.getTime();
		//获取当前日期
		var now_date = myDate.getDate();
		//获取一天毫秒数
		var mb = 86400000;
		//console.log(minutes-2*ms);
		function arr(time) {
			//根据毫秒数，转化为固定的时间
			var newTime = new Date(time);
			//console.log(newTime);
			//将日期部分转化为字符串
			var str_time = newTime.toDateString();
			//console.log(str_time);
			var arr_time = str_time.split(" ");
			//console.log(arr_time);
			return arr_time;
		}
	
		//console.log(arr(minutes)[2]);	
	
		var oTime = (years + "-" + months + "-" + days);
		//console.log(oTime);
		//获取当前星期
		function pan(str){
			if(str == 'Mon'){str = '周一'}
			if(str == 'Tue'){str = '周二'}
			if(str =='Wed'){str = '周三'}
			if(str == 'Thu'){str = '周四'}
			if(str == 'Fri'){str = '周五'}
			if(str == 'Sat'){str = '周六'}
			if(str == 'Sun'){str = '周日'}
			return str;
		}
		//初始化未开赛弹出层日期数据
		if($("li[class='footb-on']").text() == '赛程'){
			var in_title = '近七天未开赛赛事';
			//获取当前天数
			var	last_date = arr(minutes)[2];
			next_date_1 = arr(minutes + mb)[2];
			next_date_2 = arr(minutes + 2 * mb)[2];
			next_date_3 = arr(minutes + 3 * mb)[2];
			next_date_4 = arr(minutes + 4 *mb)[2];
			next_date_5 = arr(minutes + 5 * mb)[2];
			next_date_6 = arr(minutes + 6 * mb)[2];
			next_date_7 = arr(minutes + 7 * mb)[2];
			
			day_time = arr(minutes)[0];
			pan(day_time);
			next_day_1 = arr(minutes + mb)[0];
			pan(next_day_1);
			next_day_2 = arr(minutes + 2 * mb)[0];
			pan(next_day_2);
			next_day_3 = arr(minutes + 3 * mb)[0];
			pan(next_day_3);
			next_day_4 = arr(minutes + 4 * mb)[0];
			pan(next_day_4);
			next_day_5 = arr(minutes + 5 * mb)[0];
			pan(next_day_5);
			next_day_6 = arr(minutes + 6 * mb)[0];
			pan(next_day_6);
			next_day_7 = arr(minutes + 7 * mb)[0];
			pan(next_day_7);
			//获取当前月份
			month_n = arr(minutes)[1];
			next_month_1 = arr(minutes + mb)[1];
			next_month_2 = arr(minutes + 2 * mb)[1];
			next_month_3 = arr(minutes + 3 * mb)[1];
			next_month_4 = arr(minutes + 4 *mb)[1];
			next_month_5 = arr(minutes + 5 * mb)[1];
			next_month_6 = arr(minutes + 6 * mb)[1];
			next_month_7 = arr(minutes + 7 * mb)[1];
			
		}else if($("li[class='footb-on']").text() == '完赛'){
			var in_title = '近七天完场赛事';
			var	last_date = arr(minutes)[2];
			next_date_1 = arr(minutes - mb)[2];
			next_date_2 = arr(minutes - 2 * mb)[2];
			next_date_3 = arr(minutes - 3 * mb)[2];
			next_date_4 = arr(minutes - 4 *mb)[2];
			next_date_5 = arr(minutes - 5 * mb)[2];
			next_date_6 = arr(minutes - 6 * mb)[2];
			next_date_7 = arr(minutes - 7 * mb)[2];
			
			day_time = arr(minutes)[0];
			pan(day_time);
			next_day_1 = arr(minutes - mb)[0];
			pan(next_day_1);
			next_day_2 = arr(minutes - 2 * mb)[0];
			pan(next_day_2);
			next_day_3 = arr(minutes - 3 * mb)[0];
			pan(next_day_3);
			next_day_4 = arr(minutes - 4 * mb)[0];
			pan(next_day_4);
			next_day_5 = arr(minutes - 5 * mb)[0];
			pan(next_day_5);
			next_day_6 = arr(minutes - 6 * mb)[0];
			pan(next_day_6);
			next_day_7 = arr(minutes - 7 * mb)[0];
			pan(next_day_7);
			//获取当前月份
			month_n = arr(minutes)[1];
			next_month_1 = arr(minutes - mb)[1];
			next_month_2 = arr(minutes - 2 * mb)[1];
			next_month_3 = arr(minutes - 3 * mb)[1];
			next_month_4 = arr(minutes - 4 *mb)[1];
			next_month_5 = arr(minutes - 5 * mb)[1];
			next_month_6 = arr(minutes - 6 * mb)[1];
			next_month_7 = arr(minutes - 7 * mb)[1];
		}
		var str= '';
		str='<li>'+in_title+'</li><li class="mast-on">最近</li><li><span>'+next_month_1+'</span>月<b>'+next_date_1+'</b>日<i>'+pan(next_day_1)+'</i></li><li><span>'+next_month_2+'</span>月<b>'+next_date_2+'</b>日<i>'+pan(next_day_2)+'</i></li><li><span>'+next_month_3+'</span>月<b>'+next_date_3+'</b>日<i>'+pan(next_day_3)+'</i></li><li><span>'+next_month_4+'</span>月<b>'+next_date_4+'</b>日<i>'+pan(next_day_4)+'</i></li><li><span>'+next_month_5+'</span>月<b>'+next_date_5+'</b>日<i>'+pan(next_day_5)+'</i></li><li><span>'+next_month_6+'</span>月<b>'+next_date_6+'</b>日<i>'+pan(next_day_6)+'</i></li><li><span>'+next_month_7+'</span>月<b>'+next_date_7+'</b>日<i>'+pan(next_day_7)+'</i></li>';
		$(".mast-tab").empty();
		$(".mast-tab").append(str);
		for(var i =2 ; i<=8; i++){
			if($(".mast-tab li").eq(i).find('span').text()=='Jan'){$(".mast-tab li").eq(i).find('span').text('1')};
			if($(".mast-tab li").eq(i).find('span').text()=='Feb'){$(".mast-tab li").eq(i).find('span').text('2')};
			if($(".mast-tab li").eq(i).find('span').text()=='Mar'){$(".mast-tab li").eq(i).find('span').text('3')};
			if($(".mast-tab li").eq(i).find('span').text()=='Apr'){$(".mast-tab li").eq(i).find('span').text('4')};
			if($(".mast-tab li").eq(i).find('span').text()=='May'){$(".mast-tab li").eq(i).find('span').text('5')};
			if($(".mast-tab li").eq(i).find('span').text()=='Jun'){$(".mast-tab li").eq(i).find('span').text('6')};
			if($(".mast-tab li").eq(i).find('span').text()=='Jul'){$(".mast-tab li").eq(i).find('span').text('7')};
			if($(".mast-tab li").eq(i).find('span').text()=='Aug'){$(".mast-tab li").eq(i).find('span').text('8')};
			if($(".mast-tab li").eq(i).find('span').text()=='Sep'){$(".mast-tab li").eq(i).find('span').text('9')};
			if($(".mast-tab li").eq(i).find('span').text()=='Oct'){$(".mast-tab li").eq(i).find('span').text('10')};
			if($(".mast-tab li").eq(i).find('span').text()=='Nov'){$(".mast-tab li").eq(i).find('span').text('11')};
			if($(".mast-tab li").eq(i).find('span').text()=='Dec'){$(".mast-tab li").eq(i).find('span').text('12')};
		}
		
	}
	//加载loading动画		
	function loader (val,dom){
        $("#loader").remove();
       // console.log(dom);
        if (!val||val=="hide") return false;
        var h ='<div class="loader" id="loader">加载中</div>';
        var dom = dom || $("body");
        dom.append(h);
        return false;
    }	
    //页面为空显示图片
    function kong_zhi(a,b){
        var b = b || ""
        return '<div class="kong_zhi">'+a+'</div>';
    }
	//获取数据
	function getData(url, fn) {
		$.ajax({
			url: url,
			type:'POST',
			dataType: 'jsonp',
			success: function(data) {
				//console.log(data);
				fn(data);

			},
			error: function(re) {
				//console.log(666);
				window.location.href = '404.html';
			}
		})
	}
	//url/对象互转
	function href() {
		var url = location.search;
		// console.log(url);
		json = {};
		if(url.indexOf("?") === -1) return {};
		var arr = url.substr(1).split("&");
		for(var i = 0, len = arr.length; i < len; i++) {
			json[arr[i].split("=")[0]] =arr[i].split("=")[1];
		}
		//console.log(json);
		return json;
	}
	//当即赔或初陪为0时，字体颜色变化
	function fon_color(){
		var x = $(".fotb-lists-right span");
		for(var i = 0; i < x.length; i++){
			var c =$(x[i]).text();
			
			if(c == '封盘'){
				//console.log(666);
				$(x[i]).css({"color":"rgb(0,0,0)"});
			}
		}
	}
	//页面为空显示图片
    function kong_zhi(a,b){
        var b = b || ""
        return '<div class="kong_zhi">'+a+'</div>';
    }
    //根据日期和时间转化成星期
	function week(endtime){
		var myDate = new Date();
		//获取总的毫秒数
		var minutes =endtime;
		//获取一天毫秒数
		var ms = 86400000;
		//console.log(minutes-2*ms);
		function arr(time) {
			//根据毫秒数，转化为固定的时间
			var newTime = new Date(time);
			//将日期部分转化为字符串
			var str_time = newTime.toDateString();
			//console.log(str_time);
			var arr_time = str_time.split(" ");
			return arr_time;
		}
		
		//获取当前星期
		function pan(str){
			if(str == 'Mon'){str = '星期一'}
			if(str == 'Tue'){str = '星期二'}
			if(str =='Wed'){str = '星期三'}
			if(str == 'Thu'){str = '星期四'}
			if(str == 'Fri'){str = '星期五'}
			if(str == 'Sat'){str = '星期六'}
			if(str == 'Sun'){str = '星期日'}
			return str;
		}
		day_time = arr(minutes)[0];
		return pan(day_time);
		
				
	}
	//初始化living头部数据
	function living_top(matchId,data_time,time,zhu,ke,sai,hs,bhs,as,bas,state,onIng,pid){
		//console.log(state);
		var o_matchId = matchId;
		var data_time = data_time;
		//console.log(data_time);
		var time = time;
		var zhu = zhu;
		var ke = ke;
		var sai = sai;
		var hs = hs;
		var as = as;
		var bhs = bhs;
		var bas = bas;
		var state = state;
		var onIng = onIng;
		var pid = pid;
		if(pid == 3){var zhu_score = hs;var ke_score = as;var ban_zhu =bhs;var ban_ke = bas;var vs=':';var zuo='(';var mao = ':';var you = ')';}
		if(pid == 1){var zhu_score = hs;var ke_score = as;var ban_zhu =bhs;var ban_ke = bas;onIng='完赛';vs=':';var zuo='(';var mao = ':';var you = ')'; }
		if(pid == 0){var zhu_score = '';var ke_score = '';var ban_zhu ='';var ban_ke = '';onIng='未赛';vs='vs';var zuo='';var mao = '';var you = '';}
		var str_header = '<h1>'+sai+'</h1>';
		var str_top = '<div class="live-bro-name"><div>'+zhu+'</div></div><div class="live-bro-time"><div class="bro-time-list oh"><aside class="dl">'+data_time+'</aside><aside class="dl"><span>'+time+'</span></aside></div><div class="live-bro-bf oh"><span>'+zhu_score+'</span><span>'+vs+'</span><span>'+ke_score+'</span></div><div class="bro-name-half oh"><span>'+zuo+'</span><span>'+ban_zhu+'</span><span class="vs">'+mao+'</span><span>'+ban_ke+'</span><span>'+you+'</span></div><div class="bro-stoped" >'+onIng+'</div></div><div class="live-bro-name2">'+ke+'</div>';	
	        $('#header_top').append(str_top);
       		$(".header_sai").append(str_header);
	}
	
	//初始化living头部数据
	function living_topp(matchId,data_time,time,zhu,ke,sai,hs,bhs,as,bas,onIng,pl){
		//console.log(state);
		var o_matchId = matchId;
		var data_time = data_time;
		//console.log(data_time);
		var time = time;
		var zhu = zhu;
		var ke = ke;
		var sai = sai;
		var hs = hs;
		var as = as;
		var bhs = bhs;
		var bas = bas;
		var onIng = onIng;
		var pl = pl;
		if(pl == 3){var zhu_score = hs;var ke_score = as;var ban_zhu =bhs;var ban_ke = bas;var vs=':';var zuo='(';var mao = ':';var you = ')';}
		if(pl == 1){var zhu_score = hs;var ke_score = as;var ban_zhu =bhs;var ban_ke = bas;onIng='完赛';vs=':';var zuo='(';var mao = ':';var you = ')'; }
		if(pl == 0){var zhu_score = '';var ke_score = '';var ban_zhu ='';var ban_ke = '';onIng='未开赛';vs='vs';var zuo='';var mao = '';var you = '';}
		var str_header = '<h1>'+sai+'</h1>';
		var str_top = '<div class="live-bro-name"><div>'+zhu+'</div></div><div class="live-bro-time"><div class="bro-time-list oh"><aside class="dl">'+data_time+'</aside><aside class="dl"><span>'+time+'</span></aside></div><div class="live-bro-bf oh"><span>'+zhu_score+'</span><span>'+vs+'</span><span>'+ke_score+'</span></div><div class="bro-name-half oh"><span>'+zuo+'</span><span>'+ban_zhu+'</span><span class="vs">'+mao+'</span><span>'+ban_ke+'</span><span>'+you+'</span></div><div class="bro-stoped" >'+onIng+'</div></div><div class="live-bro-name2">'+ke+'</div>';	
	        $('#header_top').append(str_top);
       		$(".header_sai").append(str_header);
	}
	//获取球队统计数据
	function getData_statistics(obj, fn){
		var url = 'http://api1.310data.com/interface/match/matchStatic/'+obj.matchId;
		//console.log(url);
		getData(url, fn);
	}
	//初始化living红黄牌
	function sign(o_matchId){
		var matchId = o_matchId;
		getData_statistics({matchId:matchId},function(data){
			//console.log(data);
			var str_statistics = '';
			var str_jiao = '';
			var str_hong = '';
			
			var k_str_statistics = '';
			var k_str_jiao = '';
			var k_str_hong = '';
		
			for(var i = 0; i < data.length; i++){
				
				var code_id = data[i].staticType;
				//主队红黄牌角球数据
				if(code_id == "1034-2058"){
					if(data[i].homeData){
						str_statistics = '<span>'+data[i].homeData+'</span>';	
						$(".huangL").text('');
						$(".huangL").append(str_statistics);
					}else{}
				}
				if(code_id == "1025-2049"){
					//console.log(666);
					if(data[i].homeData){
						str_jiao = '<span>'+data[i].homeData+'</span>';	
						$(".jiaoL").text('');
						$(".jiaoL").append(str_jiao);
					}else{}
				}
				if(code_id == "1032-2056"){
					//console.log(666);
					//console.log(666);
					if(data[i].homeData){
						str_hong = '<span>'+data[i].homeData+'</span>';
						$(".redL").text('');
						$(".redL").append(str_hong);
					}else{}
					
				}
				//客队红黄牌角球数据
				if(code_id == "1034-2058"){
					if(data[i].awayData){
						 k_str_statistics = '<span>'+data[i].awayData+'</span>';	
						  $(".huangR").text('');
						$(".huangR").append(k_str_statistics);
					}else{}
				}
				if(code_id == "1025-2049"){
					if(data[i].awayData){
						//console.log(666);
						 k_str_jiao = '<span>'+data[i].awayData+'</span>';	
						 $(".jiaoR").text('');
						$(".jiaoR").append( k_str_jiao);
					}else{}
				}
				if(code_id == "1032-2056"){
					//console.log(666);
					//console.log(666);
					if(data[i].awayData){
						k_str_hong = '<span>'+data[i].awayData+'</span>';
						$(".huangR").text('');
						$(".huangR").append(k_str_hong);
					}else{}
					
				}
			}
		})
	}
	//living获取球队阵容数据
	function getData_battle_array(obj, fn){
		var url = 'http://api1.310data.com/interface/match/matchPlayer/'+obj.matchId;
		//console.log(url);
		getData(url, fn);
	}
	//获取阵容页面的数据
	function battle_array(o_matchId){	
		//console.log(o_matchId);
		var matchId = o_matchId;
		//console.log(matchId);
		getData_battle_array({matchId:matchId},function(data){
		//console.log(data);
			var str_z = "";
				if(data == '') {
					$(".living_zhen").empty();return $(".living_zhen").html(kong_zhi("<img src='img/kong.png'>","暂无数据"));
				}else{
			
					// $(".oImg_zhen .zimg").hide();
					str_z = '<aside class="array-left dl"><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><th><p class="array-tit">主队阵容</p></th></tr> <tr><td>'+data[0].jerseyNumber+'. <nbsp/> '+data[0].playerName.substr(0,7)+'</td></tr><tr><td>'+data[1].jerseyNumber+'. <nbsp/> '+data[1].playerName.substr(0,7)+'</td></tr><tr><td>'+data[2].jerseyNumber+'. <nbsp/> '+data[2].playerName.substr(0,7)+'</td></tr><tr><td>'+data[3].jerseyNumber+'. <nbsp/> '+data[3].playerName.substr(0,7)+'</td></tr><tr><td>'+data[4].jerseyNumber+'. <nbsp/> '+data[4].playerName.substr(0,7)+'</td></tr><tr><td>'+data[5].jerseyNumber+'. <nbsp/> '+data[5].playerName.substr(0,7)+'</td></tr><tr><td>'+data[6].jerseyNumber+'. <nbsp/> '+data[6].playerName.substr(0,7)+'</td></tr><tr><td>'+data[7].jerseyNumber+'. <nbsp/> '+data[7].playerName.substr(0,7)+'</td></tr><tr><td>'+data[8].jerseyNumber+'. <nbsp/> '+data[8].playerName.substr(0,7)+'</td></tr><tr><td>'+data[9].jerseyNumber+'. <nbsp/> '+data[9].playerName.substr(0,7)+'</td></tr><tr><td>'+data[10].jerseyNumber+'. <nbsp/> '+data[10].playerName.substr(0,7)+'</td></tr></table> </aside><aside class="array-right dr"><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><th><p class="array-tit2 dr">客队阵容</p></th></tr> <tr><td>'+data[11].jerseyNumber+'. <nbsp/> '+data[11].playerName.substr(0,7)+'</td></tr><tr><td>'+data[12].jerseyNumber+'. <nbsp/> '+data[12].playerName.substr(0,7)+'</td></tr><tr><td>'+data[13].jerseyNumber+'. <nbsp/> '+data[13].playerName.substr(0,7)+'</td></tr><tr><td>'+data[14].jerseyNumber+'. <nbsp/> '+data[14].playerName.substr(0,7)+'</td></tr><tr><td>'+data[15].jerseyNumber+'. <nbsp/> '+data[15].playerName.substr(0,7)+'</td></tr><tr><td>'+data[16].jerseyNumber+'. <nbsp/> '+data[16].playerName.substr(0,7)+'</td></tr><tr><td>'+data[17].jerseyNumber+'. <nbsp/> '+data[17].playerName.substr(0,7)+'</td></tr><tr><td>'+data[18].jerseyNumber+'. <nbsp/> '+data[18].playerName.substr(0,7)+'</td></tr><tr><td>'+data[19].jerseyNumber+'. <nbsp/> '+data[19].playerName.substr(0,7)+'</td></tr><tr><td>'+data[20].jerseyNumber+'. <nbsp/> '+data[20].playerName.substr(0,7)+'</td></tr><tr><td>'+data[21].jerseyNumber+'. <nbsp/> '+data[21].playerName.substr(0,7)+'</td></tr></table> </aside>';   
					//loader("hide");
					$('.living_zhen').append(str_z);
					//$(".array-right").after("<div class='botm'></div>");
				}			
		})
	}
	//获取球队统计数据
	function getData_statistics(obj, fn){
		var url = 'http://api1.310data.com/interface/match/matchStatic/'+obj.matchId;
		//console.log(url);
		getData(url, fn);
	}
	//初始化统计页面的数据(重复)
	function statistics_r(o_matchId){
		var matchId = o_matchId;

		getData_statistics({matchId:matchId},function(data){
			
//			if(data == ''){
//				$("#tong").empty();
//				return $("#tong").html(mip("<img src='img/kong.png'>","暂无数据"))
//			}else{
//				loader("hide");
//				$(".oIm .yin").hide();	
//				$("#tong").css({"display":"block"});	
//
			var str_statistics = '';
			for(var i = 0; i < data.length; i++){
				var code_id = data[i].staticType;
				console.log(code_id);
				//进球
				if(code_id == "1029-2053"){
				
					//console.log(666)
					str_statistics='<div class="dl">'+data[i].homeData+'</div>';
					var str_statistics_jin= '';
						str_statistics_jin='<div class="dr">'+data[i].awayData+'</div>';
						$(".tc_jin1").text("");
					$(".tc_jin1").append(str_statistics);
					$(".tc_jin2").text("");
					$(".tc_jin2").append(str_statistics_jin);
					if(data[i].homeData > data[i].awayData){
						$(".oBig_jin span").addClass("pro-green");
						var b = $(".oBig_jin span").width();
						var a = data[i].awayData/data[i].homeData;
						//console.log(b*a);
						$(".oBig_jin1 span").css({"width":b*a})
						$(".oBig_jin1 span").addClass("pro-blue");
					}else if(data[i].homeData < data[i].awayData){
						$(".oBig_jin1 span").addClass("pro-blue");
						var b = $(".oBig_jin1 span").width();
						var a = data[i].homeData/data[i].awayData;
						$(".oBig_jin span").css({"width":b*a})
						$(".oBig_jin span").addClass("pro-green");					
					}else if(data[i].homeData == data[i].awayData){
						$(".oBig_jin1 span").addClass("pro-blue");
						var b = $(".oBig_jin1 span").width();
						var a = data[i].homeData/data[i].awayData;
						$(".oBig_jin span").css({"width":b*a})
						$(".oBig_jin span").addClass("pro-green");
						
					}else{}
				}
				//黄牌
				else if(code_id == "1034-2058"){
					str_statistics='<div class="dl">'+data[i].homeData+'</div>';
					var str_statistics_jin= '';
						str_statistics_jin='<div class="dr">'+data[i].awayData+'</div>';
						$(".tc_huang1").text("");
					$(".tc_huang1").append(str_statistics);
					$(".tc_huang2").text("");
					$(".tc_huang2").append(str_statistics_jin);
					if(data[i].homeData > data[i].awayData){
						$(".oBig_huang span").addClass("pro-green");
						var b = $(".oBig_huang span").width();
						var a = data[i].awayData/data[i].homeData;
						//console.log(b*a);
						$(".oBig_huang1 span").css({"width":b*a})
						$(".oBig_huang1 span").addClass("pro-blue");
					}else if(data[i].homeData < data[i].awayData){
						$(".oBig_huang1 span").addClass("pro-blue");
						var b = $(".oBig_huang1 span").width();
						var a = data[i].homeData/data[i].awayData;
						$(".oBig_huang span").css({"width":b*a})
						$(".oBig_huang span").addClass("pro-green");					
					}else if(data[i].homeData == data[i].awayData){
						$(".oBig_huang1 span").addClass("pro-blue");
						var b = $(".oBig_huang1 span").width();
						var a = data[i].homeData/data[i].awayData;
						$(".oBig_huang span").css({"width":b*a})
						$(".oBig_huang span").addClass("pro-green");
						
					}else{}
				}
				//红牌
				else if(code_id == "1032-2056"){
					str_statistics='<div class="dl">'+data[i].homeData+'</div>';
					var str_statistics_jin= '';
						str_statistics_jin='<div class="dr">'+data[i].awayData+'</div>';
						$(".tc_hong1").text("");
					$(".tc_hong1").append(str_statistics);
					$(".tc_hong2").text("");
					$(".tc_hong2").append(str_statistics_jin);
					if(data[i].homeData > data[i].awayData){
						$(".oBig_hong span").addClass("pro-green");
						var b = $(".oBig_hong span").width();
						var a = data[i].awayData/data[i].homeData;
						//console.log(b*a);
						$(".oBig_hong1 span").css({"width":b*a})
						$(".oBig_hong1 span").addClass("pro-blue");
					}else if(data[i].homeData < data[i].awayData){
						$(".oBig_hong1 span").addClass("pro-blue");
						var b = $(".oBig_hong1 span").width();
						var a = data[i].homeData/data[i].awayData;
						$(".oBig_hong span").css({"width":b*a})
						$(".oBig_hong span").addClass("pro-green");					
					}else if(data[i].homeData == data[i].awayData){
						$(".oBig_hong1 span").addClass("pro-blue");
						var b = $(".oBig_huang1 span").width();
						var a = data[i].homeData/data[i].awayData;
						$(".oBig_hong span").css({"width":b*a})
						$(".oBig_hong span").addClass("pro-green");
						
					}else{}
				}
				else if(code_id == "1026-2050"){
					//红危险进攻
					str_statistics='<div class="dl">'+data[i].homeData+'</div>';
					var str_statistics_jin= '';
						str_statistics_jin='<div class="dr">'+data[i].awayData+'</div>';
						$(".tc_wei1").text("");
					$(".tc_wei1").append(str_statistics);
					$(".tc_wei2").text("");
					$(".tc_wei2").append(str_statistics_jin);
					if(data[i].homeData > data[i].awayData){
						$(".oBig_wei span").addClass("pro-green");
						var b = $(".oBig_wei span").width();
						var a = data[i].awayData/data[i].homeData;
						//console.log(b*a);
						$(".oBig_wei1 span").css({"width":b*a})
						$(".oBig_wei1 span").addClass("pro-blue");
					}else if(data[i].homeData < data[i].awayData){
						$(".oBig_wei1 span").addClass("pro-blue");
						var b = $(".oBig_wei1 span").width();
						var a = data[i].homeData/data[i].awayData;
						$(".oBig_wei span").css({"width":b*a})
						$(".oBig_wei span").addClass("pro-green");					
					}else if(data[i].homeData == data[i].awayData){
						$(".oBig_wei1 span").addClass("pro-blue");
						var b = $(".oBig_wei1 span").width();
						var a = data[i].homeData/data[i].awayData;
						$(".oBig_wei span").css({"width":b*a})
						$(".oBig_wei span").addClass("pro-green");
						
					}else{}
				}
				else if(code_id == "1028-2052"){
					//危险任意球
					str_statistics='<div class="dl">'+data[i].homeData+'</div>';
					var str_statistics_jin= '';
						str_statistics_jin='<div class="dr">'+data[i].awayData+'</div>';
						$(".tc_ren1").text("");
					$(".tc_ren1").append(str_statistics);
					$(".tc_ren2").text("");
					$(".tc_ren2").append(str_statistics_jin);
					if(data[i].homeData > data[i].awayData){
						$(".oBig_ren span").addClass("pro-green");
						var b = $(".oBig_ren span").width();
						var a = data[i].awayData/data[i].homeData;
						//console.log(b*a);
						$(".oBig_ren1 span").css({"width":b*a})
						$(".oBig_ren1 span").addClass("pro-blue");
					}else if(data[i].homeData < data[i].awayData){
						$(".oBig_ren1 span").addClass("pro-blue");
						var b = $(".oBig_ren1 span").width();
						var a = data[i].homeData/data[i].awayData;
						$(".oBig_ren span").css({"width":b*a})
						$(".oBig_ren span").addClass("pro-green");					
					}else if(data[i].homeData == data[i].awayData){
						$(".oBig_ren1 span").addClass("pro-blue");
						var b = $(".oBig_wei1 span").width();
						var a = data[i].homeData/data[i].awayData;
						$(".oBig_ren span").css({"width":b*a})
						$(".oBig_ren span").addClass("pro-green");
						
					}else{}
				}
				else if(code_id == "1039-2063"){
					//射正球门
					str_statistics='<div class="dl zhu_men">'+data[i].homeData+'</div>';
					var str_statistics_jin= '';
						str_statistics_jin='<div class="dr ke_men">'+data[i].awayData+'</div>';
						$(".tc_she1").text("");
					$(".tc_she1").append(str_statistics);
					$(".tc_she2").text("");
					$(".tc_she2").append(str_statistics_jin);
					if(data[i].homeData > data[i].awayData){
						$(".oBig_she span").addClass("pro-green");
						var b = $(".oBig_she span").width();
						var a = data[i].awayData/data[i].homeData;
						//console.log(b*a);
						$(".oBig_she1 span").css({"width":b*a})
						$(".oBig_she1 span").addClass("pro-blue");
					}else if(data[i].homeData < data[i].awayData){
						$(".oBig_she1 span").addClass("pro-blue");
						var b = $(".oBig_she1 span").width();
						var a = data[i].homeData/data[i].awayData;
						$(".oBig_she span").css({"width":b*a})
						$(".oBig_she span").addClass("pro-green");					
					}else if(data[i].homeData == data[i].awayData){
						$(".oBig_she1 span").addClass("pro-blue");
						var b = $(".oBig_she1 span").width();
						var a = data[i].homeData/data[i].awayData;
						$(".oBig_she span").css({"width":b*a})
						$(".oBig_she span").addClass("pro-green");
						
					}else{}
				}
				else if(code_id == "1040-2064"){
					
					var zhu = Number(data[i].homeData)+Number($(".zhu_men").text());
					var ke = Number(data[i].homeData)+Number($(".ke_men").text());
					//射门
					str_statistics='<div class="dl">'+zhu+'</div>';
					var str_statistics_jin= '';
						str_statistics_jin='<div class="dr">'+ke+'</div>';
						$(".tc_shez1").text("");
					$(".tc_shez1").append(str_statistics);
					$(".tc_shez2").text("");
					$(".tc_shez2").append(str_statistics_jin);
					if(zhu > ke){
						$(".oBig_shez span").addClass("pro-green");
						var b = $(".oBig_shez span").width();
						var a = ke/zhu;
						//console.log(b*a);
						$(".oBig_shez1 span").css({"width":b*a})
						$(".oBig_shez1 span").addClass("pro-blue");
					}else if(zhu < ke){
						$(".oBig_shez1 span").addClass("pro-blue");
						var b = $(".oBig_shez1 span").width();
						var a = zhu/ke;
						$(".oBig_shez span").css({"width":b*a})
						$(".oBig_shez span").addClass("pro-green");					
					}else if(zhu == ke){
						$(".oBig_shez1 span").addClass("pro-blue");
						var b = $(".oBig_shez1 span").width();
						var a = zhu/ke;
						$(".oBig_shez span").css({"width":b*a})
						$(".oBig_shez span").addClass("pro-green");
						
					}else{}
					
				}else if(code_id == "1025-2049"){
					//角球
					str_statistics='<div class="dl">'+data[i].homeData+'</div>';
					var str_statistics_jin= '';
						str_statistics_jin='<div class="dr">'+data[i].awayData+'</div>';
						$(".tc_jiao1").text("");
					$(".tc_jiao1").append(str_statistics);
					$(".tc_jiao2").text("");
					$(".tc_jiao2").append(str_statistics_jin);
					if(data[i].homeData > data[i].awayData){
						$(".oBig_jiao span").addClass("pro-green");
						var b = $(".oBig_jiao span").width();
						var a = data[i].awayData/data[i].homeData;
						//console.log(b*a);
						$(".oBig_jiao1 span").css({"width":b*a})
						$(".oBig_jiao1 span").addClass("pro-blue");
					}else if(data[i].homeData < data[i].awayData){
						$(".oBig_jiao1 span").addClass("pro-blue");
						var b = $(".oBig_jiao1 span").width();
						var a = data[i].homeData/data[i].awayData;
						$(".oBig_jiao span").css({"width":b*a})
						$(".oBig_jiao span").addClass("pro-green");					
					}else if(data[i].homeData == data[i].awayData){
						$(".oBig_jiao1 span").addClass("pro-blue");
						var b = $(".oBig_jiao1 span").width();
						var a = data[i].homeData/data[i].awayData;
						$(".oBig_jiao span").css({"width":b*a})
						$(".oBig_jiao span").addClass("pro-green");

					}else{}
				}else if(code_id == "1055-2079"){
					//换人
					str_statistics='<div class="dl">'+data[i].homeData+'</div>';
					var str_statistics_jin= '';
						str_statistics_jin='<div class="dr">'+data[i].awayData+'</div>';
						$(".tc_huan1").text("");
					$(".tc_huan1").append(str_statistics);
					$(".tc_huan2").text("");
					$(".tc_huan2").append(str_statistics_jin);
					if(data[i].homeData > data[i].awayData){
						$(".oBig_huan span").addClass("pro-green");
						var b = $(".oBig_huan span").width();
						var a = data[i].awayData/data[i].homeData;
						//console.log(b*a);
						$(".oBig_huan1 span").css({"width":b*a})
						$(".oBig_huan1 span").addClass("pro-blue");
					}else if(data[i].homeData < data[i].awayData){
						$(".oBig_huan1 span").addClass("pro-blue");
						var b = $(".oBig_huan1 span").width();
						var a = data[i].homeData/data[i].awayData;
						$(".oBig_huan span").css({"width":b*a})
						$(".oBig_huan span").addClass("pro-green");					
					}else if(data[i].homeData == data[i].awayData){
						$(".oBig_huan1 span").addClass("pro-blue");
						var b = $(".oBig_huan1 span").width();
						var a = data[i].homeData/data[i].awayData;
						$(".oBig_huan span").css({"width":b*a})
						$(".oBig_huan span").addClass("pro-green");

					}else{}
				}
				//犯规
				else if(code_id == "1042-2066"){
					//犯规
					str_statistics='<div class="dl">'+data[i].homeData+'</div>';
					var str_statistics_jin= '';
						str_statistics_jin='<div class="dr">'+data[i].awayData+'</div>';
						$(".tc_fan1").text("");
					$(".tc_fan1").append(str_statistics);
					$(".tc_fan2").text("");
					$(".tc_fan2").append(str_statistics_jin);
					if(data[i].homeData > data[i].awayData){
						$(".oBig_fan span").addClass("pro-green");
						var b = $(".oBig_fan span").width();
						var a = data[i].awayData/data[i].homeData;
						//console.log(b*a);
						$(".oBig_fan1 span").css({"width":b*a})
						$(".oBig_fan1 span").addClass("pro-blue");
					}else if(data[i].homeData < data[i].awayData){
						$(".oBig_fan1 span").addClass("pro-blue");
						var b = $(".oBig_fan1 span").width();
						var a = data[i].homeData/data[i].awayData;
						$(".oBig_fan span").css({"width":b*a})
						$(".oBig_fan span").addClass("pro-green");					
					}else if(data[i].homeData == data[i].awayData){
						$(".oBig_fan1 span").addClass("pro-blue");
						var b = $(".oBig_fan1 span").width();
						var a = data[i].homeData/data[i].awayData;
						$(".oBig_fan span").css({"width":b*a})
						$(".oBig_fan span").addClass("pro-green");

					}else{}
				}
				else if(code_id == "1043-2067"){
					//越位
					str_statistics='<div class="dl">'+data[i].homeData+'</div>';
					var str_statistics_jin= '';
						str_statistics_jin='<div class="dr">'+data[i].awayData+'</div>';
						$(".tc_yue1").text("");
					$(".tc_yue1").append(str_statistics);
					$(".tc_yue2").text("");
					$(".tc_yue2").append(str_statistics_jin);
					if(data[i].homeData > data[i].awayData){
						$(".oBig_yue span").addClass("pro-green");
						var b = $(".oBig_yue span").width();
						var a = data[i].awayData/data[i].homeData;
						//console.log(b*a);
						$(".oBig_yue1 span").css({"width":b*a})
						$(".oBig_yue1 span").addClass("pro-blue");
					}else if(data[i].homeData < data[i].awayData){
						$(".oBig_yue1 span").addClass("pro-blue");
						var b = $(".oBig_yue1 span").width();
						var a = data[i].homeData/data[i].awayData;
						$(".oBig_yue span").css({"width":b*a})
						$(".oBig_yue span").addClass("pro-green");					
					}else if(data[i].homeData == data[i].awayData){
						$(".oBig_yue1 span").addClass("pro-blue");
						var b = $(".oBig_yue1 span").width();
						var a = data[i].homeData/data[i].awayData;
						$(".oBig_yue span").css({"width":b*a})
						$(".oBig_yue span").addClass("pro-green");
					}else{}
				}
				else if(code_id == "1054-2078"){
					//界外球
					str_statistics='<div class="dl">'+data[i].homeData+'</div>';
					var str_statistics_jin= '';
						str_statistics_jin='<div class="dr">'+data[i].awayData+'</div>';
						$(".tc_jie1").text("");
					$(".tc_jie1").append(str_statistics);
					$(".tc_jie2").text("");
					$(".tc_jie2").append(str_statistics_jin);
					if(data[i].homeData > data[i].awayData){
						$(".oBig_jie span").addClass("pro-green");
						var b = $(".oBig_jie span").width();
						var a = data[i].awayData/data[i].homeData;
						//console.log(b*a);
						$(".oBig_jie1 span").css({"width":b*a})
						$(".oBig_jie1 span").addClass("pro-blue");
					}else if(data[i].homeData < data[i].awayData){
						$(".oBig_jie1 span").addClass("pro-blue");
						var b = $(".oBig_jie1 span").width();
						var a = data[i].homeData/data[i].awayData;
						$(".oBig_jie span").css({"width":b*a})
						$(".oBig_jie span").addClass("pro-green");					
					}else if(data[i].homeData == data[i].awayData){
						$(".oBig_jie1 span").addClass("pro-blue");
						var b = $(".oBig_jie1 span").width();
						var a = data[i].homeData/data[i].awayData;
						$(".oBig_jie span").css({"width":b*a})
						$(".oBig_jie span").addClass("pro-green");
					}else{}
				}
			
		}			
				
		})
	}
	//获取球队文字直播的数据
	function getData_character(obj, fn) {
		var url = 'http://api1.310data.com/interface/events/'+obj.matchId+'?eventNumber='+obj.eventNumber;
		//console.log(url);
		getData(url, fn);
	}
	//初始化文字界面数据
	
	function character_init(o_matchId){
			
			//console.log(1)
			var matchId = o_matchId;
			var eventNumber = 2;
		
			getData_character({
				matchId : matchId,
				eventNumber : eventNumber
			},function(data){
			//console.log(data);
				if(data == '') {
					$('.nav-line').css({"background-size":"0"});
					return $(".nav-line").html(kong_zhi("<img src='img/kong.png'>","暂无数据"));
				}else{
				//console.log(data[1]);
				var str_text = "";
				for(var i = 0; i < data.length ; i++){
					var a = data[i].eventCodeId;
					//console.log(a);
					//事件转化为中文
						//主队事件
					if(a == 1024){data[i].eventCode = '主队中场控球';}
					if(a == 1025){data[i].eventCode = '主队角球';}
					if(a == 1026){data[i].eventCode = '主队前场控球';}
					if(a == 1027){data[i].eventCode = '主队危险任意球';}
					if(a == 1028){data[i].eventCode = '主队任意球';}
					if(a == 1029){data[i].eventCode = '主队进球';}
					if(a == 1030){data[i].eventCode = '取消主队进球';}
					if(a == 1031){data[i].eventCode = '主队罚球';}
					if(a == 1032){data[i].eventCode = '主队红牌';}
					if(a == 1034){data[i].eventCode = '主队黄牌';}
					if(a == 1039){data[i].eventCode = '主队射正球门';}
					if(a == 1040){data[i].eventCode = '主队射偏球门';}
					if(a == 1041){data[i].eventCode = '主队射中门框';}
					if(a == 1042){data[i].eventCode = '主队犯规';}
					if(a == 1043){data[i].eventCode = '主队越位';}
					if(a == 1044){data[i].eventCode = '主队开球';}
					if(a == 1045){data[i].eventCode = '主队黄牌过渡红牌';}
					if(a == 1046){data[i].eventCode = '取消主队黄牌过渡红牌';}
					if(a == 1047){data[i].eventCode = '取消主队红牌';}
					if(a == 1048){data[i].eventCode = '取消主队黄牌';}
					if(a == 1049){data[i].eventCode = '取消主队罚球';}
					if(a == 1050){data[i].eventCode = '取消主队角球';}
					if(a == 1051){data[i].eventCode = '主队后场控球';}
					if(a == 1052){data[i].eventCode = '主队危险';}
					if(a == 1053){data[i].eventCode = '主队球门球';}
					if(a == 1054){data[i].eventCode = '主队掷界外球';}
					if(a == 1055){data[i].eventCode = '主队换人';}
					if(a == 1058){data[i].eventCode = '主队拦截';}
					if(a == 1059){data[i].eventCode = '主队重新罚球';}
					if(a == 1060){data[i].eventCode = '主队罚球射失';}
					if(a == 1062){data[i].eventCode = '主队有可能罚球';}
						//客队事件
					if(a == 2048){data[i].eventCode = '客队中场控球';}
					if(a == 2049){data[i].eventCode = '客队角球';}
					if(a == 2050){data[i].eventCode = '客队前场控球';}
					if(a == 2051){data[i].eventCode = '客队危险任意球';}
					if(a == 2052){data[i].eventCode = '客队任意球';}
					if(a == 2053){data[i].eventCode = '客队进球';}
					if(a == 2054){data[i].eventCode = '取消客队进球';}
					if(a == 2055){data[i].eventCode = '客队罚球';}
					if(a == 2056){data[i].eventCode = '客队红牌';}
					if(a == 2058){data[i].eventCode = '客队黄牌';}
					if(a == 2063){data[i].eventCode = '客队射正球门';}
					if(a == 2064){data[i].eventCode = '客队射偏球门';}
					if(a == 2065){data[i].eventCode = '客队射中门框';}
					if(a == 2066){data[i].eventCode = '客队犯规';}
					if(a == 2067){data[i].eventCode = '客队越位';}
					if(a == 2068){data[i].eventCode = '客队开球';}
					if(a == 2069){data[i].eventCode = '客队黄牌过渡红牌';}
					if(a == 2070){data[i].eventCode = '取消客队黄牌过渡红牌';}
					if(a == 2071){data[i].eventCode = '取消客队红牌';}
					if(a == 2072){data[i].eventCode = '取消客队黄牌';}
					if(a == 2073){data[i].eventCode = '取消客队罚球';}
					if(a == 2074){data[i].eventCode = '取消客队角球';}
					if(a == 2075){data[i].eventCode = '客队后场控球';}
					if(a == 2076){data[i].eventCode = '客队危险';}
					if(a == 2077){data[i].eventCode = '客队球门球';}
					if(a == 2078){data[i].eventCode = '客队掷界外球';}
					if(a == 2079){data[i].eventCode = '客队换人';}
					if(a == 2082){data[i].eventCode = '客队拦截';}
					if(a == 2083){data[i].eventCode = '客队重新罚球';}
					if(a == 2084){data[i].eventCode = '客队罚球射失';}
					if(a == 2086){data[i].eventCode = '客队可能罚球';}
					
					
					if(a >= '1000' && a < '2000'){
						 str_text +='<div class="new-f-table"><div class="line_01"><span class="writ-folat">'+data[i].minute+'’'+'</span> </div><div class="dl folat-list-l"><p class=" dr">'+data[i].eventCode+'</p></div></div>';
			            		

						
		
					}else if(a >= '2000' && a < '3000'){
						 str_text +='<div class="new-f-table"><div class="line_01"><span class="writ-folat2">'+data[i].minute+'’'+'</span> </div><div class="dr folat-list-r"><p class="dl">'+data[i].eventCode+'</p></div></div>';
			
					};
					
				}
		            $(".living_font").html(str_text);
		            fon_color();
          	}
				
			})
					
		            function fon_color(){
						var x = $(".living_font p");
						console.log(x.length);
						for(var i = 0; i < x.length; i++){
							
							var c =$(x[i]).text();
							if(c == '客队进球'){
								$(x[i]).css({"color":"rgb(250,0,0)"});
							}
							if(c == '主队进球'){
								$(x[i]).css({"color":"rgb(250,0,0)"});
							}
							if(c == '主队角球'){
								$(x[i]).css({"color":"rgb(250,0,0)"});
							}
							if(c == '客队角球'){
								$(x[i]).css({"color":"rgb(250,0,0)"});
							}
						}
					}
		}
	//获取球队事件直播的数据
	function getData_event(obj, fn) {
		var url = 'http://api1.310data.com/interface/specialEvents/'+obj.matchId+'?filters='+obj.filters+'&eventNumber='+obj.eventNumber;
		//console.log(url);
		getData(url, fn);
	}
	//初始化事件界面数据
	
		function event_init(o_matchId,fil){
			
			//console.log(1)
			var matchId = o_matchId;
			var eventNumber = 2;
			var filters = fil;
			//console.log(filters);
		
			getData_event({
				matchId : matchId,
				eventNumber : eventNumber,
				filters : filters
			},function(data){
				console.log(data);
				if(data == '') {
					$('.event-box-line').css({"background-size":"0"});
					return $(".event-box-line").html(kong_zhi("<img src='img/kong.png'>","暂无数据"));
				}else{
					
				var str_text = "";
				var count = 0;
				
						
				for(var i = 0; i < data.length ; i++){
					var b = data[i].eventCodeId;
					//var a = data[i+1].eventCodeId;
					//console.log(b);
					//console.log(a);
					//主队事件
				if(b == 1029){data[i].eventCode = '主队进球';data[i].eventNumber = "<img src='img/p_24.png' style='float:right'>"}
				if(b == 1032){data[i].eventCode = '主队红牌';data[i].eventNumber = "<img src='img/p_18.png' style='float:right'>"}
				if(b == 1034){data[i].eventCode = '主队黄牌';data[i].eventNumber = "<img src='img/p_17.png' style='float:right'>"}
				if(b == 1055){data[i].eventCode = '主队换人';data[i].eventNumber = "<img src='img/p_5.png' style='float:right'>"}
					//客队事件
				if(b == 2056){data[i].eventCode = '客队红牌';data[i].eventNumber = "<img src='img/p_18.png' style='float:left'>"}
				if(b == 2058){data[i].eventCode = '客队黄牌';data[i].eventNumber = "<img src='img/p_17.png' style='float:left'>"}
				if(b == 2053){data[i].eventCode = '客队进球';data[i].eventNumber = "<img src='img/p_24.png' style='float:left'>"}
				if(b == 2079){data[i].eventCode = '客队换人';data[i].eventNumber = "<img src='img/p_5.png' style='float:left'>"}
					
					//if(b = 1029){b = "<img src='img/p_24.png'>";}
					
					if(b >= '1000' && b < '2000'){
						
					if(b == 1029){
							str_text +='<div class="new-f-table"><div class="line_01"><span class="writ-folat">'+data[i].minute+'’'+'</span> </div><div class="dl event-list-txt oh"><span class="event-img dr">'+data[i].eventNumber+'</span><p class=" writ-red new-writ-red dr">'+data[i].eventCode+'</p></div></div>';

					$(".living_event").html(str_text);
							
						}else if(b == 1032){
							str_text +='<div class="new-f-table"><div class="line_01"><span class="writ-folat">'+data[i].minute+'’'+'</span> </div><div class="dl event-list-txt oh"><span class="event-img dr">'+data[i].eventNumber+'</span><p class=" writ-red new-writ-red dr">'+data[i].eventCode+'</p></div></div>';

					$(".living_event").html(str_text);
							//$(this).find('.haha').append("<img src='img/p_18.png'>");
						}else if(b == 1034){
							str_text +='<div class="new-f-table"><div class="line_01"><span class="writ-folat">'+data[i].minute+'’'+'</span> </div><div class="dl event-list-txt oh"><span class="event-img dr">'+data[i].eventNumber+'</span><p class=" writ-red new-writ-red dr">'+data[i].eventCode+'</p></div></div>';

				$(".living_event").html(str_text);
							//$(this).find('.haha').append("<img src='img/p_17.png'>");
						}else if(b == 1055){
							str_text +='<div class="new-f-table"><div class="line_01"><span class="writ-folat">'+data[i].minute+'’'+'</span> </div><div class="dl event-list-txt oh"><span class="event-img dr">'+data[i].eventNumber+'</span><p class=" writ-red new-writ-red dr">'+data[i].eventCode+'</p></div></div>';

				$(".living_event").html(str_text);
							//$(this).find('.haha').append("<img src='img/p_5.png'>");
						}else{}
					}else if(b >= '2000' && b < '3000'){
						
					
						if(b == 2056){
							str_text +='<div class="new-f-table"><div class="line_01"><span class="writ-folat">'+data[i].minute+'’'+'</span> </div><div class="dl event-list-txt2 oh"><span class="event-img dl">'+data[i].eventNumber+'</span><p class=" writ-red new-writ-red dl">'+data[i].eventCode+'</p></div></div>';
							$(".living_event").html(str_text);

							//$(this).find('.haha').append("<img src='img/p_18.png'>");
						}else if(b == 2058){
							str_text +='<div class="new-f-table"><div class="line_01"><span class="writ-folat">'+data[i].minute+'’'+'</span> </div><div class="dl event-list-txt2 oh"><span class="event-img dl">'+data[i].eventNumber+'</span><p class=" writ-red new-writ-red dl">'+data[i].eventCode+'</p></div></div>';
							$(".living_event").html(str_text);

						}else if(b == 2053){
							str_text +='<div class="new-f-table"><div class="line_01"><span class="writ-folat">'+data[i].minute+'’'+'</span> </div><div class="dl event-list-txt2 oh"><span class="event-img dl">'+data[i].eventNumber+'</span><p class=" writ-red new-writ-red dl">'+data[i].eventCode+'</p></div></div>';
							$(".living_event").html(str_text);

						}else if(b == 2079){
							str_text +='<div class="new-f-table"><div class="line_01"><span class="writ-folat">'+data[i].minute+'’'+'</span> </div><div class="dl event-list-txt2 oh"><span class="event-img dl">'+data[i].eventNumber+'</span><p class=" writ-red new-writ-red dl">'+data[i].eventCode+'</p></div></div>';
							$(".living_event").html(str_text);

						}else{}
					}else{}

				}
				
						
           }
           
			})
		}
	//获取走势进攻数据
	function getData_asian_j(obj, fn) {
		var url = 'http://api1.310data.com/interface/match/matchStatic/' + obj.matchId + '/' + obj.staticType + '?needStatic='+obj.needStatic2;
	//	console.log(url);
		getData(url, fn);
	}
	//初始化走势页面角球的表格
		function jiao_init1(o_matchId,needStatic1,needStatic2){
			console.log(666);
				var matchId = o_matchId;
				//console.log(matchId);
				var needStatic1 = needStatic1;
				var needStatic2 = needStatic2;
				
				var staticType ='1025-2049';
			
				getData_asian_j({
					matchId: matchId,
					staticType: staticType,
					needStatic1 : needStatic1,
					needStatic2 : needStatic2
				}, function(data) {
					//console.log(data);	
					var a = [];
					var b = [];
					for(var i = 0; i < data.length; i++ ){
						//console.log(data[i].homeData);
							if(data[i] == undefined){continue;}
							
							a.push(data[i].homeData);
							b.push(data[i].awayData);
								
							
					}
				
					//获取走势角球数据
					
					var myChart = echarts.init(document.getElementById('main1'));
					option = {
						tooltip: {
							trigger: 'axis'
						
						},
						legend: {
							show:true,
							zlevel: 0,
							tooltip: {
						        show: true
						   },
							data: ['主队', '客队']
						},
		
						xAxis: {
							type: 'category',
							name: '时间',
							boundaryGap: false,
							data: ['', '','', '', '', '', '', '', '45','', '','', '', '', '', '', '', '','']
						},
						yAxis: {
							type: 'value',
							name: '角球'
							
						},
						series: [{
							name: '主队',
							type: 'line',
							data: a
						}, 
						{
							name: '客队',
							type: 'line',
							data: b
						}]
					};
					
						if(data == ''){
							$(".zhu_ke").empty();
							//$('.oImg_zou').css({"background-size":"0"});
							return $("#main1").html(kong_zhi("<img src='img/kong.png'>","暂无数据"));
							
						}else{
							console.log(888);
							//console.log(6666);
							//$(".oImg_zou .zou").hide();
							 myChart.setOption(option);
							loader("hide");
						}
						
				
				
				})
			}
		
		//初始化走势页面进攻的表格
		function jin_init2(o_matchId,needStatic1,needStatic2){
				var matchId = o_matchId;
				var needStatic1 = needStatic1;
				var needStatic2 = needStatic2;
				
				var staticType ='1026-2050';
			
				getData_asian_j({
					matchId: matchId,
					staticType: staticType,
					needStatic1 : needStatic1,
					needStatic2 : needStatic2
				}, function(data) {
					//console.log(data);
					
					var c = [];
					var d = [];
					for(var i = 0; i < data.length; i++ ){
						//console.log(data[i].homeData);
							if(data[i] == undefined){continue;}	
							c.push(data[i].homeData);
							d.push(data[i].awayData);		
					}

					//获取走势进攻数据
					var myChart = echarts.init(document.getElementById('main2'));
					option = {
						tooltip: {
							trigger: 'axis'
						},
						legend: {
							data: ['主队', '客队']
						},
		
						xAxis: {
							type: 'category',
							name: '时间',
							boundaryGap: false,
							data: ['', '','', '', '', '', '', '', '45','', '','', '', '', '', '', '', '']
						},
						yAxis: {
							type: 'value',
							name: '危险进攻',
		
						},
						series: [{
							name: '主队',
							type: 'line',
							data: c
		
						}, {
							name: '客队',
							type: 'line',
							data:d
						
						}]
					};
					
					if(data == ''){
						return $("#main2").html(kong_zhi("<img src='img/kong.png'>","暂无数据"));
					}else{
						loader("hide");
						myChart.setOption(option);
							
					}
			})
		}
	//初始化index页面筛选规则
	function getSet(obj,fn){
		if(obj.oTime){
			var url = 'http://api1.310data.com/interface/v2/score/getLeagues?playStat='+obj.playStat+'&day='+obj.oTime;
		}else{
			var url = 'http://api1.310data.com/interface/v2/score/getLeagues?playStat='+obj.playStat;
		}
		//console.log(url);
		getData(url, fn);
	}
	
	//不传日期，调取联赛id
	function getSett(obj,fn){
		var url = 'http://api1.310data.com/interface/v2/score/getLeagues?playStat='+obj.playStat;
		//console.log(url);
		getData(url, fn);
	}
	return {
		get_instant : get_instant,
		get_doing : get_doing,
		loader : loader,
		setUp : setUp,
		getData_fix_company : getData_fix_company,
		living_top : living_top,
		href : href,
		sign : sign,
		getData_statistics : getData_statistics,
		getSet : getSet,
		battle_array : battle_array,
		statistics_r : statistics_r ,
		kong_zhi : kong_zhi,
		character_init : character_init,
		event_init : event_init,
		jiao_init1 : jiao_init1,
		jin_init2 : jin_init2,
		living_topp : living_topp
		
		
		
	}
})