function Message(){
    this._list = [];//所有观察者
    this.msg = 'hello';
}
//加入观察对象
Message.prototype.attach = function(hero){
    this._list.push(hero);
}
//遍历对象发通知
Message.prototype.notify = function(){
    for(var i = 0;i<this._list.length;i++){
        this._list[i].update();//调用对象的方法
    }
}
//改变状态
Message.prototype.setState = function(msg){
    this.msg =msg;
    this.notify();//发消息
}
//获取状态
Message.prototype.getState = function(){
    return this.msg;
}
//-------------------------------
//观察对象（name,观察者）
function Hero(name,Message){
    this.name = name ;
    this.Message = Message;
    }
Hero.prototype.update = function(){
    console.log(this.name +"received :"+this.Message.getState());
}