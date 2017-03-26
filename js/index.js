var arr=document.getElementsByClassName('banner')[0].getElementsByTagName('ul')[0].getElementsByTagName("li");
		for(var i=0;i<arr.length;i++){
			arr[i].getElementsByTagName("a")[0].onclick=function(event){
				// var newsrc=this.getAttribute("href");
				event.preventDefault();
				// document.getElementsByClassName("banner")[0].getElementsByTagName("div")[0].getElementsByTagName("img")[0].setAttribute("src",newsrc);
				for(var j=0;j<arr.length;j++){
					arr[j].getElementsByTagName("a")[0].style="background-color:none"
				}
				
				this.style="background-color:#fff"
			}
		}
		$(".banner ul li").click(function(event){
			var num=$(this).index();
			console.log(num);
			var ml=num*-938;
			console.log(ml);
			$(".banner>div>div").animate({"margin-left":ml},500)
			event.preventDefault();
		})
		var num=0;
		function lunbo(){
			for(i=0;i<arr.length-1;i++){
				arr[i].index=i;
			}
			if(num<i){
					num=num+1
				}else{
					num=0;
				}
			var ml=num*-938+"px";
			$(".banner>div>div").animate({"margin-left":ml},500)

			for(var j=0;j<arr.length;j++){
					arr[j].getElementsByTagName("a")[0].style="background-color:none"
				}
				
				arr[num].getElementsByTagName("a")[0].style="background-color:#fff"
		}
		stop=setInterval(lunbo,2000)
		var G=document.getElementsByClassName("banner")[0].getElementsByTagName("div")[0].getElementsByTagName("div")[0];
		var U=document.getElementsByClassName("banner")[0].getElementsByTagName("ul")[0];
		G.onmouseenter=function(){
				clearInterval(stop);
			}
			G.onmouseleave=function(){
				stop=setInterval(lunbo,2000);
			}
			U.onmouseenter=function(){
				clearInterval(stop);
			}
			U.onmouseleave=function(){
				stop=setInterval(lunbo,2000);
			}
		var lia=document.getElementsByClassName("li-div")[0].getElementsByTagName("a");
		var a=document.getElementsByClassName("iconfont");		
		for(var i=0;i<a.length;i++){
			var kaiguan=1
			a[i].onclick=function(event){
				var num=Number(this.parentNode.getElementsByTagName("span")[0].innerHTML);
				// console.log(num);
				if(kaiguan==1){
					this.style="color:#f77da6";
					num+=1;
					
					kaiguan=0;
				}else{
					this.style="color:#84807d";
					num-=1;
					kaiguan=1;
				}
				this.parentNode.getElementsByTagName("span")[0].innerHTML=num

				event.preventDefault();
			}
			
		}