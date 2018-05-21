$(function(){
	var $kefu = $(".kefu1")
	//console.log($kefu)
	var $neirong =$(".neirong1")
	//console.log($neirong)
	var $weixin = $(".weixin1")
	var $neirong2 =$(".neirong2")
 	var $dianhua =$(".dianhua").eq(0)
 	var $neirong3 =$(".neirong3")
	var $fanhui =$(".fanhuidingbu")
	var $neirong4 = $(".neirong4")
	
	
	
	function moves(ele,sel,len){
		ele.mouseenter(function(){
			console.log(ele[0].className);
		var timer;
		var cont = 0;
		var leftpos = 0;
		sel
		.css({
			width:len + "px",
			left:-len + "px",
			//transition:"width 5000ms ease",
			transition:"left 500ms ease",
		})
	})
	ele.mouseleave(function(){
		console.log(ele[0].className,sel);
		sel.css({
					width:"0px",
					left: -len+53 +"px"
			})
		
		
	})
	}
	
	moves($kefu,$neirong,147)
	moves($weixin,$neirong2,147)
	moves($dianhua,$neirong3,205)
	moves($fanhui,$neirong4,147)
	
})