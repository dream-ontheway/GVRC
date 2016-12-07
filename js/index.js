$(function(){
	/*移动下拉菜单*/
	$("#menu").click(function(){
		if($("#menu-list").css("display")=='none'){
			$("#menu-list").slideDown();
		}else{
			$("#menu-list").slideUp();
		}
	});
	/*返回顶部*/
	$(window).scroll(function(){
		if($(window).scrollTop()>100){
			$(".return-top").fadeIn();
		}else{
			$(".return-top").fadeOut();
		}
	})
	$(".return-top").click(function(){
		$('body').animate({scrollTop:0});	
		$(document.documentElement).animate({scrollTop:0})
	})
	/*社交注册*/
	/*left*/
	$(".bottom-fixed-left").click(function(){
		if($(".bottom-fixed-left ul").css('display')=='none'){
			$(".bottom-fixed-left ul").fadeIn();
			//$(".bottom-fixed-left").css('background-image','url(../images/add3.png)')
		}else{
			$(".bottom-fixed-left ul").fadeOut();
			//$(".bottom-fixed-left").css('background-image','url(../images/add.png)')
		}
	})
	/*right*/
	$(".bottom-fixed-right").click(function(event){
		$(".bottom-fixed").fadeOut();
		window.location.href = 'sign-up.html';
	})

	/*跳转到单页*/
	$(".GVRC2016-MEDIA").click(function(event){
		window.location.href = 'register-media.html';
		event.stopPropagation();
	})
	$(".GVRC2016").click(function(event){
		window.location.href = 'register.html';
		event.stopPropagation();
	})
	$(".GVRC2016-SPONSOR").click(function(event){
		window.location.href = 'register-sponsor.html';
		event.stopPropagation();
	})
	$(".GVRC2016-EXHIBITOR").click(function(event){
		window.location.href = 'register-exhibitor.html';
		event.stopPropagation();
	})
	$(".ROADSHOW-PASS").click(function(event){
		window.location.href = 'register-roadshow.html';
		event.stopPropagation();
	})
	$(".times").click(function(event){
		window.location.href = 'agenda.html';
		event.stopPropagation();
	})
	$(".exhibition").click(function(event){
		window.location.href = 'exhibition.html';
	})
	$(".meeting").click(function(event){
		window.location.href = 'meeting.html';
	})
	$(".mybtn").click(function(event){
		window.location.href = 'sign-up.html';
	})
	$(".zhuye").click(function(event){
		window.location.href = 'index.html';
	})
	$(".header-left").click(function(event){
		window.location.href = 'index.html';
	})
	$(".web-sign-up").click(function(event){
		window.location.href = 'sign-up.html';
	})
	/*报名方式*/
	$(".Ticket").hover(function(){
		$(".register-list").stop();
		$(this).find(".register-list").slideDown();
		$(this).find("#Participants-list").slideUp();
	},function(){
		$(".register-list").stop();
		$(this).find(".register-list").slideUp();
	})
	/*参会报名下拉*/
	$(".GVRC2016ul").hover(function(){
		$(this).find("#Participants-list").slideDown();
	},function(){
		$(this).find("#Participants-list").slideDown();
	})
/*合作伙伴轮播*/
	var logos = $('.Partne-logos-box');
	var logosbtn = $('#btns2 ul li');
	var index2 = 0;
	function logo(type2){
		if(type2=='r'){
			index2++;
			if(index2>=logos.length){
				index2 = 0; 
			}
		}
		else if(type2=='l'){
			index2--;
			if(index2<=-1){
				index2=logos.length-1;
			}
		}
		logos.hide();
		logos.eq(index2).fadeIn();
		logosbtn.css({background:'#757474'})
		logosbtn.eq(index2).css({background:'#2a2a2a'})
	}
	var t2 = setInterval(function(){
		logo('r')
	},3250);
	$('#Partne-logo').hover(function(){
		clearInterval(t2);
	},function(){
		t2=setInterval(function(){
			logo('r')
		},3250)
	})
	$('#arrow-left2').click(function(){
		logo('l');
	})
	$('#arrow-right2').click(function(){
		logo('r');
	})
	logosbtn.click(function(){
		var index3=$(this).index();
		logos.hide();
		logos.eq(index3).fadeIn();
		logosbtn.css({background:"#757474"});
		logosbtn.eq(index3).css({background:"#2a2a2a"});
	 		index2=$(this).index();
	})
/*演讲嘉宾*/
	var jiabin = $('.Guest-Speaker');
	var btn = $('.btns ul li');
	var index = 0;
	function lunbo(type){
		if(type=='r'){
			index++;
			if(index>=jiabin.length){
				index = 0; 
			}
		}
		else if(type=='l'){
			index--;
			if(index<=-1){
				index=jiabin.length-1;
			}
		}
		jiabin.hide();
		jiabin.eq(index).fadeIn();
		btn.css({background:'#757474'})
		btn.eq(index).css({background:'#2a2a2a'})
	}
	var t = setInterval(function(){
		lunbo('r')
	},3000);
	$('#distinguished-gues-bottom').hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(function(){
			lunbo('r')
		},3000)
	})
	$('#arrow-left').click(function(){
		lunbo('l');
	})
	$('#arrow-right').click(function(){
		lunbo('r');
	})
	btn.click(function(){
		var index1=$(this).index();
		jiabin.hide();
		jiabin.eq(index1).fadeIn();
		btn.css({background:"#757474"});
		btn.eq(index1).css({background:"#2a2a2a"});
	 	index=$(this).index();
	})
