using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace HSXT
{
    public partial class 转入 : Form
    {
        private string docname;

        public 转入()
        {
          
            InitializeComponent();
        }
        public 转入(string docname)
        {

            InitializeComponent();
            this.docname = docname;
            label1.Text = docname;
        }
        private void 转入_Load(object sender, EventArgs e)
        {
        }

        private void zr_qp_Click(object sender, EventArgs e) //刷新
        {
            listView1.Items.Clear();
            listView2.Items.Clear();  //刷新两个listview
            int i = 0;
            SqlConnection sqlConnection = new SqlConnection();                                                                  //声明并实例化SQL连接；
            sqlConnection.ConnectionString =
                ConfigurationManager.ConnectionStrings["Sql"].ConnectionString;                                                 //配置管理器从配置文件读取连接字符串，并将之赋予SQL连接的连接字符串属性；
            sqlConnection.Open();
              SqlCommand cmd = new SqlCommand();                                       //声明并实例化SQL命令；
            cmd.Connection = sqlConnection;
            cmd.CommandText =
            "select*from Person where State='False'";
            SqlDataReader dr = cmd.ExecuteReader();
            //用dr的read函数，每执行一次，返回一个包含下一行数据的集合dr
            while (dr.Read())
            {
                //构建一个ListView的数据，存入数据库数据，以便添加到listView1的行数据中
                ListViewItem lt = new ListViewItem();
                //将数据库数据转变成ListView类型的一行数据
                lt.SubItems.Add(i.ToString());
                lt.Text = dr["RegNo"].ToString();
                lt.SubItems.Add(dr["Name"].ToString());
                i++;
                //将lt数据添加到listView1控件中
                listView1.Items.Add(lt);
            }
            dr.Close();
            SqlCommand mcmd = new SqlCommand();
            mcmd.Connection = sqlConnection;
            mcmd.CommandText = "select*from Person where State='True'";
            SqlDataReader mdr = mcmd.ExecuteReader();
            while (mdr.Read())
            {
                //构建一个ListView的数据，存入数据库数据，以便添加到listView1的行数据中
                ListViewItem lt = new ListViewItem();
                //将数据库数据转变成ListView类型的一行数据
                lt.Text = mdr["RegNo"].ToString();
                lt.SubItems.Add(mdr["Name"].ToString());
                //将lt数据添加到listView1控件中

                listView2.Items.Add(lt);
            }
            sqlConnection.Close();

        }

        private void zr_bc_Click(object sender, EventArgs e)  //转入
        {
            if(listView1.Items!=null)
            { listView1.Items.Clear();
            listView2.Items.Clear();}
            SqlConnection sqlConnection = new SqlConnection();                                                                  //声明并实例化SQL连接；
            sqlConnection.ConnectionString =
                ConfigurationManager.ConnectionStrings["Sql"].ConnectionString;                                                 //配置管理器从配置文件读取连接字符串，并将之赋予SQL连接的连接字符串属性；
            sqlConnection.Open();
            SqlCommand cmd = new SqlCommand();                                       //声明并实例化SQL命令；
            cmd.Connection = sqlConnection;
            if (textBox1 != null)
            {
                cmd.CommandText = "select*from Person where RegNo='" + textBox1.Text + "'";

                SqlDataReader mdr = cmd.ExecuteReader();
                mdr.Read();
                
                if (mdr["RegNo"] != null)
                {
                    string name =(string) mdr["Name"];
                    int No=(int) mdr["RegNo"];
                    int Age = (int)mdr["Age"];
                    string sex = (string)mdr["Sex"];
                    int Height = (int)mdr["Height"];
                    int Weight = (int)mdr["Weight"];
                    int Phone = (int)mdr["Phone"];

                    mdr.Close();
                    ListViewItem lt = new ListViewItem();
                    //将数据库数据转变成ListView类型的一行数据
                    //将lt数据添加到listView1控件中
                    SqlCommand mcmd = new SqlCommand();
                    mcmd.Connection = sqlConnection;
                    mcmd.CommandText = "update Person set State ='True'"+
                        "where RegNo='" +No + "'";
                    mcmd.ExecuteNonQuery();
                    MessageBox.Show("成功转入");

                   string date= DateTime.Now.ToString();
                    SqlCommand mmcmd = new SqlCommand();
                    mmcmd.Connection = sqlConnection;
                    mmcmd.CommandText = "INSERT INTO Patient(RegNo," +
                        "Name,DocName,Date,Sex,Age,Height,Weight,Phone)"
                        + "values(" + No + ",'" + name + "','"+docname+"','"+date+
                       "','" + sex + "'," +Age+"," +Height+","
                       +Weight+","+Phone+")";
                    mmcmd.ExecuteNonQuery();
                }
                else { MessageBox.Show("输入挂号号错误没有该病人"); }
            }
            else { MessageBox.Show("输入挂号号为空。"); }
            sqlConnection.Close();
            
        }

        private void zr_tc_Click(object sender, EventArgs e)
        {
            Form sy = new 首页(); this.Hide();
            sy.ShowDialog();
        }

        private void button1_Click(object sender, EventArgs e)
        {

            Form sy = new 病人信息(); this.Hide();
            sy.ShowDialog();
        }
    }
}