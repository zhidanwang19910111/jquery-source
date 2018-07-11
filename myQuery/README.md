# 整体结构
```bash
本次分析以2.0.0为例（内附本版本）

  1.匿名函数自执行,保证变量不会污染

	(function(window, undefined){
		code....
	})(window)

	传参数 window 原因： 一方面局部变量查找速度会变快，另一方面压缩时候不会出错
		undefined: 在某些浏览器可以对 undefined 修改，为了防止其他人修改所以传了一个undefined;

  2.这样虽让不会变量污染，但是如何对外暴露接口比如 $方法等;最简单的方法就是将暴露的接口暴露在window下

	window.jQuery = window.$ = jQuery;

  3.接着往下走，说明jquery 是面向对象编程，是通过 prototype 实现的

	jQuery.fn = jQuery.prototype = { code... }

	eg: $('ele').css();

	显然css 是jquery 对象的一个方法,所以$('ele')返回的是一个对象

	var jQuery = function( selector, context ){
		return new jQuery.fn.init( selector, context, rootjQuery );
	}


  4.然后我们再看会看到 extend 方法

	jQuery.extend = jQuery.fn.extend = function(){ code... }

	这个方法是jQuery的继承方法


  5.接着向下看，我们还能看到一些扩展的静态方法(工具方法)  用法$.trim()这种

	jQuery.extend({
		ready: function(){ code... },
		each: function(){ code... }
	})

  6.接下来是 Sizzle 复杂选择器的实现 (877 - 2795)，如 $(ul li input .class);

  7.紧接着是 jQuery 的 callback （2830 - 2992）函数回调的统一管理方法

  8.实现了一个延迟对象 Deferred （2993 - 3133）,实现对异步的一个管理

  9.实现了一个功能检测（3134 - 3245）例如判断浏览器版本

  10.实现数据缓存 （3262 - 3438）

  11.实现 queue dequeue  队列管理 （3598 - 3743）例如多个运动

  12.实现元素属性操作  （3749 - 4241）

  13.事件的操作方法 （4242 - 5065）

  14.dom操作 添加，删除，获取，包装（5065 - 5989）

  15.css方法，样式操作 css()（5990 - 6949）

  16.数据的操作和 ajax() (6550 - 7783)

  17.运动的方法 animate（7784 - ）

  18.位置与尺寸的方法 offset position scroll等

  19.支持模块化的代码 AMD commonJS等





