define(function(require, exports, module) {
	var $ = require("jquery");
	var ac = require("action");
	//获取直播接口
	function get_liveing(obj, fn){
		var url = 'http://api1.310data.com/interface/v2/homePage/goalInfoNew';
		//console.log(url);
		getData(url, fn);
	}
	
	function getLive(data){
		$(data).each(function(){
			console.log(this);
			var str = '';
			var oTime = this.events;
			var arr1= [];
			var arr2= [];
			if(this.playstateId == 1){
				this.minutes = '完';
				for(i in oTime){
					
					//console.log(oTime[0]);
					if(oTime[i].eventCodeId == 2053){
						
						arr1.push(oTime[i].minute)+'’';
						//arr1 = arr1+'’'
					}else{
						var zhu_time = '';
					}
					if(oTime[i].eventCodeId == 1029){
						
						arr2.push(oTime[i].minute);
						//arr2 = arr2 +'’';
					}else{
						var ke_time='';
					}
				}
			}
			if(this.playstateId == 0){
				this.minutes = this.minutes+'’';
				//直播
					for(i in oTime){
						
						//console.log(oTime[0]);
						if(oTime[i].eventCodeId == 2053){
							
							arr1.push(oTime[i].minute)+'’';
							//arr1 = arr1+'’'
						}else{
							var zhu_time = '';
						}
						if(oTime[i].eventCodeId == 1029){
							
							arr2.push(oTime[i].minute);
							//arr2 = arr2 +'’';
						}else{
							var ke_time='';
						}
					}
				
			}if(this.playstateId == 3){
				if(this.minutes == undefined){this.minutes = ' '}else{this.minutes=this.minutes+'’'}
				if(this.homeScore == undefined){this.homeScore = ' '}else{this.homeScore=this.homeScore}
				if(this.awayScore == undefined){this.awayScore = ' '}else{this.awayScore=this.awayScore}
			}
			
				//console.log(arr2)
				str += '<div class="block"><span>'+this.leagueName+'</span><span>'+this.homeName+'</span><span>vs</span><span>'+this.awayName+'</span><span class="dark-green">'+this.minutes+'</span><div class="ash-pink dl bf-listbox"><div>'+this.homeScore+'</div><div>:</div><div class="in-right">'+this.awayScore+'</div></div></div><div class="ash-pink dl bf-listbox bf_zhi"><div>(主:</div><div>'+arr2+'</div><div>,</div><div>客:</div><div>'+arr1+'</div><div class="rl">)</div> </div>';                   	                   
	        	$(".ticker-1").append(str);
      			
			});
		//直播滚动
		ac.roll();
	}
	//获取热门联赛轮播数据
	function get_hotLea(obj, fn){
		var url = 'http://api1.310data.com/interface/v2/homePage/matchInfo';
		//console.log(url);
		getData(url, fn);
	}
	
	function getHot(data){
		//console.log(data);
		for(var i = 0 ; i< data.length; i++){
			//console.log(data[i]);
			//判断盘口
			var pan = data[i].capNum;
			if(pan == undefined){
				pan = ' ';
			}
			//console.log(pan);
			//+
			if(pan==0.25){pan='0/0.5'}if(pan==0.5){pan='0.5'}if(pan==0.75){pan='0.5/1'}if(pan==1){pan='1'}if(pan==1.25){pan='1/1.5'}if(pan==1.5){pan='1.5'}if(pan==1.75){pan='1.5/2'}if(pan==2){pan='2'}if(pan==2.25){pan='2/2.5'}if(pan==2.5){pan='2.5'}if(pan==2.75){pan='2.5/3'}if(pan==3){pan='3'}if(pan==3.25){pan='3/3.5'}if(pan==3.5){pan='3.5'}if(pan==3.75){pan='3.5/4'}if(pan==4){pan='4'}if(pan==4.25){pan='4/4.5'}if(pan==4.75){pan='4.5/5'}
			//console.log(pan);
			//-
			if(pan=='-0.25'){pan='-0/0.5'}if(pan=='-0.5'){pan='-0.5'}if(pan=='-0.75'){pan='-0.5/1'}if(pan=='-1'){pan='-1'}if(pan=='-1.25'){pan='-1/1.5'}if(pan=='-1.5'){pan='-1.5'}if(pan=='-1.75'){pan='-1.5/2'}if(pan=='-2'){pan='-2'}if(pan=='-2.25'){pan='-2/2.5'}if(pan=='-2.5'){pan='-2.5'}if(pan=='-2.75'){pan='-2.5/3'}if(pan=='-3'){pan='-3'}if(pan=='-3.25'){pan='-3/3.5'}if(pan=='-3.5'){pan='-3.5'}if(pan=='-3.75'){pan='-3.5/4'}if(pan=='-4'){pan='-4'}if(pan=='-4.25'){pan='-4/4.5'}if(pan=='-4.75'){pan='-4.5/5'}
			//判断月份
			var oData = 0;
			var oYue = data[i].date.split(' ')[0].substring(5,7);
			var oYue1 =oYue .split('')[0];
			var oYue2 = oYue .split('')[1];
			if(oYue1 >0){oData = oYue}else{oData = oYue2}
			//判断日期
			var oDay = 0;
			var oRi = data[i].date.split(' ')[0].substring(8,10);
			var oRi1 = oRi.split('')[0];
			var oRi2 = oRi.split('')[1];
			
			if(oRi1 >0){oDay = oRi}else{oDay = oRi2}
			//获取赔率
			if(data[i].rio){var rio_zhu = data[i].rio.split(',')[0];}else{var rio_zhu = '';}
			if(data[i].rio){var rio_ke = data[i].rio.split(',')[1];}else{var rio_ke = '';}	
			//console.log(data[i].date.split(' ')[1]);
			console.log()
			//判断距离比赛开始时间
			
			if(data[i].playstateId == 3){
				var ban = '半场';
				data[i].homeS = data[i].homeScore;
				data[i].awayS = data[i].awayScore;
				data[i].minutes = data[i].minutes+'’';
			}
			if(data[i].playstateId == 0){
				var ban = data[i].date.split(' ')[1].substring(0,5);
				data[i].homeScore = 1;
				data[i].awayScore = 1;
				data[i].homeS = '-';
				data[i].awayS = '-';
				var a =	data[i].minutes.substr(0,1);
				var b = data[i].minutes.substr(2,1);
				//console.log(a);
				//console.log(b);
				if(a == 0 && b == 0){
					data[i].minutes = data[i].minutes.substr(5);
				}else if(a == 0 && b != 0){
					data[i].minutes = data[i].minutes.substr(2);
				}else if(a != 0 && b == 0){
					//console.log(666);
					data[i].minutes = data[i].minutes.substring(0,5);
				}else if(a != 0 && b != 0){
					if(data[i].minutes.length == 8){
						data[i].minutes = data[i].minutes.substring(0,5);
					};
					if(data[i].minutes.length == 9){
						if(data[i].minutes.substr(5,1) >=0 && data[i].minutes.substr(5,1)<= 9){
							data[i].minutes = data[i].minutes.substring(0,5);
						}else{
							data[i].minutes = data[i].minutes.substring(0,6);
						}
					};
					if(data[i].minutes.length == 10){
						data[i].minutes = data[i].minutes.substring(0,6);
					};
				}
			}
			//添加自定义属性
			var pl = data[i].playstateId;
			var mid = data[i].id;
			var data_time = data[i].date.split(' ')[0];
			var time = data[i].date.split(' ')[1].substring(0,5);
			var zhu = data[i].homeName;
			var ke = data[i].awayName;
			var sai = data[i].leagueName;
			var hs = data[i].homeScore;
			var as = data[i].awayScore;
			var bhs = data[i].homeHalfScore;
			var bas = data[i].awayHalfScore;
			if(data[i].minutes){var onIng = data[i].minutes;}else{}
			var strin = '<a data-pl="'+pl+'" data-on="'+onIng+'" data-hs="'+hs+'" data-as="'+as+'" data-bhs="'+bhs+'" data-bas="'+bas+'" data-mid="' + mid + '" data-ri_qi="' + data_time + '" data-shijian ="' + time  + '"  data-zhu="' + zhu + '"  data-ke="' + ke + '" data-sai="' + sai + '"><div class="hot-listbox-one oh"><div class="match-time dl match-time2 t12"><p class="k_sai">距开赛</p><div class="start">'+data[i].minutes+'</div></div><div class="match-msgs dl"><div class="Hirsan3 F-grey match-number oh"><div>'+data[i].leagueName+'</div><div>'+oData+'月'+oDay+'日</div><div class="ban">'+ban+'</div><div class="dl clear">'+data[i].homeScore+'-'+data[i].awayScore+'</div></div><div class="match-list H-black"><span class="deepred">'+data[i].homeS+'</span><span>'+data[i].homeName+'</span><span>'+pan+'</span><span class="dark-green yahei-color">'+rio_zhu+'</span></div><div class="match-list H-black"><span class="deepred">'+data[i].awayS+'</span><span>'+data[i].awayName+'</span><span></span><span>'+rio_ke+'</span></div></div></div></a>'
			if(i < 4){
				var str1 = '';
     			str1 += strin;
				$(".circle1").append(str1);
			
			//热门比赛轮播图
			}else if(i>=4 && i<=7){
				var str2 = '';
     			str2 += strin;
				$(".circle2").append(str2);
			}
			else if(i>=8 && i<=11){
				var str3 = '';
     			str3 += strin;
				$(".circle3").append(str3);
			}else if(i>=12 && i<=15){
				var str4 = '';
     			str4 += strin;
				$(".circle4").append(str4);
			}else if(i>=16 && i<=19){
				var str5 = '';
     			str5 += strin;
				$(".circle5").append(str5);
			}
			ac.slideshow();
			
		}
		var slide = $(".swiper-wrapper a");
		for(var i = 0 ;i < slide.length ; i++){
			if($(slide[i]).find('.clear').text() == '1-1'){
				$(slide[i]).find('.clear').text('');
				
				$(slide[i]).find('.deepred').css({"color":"rgb(0,0,0)"});
			}
			if($(slide[i]).find('.start').text().length == '3'){
				$(slide[i]).find('.k_sai').text('');
				$(slide[i]).find('.k_sai').css({"height":"14px"})
			}
		}

	}
	//调取足球指数数据id接口
	function get_exponent(obj, fn){
		var url = 'http://api1.310data.com/interface/v2/homePage/oddsInfo';
		//console.log(url);
		getData(url, fn);
	}
	//指数标题
	
            	
                	
                    	
      
            
	function zhi_title(a){	
			return $(".exponent-box>div:eq("+a+")").find('.exp-tabbox').append('<div class="zhan oh"><div class="exp-ths"><table width="100%" border="1" cellspacing="0" cellpadding="0" class=""><tbody><tr><th>赛时</th><th>主</th><th>盘</th><th>客</th></tr></tbody></table></div><div class="exp-ths-2"><table width="100%" border="1" cellspacing="0" cellpadding="0" class=""><tbody><tr><th>赛时</th><th>大</th><th>盘</th><th>小</th></tr></tbody></table></div></div><div class="dl exp-table-left"><table width="100%" border="1" cellspacing="0" cellpadding="0" class="ol"></table></div><div class="dr  exp-table-right"><table width="100%" border="1" cellspacing="0" cellpadding="0" class="or"></table></div>');
	}
	//循环足球指数联赛
	function get_exp(data){
		//console.log(data);
		$(data).each(function(){
			console.log(this.playstateId);
			if(this.homeScore == undefined){this.homeScore = '-'};
			if(this.awayScore == undefined){this.awayScore = '-'};
			if(this.homeHalfScore == null){this.homeHalfScore='-'};
			if(this.awayHalfScore == null){this.awayHalfScore='-'}
			if(this.playstateId == 0){this.minutes = this.date.split(' ')[1].substring(0,5)}
			if(this.playstateId == 1){this.minutes = '完赛';}
			if(this.playstateId == 3){if(this.minutes > 90){this.minutes = '90+';}else{this.minutes = this.minutes+'’'}}
			var riqi = this.date.split(' ')[0]; 
			var shi_jian =  this.date.split(' ')[1].substring(0,5);
			var zhu = this.homeName;
			var ke = this.awayName;
			var sai = this.leagueName;
			var state = this.playstateId;
			var hs = this.homeScore;
			var as = this.awayScore;
			var bhs = this.homeHalfScore;
			var bas = this.awayHalfScore;
			if(this.minutes){var onIng = this.minutes;}else{}
			var str ='';
			str+='<div class="exp-box-one one_id" data_id="'+this.id+'"><div class="exp-one-tabtop t11"><div class="exp-name">'+this.leagueName+'</div><div class="exp-number">'+this.minutes+'</div><div class="dl"><div class="dl">'+this.homeName+'</div><div class="dl"><div class="dl deepred exp-bf"><span>'+this.homeScore+'</span><span>:</span><span>'+this.awayScore+'</span></div><div class="dl">'+this.awayName+'</div></div></div><div><div class="exp-up" id="expup"></div></div></div><div class="exp-tabbox" id="exptabbox" data-on="'+onIng+'" data-hs="'+hs+'" data-as="'+as+'" data-bhs="'+bhs+'" data-bas="'+bas+'" data-state="'+state+'" data_mid="'+this.id+'" data-ri_qi="'+riqi+'" data-shi_time="'+shi_jian+'" data-sai="'+sai+'" data-zhu="'+zhu+'" data-ke="'+ke+'"></div></div>';
			$('.exponent-box').append(str);	
			$(".exponent-box div:eq(0)").find("#exptabbox").show();			
		})
		var d =$(".exp-bf");
			for(var i = 0;i < d.length;i++){
				if($(d[i]).find('span:eq(0)').text() == '-'){
					$(d[i]).find('span').css({"color":"rgb(102,102,102)"});
				}
			}

		zhi_title(0);
		//足球指数点击，出现下拉
		ac.clickBot();
	}
	//调取足球指数数据接口
	function get_index(obj,fn){
		var url = 'http://api1.310data.com/interface/v2/homePage/oddsInfo/'+obj.matchId;
		//console.log(url);
		getData(url, fn);
	}
	//当即赔或初陪为0时，字体颜色变化
	function fon_color(){
		var x = $(".exponent-box td");
		for(var i = 0; i < x.length; i++){
			var c =$(x[i]).text();
			
			if(c == '封盘'){
				//console.log(666);
				$(x[i]).css({"color":"rgb(0,0,0)"});
			}
		}
	}
	//亚盘数据展现
	function get_ex(data,index){
		//console.log(index);
		    
		$(data).each(function(){
			//console.log(this);
			var ya_zhi = this.yapan;
			var da_zhi = this.daxiaoqiu;
			
			
				//插入亚盘指数	
				$(ya_zhi).each(function(){
					//console.log(this);
					var time = this.time.split(' ')[1].substring(0,5);
					var ya_zhu = this.rio.split(',')[0];
					var ya_pan = this.capnum;
					var ya_ke = this.rio.split(',')[1];
					var str = '';
					var zhu_color = this.upDown.split(',')[0];
					var pan_color = this.upDown.split(',')[1];
					var ke_color = this.upDown.split(',')[2];
//					var gid = '沙巴';
//					var mid = '亚盘';
//					var ri_qi = this.time.split(' ')[0];
//					var shi_time = this.time.split(' ')[1].substring(0,5);
					
					//数据显示为封盘		
					if(ya_zhu == 0 || ya_ke == 0){
								ya_zhu = '封盘';
								ya_ke = '封盘';
								ya_pan = '封盘';
								
					}
					
					//+
					if(ya_pan==0.25){ya_pan='0/0.5'}if(ya_pan==0.5){ya_pan='0.5'}if(ya_pan==0.75){ya_pan='0.5/1'}if(ya_pan==1){ya_pan='1'}if(ya_pan==1.25){ya_pan='1/1.5'}if(ya_pan==1.5){ya_pan='1.5'}if(ya_pan==1.75){ya_pan='1.5/2'}if(ya_pan==2){ya_pan='2'}if(ya_pan==2.25){ya_pan='2/2.5'}if(ya_pan==2.5){ya_pan='2.5'}if(ya_pan==2.75){ya_pan='2.5/3'}if(ya_pan==3){ya_pan='3'}if(ya_pan==3.25){ya_pan='3/3.5'}if(ya_pan==3.5){ya_pan='3.5'}if(ya_pan==3.75){ya_pan='3.5/4'}if(ya_pan==4){ya_pan='4'}if(ya_pan==4.25){ya_pan='4/4.5'}if(ya_pan==4.75){ya_pan='4.5/5'}
					//console.log(ya_pan);
					//-
					if(ya_pan=='-0.25'){ya_pan='-0/0.5'}if(ya_pan=='-0.5'){ya_pan='-0.5'}if(ya_pan=='-0.75'){ya_pan='-0.5/1'}if(ya_pan=='-1'){ya_pan='-1'}if(ya_pan=='-1.25'){ya_pan='-1/1.5'}if(ya_pan=='-1.5'){ya_pan='-1.5'}if(ya_pan=='-1.75'){ya_pan='-1.5/2'}if(ya_pan=='-2'){ya_pan='-2'}if(ya_pan=='-2.25'){ya_pan='-2/2.5'}if(ya_pan=='-2.5'){ya_pan='-2.5'}if(ya_pan=='-2.75'){ya_pan='-2.5/3'}if(ya_pan=='-3'){ya_pan='-3'}if(ya_pan=='-3.25'){ya_pan='-3/3.5'}if(ya_pan=='-3.5'){ya_pan='-3.5'}if(ya_pan=='-3.75'){ya_pan='-3.5/4'}if(ya_pan=='-4'){ya_pan='-4'}if(ya_pan=='-4.25'){ya_pan='-4/4.5'}if(ya_pan=='-4.75'){ya_pan='-4.5/5'}
					var css = "";
					var c = "";
					var cs = "";
						
						if(zhu_color == '1'){var css = 'zs-red';} else if(zhu_color == '0') {} else if(zhu_color == '-1') {var css = 'zs-green';}else{}if(pan_color == '1') {var c = 'zs-red';} else if(pan_color == '0') {} else if(pan_color == '-1') {var c = 'zs-green';}else{}if(ke_color == '1') {var cs = 'zs-red';} else if(ke_color == '0') {} else if(ke_color == '-1') {var cs = 'zs-green';}else{}
					
					//data-gid="' + gid + '" data-mid="' + mid + '" data-zhu="' + zhu + '" data-ke="' + ke + '" data-sai="' + sai + '" data-ri_qi="' + ri_qi + '" data-shi_time="' + shi_time + '"
					str+='<tr> <td>'+time+'</td><td class="'+css+'">'+ya_zhu+'</td><td class="'+c+'">'+ya_pan+'</td><td class="'+cs+'">'+ya_ke+'</td></tr>';
					
						
						$('.exp-one-tabtop').eq(index).next('div').find(".ol").append(str); 
					    fon_color();   
				                  	
				});
				$('.exp-one-tabtop').eq(index).next('div').find(".ol").find("tr:last td:first").replaceWith('<td>初盘</td>');
				$('.exp-one-tabtop').eq(index).next('div').find(".ol").find("tr:last td:first").css({"color":"rgb(102,102,102)"});
//插入大小球指数
				$(da_zhi).each(function(){
					//console.log(this);
					var time = this.time.split(' ')[1].substring(0,5);
					var ya_zhu = this.rio.split(',')[0];
					var ya_pan = this.capnum;
					var ya_ke = this.rio.split(',')[1];
					var zhu_color = this.upDown.split(',')[0];
					var pan_color = this.upDown.split(',')[1];
					var ke_color = this.upDown.split(',')[2];
					//数据显示为封盘		
					if(ya_zhu == 0 || ya_ke == 0){
								ya_zhu = '封盘';
								ya_ke = '封盘';
								ya_pan = '封盘';
					}
					var css = "";
					var c = "";
					var cs = "";
						
						if(zhu_color == '1'){var css = 'zs-red';} else if(zhu_color == '0') {} else if(zhu_color == '-1') {var css = 'zs-green';}else{}if(pan_color == '1') {var c = 'zs-red';} else if(pan_color == '0') {} else if(pan_color == '-1') {var c = 'zs-green';}else{}if(ke_color == '1') {var cs = 'zs-red';} else if(ke_color == '0') {} else if(ke_color == '-1') {var cs = 'zs-green';}else{}
					var str = '';
					str+='<tr> <td>'+time+'</td><td class="'+css+'">'+ya_zhu+'</td><td class="'+c+'">'+ya_pan+'</td><td class="'+cs+'">'+ya_ke+'</td></tr>';
				   	
						$('.exp-one-tabtop').eq(index).next('div').find(".or").append(str); 
						 fon_color(); 
				   	
				                  	
				})
				$('.exp-one-tabtop').eq(index).next('div').find(".or").find("tr:last td:first").replaceWith('<td>初盘</td>');
				$('.exp-one-tabtop').eq(index).next('div').find(".or").find("tr:last td:first").css({"color":"rgb(102,102,102)"});
		})
	}
	//点击足球指数，调取最新数据
	function click_cli(){
		$(".exponent-box").on("click",".exp-one-tabtop",function(){
			
			var index=$(".exponent-box .exp-one-tabtop").index($(this));
			//console.log(index);
			$(this).next('div').html('');
			var mId = $(this).parent().attr("data_id");
			
			//获取第一场比赛足球指数
			if($(this).attr("data-toggle") == 1){
				$(this).attr("data-toggle","0");
			}else if($(this).attr("data-toggle") == 0){
				get_index({matchId:mId},function(data){
		   			//console.log(data)
		   			//console.log(index);
		   			//调取足球指数数据 
		   			zhi_title(index);
			   		get_ex(data,index);
		   		});
		   		$(this).attr("data-toggle","1")
			}
		   
		})
	}
	
	//获取开奖大全数据接口
	function get_lottery(obj, fn){
		var url = 'http://issue.wozhongla.com/bonus/getNumberNewBonus.vhtml?lotId=001';
		//console.log(url);
		getData(url, fn);
	}
	//获取开奖大全双色球数据,插入到页面
	function get_l(data){
		var oData = data.data.numberList[0];
		//console.log(oData);
		var lottery_number = oData.baseCode.split(',');
		var lottery_blue = oData.specCode;
		var mon = oData.bonusBlance;
		//console.log(mon);
		//console.log(mon.length)
		//设置奖金呈现方式
		if(mon.length == 11){mon = mon.substring(0,3)+'.'+mon.substring(1,3)+'亿';}
		else if(mon.length == 10){mon = mon.substring(0,2)+'.'+mon.substring(1,3)+'亿';}
		else if(mon.length == 9){mon = mon.substring(0,1)+'.'+mon.substring(1,3)+'亿';}
		else if(mon.length == 8){mon = '0.'+mon.substring(0,2)+'亿';}	
		else if(mon.length == 7){mon = '0.0'+mon.substring(0,1)+'亿';}
		
		var str = '';
		str = '<div class="win-ball-ssq oh"><span class="t12 dl">双色球</span><span class="t10 dl">'+oData.issueNum+'期</span></div><div class="win-ball-jchi oh">奖池奖金: <span class="win-red mar-right">'+mon+'</span>开奖日: <span>每周二四日<font class="mar-left">21:15</font></span></div><div class="win-ssq-listbox"><ul><li>'+lottery_number[0]+'</li><li>'+lottery_number[1]+'</li><li>'+lottery_number[2]+'</li><li>'+lottery_number[3]+'</li><li>'+lottery_number[4]+'</li><li>'+lottery_number[5]+'</li><li class="win-fola-blue">'+lottery_blue+'</li></ul></div>';
		$(".doubl").append(str);				
	}
	//获取开奖大全双色球数据接口
	function get_biglotto(obj, fn){
		var url = 'http://issue.wozhongla.com/bonus/getNumberNewBonus.vhtml?lotId='+obj.lotId;
		//console.log(url);
		getData(url, fn);
	}
	//获取开奖大全大乐透数据,插入到页面
	function get_big(data){
		//console.log(data);
		var oData = data.data.numberList[0];
		//console.log(oData);
		var lottery_number = oData.baseCode.split(',');
		var lottery_blue = oData.specCode.split(',');
		var mon = oData.bonusBlance.split('.')[0];
		//console.log(oData.issueNum)
		//设置奖金呈现方式
		if(mon.length == 11){mon = mon.substring(0,3)+'.'+mon.substring(1,3)+'亿';}
		else if(mon.length == 10){mon = mon.substring(0,2)+'.'+mon.substring(1,3)+'亿';}
		else if(mon.length == 9){mon = mon.substring(0,1)+'.'+mon.substring(1,3)+'亿';}
		else if(mon.length == 8){mon = '0.'+mon.substring(0,2)+'亿';}	
		else if(mon.length == 7){mon = '0.0'+mon.substring(0,1)+'亿';}
		var str = '';
		str = '<div class="win-ball-ssq oh"><span class="t12 dl">大乐透</span><span class="t10 dl">'+oData.issueNum+'期</span></div><div class="win-ball-jchi oh">奖池奖金: <span class="win-red mar-right">'+mon+'</span>开奖日: <span>每周一三六<font class="mar-left">20:30</font></span></div><div class="win-ssq-listbox"><ul><li>'+lottery_number[0]+'</li><li>'+lottery_number[1]+'</li><li>'+lottery_number[2]+'</li><li>'+lottery_number[3]+'</li><li>'+lottery_number[4]+'</li><li class="win-fola-blue">'+lottery_blue[0]+'</li><li class="win-fola-blue">'+lottery_blue[1]+'</li></ul></div>';
		$(".dale").append(str);				
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
				respondError(re)
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
	return {
		get_liveing : get_liveing,
		getLive : getLive,
		get_hotLea : get_hotLea,
		getHot : getHot,
		get_exponent : get_exponent,
		get_exp : get_exp,
		get_index : get_index,
		get_ex : get_ex,
		get_lottery : get_lottery,
		get_l : get_l,
		get_biglotto : get_biglotto,
		get_big : get_big,
		click_cli : click_cli
	
	}
})