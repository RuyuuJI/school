Math.round()  //四舍五入
Math.PI // PI
Math.random() //随机数0-1
Math.max(1,2,3)  //最大值3
Math.ceil(3.1)  //向上取整
Math.floor(3.9)  //向下取整
Math.sqrt(4)  //开平方
Math.pow(x,y)  //x的y次方

//---------------------------------
计算机计算小数会出错
弧度: Math.PI /180  //1弧度  也就是1°

//------------------------
var person =new Object(); //创建对象
var person ={};

person.name = "sss" ; //添加数据、属性
person["name"] = "xxx";

//创建方法
person.showName =function(){
person["showName"] = function{}
alert(person.name)

//删除属性
delete person.name;
}

//日期对象--------------------
var d =new Date();
alert(d)   //格林尼治天文台获取的时间
//1970是unix诞生日，0是星期日和一月
//Tue Oct 22 2019 14:51:35 GMT+0800 (中国标准时间)

 //定时执行函数  返回值为该定时器的ID
 timber=setInterval(函数，间隔) 
 clearInterval(timber)  //取消定时器

function $(id)  //获取控件id
{
   return  document.getElementById(id);
}



