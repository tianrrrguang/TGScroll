/**
	zepto scroll plugin for mobile
	模仿iOS滚动时间
	当连续滚动时不会触发onscroll，只有滚动停止后才触发
	这是branch02
	asdf
	sdaf
	sadf
	asf
	asd
	fasf
	sadf
	asf
	asdf
	sad
	g
	dfg
	sdf
	gsdf

	sfg
	sd
	gdfs

	gdf
	dsf
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
			var timer = null,
				fireTime = null,
				delay = options.delay || 350;
			//bind
	    	$(window).on('scroll', function(){	
	    		( Date.now() - fireTime ) < delay && timer && clearTimeout(timer) && ( timer = null );
	    		fireTime = Date.now();
	    		typeof func == 'function' && ( timer = setTimeout(func, delay) );
	    	});
	    }
	});
})(Zepto);