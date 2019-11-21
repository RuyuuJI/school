
function sprint(n) {
    for (var i = 0; i < n; i++) {
        document.write("木大木大<hr>");
    }
}

function sum() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    alert(sum);
    return sum;
}
//判断是不是闰年
function leapYear(year) {
    if (year % 400 == 0 || year % 4 == 0 && year % 100 == 100) {
        return true;
    } else { return false }

}

//兔子繁殖   菲波那切数列
function rabbit(month) {
    if (month < 4) {
        return rabbit(month - 1) + rabbit(month - 1);
    }

}

function ok() {  //数组基础部分
    alert('ok');
    var arr1 = ["啊啊啊啊", "宝宝贝贝", "啦啦啦啦", "买买买"];
    var arr2 = ["重中之重", "xxx"];
    var arr = arr1.concat(arr2);  //两个数组相连
    var newarr = arr.slice(1, 3);  //宝宝贝贝  原数组不变左开右闭
    document.getElementById("test").innerHTML = (arr);
    document.getElementById("test1").innerHTML = (newarr);
    //splice完成增删改 (开始，结束，（新的数据）)
    res = arr1.splice(1, 1);  //左右都开  返回截取的部分

    document.getElementById("splice1").innerHTML = (arr1 + "<br>" + res);

    //1,0表示没有删除元素 返回删除的元素
    var res = arr1.splice(1, 0, "c1", "c2");
    document.getElementById("splice2").innerHTML = (arr1 + "<br>" + res);

    //1,1先删除后新增
    var res = arr1.splice(1, 1, "c3", "c4");
    document.getElementById("splice3").innerHTML = (arr1 + "<br>" + res);

    //join 拼接成字符串
    newarr = arr1.join("--");
    document.getElementById("join").innerHTML = (newarr + "<hr>");
    SZ();
}
function SZ() {  //进阶数组
    var count = 0;  //1-25累加变量
    var arr = [];
    for (var i = 0; i < 5; i++) {
        var newArr = [];
        for (var j = 0; j < 5; j++) {
           
            newArr.push(++count);
        }
        arr.push(newArr);
    }
    for(var i=0;i<arr.length;i++)
    {
        for(var j=0;j<=i;j++)
        {
            document.getElementById("sz").innerHTML +=(arr[i][j]+ "&nbsp");
        }
        document.getElementById("sz").innerHTML +=("<br /n>")
    }
//arr.reverse可以反转元素   sort可以（字符串ASCl）升序排列
 Bub();
}

function Bub()  //冒泡排序
{
    //前后两个元素两两比较
    var arr=[9,8,7,6,5,4,3];
    for (var i =0;i<arr.length;i++)
    {
        for(var j =0;j<arr.length-i-1;j++)
        {
            if(arr[j]>arr[j+1])
            {
                var tmp =arr[j];
                arr[j] = arr[j+1];
                arr[j+1] =tmp;
            }

        }
        document.getElementById("bub").innerHTML += (arr+"<br>"); 
        Sel();
    }
}
function Sel()  //选择排序
{
    //选择最小的数放在第一个，再选其次小...

    var arr=[9,8,7,6,5,4,3];
    arr.reverse();
    for (var i =0 ;i<arr.length-1;i++)
    {
        for(var j=i+1;j<arr.length;j++)
        {
            if(arr[i]>arr[j])
            {
                tmp =arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
     
    }
    document.getElementById("sel").innerHTML += (arr+"<br>这里是选择排序"); 


}
function $(id)  //获取控件id
{
   return  document.getElementById(id);
}

