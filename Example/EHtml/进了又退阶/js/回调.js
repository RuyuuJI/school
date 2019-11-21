function getParal(i){
    return new Promise(function(resolve,reject){
        $.get('./txt/txt'+i +'.txt',function(p1){
        resolve(p1)
    })
    })
}

get1({name:'sss',
age:23})

