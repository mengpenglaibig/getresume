//ios
if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
   //alert(navigator.userAgent); 
   
   //add a new meta node of viewport in head node
	head = document.getElementsByTagName('head');
	viewport = document.createElement('meta');
	viewport.name = 'viewport';
	viewport.content = 'target-densitydpi=device-dpi, width=' + 750 + 'px, user-scalable=no';
	head.length > 0 && head[head.length - 1].appendChild(viewport);    
   
}
//android
//if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
//  //alert(navigator.userAgent);  
//  window.location.href ="iPhone.html";
//} else if (/(Android)/i.test(navigator.userAgent)) {
//  //alert(navigator.userAgent); 
//  window.location.href ="Android.html";
//} else {
//  window.location.href ="pc.html";
//};

$(function(){
	
	
	//页面不足一屏，铺满一屏
	$('.layout').css('min-height',$(window).height());
	
	$(function(){
		setInterval(function(){
			var curr=$('.slider .num dd.selected');
			if(curr.next().size()>0){
				var next=curr.next();
			}else{
				var next=$('.slider .num dd:first')
			}
			curr.removeClass('selected');
			next.addClass('selected');
			var n=next.index();
			$('.slider ul').animate({
				marginLeft: -n*750
			})
		},3000)
		//选项卡效果
		var	w = $('.taber .header li').width(),
		x = w/2+15;
		$('.taber .header em').css({
			'left':x
		})
		$('.taber .header li').on('click',function(){
			$('.taber .header li').removeClass('selected');
			$(this).addClass('selected');
			var $this=$(this);
			var n=$this.index(),
				w=$this.width(),
				x=n*w+w/2+15;
			$('.taber .header em').animate({
				'left':x
			})
			$('.taber .body').hide().eq($(this).index()).show();
			return false;
		})
		
	})
})

