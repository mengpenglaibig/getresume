
	requirejs.config({
		baseUrl:'js/com',
		paths:{
			'jquery':'../lib/jquery-1.7.2.min'
		}
	});
	requirejs(['../app/index']);
	