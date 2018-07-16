
```bash
  
  1.jQuery.extend = jQuery.fn.extend = function() {}
    首先看下extend方法

    一种情况是$.extend({..a},{...b}),这种情况下就是对象之间的浅拷贝
    原理就是
    extend  = function(){
      for(item in b){
        a[item] = b[item];
      }
    }

    第二种情况是 $.extend(true,{..a},{...b}),这种情况下就是对象之间的深拷贝

    原理就是
    extend = function(){
      for(item in b){
        if( 判断item是否为对象或者数组 ){
          extend(true, a[item], b[item])
        }else{
          a[item] = b[item];
        }
        
      }
    }

    第三种就是对jquery工具方法或实例方法进行扩展

    $.extend({
      a: function(){}
    })

    或者

    $.fn.extend({
      a: function(){}
    })
    
    原理是 将  target = this; option就是 extend的 参数

    for(item in option){
      this[item] = option[item]
    }

    2.expando  工具类的扩展

      "jQuery" + ( core_version + Math.random() ).replace( /\D/g, "" )
      生成本次加载唯一的一串数字， 因该是用于cache的，以后遇到再讲解

    3.noConflict 

      这是一个防止冲突的方法

      var $="String"; 如果定义了一个$变量，他会覆盖jQuery的$
      var jq=jQuery.noConflict();   通过noConflict方法可以让出$的权利，允许覆盖，用其他变量替代
      var jQuery="This is a line";
      var j=jq.noConflict(true);  加  true 参数  ，是让出window.jQuery的权利

      原理是：
        if ( window.$ === jQuery ) {
          window.$ = _$;
        }

        if ( deep && window.jQuery === jQuery ) {
          window.jQuery = _jQuery;
        }

        return jQuery;
      最终返回的是jQuery变量

    4.type

      这是一个判断数据类型的方法

      原理：
        --  如果传入的是一个null 或者 undefined  
          if(obj == null){
            return String(obj)
          }
        返回 "null" 或 "undefined"

        --  如果传入的是 Object 或者 function

          class2type 就为一个对象 ,通过each方法,构造出来的一个对象，属性值都是小写的各种数据类型，属性都是
            {
              "[object Boolean]": boolean,
              "[object Number]": sumber,
              "[object String]": string,
              ........
            }

          jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
            class2type[ "[object " + name + "]" ] = name.toLowerCase();
          });

          由于数组和对象  typeof 方法出来的结果都是 "object" ,所以这里用到了一个Object的 toString方法

          Object.prototype.toString.call({}) ==> "[object Object]"
          Object.prototype.toString.call([]) ==> "[object Array]"

          if(typeof obj === "object" || typeof obj === "function"){
            return class2type[ core_toString.call(obj) ] || "object"
          }

          所以返回结果是  "array" "functioin" "object"

        --  最后如果是其他数据类型 如 number string ...

            直接用 typeof 

    5.isPlainObject

      判断对象否为纯粹的对象字面量 

      判断是否非window和DOM对象的对象，
      如果通过jquery.type 判断出来不是object 返回false, 如果存在节点类型或者是window对象  都返回false
      if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
        return false;
      }

    6.isEmptyObject

    判断是不是为空的object

    原理是 for in 如果有属性或者方法，就会返回false

    for ( name in obj ) {
      return false;
    }
    return true;

      



 


























