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

			$('.page-game .list li').on('click',function(){
					if($('body').hasClass('isanimated')){
						return false;
					}
					if($(this).hasClass('selected')){
						alert('宝箱已开过~');
						return false;
					}
					$('body').addClass('isanimated');
					if($('.page-game .list li.selected').size()>2){
						alert('开箱已经超过3次啦，下次再来吧');
						return false;
					}
					$(this).addClass('selected');
					setTimeout(function(){
						var n=3-$('.page-game .list li.selected').size();
						$('#num').html(n);
						if(n==0){
							$('.dialog .body').html('没有砸中，请下次在来')
						}
						$('.dialog').show();
						$('.mask').show();
						$('body').removeClass('isanimated');
					},2000)
					$('.dialog .foot').click(function(){
						$('.dialog').hide();
						$('.mask').hide();
						return false;
					})
					
			})
})

