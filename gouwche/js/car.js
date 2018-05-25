$(function(){
    var shopcar = new shopCar("./json/data.json",".bodybox")

       //this.main = $(".btn-box")
       //console.log(this.main)
   })
   function shopCar(url,sel){
       this.url = url;
       this.main = $(sel);
       this.moveBox = $("#shopCarNme");
       this.shopsumbox = $(".shopsumbox")
       this.init();
   }
   shopCar.prototype = {
       constructor:shopCar,
       init(){
           this.loading()
           .then(function(res){
               //console.log(res)
           this.json = res.data;
           console.log(this.json)
           this.render()
           }.bind(this));
           this.main.on("click.addcar","button[data-id]",$.proxy(this.addCar,this))
           this.main.on("click.num","button[data-id]",$.proxy(this.changNum,this))
           this.moveBox.on("mouseenter",$.proxy(this.addShopnum,this))
           this.moveBox.on("mouseleave",$.proxy(this.moveShopnone,this))
           
           var sum1 = this.getSum();
           $("#shopCarNme .sum").html(sum1)
       },
       loading(){
           var opt ={
               url:this.url
           }
           return $.ajax(opt);
       },
       render(){
            var html1 = "";
            //console.log(this.json)
              this.json.forEach(function(item){
                  //console.log(item)
                  //this.databox = item;
                  html1 +=`
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
                   <div class="btn-box" >
                       <button data-id = ${item.id}>
                       加入购物车
                   </button>
               </div>
           </div>
  `
       }.bind(this))
          this.main.html(html1)
   },
       addCar(event){
       var target = event.target || event.srcElement ;
       var goodId = $(target).attr("data-id")
       if(!$.cookie("shopCar")){
           var shopCarArray = [{
               id:goodId,
               num:1
           }]
           $.cookie("shopCar",JSON.stringify(shopCarArray));
           //console.log (shopCarArray)
           
           return 0;
       }
            var shopCarString = $.cookie("shopCar")
            //console.log(shopCarString)
            var shopCarArray = JSON.parse(shopCarString)
           // console.log (shopCarArray)
           var hasItem = false;
       shopCarArray.forEach(function(item){
           if(item.id == goodId){
               item.num++ ;
                hasItem = true;
           }
       })
       if(!hasItem){
           var item ={
               id:goodId,
               num:1
           }
           shopCarArray.push(item)
       }
       $.cookie("shopCar",JSON.stringify(shopCarArray))
       //console.log($.cookie("shopCar"))
   },
       changNum(){
          $("#shopCarNme .sum").html(this.getSum())
       },
     
       getSum(){
           var shopCarString = $.cookie("shopCar");
           if(shopCarString){
            var shopCarArray = JSON.parse(shopCarString)
            var sum = 0 ;
            shopCarArray.forEach(function(item){
                sum   += Number(item.num)
                //console.log(sum)
            })
            return sum;
           }
          return 0;

       },
       addShopnum(){
           console.log(2)
        var html2 = "";
        var shopnumString = $.cookie("shopCar");
        //console.log(shopnumString)
        var shopnumArray = JSON.parse(shopnumString)
      // console.log(shopnumArray)
        shopnumArray.forEach(function(item){
            console.log(item.id)
            for(let i = 0 ; i < this.json.length; i ++){
                if(item.id == this.json[i].id){
                    html2 += `<div class="shopmus">
                    <div class="shopimg">
                        <img src="${this.json[i].list_img}" alt="">
                    </div>
                    <div class="num">
                        商品数量：
                        <span>${item.num}</span>
                    </div>
                    <div class="zongjia">
                        价格：
                        <i>￥</i>
                        <span>${this.json[i].sell_price*item.num}</span>
        
                    </div>
                </div>`
                }
            }
        }.bind(this))
        this.shopsumbox.html(html2)
      
       },
       moveShopnone(){
        this.shopsumbox.html("")



       }

       
       
       
   }