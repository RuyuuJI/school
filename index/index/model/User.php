<?php
namespace app\index\model;
use think\Model;
class User extends Model
{
    
// 定义类型转换
// 定义类型转换
protected $type = [

    ];
    // 定义自动完成的属性
    protected $insert = ['status'];
    // status属性修改器
    protected function setStatusAttr($value, $data)
    {
    return '流年' == $data['nickname'] ? 1 : 2;
    }
    // status属性读取器
    protected function getStatusAttr($value)
    {
    $status = [-1 => '删除', 0 => '禁用', 1 => '正常', 2 => '待审核'];
    return $status[$value];
    }
    
}
