# 1.第一步我们分析框架的最外层
```bash
本次分析以2.0.0为例（内附本版本）

  1.匿名函数自执行,保证变量不会污染

	(function(){
		code....
	})(window)

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





