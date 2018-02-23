/*
  author:dan
  time: 2018-01-15
  usage: 兼容获取一个元素的样式
  params: ele=>获取的元素，style=>获取的样式属性
*/
function getStyle(ele, style){
	return ele.currentStyle ? ele.currentStyle[style] : getComputedStyle(ele, '0')[style];
}

/*
  author:dan
  time: 2018-01-15
  usage: 获取一个元素
  params: 元素
*/
function $(ele) {
	if(typeof ele == 'function'){
		window.onload = ele;
	}
	if(typeof ele == 'string'){
		return document.getElementById(ele)
	}
}
/*
  author:dan
  time: 2018-01-15
  usage: 获取一个元素
  params: 
   1.获取一个元素 ele
   2.获取一个属性 attr
   3.方向 dir（步进速度）
   4.秒数 seconds
   5.执行完当前之后的回调
*/
function doMove ( obj, attr, dir, target, seconds, endFn ) {
  dir = parseInt(getStyle( obj, attr )) < target ? dir : -dir;
  clearInterval( obj.timer );
  obj.timer = setInterval(function () { 
    var speed = parseInt(getStyle( obj, attr )) + dir;      // 步长
    if ( speed > target && dir > 0 ||  speed < target && dir < 0  ) {
      speed = target;
    }
    obj.style[attr] = speed + 'px';
    if ( speed == target ) {
      clearInterval( obj.timer );
      endFn && endFn();
      
    }
  }, seconds);
}
/*
  author:dan
  time: 2018-01-30
  usage: 判断一个字符串是不是全都是数字
  params: 
   1.str 字符串
*/
function isAllNum(str){
  for(var i=0;i<str.length;i++){
      if(str[i].charCodeAt() > 48 && str[i].charCodeAt() < 57){
          return true;
      }else{
          return false;
      }
  }
}
/*
  author:dan
  time: 2018-01-30
  usage: 判断一个字符串在另一个字符串中出现多少次
  params: 
   1.str 字符串
   2.strTime 被判断出现次数的字符串
*/
function strCount(str, strTime){
  var occurTime = 0;
  var position = 0;
  while(str.indexOf(strTime,position) != -1){
      position = str.indexOf(strTime,position) + strTime.length;
      occurTime ++;
  }
  return occurTime;
}






