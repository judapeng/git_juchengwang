
	$(function(){
		
		
		
		
		var itembox
            $.ajax({
            //请求方式为get
            type:"GET",
            //json文件位置
            url:"./json/data.json",
            //返回数据格式为json
            dataType: "json",
            //请求成功完成后要执行的方法
            success: function(data){
                //使用$.each方法遍历返回的数据date,插入到id为#result中
                //console.log(data)
               //  console.log(data.data)
               var html = "";
                 this.json = data.data;
                 //console.log(this.json)
              
               	this.json.forEach(function(item, index){
               		//console.log(item)
               		html +=`
					<div class="shopbox">
						<div class="imgbox">
							<img src="${item.list_img}"/>
					</div>
						<div class="filtbox">
							<p>
							${item.name}
						</p>
							<p>
							现价:
							<span>${item.price_info.sell_price_max}</span>
							</p>
						
							<p>
							原价:
						<span>
							${item.price_info.market_price_min}
						</span>
						</p>
					</div>
						<div class="btn-box" data-id = ${item.id}>
							<button>
							加入购物车
						</button>
					</div>
				</div>
       `;
       	//console.log(this.$btna)
       		$(".bodybox").html(html);
       		
               	})
        }
         }); 
    });
			