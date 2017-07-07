define(['jquery'],function(){
	return {
		fixed:function(){
			var boxheight=$(".box").outerHeight;
			var scrollTop=doucment.doucmentElement.scrollTop || doucment.body.scrolltop;
			var clientHeight=document.doucmentElementt.chilentHeight || doucment.body.clienHeight;
			$(".box")=(clientHeight-boxheight)/2+scrollTop;
	}
})