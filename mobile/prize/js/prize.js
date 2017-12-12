$(function (){
	var rotateTimeOut = function (){
		$('#rotate').rotate({
			angle:0,
			animateTo:2160,
			duration:8000,
			callback:function (){
				alert('网络超时，请检查您的网络设置！');
			}
		});
	};
	var bRotate = false;
	// 转动
	var rotateFn = function (awards, angles, imgSrc){
		bRotate = !bRotate;
		$('#rotate').stopRotate();
		$('#rotate').rotate({
			angle:0,
			animateTo:angles+1800,
			duration:6000,
			callback:function (){
				// console.log(arrPrize[0]);
				bRotate = !bRotate;
				$('#mark').fadeIn();
				$('#mark').css("z-index", 4);
				$('#mark .red-img').attr("src",imgSrc);
				//alert(txt);
				$('#mark').click(function(){
					$(this).fadeOut();
				})
			}
		})
	};
	$('.submit').click(function (){
        if(bRotate)return;//如果正在转动，点击时将不再重复执行
        // ajax({
		// 		url: 'post.php',
		// 		type: 'POST',
		// 		data: {'intro': 'post请求'},
		// 		success:function(res){
		// 			res = JSON.parse(res);
		// 			document.getElementById('b').innerHTML = res.intro;
		// 			console.log(res);
		// 		},
        //         error: function(error) {}
		// 	});
		var item = rnd(0,7);
		var arrPrize = ["img/prize5.png", "img/prize10.png", "img/prize20.png", "img/prize50.png", "img/prize100.png", "img/prize200.png", "img/prize500.png", "img/prize1000.png"];
		switch (item) {
			case 0:
				rotateFn(0, 225, arrPrize[item]);
				break;
			case 1:
				rotateFn(1, 135, arrPrize[item]);
				break;
			case 2:
				rotateFn(2, 315, arrPrize[item]);
				break;
			case 3:
				rotateFn(3, 45, arrPrize[item]);
				break;
			case 4:
				rotateFn(4, 90, arrPrize[item]);
				break;
			case 5:
				rotateFn(5, 270, arrPrize[item]);
				break;
			case 6:
				rotateFn(6, 180, arrPrize[item]);
				break;
			case 7:
				rotateFn(7, 360, arrPrize[item]);
				break;
		}
	});
	$("#marquee").marquee({
		duration: 10000,
		gap: 50,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
	}); 
});
// 设置奖项
function rnd(n, m){
	return Math.floor(Math.random()*(m-n)+n)
}
