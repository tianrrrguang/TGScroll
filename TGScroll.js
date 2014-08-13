/**
	zepto scroll plugin for mobile
	模仿iOS滚动时间
	当连续滚动时不会触发onscroll，只有滚动停止后才触发
*/
;(function($){
	//check zepto
	if( !$ ){
		try{
			console.error('Not found Zepto!');
		}
		catch(err){}
	}
	//plugin
	$.extend($.fn, {
	    TGScroll: function(func, options){
	    	options = options || {};
	    	//default params
			var fireTime = null,
				delay = options.delay || 350;
			//bind
	    	$(window).on('scroll', function(){
	    		var t = Date.now() - fireTime;
	    		if( t < delay ){
	    			fireTime = Date.now();
	    			return;
	    		}
	    		else{
	    			fireTime = Date.now();
	    		}
	    		func && func();
	    	});
	    }
	});
})(Zepto);