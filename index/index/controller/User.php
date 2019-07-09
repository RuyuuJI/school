<?php
namespace app\index\controller;
use app\index\model\User as UserModel;
use think\Controller;
use think\Request;

class User extends Controller
{
public function index()  // 分页输出列表 每页显示5条数据
{
$list = UserModel::paginate(5);
$this->assign('list',$list);
return $this->fetch();
return view('layout');
}

public function add()    //添加用户并赋予其唯一id号
{
$user = new UserModel;
if ($user->allowField(true)->save(input('post.'))) {

$this->success('用户[ ' . $user->nickname . ':' . $user->id . ' ]新增成功','create');
} else {
    return $user->getError();
}
}



public function read($id)
{
$user = UserModel::get($id);
if ($user) {
    $this->assign('user',$user);
    return $this->fetch();
    } else {
        $this->success('すみません，没找到这人','create');
    }

}


public function update($id)
{
    $id  =  $_POST['id'];
    $name  =  $_POST['name'];
    $email  =  $_POST['email'];
    $birthday  =  $_POST['birthday'];

    $user = model('User');
    $user::where('id',$id)
    ->update(['nickname'=>$name,'email'=>$email,'birthday'=>$birthday]);
 
    return view('create');

}

public function delete($id)   //根据id删除该用户
{
$user = UserModel::get($id);

if ($user) {
$user->delete();
$this->success('congratulations！删除成功  返回ing。。。。','create');
} else {
    $this->success('すみません，没找到这人','create');
}

}


public function create()    // 创建用户数据页面,,,,多次完善过后应该为管理admin....
{
return view('user/create');
}

}
