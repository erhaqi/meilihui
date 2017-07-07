require.config({
	paths:{
		jquery:'../dist/jquery-3.2.1',
		lunbo:'../dist/jquery.lxCarousel',
		fangda:'../dist/jquery.gdsZoom',
		ajax:'../js/ajax'
		
	},
	shim:{
		lunbo:['jquery'],
		fangda:['jquery'],
		ajax:['jquery']
	}
	
});