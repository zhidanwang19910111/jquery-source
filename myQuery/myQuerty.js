(function(window, undefined){
	var rootQurey,
	iQuery = function(selector, context, rootQurey){
		return new iQuery.fn.init(selector, context, rootQurey)
	},

	rquickExpr = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	// [[Class]] -> type pairs
	class2type = {},
	core_deletedIds = [],
	// Save a reference to some core methods
	core_slice = core_deletedIds.slice;

iQuery.fn = iQuery.prototype = {
	constructor: iQuery,
	init: function(selector, context, rootQurey) {

		var match, elem;

		if(!selector){
			return this;
		}
		if( typeof selector === 'string' ){
			if(selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === '>' && selector.length >= 3){
				match = [null, selector, null];
			}else{
				match = rquickExpr.exec(selector)
			}
			

		}else if( selector.nodeType ){
			this.context = this[0] = selector;
			this.length = 1;
			return this;
		}
	},
	length: 0,
	toArray: function(){
		return core_slice.call( this );
	},
	get: function(num){
		return num == null ?

				this.toArray():

				( num < 0 ? this[ this.length + num ] : this[ num ] );
	}
}

iQuery.fn.init.prototype = iQuery.prototype;

iQuery.extend = iQuery.fn.extend = function(){
	var target = arguments[0] || {},
		options,
		i = 1,
		length = arguments.length;


		if(length == i){
			target = this;
			i--;
		}

		for( ; i < length ; i++){
			options = arguments[i];
			for(option in options){

				target[option]= options[option]
			}
		}

		return target;


}

iQuery.extend({
	isFunction: function( obj ) {
		return iQuery.type(obj) === "function";
	},
	isArray: Array.isArray,
	type: function(obj){
		if ( obj == null ) {
			return String( obj );
		}
		// Support: Safari <= 5.1 (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			Object.prototype.toString.call(obj) || "object" :
			typeof obj;
	}
})

window.iQuery = iQuery;
})(window)