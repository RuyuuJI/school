using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using System.Data.SqlClient;
using System.Configuration;  
//包含访问SQL Server所需的各类对象；  
namespace HSXT
{
    public partial class 登录 : Form
    {
        private static string docname;

        public 登录()
        {
          
            InitializeComponent();

            
        }
     
        private void button_qd_Click(object sender, EventArgs e)
        {
         
            SqlConnection sqlConnection = new SqlConnection();                                                                  //声明并实例化SQL连接；
            sqlConnection.ConnectionString =
            ConfigurationManager.ConnectionStrings["Sql"].ConnectionString;                                                 //配置管理器从配置文件读取连接字符串，并将之赋予SQL连接的连接字符串属性；
            sqlConnection.Open();                                                            //在字符串变量中，描述连接字符串所需的服务器地址、数据库名称、集成安全性（即是否使用Windows验证）；
            SqlCommand sqlCommand = new SqlCommand();                                       //声明并实例化SQL命令；
            sqlCommand.Connection = sqlConnection;                                          //将SQL命令的属性Connection指向SQL连接；
            sqlCommand.CommandText =                                                        //指定SQL命令的命令文本；命令文本由字符串拼接而成；
             "select*from Doctor where DocNo='" + hsxtdl_yhdm.Text.Trim()
             + "' and DocPwd='" + hsxtdl_yhmm.Text.Trim() + "'";
            SqlDataReader sqlRead = sqlCommand.ExecuteReader();//读取数据
                                                               //调用SQL命令的方法ExecuteScalar来执行命令，并接受单个结果（即标量）；
                                                               //执行标量的返回结果类型为object，可通过强制类型转换，转为整型；
                                                         //关闭SQL连接；
            if (sqlRead.Read())
            {
                MessageBox.Show("登录成功。");
                docname = (string)sqlRead["DocName"];
                首页 sy=new 首页(docname) ;this.Hide();
                sy.ShowDialog();
             
            }
            else                                                                            //否则；
            {
                MessageBox.Show("用户号/密码有误，请重新输入！");                           //给出错误提示；
                this.hsxtdl_yhmm.Focus();                                                  //密码文本框获得焦点；
                this.hsxtdl_yhmm.SelectAll();                                              //密码文本框内所有文本被选中；
            }
            sqlConnection.Close();
        }

        private void 登录_Load(object sender, EventArgs e)
        {

        }
    }
}
