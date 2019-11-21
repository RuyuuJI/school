//强大查询
function $(vAvg) {
    switch (vAvg[0]) {
        case "#": //id
            return document.getElementById(vAvg.substring(1));
            break;
        case ".":  //类名
            return getElementsByClassName(document, vAvg.substring(1));
            break;
        default:  //tagName 或者name=
            var str = vAvg.substring(0, 5);
            if (str == "name=") {
                return document.getElementsByName(vAvg.substring(5))
            } else {
                return document.getElementsByTagName(vAvg)
            }
            break;
    }
}
//通过Class查找
function getElementsByClassName(parent, classtr) {
    var nodes = parent.getElementsByTagName("*")
    var result = [];
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].className == classtr) {
            result.push(nodes[i])

        }

    }
    return result;

}
function removeSpaceNode(nodes) {  //没有删除子节点
    var result = [];
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].nodeType == 3 
            && /^\s + $/.test(nodes[i].nodeValue)) {
            continue;
        }
        result.push(nodes[i]);
    }
    return result;
}

function removeSpaceNode2(parent){  //从父节点倒着删除子节点
    var nodes =parent.childNodes;
    for (var i=nodes.length-1;i>=0;i--)
    {
        if (nodes[i].nodeType == 3 
            && /^\s + $/.test(nodes[i].nodeValue)) {
       parent.removeChild(nodes[i])
        }
    }
}
//创建一个带文本的元素及文本
function createElementWidthTxt(tagName,txt)
{
    var node =document.createElement(tagName)
    var oTxt = document.createTextNode(txt)
    node.appendChild(oTxt)
    return node;
}

//插入到一个元素到什么之后
function insertAfter(newNode,oldNode){
    var parent =oldNode.parentNode;
    if(oldNode ==parent.lastChild)
    {
        parent.appendChild(newNode);
    }else{
        parent.insertBefore(newNode,oldNode.nextSibling)

    }
}