/*演讲嘉宾移动*/
	var jiabinMin = $('.Guest-Speaker-min');
	var btnMin = $('.btns-min ul li');
	var index3 = 0;
	function lunbomin(type3){
		if(type3=='r'){
			index3++;
			if(index3>=jiabinMin.length){
				index3 = 0; 
			}
		}
		else if(type3=='l'){
			index3--;
			if(index3<=-1){
				index3=jiabinMin.length-1;
			}
		}
		jiabinMin.hide();
		jiabinMin.eq(index3).fadeIn();
		btnMin.css({background:'#757474'})
		btnMin.eq(index3).css({background:'#2a2a2a'})
	}
	var min = setInterval(function(){
		lunbomin('r')
	},3000);
	$('#distinguished-gues-bottom-min').hover(function(){
		clearInterval(min);
	},function(){
		min=setInterval(function(){
			lunbomin('r')
		},3000)
	})
	$('.arrow-left-min').click(function(){
		lunbomin('l');
	})
	$('.arrow-right-min').click(function(){
		lunbomin('r');
	})
	btnMin.click(function(){
		var index4=$(this).index();
		jiabinMin.hide();
		jiabinMin.eq(index4).fadeIn();
		btnMin.css({background:"#757474"});
		btnMin.eq(index4).css({background:"#2a2a2a"});
	 	index=$(this).index();
	})
/*演讲嘉宾完*/
/*大会议程下拉*/
	$('.timetdTwo-click').each(function(i,v){
		$(v).click(function(){
			if($('.schedule-guests').eq(i).css('display')=='none'){
				$('.schedule-guests').eq(i).stop();
				$('.schedule-guests').eq(i).fadeIn();
				$('.triangle').eq(i).css('background-image','url(../images/zhengsanjiao.png)');
			}else{
				$('.schedule-guests').eq(i).stop();
				$('.schedule-guests').eq(i).fadeOut();
				$('.triangle').eq(i).css('background-image','url(../images/daosanjiao.png)');
			}
		})
	})
	$('.name').each(function(i,v){
		$(v).hover(function(){
			$('.jiabinkuang').eq(i).stop();
			$('.jiabinkuang').eq(i).fadeIn();
		},function(){
			$('.jiabinkuang').eq(i).stop();
			$('.jiabinkuang').eq(i).fadeOut();
		})
	})
	$('.schedule-page-position').click(function(){
		$('.schedule-page-position-map').slideDown();
	})
	$('.ditu').click(function(e){
		$('.schedule-page-position-map').slideUp();
		e.stopPropagation();
	})
	/*底部二维码*/
	$('#weixin').hover(function(){
		$('#weixin .erweima').stop();
		$('#weixin .erweima').fadeIn();
	},function(){
		$('#weixin .erweima').stop();
		$('#weixin .erweima').fadeOut();
	})
/*移动顶部nav*/
	$(".list-logo").click(function(){
		if($("#nav").css("display")=="none"){
			$(".list-logo").animate({"right":170},500);
			$("#nav").fadeIn(500);
		}else{
			$(".list-logo").animate({"right":20},500);
			$("#nav").fadeOut(500);
		}	
	})
/*演讲嘉宾详细资料*/
	$(".distinguished-gues-bottom-box>div").each(function(i,v){
		$(v).hover(function(){
			if($(".Guest-introduction").eq(i).css("display")=="none"){
				$(".Guest-introduction").eq(i).stop();
				$(".Guest-introduction").eq(i).fadeIn();
				$(".Guest-introduction").eq(i).css({boxShadow:"0px 15px 30px rgba(0,0,0,0.1)",transition:"all 0.5s ease"})
			}
			/*else{
				$(".Guest-introduction").eq(i).stop();
				$(".Guest-introduction").eq(i).css("display","none");
			}*/
		})
	})
	$(".Guest-introduction span").each(function(i,v){
		$(v).click(function(){
			if($(".Guest-introduction").eq(i).css("display")=="block"){
			$(".Guest-introduction").css("display","none");
			}
		})
	})
	$(".Guest-Speaker-min .distinguished-gues-bottom-box>div").each(function(i,v){
		$(v).click(function(){
			if($(".Guest-introduction").eq(i).css("display")=="none"){
				$(".Guest-introduction").eq(i).stop();
				$(".Guest-introduction").eq(i).fadeIn();
				$(".Guest-introduction").eq(i).css({boxShadow:"0px 15px 30px rgba(0,0,0,0.1)",transition:"all 0.5s ease"})
			}
		})
	})
})