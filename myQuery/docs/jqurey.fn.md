
```bash

  这个章节主要分析一下jQuery.fn = jQuery.prototype = { code... }

	1. init 
    jQuery() 返回一个 new jQuery.fn.init();   
    所以init 主要是用来作为选择器

    eg: $("div) $(nodeEle) $("id") ...

  2. toArray

    原理是 [].slice.call(array-like)  Array的 slice 方法可以将  Array-like 转化为  真正的数组

      eg: (function () {console.log(arguments)})(1,2,3) =>> [1,2,3]

  3. get
    当$('div') 返回一个array-like对象 
    eg: 
    {
      0: div,
      1: div,
      lenght: 2
    }
    get方法接收一个 number 参数 当 number 为 null时候  直接调用toArray方法 返回一个数组

    当 number 为 其他数字的时候 返回  this[number] 这样就选取到了想要的那个元素

  4.pushStack

    用到了工具方法 jQuery.merge(this.constructor, elem) , 将传入的elem 与merge变成一个jQuery对象，这样就可以操作实例方法

    prevObject 存的是上一个 jquery实例 eg end方法应用的时候就是用到了preObject 


  5. each

    直接调取的是jquery的工具类方法  jQuery.each() , each(obj, callback) 
    原理是 数组或者是类数组 用for循环遍历 ，对象用for in 遍历    然后 在遍历中执行  callback 最后返回obj

  6.ready

    jQuery.ready.promise().done( fn ); 所以最终还是用的promise方法

    document.addEventListener( "DOMContentLoaded", completed, false );

    window.addEventListener( "load", completed, false );

    最终在completed 调用的是jquery工具方法 ready

  7.slice

     原理是this.pushStack( core_slice.apply( this, arguments ) );

     先将jquery 对象 通过Array.slice方法变为数组   然后pushStack 中merge方法变为jquery对象 ，最终返回需要的截取的jquery对象

  8.eq 
    原理是: this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] )

    还是用到了pushStack  首先取到 this[j],这个属性，然后变为 [this[i]] , 然后pushStack变成新的jquery对象

  9. first last 
      分别是 eg(0), eq(-1)


  10.map

      调用的是jquery工具方法map

      以数组为例
      for ( ; i < length; i++ ) {
        value = callback( elems[ i ], i, arg );

        if ( value != null ) {
          ret[ ret.length ] = value;
        }
      }

      return [].concat.apply9([], ret)

      最后返回一个处理后的数组, 然后调用pushStack方法返回一个新的jquery对象

      this.pushStack( jQuery.map(this, function( elem, i ) {
        return callback.call( elem, i, elem );
      }));




























