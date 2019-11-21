function setcookie(name,value,day){  //设置cookie 
    var date = new Date();
    date.setDate(date.getDate() +day)
document.cookie = name+"=" +value +";expires"+date+";SameSite=None;Secure";
}
function getcookie(name){  //获取cookie 目标值
    var str =document.cookie;
    var arr = str.split(";")
    for(var i =0;i<arr.length;i++){
        var arr1 = arr[i].split("=")
        if(arr1[0]==name)
        {
            return arr1[1];
        }
    }
}

function remove(name){   //删除一条cookie 
setcookie(name,1,-1)
}