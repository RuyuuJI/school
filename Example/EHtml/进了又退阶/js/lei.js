function darkmaster(){  //单例模式

    if(!darkmaster._instance){
    darkmaster._instance = {
        count :30 ,
        sat:function(){

        },
        countDown:function(){

        },
        dead:function(){

        },
        show :function(){

        }
    }    
    }
    return darkmaster._instance;
}

//工程模式
function Factory(){

}
Factory.create = function(type){
switch(type){
    case "1":
            return new T1();

    break;
    case "2":
            return new T2();
        break;
    default:
            return new T3();
            break;
}
}

function T1(){
    console.log("111111")
}
function T2(){
    console.log("22222")
}
function T3(){
    console.log("3333")
}

//------------------
//策略模式
 
function Strategy(){
}
Strategy.prototype.trick = function(){console.log('基础策略')}

function StrategyA(){}
StrategyA.prototype = Object.create(Strategy.prototype);
StrategyA.prototype.trick =function(){
    console.log("AAAAA")
}
function StrategyB(){}
StrategyB.prototype = Object.create(Strategy.prototype);
StrategyB.prototype.trick =function(){
    console.log("BBBBB")
}
function StrategyC(){}
StrategyC.prototype = Object.create(Strategy.prototype);
StrategyC.prototype.trick =function(){
    console.log("CCCC")
}
//---------------适配器
function Sag(){
}
Sag.prototype.skillone = function(){
    console.log("人马技能一")
}
Sag.prototype.skilltwo = function(){
    console.log("人马技能二")
}

function Guan(){
    this.s = new Sag();
}
Guan.prototype.skillone =function(){
    this.s.skillone();
}
Guan.prototype.skilltwo =function(){
    this.s.skilltwo();
}


