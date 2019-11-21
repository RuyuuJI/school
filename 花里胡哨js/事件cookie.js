事件:on //+ 鼠标、键盘、html事件
click  //点击
mouseover   //

捕获 目标 冒泡
//阻止冒泡
e.cancelBubble =true  
e.stopPropagation()   

事件默认行为 
href.onclick = function(e){ //阻止
    console.log("aaa");
   // return false
   //e.preventDefault();
   e.returnValue = false
}

//DOM2级事件处理程序---------
节点.addEventListener(事件名,处理函数,捕获布尔值)
节点.removeEventListener(事件名,处理函数)

//HTTP 超文本传输协议-------------
document.cookie ="name=xxx"  //增
document.cookie ="name = yyy"  //改
过期时间<0  //删除

//正则表达式g----------各类方法-------
test:检测是否含有子串 返回T/F 
matxh:检测是否存在于
search:合格的子串的位置，返回第一个匹配的位置
replace: 替换第一个子串
exec:匹配的内容放到数组
reg =/abc/  
var reg =new RegExp("abc")   //构造函数
var str = "ab" 
flag =reg.test(str)

   //-------------------
   var reg = /w*w/gi  //多次  +至少一次  ?0或1次  |或者
   var str = "wwwwwwwwwsw WwwfWasdas WdW fas  w2w  PPP" 
   //console.log(str.replace(reg,"替换"))
  arr= reg.exec(str)
   console.log(reg.exec(str))
   console.log(arr)
console.log(reg.test(str),str.match(reg))
 //\w非数字和下划线  \d数字 \s匹配空格  \{m,n}  m-n次匹配
   var r= /0{3,6}7/gi
   var s = "123410790";
   console.log(r.test(s),s.match(r))
   // /^开头元素 .+ 结尾$/
   var re = /^start.+end$/
   var st = "start with start and end"
   console.log(re.test(st),st.match(re))
   //  () 整体作为一个内容匹配  (.*) 表示一个分组
   var a =/(.*)\s(.*)/gi
   var b ="one two"
   console.log(b.replace(a,"$2 $1")) //互换位置



