$(function(){
	function movesel(ele,sel){
		this.ele =$(ele)
		console.log(this.ele)
		if(!ele)return
		this.init();
	}
	movesel.prototype = {
		constructor:movesel,
		init:function(){
			var cont;
			var timer;
		this.ele.click(function(){

			this.movsss()
		}.bind(this))
		},
		movsss:function(){
			var timer;
			clearInterval(timer)
			timer =setInterval(function(){
			var toplenth =$(Window).scrollTop();
			
			if(toplenth <= 0){
				toplenth = 0;
				clearInterval(timer)
			}else{
				toplenth=toplenth - 10;
				$(window).scrollTop(toplenth)
			}
			})
			
		}
	}
	
	new movesel(".fanhuidingbu")
	
})
