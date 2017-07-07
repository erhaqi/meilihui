;(function($){
	// $.prototype.lxCarousel = function(options){
	$.fn.lxCarousel = function(options){

		// 默认参数
		var defaults = {
			width:810,//ok
			height:320,//ok
			autoPlay:true,//ok
			small:false,
			buttons:true,//ok
			page:true,//ok
			duration:3000,//ok
			index:0,//ok
			type:'horizontal',//vertical,horizontal,fade,show
			seamless:false
		}

		// var opt = Object.assign({},defaults,options);
		var opt = $.extend({},defaults,options);


		return this.each(function(idx,ele){
			var $self = $(ele);

			var len = opt.imgs.length;

			// 添加特定类名
			$self.addClass('lxCarousel');

			// 定义宽高
			$self.css({
				width:opt.width,
				height:opt.height
			})

			// 生成大图
			var $ul = $('<ul/>');

			$.each(opt.imgs,function(idx,url){
				$('<li/>').css({height:opt.height,width:opt.width}).html(`<img src="${url}">`).appendTo($ul);
			});

			$ul.appendTo($self);

			// 水平排列
			if(opt.type === 'horizontal'){
				$ul.width(opt.width*len);
				$ul.addClass('horizontal');
			}

			// 默认显示图片
			var index = opt.index;
			

			// 生成分页
			if(opt.page){
				var $page = $('<div/>').addClass('page');
				for(var i=1;i<=len-1;i++){
					var $span = $('<span/>').text(i);

					// 给第一个span添加高亮
					if(i==index+1){
						$span.addClass('active');
					}
					$span.appendTo($page);
				}
				$page.appendTo($self);
			}
			


			// 前后按钮
			if(opt.buttons){
				$('<div/>').addClass('prev').html("<span class='iconfont icon-jiantou2'></span>").appendTo($self);
				$('<div/>').addClass('next').html("<span class='iconfont icon-jiantou'></span>").appendTo($self);
			}
			


			var timer;

			// 上一页下一页
			$self.on('click','.prev',function(){
				index--;
				showPic();
			}).on('click','.next',function(){
				index++;
				showPic();
			})

			// 移入移出
			.on('mouseenter',function(){
				clearInterval(timer);
			}).on('mouseleave',function(){
				timer = setInterval(autoPlay,opt.duration);
			})


			// 点击页码
			.on('click','.page span',function(){
				index = $(this).index();
				showPic();
			})

			// 自动轮播
			if(opt.autoPlay){
				$self.trigger('mouseleave');
			}

			function autoPlay(){
				index++;
				showPic();
			}

			function showPic(){
				// 到达最后一张时，重新回到第一张
				if(index >= len){
					index = 1;
				}else if(index<0){
					index = len-1;
				}

				// 滚动显示每一张图片
				var obj;

				if(opt.type === 'horizontal'){
					obj = {left:-index*opt.width};
				}else{
					obj = {top:-index*opt.height};
				}

				$ul.stop().animate(obj);

				// 高亮分页
				if(opt.page){

					$page.children().eq(index).addClass('active').siblings().removeClass();
				}
			}
		});

		// return this;
	}

	// $.fn.lxTab = function(){}
	// $.fn.lxPopover = function(){}

	// 系列插件
	// $.fn.extend({
	// 	lxCarousel:function(){},
	// 	lxPopover:function(){},
	// 	lxTab:function(){}
	// });

	// 全局插件
	// $.lxTab = function(){

	// }

	// 系列插件
	// $.extend({
	// 	lxCarousel:function(){},
	// 	lxPopover:function(){},
	// 	lxTab:function(){}
	// });

	// $.lxTab()
})(jQuery);


//$('#lbt').lxCarousel();