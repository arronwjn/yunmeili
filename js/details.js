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
		
		var datu=document.getElementsByClassName("datu")[0];
		var xiaotu=document.getElementsByClassName("xiaotu")[0];
		var arr=xiaotu.getElementsByTagName('a');
		for(var i=0;i<arr.length;i++){
			arr[i].onmouseenter=function(){
				var a=this.getElementsByTagName('img')[0].getAttribute("src");
				datu.getElementsByTagName('img')[0].setAttribute("src",a);			
				for(var j=0;j<arr.length;j++){
					arr[j].getElementsByTagName("img")[0].style="border:3px #dedede solid";
					arr[j].getElementsByClassName("sj")[0].style="display:none"
				}
				this.getElementsByTagName("img")[0].style="border:3px #6eb6e8 solid";
				this.getElementsByClassName("sj")[0].style="display:block";
			}
		}
		for(var j=0;j<arr.length;j++){
			document.getElementsByClassName("sj")[j].style="display:none";
		}