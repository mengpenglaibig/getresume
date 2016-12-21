
$(function(){
	$('.nav li').hover(function(){
		$('.nav li').removeClass('selected');
		$(this).addClass('selected')
	},function(){
		$(this).removeClass('selected')
	});

	var move=function(){
			$('.index-news ul').animate({
				'margin-top':-34
			},function(){
				$('.index-news li:first').appendTo($('.index-news ul'))
			})	
		}
		var clock=setInterval(move,5000);
		$('.index-news ul').hover(function(){
			clearInterval(clock);
		},function(){
			var clock=setInterval(move,5000)
		})	

		//nav
		$('.index-nav li').hover(function(){
			$(this).stop().animate({'width':540}).siblings().stop().animate({'width':140})	
		})

		//background
		setInterval(function(){
			var curr=$('.bg li.selected');
			if(curr.next().size()>0){
				var next=curr.next();
			}else{
				var next=$('.bg li:first');
			}
			next.show();
			curr.fadeOut(1000,function(){
				curr.removeClass('selected');
				next.addClass('selected');
			})
			
		},4000)	


})