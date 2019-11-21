
Ajax:Asynchronous JavaScript And XMLDocument;

http请求：post(包体中) get(url) put delete;

创建ajax对象-》监听请求-》打开对象-》发送请求

var xhr = new XMLHttpRequest();//创建对象http请求
//监听
//属性是否改变
xhr.onreadystatechange = function(){
    0-->xhr已经创建但还没初始化
    1-->xhr已经调用了open
    2-->xhr已经发出请求
    3-->已经获得了部分数据
    4-->数据安全返回
    if(xhr.readyState!==4){
        return;
    }
    //安全返回
    if(xhr.status>=200 &&xhr.status<=300){
        //返回xhr.responseText(string)
        document.querySelector('h1').innerHTML = xhr.responseText;
    }else{
        console.error("出问题了")
    }
}
xhr.open('get',url,是否异步);

xhr.send();//发送
//-------------------
json :轻量级数据交换格式
与js对象间的转换:JSON.parse(data) |JSON.stringify(jsObject)

//回调地狱-------上一个函数返回值作为下一个内部函数的输入

var promise = new promise(function(resolve,reject){
    if(1=1){
        resolve();
    }else {reject();}
})

//解决跨域请求
jsonp|cors 
后端+Header()
前端



