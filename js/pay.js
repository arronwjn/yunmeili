var inp=document.getElementsByClassName('main-mid-1')[0].getElementsByTagName('input');
		for(var i=0;i<inp.length;i++){
			inp[i].onclick=function(){

					for(var j=0;j<inp.length;j++){
						document.getElementsByTagName("input")[j].parentNode.style.background="none";
					}
					this.parentNode.style.background="url(../images/send_03.jpg)";
					var dizhi=this.parentNode.getElementsByTagName('p')[0].innerHTML;
					document.getElementsByClassName('jisong')[0].innerHTML=dizhi;
			}
		}




		var store=document.getElementsByClassName('main-mid-footer');
		for(var i=0;i<store.length;i++){
			store[i].onclick = function(event){
					var e = event || window.event;
					var tar = e.target || e.srcElement;
					var cls = tar.className;
					var num = parseInt(tar.parentNode.parentNode.parentNode.getElementsByClassName("num")[0].value)
					console.log(num)
					switch (cls){
						case "jia":
						num+=1;
						tar.parentNode.parentNode.parentNode.getElementsByClassName("check")[0].checked = true;break;
						case "jian":
						if(num>1){
							num-=1;
							break
						}
					}
					tar.parentNode.parentNode.parentNode.getElementsByClassName("num")[0].value = num;
					getSubTotal(tar.parentNode.parentNode.parentNode)
					getAllTotal()
				}
		}
		function getAllTotal(){
				var price = 0;//合计
				for(var i = 0;i<store.length;i++){//遍历商品个数
					if(store[i].getElementsByClassName("check")[0].checked == true){
						//商品选中
						var tr=store[i].getElementsByClassName("xiaoji")[0].innerHTML;
						var re=/[0-9]+.[0-9]?/;
						var res=re.exec(tr);
						price+=parseFloat(res);
						console.log(price);
					}
				}
				document.getElementsByClassName("zongji")[0].innerHTML =price.toFixed(2);
		}

		function getSubTotal(goods){
				var subtotal = 0;
				var kd=parseFloat(document.getElementsByClassName("kuaidi")[0].value);
				subtotal = parseFloat(goods.getElementsByClassName("danjia")[0].innerHTML) * parseInt(goods.getElementsByClassName("num")[0].value)
				var yh=document.getElementsByClassName("youhui")[0].value;
				var sub=subtotal*yh;
				console.log(sub);
				goods.getElementsByClassName("p")[0].innerHTML = sub.toFixed(2);
				var zongji=Number(sub)+Number(kd);
				document.getElementsByClassName("xiaoji")[0].innerHTML = zongji.toFixed(2);
		}

		// document.getElementsByClassName("youhui")[0].onclick=function(){
		// 	//var a=document.getElementsByClassName("youhui")[0].value;
		// 	//getSubTotal();
		// }
		// document.getElementsByClassName("kuaidi")[0].onclick=function(){

		// }
