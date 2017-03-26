function count(){
		//var tr=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
		//var tr=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
		var tr=/^[0-9A-z][0-9A-z_]{3,20}@(qq|163|162|sina).(com|cn|com.cn)$/
		var str=$("input").val();
		var re=tr.exec(str);
		console.log(re);
		if(str==""||re==null){
			$(".p1").text("邮箱格式错误");
		}else{
			$(".p1").text("格式正确");
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
		function psds(){
			var str=$(".psd").val();
			var st=$(".psds").val();
			if(str!==st||st==""){
				// $(".p3").text("确认密码正确");
				$(".p3").text("确认密码不匹配");
			}
		}
	document.getElementsByTagName('input')[0].onblur=function(){
		count();
	}
	document.getElementsByTagName('input')[0].onfocus=function(){
		var str=$("input").val();
		if(str==""){
			$(".p1").text("请输入...");
		}
	}
	document.getElementsByClassName('psd')[0].onblur=function(){
		pasd();
	}
	document.getElementsByClassName('psd')[0].onfocus=function(){
		var str=$(".psd").val();
		if(str==""){
			$(".p2").text("请输入...");
		}
	}
	document.getElementsByClassName('psds')[0].onblur=function(){
		psds();
	}