function count(){
		//var tr=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
		//var tr=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
		var tr=/\S/
		var str=$("input").val();
		var re=tr.exec(str);
		console.log(re);
		if(str==""||re==null){
			$(".p1").text("用户名格式错误");
		}else{
			$(".p1").text("用户名格式正确");
		}
	}
	function pasd(){
			var tr=/^\S{6,20}$/;
			var str=$(".psd").val();
			var re=tr.exec(str);
			if(str==="" || re===null){
				$(".p2").text("密码格式错误");
			}else{
				$(".p2").text("密码格式正确");
			}
	}
	document.getElementsByClassName('user')[0].onblur=function(){
		count();
	}
	document.getElementsByClassName('psd')[0].onblur=function(){
		pasd();
	}
	document.getElementsByClassName('user')[0].onfocus=function(){
		var str=$(".psd").val();
		if(str==""){
			$(".p1").text("请输入...");
		}
	}
	document.getElementsByClassName('psd')[0].onfocus=function(){
		var str=$(".psd").val();
		if(str==""){
			$(".p2").text("请输入...");
		}
	}