ECMA标准   ECMA5推出了严格模式
面对对象语言 但没有类
function  strict(){
    "use strict"
    max =10 ; //没有var声明则为全局变量

    array.forEach(function(item,index,array) {
        item:当前遍历的元素 
        index:当前下标
        array:当前数组
    })
newarr= array.map(function(item,index,array) {
//映射  遍历---操作--返回
return  item +2 ;   //每个元素+2
    })   
  
    arr.reduce(function(pre,next,index,array){
        pre: 上一次便利return 的值
        next:当前遍历的元素
        return pre+next;
    })

    //filter 过滤
    var res =[1,2,3].filter(function(item,index,array){
        return item >30;  //返回所有大于80的元素数组
    })

    //some  某些，判断条件是不是成立 ，返回true or false 
    //every 全部，全部符合条件则true ，否则为F
var res = arr.every(function(item,index,array){
    return item ==30;
    })
}

//Document Object Model  Dom-----------
DOM:定义了html  +xml标准  //打通js css html 
元素节点+ 属性节点  +文本节点
W3c 万维网联盟  

id=document.getElementById()  //id获取元素节点
ids=id.getElementsByTagName()  //标签名获取元素节点(标签id下)
 //通过Class查找
 function getElementsByClassName(parent ,classtr) {
    var nodes = parent.getElementsByTagName("*")
    var result = [];
    for (i =0;i<nodes.lenght;i++)
    {
        if(nodes[i].className ==classtr)
        {
            result.push(nodes[i])

        }

    }
    return result ;
 
 }
 //通过Name返回装有符合的元素数组，一般文本输入框才有
 //不支持id.getEl...
Name = document.getElementsByName() 

tagName:元素节点标签名
innerHTML:整个标签间的内容
nodeName: nodeType(元素1,属性2,文本3):
nodeValue:null,属性值,文本内容
firstChilidnode 第一个子节点 , lastChildnode末子节点
空字符也算一个节点
 元素节点.属性名 //修改属性 
 //设置style.background-color  
 //只能访问行间的 不能访问css或者style里面的
 元素节点.style.backgroundColor  
 //设置当前有效的样式 
 getComputedStyle(元素节点)["width"]

 //Attribute设置用户自定义属性--------------
 document.removeAttributes  //属性结合
 document.getAttribute("xxx")  //可以获取自定义
 document.setAttribute("xxx","yyy")  //可以设置自定义
 document.removeAttribute("xxx")  //删除属性 
元素节点.xxx  //不行

ownerdocument  //根节点
parentbling  //父节点
 previousSibling  //前一个同级节点
 nextbling  // 下一个同级节点 

 //创建节点---------
 node=节点.createElement("div/..")  
 父节点.appendChild(node)   //插入父节点末尾
父节点.insertBefore(插入的节点，旧的节点)
父节点.replaceChild(new,old)
新节点 = 节点.clone(true);  //true才会克隆文本   
//强大的选择器
 function $(vAvg){
    switch(vAvg[0]){
        case "#":
            return document.getElementById(vAvg.substring(1));
            break;
        case ".":
            return getElementsByClassName(document,vAvg.substring(1));
            break;
        default :
            var str =vAvg.substring(0,5);
            if(str =="name"){
                 return document.getElementsByName(vAvg.substring(4))
            }else{
                return document.getElementsByTagName(vAvg)
            }
        break;
    }
 }

