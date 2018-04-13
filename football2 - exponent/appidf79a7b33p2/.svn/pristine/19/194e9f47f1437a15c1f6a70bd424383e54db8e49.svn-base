define(function(require, exports, module) {
	var $ = require("jquery");
	var getD = require("getData");
	var href = getD.href();
	//获取指定公司之后的页面所有数据
	function getData_asian_all(obj, fn) {
		//console.log(obj.tdm);
		var url = 'http://101.200.142.139:8085/sport13322/interface/odds/'+obj.matchId+'/'+obj.gameType+'/' + obj.tdm;
		console.log(url);
		getData(url, fn);
	}
	
	//向详情页里面插入数据
	function pushData1(obj) {
		
		//console.log(obj);
		if(obj == '') {
			
			$(".b1").empty();
			$(".ou1").empty();
			$(".da1").empty();
			return  $(".b1").html(getD.kong_zhi("<img src='img/kong.png'>","暂无数据")),
					$(".ou1").html(getD.kong_zhi("<img src='img/kong.png'>","暂无数据")),
					$(".da1").html(getD.kong_zhi("<img src='img/kong.png'>","暂无数据"))
		};


	
		var str1 = "";
		var oldTime = null;
		var titleId = 0;
		$(obj).each(function() {
			
			
			//console.log(oldTime);
			var time1 = this.time.split(" ");
			var rio = this.rio.split(",");
			//亚盘正数
				
					//对盘口数据进行判断
						//亚盘正数
					//判断是否封盘
				if(obj[0].gameType == '2'){
					if(this.capnum == 0.25){
						this.capnum = '平/半';
					}else if(this.capnum == 0){
						this.capnum = '平';
					}else if(this.capnum == 0.5){
						this.capnum = '半球';
					}
					else if(this.capnum == 0.75){
						this.capnum = '半/一';
					}else if(this.capnum == 1.0){
						this.capnum = '一球';
					}else if(this.capnum == 1.25){
						this.capnum = '一/一半';
					}else if(this.capnum == 1.5){
						this.capnum = '一球半';
					}else if(this.capnum == 1.75){
						this.capnum = '球半/两球';
					}else if(this.capnum == 2.0){
						this.capnum = '两球';
					}else if(this.capnum == 2.25){
						this.capnum = '两/两半';
					}else if(this.capnum == 2.5){
						this.capnum = '两球半';
					}else if(this.capnum == 2.75){
						this.capnum = '两半/三';
					}else if(this.capnum == 3.0){
						this.capnum = '三球';
					}else if(this.capnum == 3.25){
						this.capnum = '三/三半';
					}else if(this.capnum == 3.5){
						this.capnum = '三球半';
					}else if(this.capnum == 3.75){
						this.capnum = '三半/四';
					}else if(this.capnum == 4.0){
						this.capnum = '四球';
					}else if(this.capnum == 4.25){
						this.capnum = '四/四半';
					}else if(this.capnum == 4.5){
						this.capnum = '四球半';
					}else if(this.capnum == 4.75){
						this.capnum = '四半/五';
					}else if(this.capnum == 5.0){
						this.capnum = '五球';
					}else{}
					//负数
					if(this.capnum == '-0.25'){
						this.capnum = '受平/半';
					}else if(this.capnum == 0){
						this.capnum = '受平';
					}else if(this.capnum == '-0.5'){
						this.capnum = '受半球';
					}
					else if(this.capnum == '-0.75'){
						this.capnum = '受半/一';
					}else if(this.capnum == '-1.0'){
						this.capnum = '受一球';
					}else if(this.capnum == '-1.25'){
						this.capnum = '受一/一半';
					}else if(this.capnum == '-1.5'){
						this.capnum = '受一球半';
					}else if(this.capnum == '-1.75'){
						this.capnum = '受半/两';
					}else if(this.capnum == '-2.0'){
						this.capnum = '受两球';
					}else if(this.capnum == '-2.25'){
						this.capnum = '受两/两半';
					}else if(this.capnum == '-2.5'){
						this.capnum = '受两球半';
					}else if(this.capnum == '-2.75'){
						this.capnum = '受两半/三';
					}else if(this.capnum == '-3.0'){
						this.capnum = '受三球';
					}else if(this.capnum == '-3.25'){
						this.capnum = '受三/三半';
					}else if(this.capnum == '-3.5'){
						this.capnum = '受三球半';
					}else if(this.capnum == '-3.75'){
						this.capnum = '受三半/四';
					}else if(this.capnum == '-4.0'){
						this.capnum = '受四球';
					}else if(this.capnum == '-4.25'){
						this.capnum = '受四/四半';
					}else if(this.capnum == '-4.5'){
						this.capnum = '受四球半';
					}else if(this.capnum == '-4.75'){
						this.capnum = '受四半/五';
					}else if(this.capnum == '-5.0'){
						this.capnum = '受五球';
					}else{}
				}else{}
				if(rio[0]  == 0 || rio[1] == 0){
						rio[0] = '封盘';
						//console.log(rio[0]);
						rio[1] = '封盘';	
						rio[2] = '封盘';	
						this.capnum = '封盘';	
				}
					
			var id = titleId++;
			
			if(obj[0].gameType == '1'){
				var css= '';
				if(this.upDown.split(",")[0] ==1){var css="zs-red";}else if(this.upDown.split(",")[0] =='-1'){var css="zs-green";}else if(this.upDown.split(",")[0] ==0){var css="zs-black";}else{}
				var cs = '';
				if(this.upDown.split(",")[2]==1){var cs="zs-red";}else if(this.upDown.split(",")[2] =='-1'){var cs="zs-green";}else if(this.upDown.split(",")[2] == 0){var cs="zs-black";}else{}
				var c = '';
				if(this.upDown.split(",")[1]==1){var c="zs-red";}else if(this.upDown.split(",")[1] =='-1'){var c="zs-green";}else if(this.upDown.split(",")[1] == 0){var c="zs-black";}else{}		
				if(oldTime != time1[0]) {
					str1 += '<tr title-id="'+id+'" id="box-'+id+'"> <td colspan="4" class="pl-nav-time">' + time1[0] + '</td></tr><tr><td>' + time1[1] + '</td><td class="'+css+'">' + rio[0] + '</td><td class="'+cs+'">' + rio[2] + '</td><td class="'+c+'">' + rio[1] + '</td></tr>';
				}else{
					
					str1 += '<tr><td>' + time1[1] + '</td><td class="'+css+'">' + rio[0] + '</td><td class="'+cs+'">' + rio[2] + '</td><td class="'+c+'">' + rio[1] + '</td></tr>';
				};
					
				oldTime = time1[0]
			}else{
				var css= '';
				if(this.upDown.split(",")[0] ==1){var css="zs-red";}else if(this.upDown.split(",")[0] =='-1'){var css="zs-green";}else if(this.upDown.split(",")[0] ==0){var css="zs-black";}else{}
				var cs = '';
				if(this.upDown.split(",")[2]==1){var cs="zs-red";}else if(this.upDown.split(",")[2] =='-1'){var cs="zs-green";}else if(this.upDown.split(",")[2] == 0){var cs="zs-black";}else{}
				var c = '';
				if(this.upDown.split(",")[1]==1){var c="zs-red";}else if(this.upDown.split(",")[1] =='-1'){var c="zs-green";}else if(this.upDown.split(",")[1] == 0){var c="zs-black";}else{}				
				if(oldTime != time1[0]) {
					str1 += '<tr title-id="'+id+'" id="box-'+id+'"> <td colspan="4" class="pl-nav-time">' + time1[0] + '</td></tr><tr><td>' + time1[1] + '</td><td class="'+css+'">' + rio[0] + '</td><td class="'+c+'">' + this.capnum + '</td><td class="'+cs+'">' + rio[1] + '</td></tr>';
				}else{
					
					str1 += '<tr><td>' + time1[1] + '</td><td class="'+css+'">' + rio[0] + '</td><td class="'+c+'">' + this.capnum + '</td><td class="'+cs+'">' + rio[1] + '</td></tr>';
				};
					
				oldTime = time1[0]
			}
		})
		
		if(obj[0].gameType == '2'){
			
			//console.log(666);
				//console.log(obj[0].gameType);	
			if(obj[0].tdm == 'lj'){
				
				$(".b1").text("");
				$(".b1").append('<tr class="time1"><td colspan="4" class="pl-nav-tim"></td></tr><tr class=""><td colspan="4" class="pl-nav-tim"></td></tr>');
				$(".time1").before(str1);
				$(".b1").show();
				
			}
			

		}else if(obj[0].gameType == '1'){
			if(obj[0].tdm == 'lj'){
				//console.log(111);
				$(".ou1").text("");
				$(".ou1").append('<tr class="time1"><td colspan="4" class="pl-nav-tim"></td></tr><tr class=""><td colspan="4" class="pl-nav-tim"></td></tr>');
				$(".time1").before(str1);
				$(".ou1").show();
				
			}
			
		}else{
			
			if(obj[0].tdm == 'lj'){
				//console.log(777);
				//console.log(lj);
				$(".da1").text("");
				$(".da1").append('<tr class="time1"><td colspan="4" class="pl-nav-tim"></td></tr><tr class=""><td colspan="4" class="pl-nav-tim"></td></tr>');
				$(".time1").before(str1);
				$(".da1").show();
				
			}
			
		}
		all_color();
	//	title_float();
	}
//	function title_float(){
//		//标题浮动跟随
//		if($("li[class='zs-on2']").text() == '亚盘'){
//			$(".new-yp-right tr").each(function(){
//		        var id = $(this).attr("title-id");
//		        fixedTitle($("#box-"+id));
//		    })
//		}else if($("li[class='zs-on2']").text() == '欧赔'){
//			$(".new-yp-right tr").each(function(){
//		        var id = $(this).attr("title-id");
//		        fixedTitle($("#box-"+id));
//		    })
//		}else if($("li[class='zs-on2']").text() == '大小球'){
//			$(".new-yp-right tr").each(function(){
//		        var id = $(this).attr("title-id");
//		        fixedTitle($("#box-"+id));
//		    })
//		}else{}
//	}
//	//标题浮动跟随
//	function fixedTitle($boxDom){
//		var itemOffsetTop = $boxDom.offset().top;
//		//console.log(itemOffsetTop);
//		//var itemOuterHeight = $boxDom.outerHeight();
//		var old = 0;
//		$(window).scroll(function () {
//			var winScrollTop = $(window).scrollTop();
//			
//				if(!(winScrollTop > itemOffsetTop-75)) {
//              	
//                  if (old != 1){
//                  	//console.log(555)
//                      fixedChange($boxDom,1);
//                      old = 1;
//                  }
//             }else {
//                  if (old != 0){
//                  	//console.log(666)
//                      fixedChange($boxDom,0);
//                      old = 0;
//                  }
//              }
//				
//		})
//		
//		function fixedChange($boxDom,val){
//              if (val){
//              	//console.log(5551);
//                  $boxDom.removeClass("titleFix");
//              }else{
//              	//console.log(6661);
//                  $boxDom.addClass("titleFix");
//              }
//      }
//	}
	function pushData2(obj) {
		if(obj == '') {
			
			$(".b2").empty();
			$(".ou2").empty();
			$(".da2").empty();
			return  $(".b2").html(getD.kong_zhi("<img src='img/kong.png'>","暂无数据")),
					$(".ou2").html(getD.kong_zhi("<img src='img/kong.png'>","暂无数据")),
					$(".da2").html(getD.kong_zhi("<img src='img/kong.png'>","暂无数据"))
		};

		//console.log(obj[0].tdm);
		var str1 = "";
		var oldTime = null;
		$(obj).each(function() {
			//console.log(obj);
			//console.log(rio[0]);
			
			if(obj[0].gameType == '2'){
					if(this.capnum == 0.25){
						this.capnum = '平/半';
					}else if(this.capnum == 0){
						this.capnum = '平';
					}else if(this.capnum == 0.5){
						this.capnum = '半球';
					}
					else if(this.capnum == 0.75){
						this.capnum = '半/一';
					}else if(this.capnum == 1.0){
						this.capnum = '一球';
					}else if(this.capnum == 1.25){
						this.capnum = '一/一半';
					}else if(this.capnum == 1.5){
						this.capnum = '一球半';
					}else if(this.capnum == 1.75){
						this.capnum = '球半/两球';
					}else if(this.capnum == 2.0){
						this.capnum = '两球';
					}else if(this.capnum == 2.25){
						this.capnum = '两/两半';
					}else if(this.capnum == 2.5){
						this.capnum = '两球半';
					}else if(this.capnum == 2.75){
						this.capnum = '两半/三';
					}else if(this.capnum == 3.0){
						this.capnum = '三球';
					}else if(this.capnum == 3.25){
						this.capnum = '三/三半';
					}else if(this.capnum == 3.5){
						this.capnum = '三球半';
					}else if(this.capnum == 3.75){
						this.capnum = '三半/四';
					}else if(this.capnum == 4.0){
						this.capnum = '四球';
					}else if(this.capnum == 4.25){
						this.capnum = '四/四半';
					}else if(this.capnum == 4.5){
						this.capnum = '四球半';
					}else if(this.capnum == 4.75){
						this.capnum = '四半/五';
					}else if(this.capnum == 5.0){
						this.capnum = '五球';
					}else{}
					//负数
					if(this.capnum == '-0.25'){
						this.capnum = '受平/半';
					}else if(this.capnum == 0){
						this.capnum = '受平';
					}else if(this.capnum == '-0.5'){
						this.capnum = '受半球';
					}
					else if(this.capnum == '-0.75'){
						this.capnum = '受半/一';
					}else if(this.capnum == '-1.0'){
						this.capnum = '受一球';
					}else if(this.capnum == '-1.25'){
						this.capnum = '受一/一半';
					}else if(this.capnum == '-1.5'){
						this.capnum = '受一球半';
					}else if(this.capnum == '-1.75'){
						this.capnum = '受半/两';
					}else if(this.capnum == '-2.0'){
						this.capnum = '受两球';
					}else if(this.capnum == '-2.25'){
						this.capnum = '受两/两半';
					}else if(this.capnum == '-2.5'){
						this.capnum = '受两球半';
					}else if(this.capnum == '-2.75'){
						this.capnum = '受两半/三';
					}else if(this.capnum == '-3.0'){
						this.capnum = '受三球';
					}else if(this.capnum == '-3.25'){
						this.capnum = '受三/三半';
					}else if(this.capnum == '-3.5'){
						this.capnum = '受三球半';
					}else if(this.capnum == '-3.75'){
						this.capnum = '受三半/四';
					}else if(this.capnum == '-4.0'){
						this.capnum = '受四球';
					}else if(this.capnum == '-4.25'){
						this.capnum = '受四/四半';
					}else if(this.capnum == '-4.5'){
						this.capnum = '受四球半';
					}else if(this.capnum == '-4.75'){
						this.capnum = '受四半/五';
					}else if(this.capnum == '-5.0'){
						this.capnum = '受五球';
					}else{}
				}else{}
				
				
			var time1 = this.time.split(" ");
			var rio = this.rio.split(",");
			
			if(rio[0]  == 0 || rio[1] == 0){
						rio[0] = '封盘';
						//console.log(rio[0]);
						rio[1] = '封盘';	
						rio[2] = '封盘';	
						this.capnum = '封盘';	
				}
			//console.log(rio[0]);
			//console.log(time1[0]);
			//console.log(this.tdm);
			if(obj[0].gameType == '1'){
				var css= '';
				if(this.upDown.split(",")[0] ==1){var css="zs-red";}else if(this.upDown.split(",")[0] =='-1'){var css="zs-green";}else if(this.upDown.split(",")[0] ==0){var css="zs-black";}else{}
				var cs = '';
				if(this.upDown.split(",")[2]==1){var cs="zs-red";}else if(this.upDown.split(",")[2] =='-1'){var cs="zs-green";}else if(this.upDown.split(",")[2] == 0){var cs="zs-black";}else{}
				var c = '';
				if(this.upDown.split(",")[1]==1){var c="zs-red";}else if(this.upDown.split(",")[1] =='-1'){var c="zs-green";}else if(this.upDown.split(",")[1] == 0){var c="zs-black";}else{}			
				if(oldTime != time1[0]) {
					str1 += '<tr> <td colspan="4" class="pl-nav-time">' + time1[0] + '</td></tr><tr><td>' + time1[1] + '</td><td class="'+css+'">' + rio[0] + '</td><td class="'+cs+'">' + rio[2] + '</td><td class="'+c+'">' + rio[1] + '</td></tr>';
				}else{
					
					str1 += '<tr><td>' + time1[1] + '</td><td class="'+css+'">' + rio[0] + '</td><td class="'+cs+'">' + rio[2] + '</td><td class="'+c+'">' + rio[1] + '</td></tr>'
				};
					
				oldTime = time1[0]
			}else{
				var css= '';
				if(this.upDown.split(",")[0] ==1){var css="zs-red";}else if(this.upDown.split(",")[0] =='-1'){var css="zs-green";}else if(this.upDown.split(",")[0] ==0){var css="zs-black";}else{}
				var cs = '';
				if(this.upDown.split(",")[2]==1){var cs="zs-red";}else if(this.upDown.split(",")[2] =='-1'){var cs="zs-green";}else if(this.upDown.split(",")[2] == 0){var cs="zs-black";}else{}
				var c = '';
				if(this.upDown.split(",")[1]==1){var c="zs-red";}else if(this.upDown.split(",")[1] =='-1'){var c="zs-green";}else if(this.upDown.split(",")[1] == 0){var c="zs-black";}else{}			
				if(oldTime != time1[0]) {
					str1 += '<tr> <td colspan="4" class="pl-nav-time">' + time1[0] + '</td></tr><tr><td>' + time1[1] + '</td><td class="'+css+'">' + rio[0] + '</td><td class="'+c+'">' + this.capnum + '</td><td class="'+cs+'">' + rio[1] + '</td></tr>';
				}else{
					
					str1 += '<tr><td>' + time1[1] + '</td><td class="'+css+'">' + rio[0] + '</td><td class="'+c+'">' + this.capnum + '</td><td class="'+cs+'">' + rio[1] + '</td></tr>'
				};
					
				oldTime = time1[0]
			}
		})
		
		if(obj[0].gameType == '2'){
			
			
			if(obj[0].tdm=='ms'){
				$(".b2").text("");
				$(".b2").append('<tr class="time1"><td colspan="4" class="pl-nav-tim"></td></tr><tr class=""><td colspan="4" class="pl-nav-tim"></td></tr>');
				loader("hide");
				$(".time1").before(str1);
				$(".b2").show();
			}

		}else if(obj[0].gameType == '1'){
			
			
			if(obj[0].tdm=='ms'){
				//console.log(999999);
				$(".ou2").text("");
				$(".ou2").append('<tr class="time1"><td colspan="4" class="pl-nav-tim"></td></tr><tr class=""><td colspan="4" class="pl-nav-tim"></td></tr>');
				loader("hide");
				$(".time1").before(str1);
				$(".ou2").show();
			}

		}else{
			
			if(obj[0].tdm=='ms'){
				$(".da2").text("");
				$(".da2").append('<tr class="time1"><td colspan="4" class="pl-nav-tim"></td></tr><tr class=""><td colspan="4" class="pl-nav-tim"></td></tr>');
				loader("hide");
				$(".time1").before(str1);
				$(".da2").show();
			}

		}
		all_color();
	}
	function pushData3(obj) {
		
		if(obj == '') {
			
			$(".b3").empty();
			$(".ou3").empty();
			$(".da3").empty();
			return  $(".b3").html(getD.kong_zhi("<img src='img/kong.png'>","暂无数据")),
					$(".ou3").html(getD.kong_zhi("<img src='img/kong.png'>","暂无数据")),
					$(".da3").html(getD.kong_zhi("<img src='img/kong.png'>","暂无数据"))
		};

		
		//console.log(data.lj);
		var str1 = "";
		var oldTime = null;
		$(obj).each(function() {
			//console.log(this.tdm);
			//console.log(oldTime);
			var time1 = this.time.split(" ");
			var rio = this.rio.split(",");
			//console.log(rio[0]);
			//console.log(time1[0]);
			//console.log(this.tdm);
			if(obj[0].gameType == '2'){
					if(this.capnum == 0.25){
						this.capnum = '平/半';
					}else if(this.capnum == 0){
						this.capnum = '平';
					}else if(this.capnum == 0.5){
						this.capnum = '半球';
					}
					else if(this.capnum == 0.75){
						this.capnum = '半/一';
					}else if(this.capnum == 1.0){
						this.capnum = '一球';
					}else if(this.capnum == 1.25){
						this.capnum = '一/一半';
					}else if(this.capnum == 1.5){
						this.capnum = '一球半';
					}else if(this.capnum == 1.75){
						this.capnum = '球半/两球';
					}else if(this.capnum == 2.0){
						this.capnum = '两球';
					}else if(this.capnum == 2.25){
						this.capnum = '两/两半';
					}else if(this.capnum == 2.5){
						this.capnum = '两球半';
					}else if(this.capnum == 2.75){
						this.capnum = '两半/三';
					}else if(this.capnum == 3.0){
						this.capnum = '三球';
					}else if(this.capnum == 3.25){
						this.capnum = '三/三半';
					}else if(this.capnum == 3.5){
						this.capnum = '三球半';
					}else if(this.capnum == 3.75){
						this.capnum = '三半/四';
					}else if(this.capnum == 4.0){
						this.capnum = '四球';
					}else if(this.capnum == 4.25){
						this.capnum = '四/四半';
					}else if(this.capnum == 4.5){
						this.capnum = '四球半';
					}else if(this.capnum == 4.75){
						this.capnum = '四半/五';
					}else if(this.capnum == 5.0){
						this.capnum = '五球';
					}else{}
					//负数
					if(this.capnum == '-0.25'){
						this.capnum = '受平/半';
					}else if(this.capnum == 0){
						this.capnum = '受平';
					}else if(this.capnum == '-0.5'){
						this.capnum = '受半球';
					}
					else if(this.capnum == '-0.75'){
						this.capnum = '受半/一';
					}else if(this.capnum == '-1.0'){
						this.capnum = '受一球';
					}else if(this.capnum == '-1.25'){
						this.capnum = '受一/一半';
					}else if(this.capnum == '-1.5'){
						this.capnum = '受一球半';
					}else if(this.capnum == '-1.75'){
						this.capnum = '受半/两';
					}else if(this.capnum == '-2.0'){
						this.capnum = '受两球';
					}else if(this.capnum == '-2.25'){
						this.capnum = '受两/两半';
					}else if(this.capnum == '-2.5'){
						this.capnum = '受两球半';
					}else if(this.capnum == '-2.75'){
						this.capnum = '受两半/三';
					}else if(this.capnum == '-3.0'){
						this.capnum = '受三球';
					}else if(this.capnum == '-3.25'){
						this.capnum = '受三/三半';
					}else if(this.capnum == '-3.5'){
						this.capnum = '受三球半';
					}else if(this.capnum == '-3.75'){
						this.capnum = '受三半/四';
					}else if(this.capnum == '-4.0'){
						this.capnum = '受四球';
					}else if(this.capnum == '-4.25'){
						this.capnum = '受四/四半';
					}else if(this.capnum == '-4.5'){
						this.capnum = '受四球半';
					}else if(this.capnum == '-4.75'){
						this.capnum = '受四半/五';
					}else if(this.capnum == '-5.0'){
						this.capnum = '受五球';
					}else{}
				}else{}
				if(rio[0]  == 0 || rio[1] == 0){
						rio[0] = '封盘';
						//console.log(rio[0]);
						rio[1] = '封盘';	
						rio[2] = '封盘';	
						this.capnum = '封盘';	
				}
			if(obj[0].gameType == '1'){
				var css= '';
				if(this.upDown.split(",")[0] ==1){var css="zs-red";}else if(this.upDown.split(",")[0] =='-1'){var css="zs-green";}else if(this.upDown.split(",")[0] ==0){var css="zs-black";}else{}
				var cs = '';
				if(this.upDown.split(",")[2]==1){var cs="zs-red";}else if(this.upDown.split(",")[2] =='-1'){var cs="zs-green";}else if(this.upDown.split(",")[2] == 0){var cs="zs-black";}else{}
				var c = '';
				if(this.upDown.split(",")[1]==1){var c="zs-red";}else if(this.upDown.split(",")[1] =='-1'){var c="zs-green";}else if(this.upDown.split(",")[1] == 0){var c="zs-black";}else{}			
				if(oldTime != time1[0]) {
					str1 += '<tr> <td colspan="4" class="pl-nav-time">' + time1[0] + '</td></tr><tr><td>' + time1[1] + '</td><td class="'+css+'">' + rio[0] + '</td><td class="'+cs+'">' + rio[2] + '</td><td class="'+c+'">' + rio[1] + '</td></tr>';
				}else{
					
					str1 += '<tr><td>' + time1[1] + '</td><td class="'+css+'">' + rio[0] + '</td><td class="'+cs+'">' + rio[2] + '</td><td class="'+c+'">' + rio[1] + '</td></tr>'
				};
					
				oldTime = time1[0]
			}else{
				var css= '';
				if(this.upDown.split(",")[0] ==1){var css="zs-red";}else if(this.upDown.split(",")[0] =='-1'){var css="zs-green";}else if(this.upDown.split(",")[0] ==0){var css="zs-black";}else{}
				var cs = '';
				if(this.upDown.split(",")[2]==1){var cs="zs-red";}else if(this.upDown.split(",")[2] =='-1'){var cs="zs-green";}else if(this.upDown.split(",")[2] == 0){var cs="zs-black";}else{}
				var c = '';
				if(this.upDown.split(",")[1]==1){var c="zs-red";}else if(this.upDown.split(",")[1] =='-1'){var c="zs-green";}else if(this.upDown.split(",")[1] == 0){var c="zs-black";}else{}			
				if(oldTime != time1[0]) {
					str1 += '<tr> <td colspan="4" class="pl-nav-time">' + time1[0] + '</td></tr><tr><td>' + time1[1] + '</td><td class="'+css+'">' + rio[0] + '</td><td class="'+c+'">' + this.capnum + '</td><td class="'+cs+'">' + rio[1] + '</td></tr>';
				}else{
					
					str1 += '<tr><td>' + time1[1] + '</td><td class="'+css+'">' + rio[0] + '</td><td class="'+c+'">' + this.capnum + '</td><td class="'+cs+'">' + rio[1] + '</td></tr>'
				};
					
				oldTime = time1[0]
			}
		})
		
		if(obj[0].gameType == '2'){
			$(".b3").show();
			loader("show",$(".b3"));
			if(obj[0].tdm =='bw'){
				
				
				$(".b3").text("");
				$(".b3").append('<tr class="time1" style="border-bottom:0!important;"><td colspan="4" class=""></td></tr><tr class="" style="border-bottom:0!important;"><td colspan="4" class=""></td></tr>');
				loader('hide');
				$(".time1").before(str1);
				
			}

		}else if(obj[0].gameType == '1'){
			$(".ou3").show();
			loader("show",$(".ou3"));
			if(obj[0].tdm =='bw'){
				$(".ou3").text("");
				$(".ou3").append('<tr class="time1"><td colspan="4" class="pl-nav-tim"></td></tr><tr class=""><td colspan="4" class="pl-nav-tim"></td></tr>');
				loader('hide');
				$(".time1").before(str1);
				
			}

		}else{
			$(".da3").show();
			loader("show",$(".da3"));
			if(obj[0].tdm =='bw'){
				$(".da3").text("");
				$(".da3").append('<tr class="time1"><td colspan="4" class="pl-nav-time"></td></tr><tr class=""><td colspan="4" class="pl-nav-time"></td></tr>');
				loader('hide');
				$(".time1").before(str1);
				
			}

		}
		all_color();
	}
	function pushData4(obj) {
		if(obj == '') {
			
			$(".b4").empty();
			$(".ou4").empty();
			$(".da4").empty();
			return  $(".b4").html(getD.kong_zhi("<img src='img/kong.png'>","暂无数据")),
					$(".ou4").html(getD.kong_zhi("<img src='img/kong.png'>","暂无数据")),
					$(".da4").html(getD.kong_zhi("<img src='img/kong.png'>","暂无数据"))
		};

		//console.log(obj);
		var str1 = "";
		var oldTime = null;
		$(obj).each(function() {
			//console.log(obj);
			//console.log(oldTime);
			var time1 = this.time.split(" ");
			var rio = this.rio.split(",");
			if(obj[0].gameType == '2'){
					if(this.capnum == 0.25){
						this.capnum = '平/半';
					}else if(this.capnum == 0){
						this.capnum = '平';
					}else if(this.capnum == 0.5){
						this.capnum = '半球';
					}
					else if(this.capnum == 0.75){
						this.capnum = '半/一';
					}else if(this.capnum == 1.0){
						this.capnum = '一球';
					}else if(this.capnum == 1.25){
						this.capnum = '一/一半';
					}else if(this.capnum == 1.5){
						this.capnum = '一球半';
					}else if(this.capnum == 1.75){
						this.capnum = '球半/两球';
					}else if(this.capnum == 2.0){
						this.capnum = '两球';
					}else if(this.capnum == 2.25){
						this.capnum = '两/两半';
					}else if(this.capnum == 2.5){
						this.capnum = '两球半';
					}else if(this.capnum == 2.75){
						this.capnum = '两半/三';
					}else if(this.capnum == 3.0){
						this.capnum = '三球';
					}else if(this.capnum == 3.25){
						this.capnum = '三/三半';
					}else if(this.capnum == 3.5){
						this.capnum = '三球半';
					}else if(this.capnum == 3.75){
						this.capnum = '三半/四';
					}else if(this.capnum == 4.0){
						this.capnum = '四球';
					}else if(this.capnum == 4.25){
						this.capnum = '四/四半';
					}else if(this.capnum == 4.5){
						this.capnum = '四球半';
					}else if(this.capnum == 4.75){
						this.capnum = '四半/五';
					}else if(this.capnum == 5.0){
						this.capnum = '五球';
					}else{}
					//负数
					if(this.capnum == '-0.25'){
						this.capnum = '受平/半';
					}else if(this.capnum == 0){
						this.capnum = '受平';
					}else if(this.capnum == '-0.5'){
						this.capnum = '受半球';
					}
					else if(this.capnum == '-0.75'){
						this.capnum = '受半/一';
					}else if(this.capnum == '-1.0'){
						this.capnum = '受一球';
					}else if(this.capnum == '-1.25'){
						this.capnum = '受一/一半';
					}else if(this.capnum == '-1.5'){
						this.capnum = '受一球半';
					}else if(this.capnum == '-1.75'){
						this.capnum = '受半/两';
					}else if(this.capnum == '-2.0'){
						this.capnum = '受两球';
					}else if(this.capnum == '-2.25'){
						this.capnum = '受两/两半';
					}else if(this.capnum == '-2.5'){
						this.capnum = '受两球半';
					}else if(this.capnum == '-2.75'){
						this.capnum = '受两半/三';
					}else if(this.capnum == '-3.0'){
						this.capnum = '受三球';
					}else if(this.capnum == '-3.25'){
						this.capnum = '受三/三半';
					}else if(this.capnum == '-3.5'){
						this.capnum = '受三球半';
					}else if(this.capnum == '-3.75'){
						this.capnum = '受三半/四';
					}else if(this.capnum == '-4.0'){
						this.capnum = '受四球';
					}else if(this.capnum == '-4.25'){
						this.capnum = '受四/四半';
					}else if(this.capnum == '-4.5'){
						this.capnum = '受四球半';
					}else if(this.capnum == '-4.75'){
						this.capnum = '受四半/五';
					}else if(this.capnum == '-5.0'){
						this.capnum = '受五球';
					}else{}
				}else{}
			if(rio[0]  == 0 || rio[1] == 0){
				
						rio[0] = '封盘';
						rio[1] = '封盘';
						rio[2] = '封盘';	
						this.capnum = '封盘';
			}
			//console.log(rio[0]);
			//console.log(time1[0]);
			//console.log(this.tdm);
			if(obj[0].gameType == '1'){
				var css= '';
				if(this.upDown.split(",")[0] ==1){var css="zs-red";}else if(this.upDown.split(",")[0] =='-1'){var css="zs-green";}else if(this.upDown.split(",")[0] ==0){var css="zs-black";}else{}
				var cs = '';
				if(this.upDown.split(",")[2]==1){var cs="zs-red";}else if(this.upDown.split(",")[2] =='-1'){var cs="zs-green";}else if(this.upDown.split(",")[2] == 0){var cs="zs-black";}else{}
				var c = '';
				if(this.upDown.split(",")[1]==1){var c="zs-red";}else if(this.upDown.split(",")[1] =='-1'){var c="zs-green";}else if(this.upDown.split(",")[1] == 0){var c="zs-black";}else{}			
				if(oldTime != time1[0]) {
					str1 += '<tr> <td colspan="4" class="pl-nav-time">' + time1[0] + '</td></tr><tr><td>' + time1[1] + '</td><td class="'+css+'">' + rio[0] + '</td><td class="'+cs+'">' + rio[2] + '</td><td class="'+c+'">' + rio[1] + '</td></tr>';
				}else{
					
					str1 += '<tr><td>' + time1[1] + '</td><td class="'+css+'">' + rio[0] + '</td><td class="'+cs+'">' + rio[2] + '</td><td class="'+c+'">' + rio[1] + '</td></tr>'
				};
					
				oldTime = time1[0]
			}else{
				var css= '';
				if(this.upDown.split(",")[0] ==1){var css="zs-red";}else if(this.upDown.split(",")[0] =='-1'){var css="zs-green";}else if(this.upDown.split(",")[0] ==0){var css="zs-black";}else{}
				var cs = '';
				if(this.upDown.split(",")[2]==1){var cs="zs-red";}else if(this.upDown.split(",")[2] =='-1'){var cs="zs-green";}else if(this.upDown.split(",")[2] == 0){var cs="zs-black";}else{}
				var c = '';
				if(this.upDown.split(",")[1]==1){var c="zs-red";}else if(this.upDown.split(",")[1] =='-1'){var c="zs-green";}else if(this.upDown.split(",")[1] == 0){var c="zs-black";}else{}			
				if(oldTime != time1[0]) {
					str1 += '<tr> <td colspan="4" class="pl-nav-time">' + time1[0] + '</td></tr><tr><td>' + time1[1] + '</td><td class="'+css+'">' + rio[0] + '</td><td class="'+c+'">' + this.capnum + '</td><td class="'+cs+'">' + rio[1] + '</td></tr>';
				}else{
					
					str1 += '<tr><td>' + time1[1] + '</td><td class="'+css+'">' + rio[0] + '</td><td class="'+c+'">' + this.capnum + '</td><td class="'+cs+'">' + rio[1] + '</td></tr>'
				};
					
				oldTime = time1[0]
			}
			
			
		})
		
		if(obj[0].gameType == '2'){
	
			if(obj[0].tdm == 'hg'){
				$(".b4").text("");
				$(".b4").append('<tr class="time1"><td colspan="4" class="pl-nav-tim"></td></tr><tr class=""><td colspan="4" class="pl-nav-tim"></td></tr>');
				$(".time1").before(str1);
				$(".b4").show();
			}

		}else if(obj[0].gameType == '1'){

			if(obj[0].tdm == 'hg'){
				$(".ou4").text("");
			    $(".ou4").append('<tr class="time1"><td colspan="4" class="pl-nav-tim"></td></tr><tr class=""><td colspan="4" class="pl-nav-tim"></td></tr>');
				$(".time1").before(str1);
				$(".ou4").show();
			}

		}else{

			if(obj[0].tdm == 'hg'){
				$(".da4").text("");
				$(".da4").append('<tr class="time1"><td colspan="4" class="pl-nav-tim"></td></tr><tr class=""><td colspan="4" class="pl-nav-tim"></td></tr>');
				$(".time1").before(str1);
				$(".da4").show();
			}
		
			
		}
		all_color();
		
	}
	function pushData5(obj) {
		
		if(obj == '') {
			
			$(".b5").empty();
			$(".ou5").empty();
			$(".da5").empty();
			return  $(".b5").html(getD.kong_zhi("<img src='img/kong.png'>","暂无数据")),
					$(".ou5").html(getD.kong_zhi("<img src='img/kong.png'>","暂无数据")),
					$(".da5").html(getD.kong_zhi("<img src='img/kong.png'>","暂无数据"))
		};

		//console.log(obj);
		var str1 = "";
		var oldTime = null;
		$(obj).each(function() {
		//	console.log(obj);
			//console.log(oldTime);
			var time1 = this.time.split(" ");
			var rio = this.rio.split(",");
			//console.log(rio[0]);
			//console.log(time1[0]);
			//console.log(this.tdm);
			if(obj[0].gameType == '2'){
					if(this.capnum == 0.25){
						this.capnum = '平/半';
					}else if(this.capnum == 0){
						this.capnum = '平';
					}else if(this.capnum == 0.5){
						this.capnum = '半球';
					}
					else if(this.capnum == 0.75){
						this.capnum = '半/一';
					}else if(this.capnum == 1.0){
						this.capnum = '一球';
					}else if(this.capnum == 1.25){
						this.capnum = '一/一半';
					}else if(this.capnum == 1.5){
						this.capnum = '一球半';
					}else if(this.capnum == 1.75){
						this.capnum = '球半/两球';
					}else if(this.capnum == 2.0){
						this.capnum = '两球';
					}else if(this.capnum == 2.25){
						this.capnum = '两/两半';
					}else if(this.capnum == 2.5){
						this.capnum = '两球半';
					}else if(this.capnum == 2.75){
						this.capnum = '两半/三';
					}else if(this.capnum == 3.0){
						this.capnum = '三球';
					}else if(this.capnum == 3.25){
						this.capnum = '三/三半';
					}else if(this.capnum == 3.5){
						this.capnum = '三球半';
					}else if(this.capnum == 3.75){
						this.capnum = '三半/四';
					}else if(this.capnum == 4.0){
						this.capnum = '四球';
					}else if(this.capnum == 4.25){
						this.capnum = '四/四半';
					}else if(this.capnum == 4.5){
						this.capnum = '四球半';
					}else if(this.capnum == 4.75){
						this.capnum = '四半/五';
					}else if(this.capnum == 5.0){
						this.capnum = '五球';
					}else{}
					//负数
					if(this.capnum == '-0.25'){
						this.capnum = '受平/半';
					}else if(this.capnum == 0){
						this.capnum = '受平';
					}else if(this.capnum == '-0.5'){
						this.capnum = '受半球';
					}
					else if(this.capnum == '-0.75'){
						this.capnum = '受半/一';
					}else if(this.capnum == '-1.0'){
						this.capnum = '受一球';
					}else if(this.capnum == '-1.25'){
						this.capnum = '受一/一半';
					}else if(this.capnum == '-1.5'){
						this.capnum = '受一球半';
					}else if(this.capnum == '-1.75'){
						this.capnum = '受半/两';
					}else if(this.capnum == '-2.0'){
						this.capnum = '受两球';
					}else if(this.capnum == '-2.25'){
						this.capnum = '受两/两半';
					}else if(this.capnum == '-2.5'){
						this.capnum = '受两球半';
					}else if(this.capnum == '-2.75'){
						this.capnum = '受两半/三';
					}else if(this.capnum == '-3.0'){
						this.capnum = '受三球';
					}else if(this.capnum == '-3.25'){
						this.capnum = '受三/三半';
					}else if(this.capnum == '-3.5'){
						this.capnum = '受三球半';
					}else if(this.capnum == '-3.75'){
						this.capnum = '受三半/四';
					}else if(this.capnum == '-4.0'){
						this.capnum = '受四球';
					}else if(this.capnum == '-4.25'){
						this.capnum = '受四/四半';
					}else if(this.capnum == '-4.5'){
						this.capnum = '受四球半';
					}else if(this.capnum == '-4.75'){
						this.capnum = '受四半/五';
					}else if(this.capnum == '-5.0'){
						this.capnum = '受五球';
					}else{}
				}else{}
			if(rio[0]  == 0 || rio[1] == 0){
						rio[0] = '封盘';
						//console.log(rio[0]);
						rio[1] = '封盘';	
						rio[2] = '封盘';	
						this.capnum = '封盘';	
			}
			if(obj[0].gameType == '1'){
				var css= '';
				if(this.upDown.split(",")[0] ==1){var css="zs-red";}else if(this.upDown.split(",")[0] =='-1'){var css="zs-green";}else if(this.upDown.split(",")[0] ==0){var css="zs-black";}else{}
				var cs = '';
				if(this.upDown.split(",")[2]==1){var cs="zs-red";}else if(this.upDown.split(",")[2] =='-1'){var cs="zs-green";}else if(this.upDown.split(",")[2] == 0){var cs="zs-black";}else{}
				var c = '';
				if(this.upDown.split(",")[1]==1){var c="zs-red";}else if(this.upDown.split(",")[1] =='-1'){var c="zs-green";}else if(this.upDown.split(",")[1] == 0){var c="zs-black";}else{}			
				if(oldTime != time1[0]) {
					str1 += '<tr> <td colspan="4" class="pl-nav-time">' + time1[0] + '</td></tr><tr><td>' + time1[1] + '</td><td class="'+css+'">' + rio[0] + '</td><td class="'+cs+'">' + rio[2] + '</td><td class="'+c+'">' + rio[1] + '</td></tr>';
				}else{
					
					str1 += '<tr><td>' + time1[1] + '</td><td class="'+css+'">' + rio[0] + '</td><td class="'+cs+'">' + rio[2] + '</td><td class="'+c+'">' + rio[1] + '</td></tr>'
				};
					
				oldTime = time1[0]
			}else{
				var css= '';
				if(this.upDown.split(",")[0] ==1){var css="zs-red";}else if(this.upDown.split(",")[0] =='-1'){var css="zs-green";}else if(this.upDown.split(",")[0] ==0){var css="zs-black";}else{}
				var cs = '';
				if(this.upDown.split(",")[2]==1){var cs="zs-red";}else if(this.upDown.split(",")[2] =='-1'){var cs="zs-green";}else if(this.upDown.split(",")[2] == 0){var cs="zs-black";}else{}
				var c = '';
				if(this.upDown.split(",")[1]==1){var c="zs-red";}else if(this.upDown.split(",")[1] =='-1'){var c="zs-green";}else if(this.upDown.split(",")[1] == 0){var c="zs-black";}else{}			
				if(oldTime != time1[0]) {
					str1 += '<tr> <td colspan="4" class="pl-nav-time">' + time1[0] + '</td></tr><tr><td>' + time1[1] + '</td><td class="'+css+'">' + rio[0] + '</td><td class="'+c+'">' + this.capnum + '</td><td class="'+cs+'">' + rio[1] + '</td></tr>';
				}else{
					
					str1 += '<tr><td>' + time1[1] + '</td><td class="'+css+'">' + rio[0] + '</td><td class="'+c+'">' + this.capnum + '</td><td class="'+cs+'">' + rio[1] + '</td></tr>'
				};
					
				oldTime = time1[0]
			}
			})
			
		//console.log(obj[0].gameType);
		if(obj[0].gameType == '2'){
				
			if(obj[0].tdm =='hb'){
				$(".b5").text("");
				$(".b5").append('<tr class="time1"><td colspan="4" class="pl-nav-tim"></td></tr><tr class=""><td colspan="4" class="pl-nav-tim"></td></tr>');
				$(".time1").before(str1);
				$(".b5").show();
			}

		}else if(obj[0].gameType == '1'){
			
			//console.log(666);
			if(obj[0].tdm =='hb'){
				
				$(".ou5").text("");
				$(".ou5").append('<tr class="time1"><td colspan="4" class="pl-nav-tim"></td></tr><tr class=""><td colspan="4" class="pl-nav-tim"></td></tr>');
				$(".time1").before(str1);
				$(".ou5").show();
			}

		}else{

			if(obj[0].tdm =='hb'){
				$(".da5").text("");
				$(".da5").append('<tr class="time1"><td colspan="4" class="pl-nav-tim"></td></tr><tr class=""><td colspan="4" class="pl-nav-tim"></td></tr>');
				$(".time1").before(str1);
				$(".da5").show();
			}

			
		}
		all_color();
	}
	function pushData6(obj) {
		if(obj == '') {
			
			$(".b6").empty();
			$(".ou6").empty();
			$(".da6").empty();
			return  $(".b6").html(getD.kong_zhi("<img src='img/kong.png'>","暂无数据")),
					$(".ou6").html(getD.kong_zhi("<img src='img/kong.png'>","暂无数据")),
					$(".da6").html(getD.kong_zhi("<img src='img/kong.png'>","暂无数据"))
		};

		//console.log(999);
		var str1 = "";
		var oldTime = null;
		$(obj).each(function() {
			
			//console.log(oldTime);
			var time1 = this.time.split(" ");
			var rio = this.rio.split(",");
			//console.log(rio[0]);
			//console.log(time1[0]);
			//console.log(this.tdm);
			if(obj[0].gameType == '2'){
				
					if(this.capnum == 0.25){
						this.capnum = '平/半';
					}else if(this.capnum == 0){
						this.capnum = '平';
					}else if(this.capnum == 0.5){
						this.capnum = '半球';
					}
					else if(this.capnum == 0.75){
						this.capnum = '半/一';
					}else if(this.capnum == 1.0){
						this.capnum = '一球';
					}else if(this.capnum == 1.25){
						this.capnum = '一/一半';
					}else if(this.capnum == 1.5){
						this.capnum = '一球半';
					}else if(this.capnum == 1.75){
						this.capnum = '球半/两球';
					}else if(this.capnum == 2.0){
						this.capnum = '两球';
					}else if(this.capnum == 2.25){
						this.capnum = '两/两半';
					}else if(this.capnum == 2.5){
						this.capnum = '两球半';
					}else if(this.capnum == 2.75){
						this.capnum = '两半/三';
					}else if(this.capnum == 3.0){
						this.capnum = '三球';
					}else if(this.capnum == 3.25){
						this.capnum = '三/三半';
					}else if(this.capnum == 3.5){
						this.capnum = '三球半';
					}else if(this.capnum == 3.75){
						this.capnum = '三半/四';
					}else if(this.capnum == 4.0){
						this.capnum = '四球';
					}else if(this.capnum == 4.25){
						this.capnum = '四/四半';
					}else if(this.capnum == 4.5){
						this.capnum = '四球半';
					}else if(this.capnum == 4.75){
						this.capnum = '四半/五';
					}else if(this.capnum == 5.0){
						this.capnum = '五球';
					}else{}
					//负数
					if(this.capnum == '-0.25'){
						this.capnum = '受平/半';
					}else if(this.capnum == 0){
						this.capnum = '受平';
					}else if(this.capnum == '-0.5'){
						this.capnum = '受半球';
					}
					else if(this.capnum == '-0.75'){
						this.capnum = '受半/一';
					}else if(this.capnum == '-1.0'){
						this.capnum = '受一球';
					}else if(this.capnum == '-1.25'){
						this.capnum = '受一/一半';
					}else if(this.capnum == '-1.5'){
						this.capnum = '受一球半';
					}else if(this.capnum == '-1.75'){
						this.capnum = '受半/两';
					}else if(this.capnum == '-2.0'){
						this.capnum = '受两球';
					}else if(this.capnum == '-2.25'){
						this.capnum = '受两/两半';
					}else if(this.capnum == '-2.5'){
						this.capnum = '受两球半';
					}else if(this.capnum == '-2.75'){
						this.capnum = '受两半/三';
					}else if(this.capnum == '-3.0'){
						this.capnum = '受三球';
					}else if(this.capnum == '-3.25'){
						this.capnum = '受三/三半';
					}else if(this.capnum == '-3.5'){
						this.capnum = '受三球半';
					}else if(this.capnum == '-3.75'){
						this.capnum = '受三半/四';
					}else if(this.capnum == '-4.0'){
						this.capnum = '受四球';
					}else if(this.capnum == '-4.25'){
						this.capnum = '受四/四半';
					}else if(this.capnum == '-4.5'){
						this.capnum = '受四球半';
					}else if(this.capnum == '-4.75'){
						this.capnum = '受四半/五';
					}else if(this.capnum == '-5.0'){
						this.capnum = '受五球';
					}else{}
				}else{}
			if(rio[0]  == 0 || rio[1] == 0){
						rio[0] = '封盘';
						//console.log(rio[0]);
						rio[1] = '封盘';	
						rio[2] = '封盘';	
						this.capnum = '封盘';	
			}
			if(obj[0].gameType == '1'){
				var css= '';
				if(this.upDown.split(",")[0] ==1){var css="zs-red";}else if(this.upDown.split(",")[0] =='-1'){var css="zs-green";}else if(this.upDown.split(",")[0] ==0){var css="zs-black";}else{}
				var cs = '';
				if(this.upDown.split(",")[2]==1){var cs="zs-red";}else if(this.upDown.split(",")[2] =='-1'){var cs="zs-green";}else if(this.upDown.split(",")[2] == 0){var cs="zs-black";}else{}
				var c = '';
				if(this.upDown.split(",")[1]==1){var c="zs-red";}else if(this.upDown.split(",")[1] =='-1'){var c="zs-green";}else if(this.upDown.split(",")[1] == 0){var c="zs-black";}else{}			
				if(oldTime != time1[0]) {
					str1 += '<tr> <td colspan="4" class="pl-nav-time">' + time1[0] + '</td></tr><tr><td>' + time1[1] + '</td><td class="'+css+'">' + rio[0] + '</td><td class="'+cs+'">' + rio[2] + '</td><td class="'+c+'">' + rio[1] + '</td></tr>';
				}else{
					
					str1 += '<tr><td>' + time1[1] + '</td><td class="'+css+'">' + rio[0] + '</td><td class="'+cs+'">' + rio[2] + '</td><td class="'+c+'">' + rio[1] + '</td></tr>'
				};
					
				oldTime = time1[0]
			}else{
				var css= '';
				if(this.upDown.split(",")[0] ==1){var css="zs-red";}else if(this.upDown.split(",")[0] =='-1'){var css="zs-green";}else if(this.upDown.split(",")[0] ==0){var css="zs-black";}else{}
				var cs = '';
				if(this.upDown.split(",")[2]==1){var cs="zs-red";}else if(this.upDown.split(",")[2] =='-1'){var cs="zs-green";}else if(this.upDown.split(",")[2] == 0){var cs="zs-black";}else{}
				var c = '';
				if(this.upDown.split(",")[1]==1){var c="zs-red";}else if(this.upDown.split(",")[1] =='-1'){var c="zs-green";}else if(this.upDown.split(",")[1] == 0){var c="zs-black";}else{}			
				if(oldTime != time1[0]) {
					str1 += '<tr> <td colspan="4" class="pl-nav-time">' + time1[0] + '</td></tr><tr><td>' + time1[1] + '</td><td class="'+css+'">' + rio[0] + '</td><td class="'+c+'">' + this.capnum + '</td><td class="'+cs+'">' + rio[1] + '</td></tr>';
				}else{
					//console.log(rio[0]);
					str1 += '<tr><td>' + time1[1] + '</td><td class="'+css+'">' + rio[0] + '</td><td class="'+c+'">' + this.capnum + '</td><td class="'+cs+'">' + rio[1] + '</td></tr>'
				};
					
				oldTime = time1[0]
			}
			})

		
		if(obj[0].gameType == '2'){

			if(obj[0].tdm =='sb'){
				$(".b6").text("");
				$(".b6").append('<tr class="time1"><td colspan="4" class="pl-nav-tim"></td></tr><tr class=""><td colspan="4" class="pl-nav-tim"></td></tr>');
				$(".time1").before(str1);
				$(".b6").show();
			}
//			else{}
		}else if(obj[0].gameType == '1'){

			if(obj[0].tdm =='sb'){
				$(".ou6").text("");
				$(".ou6").append('<tr class="time1"><td colspan="4" class="pl-nav-tim"></td></tr><tr class=""><td colspan="4" class="pl-nav-tim"></td></tr>');
				$(".time1").before(str1);
				$(".ou6").show();
			}
//			else{}
		}else{

			if(obj[0].tdm =='sb'){
				$(".da6").text("");
				$(".da6").append('<tr class="time1"><td colspan="4" class="pl-nav-tim"></td></tr><tr class=""><td colspan="4" class="pl-nav-tim"></td></tr>');
				$(".time1").before(str1);
				$(".da6").show();
			}
//			else{}
			
		}
		all_color();
	}
	/*详情页底部footer变化切换*/
	function oddy_tab(){
//		var gameType = href.gameType;
			//odds_tab(gameType);
		
		$(".zs-nav2 li").click(function(){
		    $(".zs-nav2 li").removeClass("zs-on2");
		    $(this).addClass("zs-on2");
		    $(".new-yp-box").hide();
		    var index=$(".zs-nav2 li").index($(this));
		    $(".new-yp-box:eq("+index+")").show();
		   
		    var type = $(this).text();
		    if(type== '大小球'){gameType = 3;}
		    if(type == '亚盘')	{gameType = 2;}
		    if(type== '欧赔'){gameType = 1;}
		     
		    odds_tab(gameType);
		  
		  			var mid = href.mid;

		  			var tdm = decodeURI(href.tdm);
		  			if(tdm == '利记'){tdm = 'lj'}
					if(tdm == '澳彩'){tdm = 'ms'}
					if(tdm == '智博'){tdm = 'bw'}
					if(tdm == '皇冠'){tdm = 'hg'}
					if(tdm == '浩博'){tdm = 'hb'}
					if(tdm == '沙巴'){tdm = 'sb'}
					var tdm = tdm;
		  			
		  	getData_asian_all({matchId:mid,gameType:gameType,tdm:tdm},function(data){
		  		console.log(data);
		  		$(data).each(function(){
					for(var key in data){
							name = key;
							
						}
										
						if(name == 'lj'){
							//console.log(data.lj);
							pushData1(data.lj);
							$(".yp-nav li:contains('利记')").addClass("pl-on").siblings().removeClass('pl-on');
						}else if(name == 'ms'){
							pushData2(data.ms);
							$(".yp-nav li:contains('澳彩')").addClass("pl-on").siblings().removeClass('pl-on');
						}else if(name == 'bw'){
							pushData3(data.bw);
							$(".yp-nav li:contains('智博')").addClass("pl-on").siblings().removeClass('pl-on');
						}else if(name == 'hg'){
							//console.log(data.hg);
							pushData4(data.hg);
							$(".yp-nav li:contains('皇冠')").addClass("pl-on").siblings().removeClass('pl-on');
						}else if(name == 'hb'){
							pushData5(data.hb);
							$(".yp-nav li:contains('浩博')").addClass("pl-on").siblings().removeClass('pl-on');
						}else if(name == 'sb'){
							
							pushData6(data.sb);
							$(".yp-nav li:contains('沙巴')").addClass("pl-on").siblings().removeClass('pl-on');
						}else{}
				})
		  	})
		})
	
	}
	/*详情页不同公司切换变化*/
	function odds_tab(gameType){
		var gameT = gameType;
		
		$(".yp-nav li").click(function(){
	
			if(gameT == 2){
				 $(".pl_y li").removeClass("pl-on");
			    $(this).addClass("pl-on");
			    $(".ya-box").hide();
			    var index=$(".pl_y li").index($(this));
			    $(".ya-box:eq("+index+")").show();
			}
			if(gameT == 1){
				 $(".pl_o li").removeClass("pl-on");
			    $(this).addClass("pl-on");
			    $(".ou-box").hide();
			    var index=$(".pl_o li").index($(this));
			    $(".ou-box:eq("+index+")").show();
			   
			}
			if(gameT == 3){
				 $(".pl_d li").removeClass("pl-on");
			    $(this).addClass("pl-on");
			    $(".da-box").hide();
			    var index=$(".pl_d li").index($(this));
			    $(".da-box:eq("+index+")").show();
			}
			   
			var index = index+1;
			 			
			var tdm2 = $(this).text();
			if(tdm2 == '利记'){tdm2 = 'lj'}
			if(tdm2 == '澳彩'){tdm2 = 'ms'}
			if(tdm2 == '智博'){tdm2 = 'bw'}
			if(tdm2 == '皇冠'){tdm2 = 'hg'}
			if(tdm2 == '浩博'){tdm2 = 'hb'}
			if(tdm2 == '沙巴'){tdm2 = 'sb'}			
		   
		  	var mid = href.mid;
		  	//console.log(tdm2);
		  	//console.log(gameT);
			if(gameT == '2'){$('.b'+index).empty();getD.loader("show",$('.b'+index));}
		  	if(gameT == '1'){$('.ou'+index).empty();getD.loader("show",$('.ou'+index));}
			if(gameT == '3'){$('.da'+index).empty();getD.loader("show",$('.da'+index));}
			
		    getData_asian_all({matchId:mid,gameType:gameT,tdm:tdm2},function(data){
		    	//console.log(gameType);
		    	//console.log(data);
				$(data).each(function(){
					for(var key in data){
							name = key;
							
						}
										
						if(name == 'lj'){
							pushData1(data.lj);
							$(".yp-nav li:contains('利记')").addClass("pl-on").siblings().removeClass('pl-on');
						}else if(name == 'ms'){
							
							pushData2(data.ms);
							$(".yp-nav li:contains('澳彩')").addClass("pl-on").siblings().removeClass('pl-on');
						}else if(name == 'bw'){
							pushData3(data.bw);
							$(".yp-nav li:contains('智博')").addClass("pl-on").siblings().removeClass('pl-on');
						}else if(name == 'hg'){
							//console.log(data.hg);
							pushData4(data.hg);
							$(".yp-nav li:contains('皇冠')").addClass("pl-on").siblings().removeClass('pl-on');
						}else if(name == 'hb'){
							pushData5(data.hb);
							$(".yp-nav li:contains('浩博')").addClass("pl-on").siblings().removeClass('pl-on');
						}else if(name == 'sb'){
							
							pushData6(data.sb);
							$(".yp-nav li:contains('沙巴')").addClass("pl-on").siblings().removeClass('pl-on');
						}else{}
				})
		    });
		    
		})
		
	}
	//odds.html当即赔或初陪为0时，字体颜色变化
	function all_color(){
		var x = $(".box-main td");
		for(var i = 0; i < x.length; i++){
			var c =$(x[i]).text();
			
			if(c == '封盘'){
				//console.log(666);
				$(x[i]).css({"color":"rgb(89,89,89)"});
			}
		}
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
	//将URL转化成数组
	function ro() {
		var qs = location.href.split("?")[1];
		//console.log(qs);
		var arr = qs.split("&");
		//console.log(arr);
		var obj = {};
		for(var i = 0; i < arr.length; i++) {
			var _arr = arr[i].split("=");
			//console.log(_arr);
			//console.log(typeof(_arr));
			obj[_arr[0]] = _arr[1];
			//console.log(_arr[0]);
			//console.log(typeof(obj[_arr[0]]));
			//console.log(obj[_arr[0]]);

		}
		//console.log(obj);
		return obj;
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
	return {
		getData_asian_all : getData_asian_all,
		href : href,
		getData : getData,
		ro : ro,
		pushData1 : pushData1,
		pushData2 : pushData2,
		pushData3 : pushData3,
		pushData4 : pushData4,
		pushData5 : pushData5,
		pushData6 : pushData6,
		oddy_tab : oddy_tab,
		loader : loader,
		odds_tab : odds_tab
		
	}
})