window.onload=function(){
			$(".main-top-1 ul li a").click(function(){
				$(this).find(".sanjiao").addClass("add").parents().siblings().find(".sanjiao").removeClass("add");
			})
			$(".main-top-1 ul li").click(function(){
				var ind = $(this).index();
				$(".main-top>div").eq(ind).removeClass("active").siblings().addClass("active")
				console.log($(".main-top>div").eq(ind));
			})
			var kaiguan=1;
			document.getElementsByClassName('xihuan')[0].onclick=function(event){
				
				var txt=parseInt(document.getElementsByClassName("p")[0].innerHTML);
				console.log(txt);
				if(kaiguan==1){
					txts=txt+1;
					document.getElementsByClassName("p")[0].innerHTML=txts
					document.getElementsByClassName("iconfont")[0].style.color="red"
					kaiguan=0;
				}else if(kaiguan==0){
					txts=txt-1;
					document.getElementsByClassName("p")[0].innerHTML=txts
					document.getElementsByClassName("iconfont")[0].style.color="#fff"
					kaiguan=1;
				}
				event.preventDefault();
			}
		}