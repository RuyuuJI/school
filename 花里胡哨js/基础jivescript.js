javaScript 和java没什么关系 原名叫做liveScript
一切都是资本主义的阴谋

javaScript = ECMAScript(标准) + BOM（浏览器对象模型） +DOM （一个html文档对象模型）

语法规范: script 标签写在 head 里面
每行结尾加;
可以引入多个  script  标签按顺序执行
区分大小写; 必须见名思意;
若语言 被赋值成什么类型就是什么类型

字符串比较大小是在比较对应的字符编码值（逐位比较至有了大小）
 
&& 与运算 || 或运算
三目运算符
var =num1 > num2 ? num1 : num2;


------------同css 可以外部引入

    < script type = "text/javascript" src = "..." > 这里写的代码将不再执行 </script >
& lt 代替 < 去地址 & gt 代替 >
    !NaN =true; !Infinity =false; !undefined =true;
1 + NaN == NaN  //true
NaN != NaN  //true
Infinity //无穷大  
    - Infinity  //无穷小 
var tmp = Number("20a");  //Nan
var tmp = Number(null);  //0
var tmp = Number(undefined);  //NaN
var tmp = parseInt("20a");  //20

++a   // 先加一  再去a的值 

-------------------
switch (var) {
    case 1:
    ,,,,; break;
    case 2:
    ,,,, ; break;
    case 3:
    ,,,, ; break;
    default : ,,,, ; break;  //一般不要省略掉
//没有break会造成事件穿透 
}
--------------------------

while (i<100)
{....}

----------------------------

do{...
}while(I<100)



--------------死循环
while (1){};
do{} while(1);
for (;;){
    break //跳出循环
    continue //开始下一次循环
};
