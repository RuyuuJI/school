function $(id){
    return document.getElementById("id")
}
let obj0= {};
//碰撞检测
function check_border(obj0){
    var speedx = obj0.sx;
    var speedy = obj0.sy;
    var style = window.getComputedStyle(obj0.name)
    var left =parseInt(style.left)
    var top =parseInt(style.top)
    var width= parseInt(style.width)
    var height = parseInt(style.height)

    if(left <=0){
        left = 0
        speedx*=-1;
    }
    if(left >window.innerWidth -width){
        left = window.innerWidth -width;
        speedx *=-1;
    }  if(top <=0){
        top  = 0
        speedy*=-1;
    }
    if(top>window.innerHeight -height){
        top= window.innerHeight -height;
        speedy *=-1;
    }
    obj0.sx=speedx;obj0.sy = speedy;
    return obj0;
}

//两个相撞
function check_obj(block1,block2) {
    var blo1 =window.getComputedStyle(block1.name)
    var blo2 =window.getComputedStyle(block2.name)

    left1=parseInt(blo1.left);top1=parseInt(blo1.top);width1=parseInt(blo1.width);height1=parseInt(blo1.height);
    left2= parseInt(blo2.left);top2=parseInt(blo2.top);width2=parseInt(blo2.width);height2=parseInt(blo2.height);
//中心1位置
    var center1={
        x: left1+width1/2,
        y:top1 +height1/2
    }
    //中心2位置
    var center2={
        x: left2+width2/2,
        y: top2 +height2/2
    }
    var centerx=Math.abs(center1.x-center2.x)
    var centery=Math.abs(center1.y-center2.y)
   
    //相撞  
    if(centerx<(width1 +width2)/2 && centery<(height1+height2)/2){
      
        return true
    }
    return false;
}

