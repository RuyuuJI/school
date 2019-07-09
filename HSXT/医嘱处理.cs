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
    public partial class 医嘱处理 : Form
    {
        private int regno;

        public 医嘱处理()
        {
            InitializeComponent();
        }
        public 医嘱处理(int no)
        {
            InitializeComponent();
            regno = no;
        }
        private void 医嘱处理_Load(object sender, EventArgs e)
        {

        }

        private void toolStripButton4_Click(object sender, EventArgs e)
        {
            Form sy = new 首页(); this.Hide();
            sy.ShowDialog();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            Form sy = new 病人信息(); this.Hide();
            sy.ShowDialog();
        }

        private void toolStripButton1_Click(object sender, EventArgs e)
        {
            listView1.Items.Clear();
            SqlConnection sqlConnection = new SqlConnection();                                                                  //声明并实例化SQL连接；
            sqlConnection.ConnectionString =
                ConfigurationManager.ConnectionStrings["Sql"].ConnectionString;                                                 //配置管理器从配置文件读取连接字符串，并将之赋予SQL连接的连接字符串属性；
            sqlConnection.Open();
            SqlCommand cmd = new SqlCommand();                                       //声明并实例化SQL命令；
            cmd.Connection = sqlConnection;
            cmd.CommandText =
            "select*from Patient where RegNo=" + regno;
            SqlDataReader dr = cmd.ExecuteReader();
            //用dr的read函数，每执行一次，返回一个包含下一行数据的集合dr
            while (dr.Read())
            {
                //构建一个ListView的数据，存入数据库数据，以便添加到listView1的行数据中
                ListViewItem lt = new ListViewItem();
                //将数据库数据转变成ListView类型的一行数据

                lt.Text = dr["RegNo"].ToString();
                lt.SubItems.Add(dr["Name"].ToString());
                lt.SubItems.Add(dr["Age"].ToString());
                lt.SubItems.Add(dr["Sex"].ToString());
                //将lt数据添加到listView1控件中
                listView1.Items.Add(lt);
            }
            dr.Close();
            sqlConnection.Close();
        }

        private void yzcl_xz_Click(object sender, EventArgs e)
        {
            SqlConnection sqlConnection = new SqlConnection();                                                                  //声明并实例化SQL连接；
            sqlConnection.ConnectionString =
                ConfigurationManager.ConnectionStrings["Sql"].ConnectionString;                                                 //配置管理器从配置文件读取连接字符串，并将之赋予SQL连接的连接字符串属性；
            sqlConnection.Open();
            SqlCommand mcmd = new SqlCommand();
            mcmd.Connection = sqlConnection;
            mcmd.CommandText = "update Patient set SelfTalk='"+selftalk.Text+"',"
                +"History='"+history.Text+"',"+"CheckAfter='"+checkafter.Text+"',"
                +"Suggestion='"+suggestion.Text+ "',SectionNo="
                +sectionno.Text+"where RegNo=" + regno;

            mcmd.ExecuteNonQuery();
            sqlConnection.Close();
        }

        private void yzcl_sc_Click(object sender, EventArgs e)
        {

        }
    }
}
