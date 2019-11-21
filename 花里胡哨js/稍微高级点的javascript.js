
传入参数不确定:
每个函数内都有一个内置的数组------arguments
存储所有传入参数，有序排列

函数递归:函数可以自己调用自己,一般情况下不要使用递归
有递归有参数

事件驱动函数:
var btn =document.getElementById("页面节点ID")

//写在window.onload 在页面加载后执行
window.onload =function(){}

//数组 Array  元素访问通过下标查询
var arr =new Array(1,2,3);
var arr =new Array(10)  //这里表示的是长度
var arr =[1,12,"as阿达2"];
arr[1]

//栈空间  push 返回栈长度  pop 返回移除的元素  
// shift 取下头部的元素并返回该值
//数组1.concat(数组二) 合并两个数组成一个新数组 
//slice(x,y) 切片
//splice(x,y,)  //增删改  
var arr =[1,2,3]
var res = arr.push(2,4.5)
alert (res) //6  栈的长度

string:字符串 //被创建就不能再改变
var sss="sss";
sss.charAt(下标) //访问下标
sss[下标]   //同上
也有很多字体字符大小颜色形式的方法
 //第一次出现的位置  找不到返回-1
sss.indexOf(子串)  
sss.indexOf(子串,(开始查找的位置))
sss.lastIndexOf(子串)//最后出现的位置
sss.search(子串)   //正则表达式
sss.replace(正则表达式,新字符串)  //替换
sss.substring(开始，结束)  //返回新字符串
sss.split(分隔符，生成数组长度)   //返回装有分割好的子串数组
sss.toUpperCase()  //大写
sss.toLowerCase()  //小写








