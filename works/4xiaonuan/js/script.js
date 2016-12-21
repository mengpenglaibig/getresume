//ios
if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
   //alert(navigator.userAgent); 
   
   //add a new meta node of viewport in head node
	head = document.getElementsByTagName('head');
	viewport = document.createElement('meta');
	viewport.name = 'viewport';
	viewport.content = 'target-densitydpi=device-dpi, width=' + 640 + 'px, user-scalable=no';
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
	//选项卡
	$('.login-head li').on('click',function(){
		$(this).addClass('selected').siblings().removeClass();
		$('.login-body').hide().eq($(this).index()).show()
	})
	$('.login-body input').on('keyup',function(){
		var em=$(this).parent().parent().find('em');
		if($(this).val()!==''){
			em.show();
		}else{
			em.hide();
		}
	})
	$('.login-body em').on('click',function(){
		var ipt=$(this).parent().find('input');
		ipt.val(' ');
	})
	
})

