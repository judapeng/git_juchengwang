$(function() {
	// 把要操作的对象先获取到
	var banner = $('.list-2');
	 var Ul = $('.neiku'); 
	 //console.log(Ul)
	//console.log()
	var Width = $('.waikua').width(); //alert(Width);
	//console.log(Width)
	var Point = $('.btn-right ul li'); // alert(Point.length);
	//console.log(Point)
	var Index = 0; //用于记录点击的次数，图片的张数(计数器，记录了图片移动的张数)
	 //var Left = $('.prevlef'); // alert(Left.length);
    var Right = $('.nextrigh');
	//点击小圆点让图片移动
	$.each(Point, function(index, value) { //如果此处我没有用each循环来写，那么我便需要用$(this).index()方法来获取图片的下标
		//让点击的小圆点有class样式，其他li没有class样式
		Point.eq(index).on('mouseenter', function() {
			$(this).addClass('btn-col').siblings().removeClass('btn-col');
			Ul.stop().animate({
				'left': -index * Width
			});
			Index = index;
			//console.log(Index);
			//alert(Index);
		})
	});

	//	点击右箭头,ul往左跑
	Right.on('click', function() {
		//需要做一个判断，如果发现此时图片是最后一张图片，就不能继续执行了
		//让index是图片的张数减一的时候,让index不继续加
		//console.log(Index)
		if(Index >= 2) {
			//让index变成0
			Index = 0;
			//              	让ul的left值瞬间变成0
			Ul.css('left', 0);
		}
		Index++;
		Ul.stop().animate({
			'left': -Index * Width
		});

		if(Index == 2) {
			//因为在图片最后面添加了一张假图片，其实最后一张图片的时候，需要对应的是索引0的小圆点
			Point.eq(0).addClass('btn-col').siblings().removeClass('btn-col');

		} else {
			Point.eq(Index).addClass('btn-col').siblings().removeClass('btn-col');
		}

	})

	//点击左箭头,让Ul往右跑

	//调取Right方法，使其自动播放
	var time = setInterval(function() {
		Right.click();
	}, 2000);

	//鼠标移到banner中,自动播放停止
	banner.mouseenter(function() {
		clearInterval(time);
	});

	// 鼠标移出banner中,自动播放开始
	banner.mouseleave(function() {
		time = setInterval(function() {
			Right.click();
		}, 2000);
	})
})