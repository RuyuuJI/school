let ; //类似var 但只在let命令所在的块内有效
  //c=undefined
  let {a,b} = {a:"aa",b:"bb"}
  let {a,b} ={a:111} //b=111
  let {a,b=1} = {a:5}  //a=1,b=5
let [a,b,c] =[1,2]
const ; //不允许北改变赋值
创建对象:
创建了一个对象+一个双向箭头 
this指向这个对象
执行构造函数
返回这个对象
function Person(){
    Person.prototype.name = '';
    Person.prototype.age=''
}
function Student(){
    //Person.apply(this,[name,age]);
    student.prototype = Object.create(Person.prototype);
    
}

//模板字符串-----------------
let obj = {"name":"jon","age":20}
let {name,age} = obj;
console.log(`${name}---${age}`)
//  ``
let arr =["阿达","an","阿2布","安装","阿女"]
for (i in arr){ //i为索引
    html.innerHTML+=`<a href>${arr[i]}</a><br>`
}

//箭头函数
 let foo=(a) =>a  ;//coonsol.log(foo(10))  =10
//set      扩展运算符...
let set =new Set([1,2,3,4,4]) 
var arr = [...set]   //扩展为数组
//add(x)  has(x) delete(x)  clear()  size()
//values() |keys（） 返回键值  
//entries键值对
var set = new Set([2,3,4,5,5])
var arr1 = [...set]
for(i of arr1){console.log(i)}  //2，3，4，5
for (let [key,item] of set.entries()){
    console.log(key,item)
}
//毁掉函数遍历每个成员并*2
set.forEach((item,key) =>console.log(item*2))

//Map 
var map =new Map([["name","join"],["age","12"]])
map.set("new","new")  //天假新键值

//生成器函数
function* foo(x){
    x + "zero"
    yield x+"一";
    yield x+"二";
    yield x+3;
    return x+"最後";
}
it = foo(5)
it.next(x)  //第一次传参数无效 之后传一次代表一次field的值

//class 
class Person{
    constructor(name){
        this.name= name
    }
    say(){
        console.log(this.name)
    }
}


