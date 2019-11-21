var a =10 ;
function real(a){
    var a=5;
    alert(a);
}
//作用在函数里面的变量仅在函数调用时有效
//alert(a)  //10
//real(a)  //5
//alert(a)  //10 
/*数组为引用数据类型 
不会放在函数里面，是放在堆段里边
改变了就不会变回了
*/

function reduce(){
var arr=[1,2,3,4,5,6,7,8]
arr.reduce(function(pre,next,index,arr){
        //  pre: 上一次便利return 的值
     //   next:当前遍历的元素
    document.getElementById("str").innerHTML += (pre+"+"+next+"<br>"); 
    return  pre +next;
})

filter();
}

function filter(){
    arr =[1,2,3,30,56,66];
    var res =arr.filter(function(item,index,array){
        return item >30;  
})
document.getElementById("filter").innerHTML += ("<hr>"+res); 
//every判断
var res = arr.some(function(item,index,array){
    return item ==30;
    })
    document.getElementById("filter").innerHTML += ("<hr>"+res); 
    //alert(Math.ceil(3.1))  //向上取整
//alert(Math.floor(3.9))  //向下取整)
res =Math.sin(30 * Math.PI/180);
document.getElementById("filter").innerHTML += ("<hr>"+res); 

var person =new Object();
person["name"]  ="xxx";
person["age"]  =11;
person["show"] =function(){
    alert(person.name+person.age)
}
str ="323"
var str =showDate();
document.getElementById("new").innerHTML = ("<hr>"+str);
}

function showDate(){   //生成时间
    var d= new Date();
    var year = d.getFullYear();
    var month =d.getMonth() +1;
    var date =d.getDate();

    var week =d.getDay();
    if(week ==0){
        week ="日"
    }
    var hour = d.getHours();
    var min = d.getMinutes();
    var sec =d.getSeconds();
    return year + "年"+ month +"月"+
    date+"日 星期"+ week +"" +hour +":"+
    min+":"+sec;
// n天后的某一天 setDate(date +n)
}

function $(id)  //获取控件id
{
   return  document.getElementById(id);
}


function getValue(search,key){
    var start =search.indexOf(key);  //找到第一个key位置
    if(start == -1 ){  //没找到
        return
    }
    else{
        var end = search.indexOf("&",start);//找到离start最近的&
        if(end == -1){  //最后一个
            end =search.length
        }
        var str =search.substring(start,end);
        alert(str);
    }
}
/*
search = "?id=5&search=ok"
getValue(search,"d")
*/

 //通过Class查找
 function getElementsByClassName(parent,classtr) {
    var nodes = parent.getElementsByTagName("*")
    var result = [];
    for (var i =0;i<nodes.length;i++)
    {
        if(nodes[i].className ==classtr)
        {
            result.push(nodes[i])

        }

    }
    return result ;
 
 }