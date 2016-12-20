define(['jquery'],function($){
	
	
	var lazyLoad={

	init:function($ele){
		
		var clear,
		    _this=this;
		if(clear){
			clearTimeout(clear);
		}
		$(window).on('scroll',function(){
			clear=setTimeout(function(){
				_this.checkMark($ele);
			},500)
			
		})
	},


	checkMark:function($ele){
		
		var _this=this;
		
		$ele.each(function(){
				var $this=$(this);

				if($this.attr('isshow')){
						return;
				};
				if(_this.checkShow($(this))){
					_this.addAttr($(this));
				}
			})
	},




	checkShow:function($ele){

		var $winH=$(window).height(),
			$winScroll=$(window).scrollTop(),
			$eleH=$ele.offset().top;

			if($eleH<$winH+$winScroll){
				return true;
			}else{
				return false;
			}
	},

	addAttr:function($ele){
			$ele.attr('src',$ele.attr('data'));
			$ele.attr('isshow',true);
	}

}
	
	return lazyLoad;
})




	




