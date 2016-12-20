define(['jquery','gotop','lazyload'],function($,goTop,lazyLoad){
	new goTop();
	lazyLoad.init($('.work .worklist li .img img'));
})