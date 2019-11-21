function $(id){
    return document.getElementById(id)
}
//获取控件样式
function getStyle(el,property)
{
    if(getComputedStyle){
        return getComputedStyle(el)[property]
    }else{ //万恶的IE适配
        return el.currentStyle[property];
    }
}


//根据属性集内容变化
function animate(el,properties) {
    //每次清除定时器
clearInterval(el.timerId);  
el.timerId = setInterval(function(){
for(var property in properties){
    //速度变化
    var current ;
    var target = properties[property]
    if(property ===`opacity`){//透明度
        //四舍五入
        current=Math.round(parseFloat(getStyle(el,`opacity`))*100)
    }else {
        //获取速度
        current = parseInt(getStyle(el,property));
    }
var speed=(target - current)/30;
//大于零向上取整
speed =speed>0? Math.ceil(speed) :Math.floor(speed);
if(property ===`opacity`)
{
    el.style.opacity=(current+speed)/100;
}else{
    //速度
el.style[property]=current+speed+`px`;
}
}
},20)
}

