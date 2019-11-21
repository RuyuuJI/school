Bom 浏览器对象模型

alert(window)  //windows对象
//三个系统对话框 ---------------
alert("警告框");
confirm("选择警告框") //返回true or false
//返回值 为输入内容  or  null
prompt("带输入参数警告框","输入框默认值") 

//-------------------------------
window.open("url","窗口名称","窗口三围")  //打开一个窗口
//opener还需要真实的网络环境下
opener  //当前窗口的父窗口的window对象

//对象
location: {      //地址栏输入框 
    url //统一资源定位符
    hash //url后面的锚点,业内跳转
    host  //主机名:端口号
    hostname   //主机名  域名/ip
    href   //整个url 
    pathname  //路径名
    port  //端口号 
    protocal  //file:本地文件协议  http:网络协议
    search  //查询字符串  ？后面的内容

//方法---------------
assign("跳转至指定页面")
reload()  //重载
reload(true)   //强制重载,忽略缓存
replace()   //用新的URL替换当前页面，没有缓存

}  

history:{   // 用户上网的记录
    length   // 记录条目数
    back(后退)  forward(前进)
    go(n) //前后n条记录，0则重载 
}



