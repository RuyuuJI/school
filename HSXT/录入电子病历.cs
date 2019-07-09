using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace HSXT
{
    public partial class 录入电子病历 : Form
    {
        public 录入电子病历()
        {
            InitializeComponent();
        }

        private void toolStripButton4_Click(object sender, EventArgs e)
        {
            Form sy = new 首页(); this.Hide();
            sy.ShowDialog();
        }

        private void toolStripButton1_Click(object sender, EventArgs e)
        {
            InitializeComponent();
        }

        private void toolStripButton2_Click(object sender, EventArgs e)
        {

            listView1.Items.Clear();
            listView3.Items.Clear();
            if (regno != null && checkno != null && useno != null)
            {
                SqlConnection sqlConnection = new SqlConnection();                                                                  //声明并实例化SQL连接；
                sqlConnection.ConnectionString =
                    ConfigurationManager.ConnectionStrings["Sql"].ConnectionString;                                                 //配置管理器从配置文件读取连接字符串，并将之赋予SQL连接的连接字符串属性；
                sqlConnection.Open();
                SqlCommand cmd = new SqlCommand();                                       //声明并实例化SQL命令；
                cmd.Connection = sqlConnection;
                try
                {
                    cmd.CommandText = "select*from Patient where RegNo=" + regno.Text;
                SqlDataReader dr = cmd.ExecuteReader();
                    while (dr.Read())
                    {
                        //构建一个ListView的数据，存入数据库数据，以便添加到listView1的行数据中
                        ListViewItem lt = new ListViewItem();
                        //将数据库数据转变成ListView类型的一行数据
                        lt.Text = dr["RegNo"].ToString();
                        lt.SubItems.Add(dr["Name"].ToString());
                        lt.SubItems.Add(dr["Age"].ToString());
                        lt.SubItems.Add(dr["Sex"].ToString());
                        lt.SubItems.Add(dr["CheckAfter"].ToString());
                        lt.SubItems.Add(dr["SelfTalk"].ToString());
                        lt.SubItems.Add(dr["Suggestion"].ToString());
                        lt.SubItems.Add(dr["History"].ToString());
                        lt.SubItems.Add(checkno.Text.ToString());
                        lt.SubItems.Add(useno.Text.ToString());
                        //将lt数据添加到listView1控件中
                        listView1.Items.Add(lt);
                    }
                    dr.Close();
                }
                catch { MessageBox.Show("没找到这个人!"); }
                ListViewItem mlt = new ListViewItem();
                int sum1 = 0;
                SqlCommand mmcmd = new SqlCommand();                                       //声明并实例化SQL命令；
                mmcmd.Connection = sqlConnection;
                try
                {
                    mmcmd.CommandText = "select*from UD where RegNo="
                    + regno.Text + "and UDNo=" + useno.Text;
                SqlDataReader mmdr = mmcmd.ExecuteReader();
              
                    mmdr.Read();
                    mlt.Text = mmdr["DrugName"].ToString();
                    mlt.SubItems.Add(mmdr["Number"].ToString());
                    mlt.SubItems.Add(mmdr["Money"].ToString());

                     sum1 = (int)mmdr["Sum"];

                    mmdr.Close();
                }
                catch { MessageBox.Show("没看到他的检查表!"); }

                SqlCommand mcmd = new SqlCommand();                                       //声明并实例化SQL命令；
                mcmd.Connection = sqlConnection;
                try
                {
                    mcmd.CommandText = "select*from Treat where RegNo="
                    + regno.Text + "and SectionNo=" + checkno.Text;
                SqlDataReader mdr = mcmd.ExecuteReader();
              
                    mdr.Read();
                    mlt.SubItems.Add(mdr["SectionNo"].ToString());
                    mlt.SubItems.Add(mdr["Sum"].ToString());
                    int sum = (int)mdr["Sum"] + sum1;
                    mlt.SubItems.Add(sum.ToString());
                    listView3.Items.Add(mlt);
                    mdr.Close();
                }
                catch { MessageBox.Show("他好像没吃药"); }
                sqlConnection.Close();
            }
            else { MessageBox.Show("输入为空!"); }
        }

        private void yzcl_jd_Click(object sender, EventArgs e)
        {
            SqlConnection sqlConnection = new SqlConnection();                                                                  //声明并实例化SQL连接；
            sqlConnection.ConnectionString =
                ConfigurationManager.ConnectionStrings["Sql"].ConnectionString;                                                 //配置管理器从配置文件读取连接字符串，并将之赋予SQL连接的连接字符串属性；
            sqlConnection.Open();
            SqlCommand cmd = new SqlCommand();                                       //声明并实例化SQL命令；
            cmd.Connection = sqlConnection;
            cmd.CommandText = "select*from Patient where RegNo=" + regno.Text;
            SqlDataReader dr = cmd.ExecuteReader();
            string result = "";
            while (dr.Read())
            {
                 result = "挂号号:" + dr["RegNo"] +
                     "姓名:" + dr["Name"] + "年龄:" + dr["Age"] + "性别:"
                     + dr["Sex"] + "\n";
            }
            dr.Close();
            SqlCommand mmcmd = new SqlCommand();                                       //声明并实例化SQL命令；
            mmcmd.Connection = sqlConnection;
            mmcmd.CommandText = "select*from UD where RegNo="
                + regno.Text + "and UDNo=" + useno.Text;
            SqlDataReader mmdr = mmcmd.ExecuteReader();
            ListViewItem mlt = new ListViewItem();
            mmdr.Read();
            result += "\n用药编号:" + mmdr["UDNo"] + "药品编号："
                + mmdr["DrugNo"] + "药品名称:" + mmdr["DrugName"] + "单价*数量：" +
                mmdr["Money"] + "*" + mmdr["Number"];
            int sum =(int) mmdr["Sum"];
            mmdr.Close();

            SqlCommand mcmd = new SqlCommand();                                       //声明并实例化SQL命令；
            mcmd.Connection = sqlConnection;
            mcmd.CommandText = "select*from Treat where RegNo="
                + regno.Text + "and SectionNo=" + checkno.Text;
            SqlDataReader mdr = mcmd.ExecuteReader();
            mdr.Read();
            result+= "\n检查编号:" + mdr["SectionNo"] + "检查类型："
                + mdr["Kind"] + "检查部位:" + mdr["Part"] + "费用：" +
                mdr["Sum"];
            sum+=(int)mdr["Sum"];
            result += "\n总费用:" + sum;
            StreamWriter sw = File.AppendText(@"E:\\test.txt"); //保存到指定路径
            sw.Write(result);
            sw.Flush();
            sw.Close();
        }
    }
}
