$(function(){
			var $filt = $(".filt")
			var $input = $(".inp")
			var reg = /^[^@\s\?]+@[^@\s\?]+(\.[^@\s\?]+)+$/;
			var reg1 =/^1(3|5|8|7|4)\d{9}$/;
			var $logintip = $(".logintip-hide")
			var bloon1 =false;
			var bloon2 = false;
			var bloon3 = false;
			var bloon4 = false;
			//console.log($logintip)
			$input.eq(0).focus(function(){
				$filt.eq(0).css({
					border:"1px solid #ff7919"
				})
			})
			$input.eq(0).blur(function(){
				$filt.eq(0).css({
					border:"none"
				})
				//console.log(reg)
				//console.log(reg.test(this.value))
				//console.log($logintip)
				if(!this.value){
					bloon1 = true;
					$logintip.css({
						display:"block"
					})
					$logintip.html("请输入邮箱或手机号码")
				}else if(!reg.test(this.value) && !reg1.test(this.value)){
					bloon1 = bloon1?bloon1 = false:bloon1 = false;
					bloon2 = true;
					$logintip.css({
						display:"block"
					})
					$logintip.html("请输入正确的邮箱或手机号码")
				}else{
					bloon2 = bloon2?bloon2 = false:bloon2 = false;
					bloon3 = true;
					$logintip.css({
						display:"none"
					})
					$logintip.html("")
				}
				
			})
			$input.eq(1).focus(function(){
				$filt.eq(1).css({
					border:"1px solid #ff7919"
				})
				this.value = ""
			})
			$input.eq(1).blur(function(){
				$filt.eq(1).css({
					border:"none"
				})
				//console.log($logintip.value))
				if(!this.value){
					$logintip.css({
						display:"block"
					})
					$logintip.html("登录密码不能为空")
				}else if(bloon1){
					$logintip.html("请输入邮箱或手机号码")
				}else if(bloon2){
					$logintip.html("请输入正确的邮箱或手机号码")
				}else{
					bloon4 = true;
					$logintip.css({
						display:"none"
					})
				}
			})
			
			$(".butn").on("click",function(){
				if(bloon3 && bloon4){
				var username = $(".text1").val();
				var pwd = $(".text2").val();
				var opt = {
					url:"http://localhost:8888/git_juchengwang/dengluye/user.php",
					type:"POST",
					data:{username:username,password:pwd,type:"login"}
				}
				$.ajax(opt)
				.then(function(res){
					alert("登录成功")
					window.location.href = "http://localhost:8888/git_juchengwang/juchengw/index.html";
				})
				}
				
			})



		})
		