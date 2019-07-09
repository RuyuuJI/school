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
    public partial class 医嘱检查 : Form
    {
        public int regno;
        public 医嘱检查()
        {
            InitializeComponent();
        }
        public 医嘱检查(int no)
        {
            InitializeComponent();
            regno = no;
        }

        private void 医嘱处理_Load(object sender, EventArgs e)
        {

        }

        private void listView1_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        private void groupBox2_Enter(object sender, EventArgs e)
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

        private void toolStrip1_ItemClicked(object sender, ToolStripItemClickedEventArgs e)
        {

        }

        private void toolStripButton1_Click(object sender, EventArgs e)//刷新
        {
            listView1.Items.Clear();
            listView2.Items.Clear();  //刷新两个listview
            SqlConnection sqlConnection = new SqlConnection();                                                                  //声明并实例化SQL连接；
            sqlConnection.ConnectionString =
                ConfigurationManager.ConnectionStrings["Sql"].ConnectionString;                                                 //配置管理器从配置文件读取连接字符串，并将之赋予SQL连接的连接字符串属性；
            sqlConnection.Open();
            SqlCommand cmd = new SqlCommand();                                       //声明并实例化SQL命令；
            cmd.Connection = sqlConnection;
            cmd.CommandText =
            "select*from Patient where RegNo="+regno;
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
            SqlCommand mcmd = new SqlCommand();
            mcmd.Connection = sqlConnection;
            mcmd.CommandText = "select*from Treat where RegNo=" + regno;
            SqlDataReader mdr = mcmd.ExecuteReader();
            while (mdr.Read())
            {
                //构建一个ListView的数据，存入数据库数据，以便添加到listView1的行数据中
                ListViewItem lt = new ListViewItem();
                //将数据库数据转变成ListView类型的一行数据
                lt.Text = mdr["Kind"].ToString();
                lt.SubItems.Add(mdr["Sum"].ToString());
                lt.SubItems.Add(mdr["Number"].ToString());
                lt.SubItems.Add(mdr["Doctor"].ToString());
                lt.SubItems.Add(mdr["SectionNo"].ToString());
                lt.SubItems.Add(mdr["Date"].ToString());
                lt.SubItems.Add(mdr["Part"].ToString());
                //将lt数据添加到listView1控件中

                listView2.Items.Add(lt);
            }
            sqlConnection.Close();
        }

        private void yzcl_xz_Click(object sender, EventArgs e)
        {
            SqlConnection sqlConnection = new SqlConnection();                                                                  //声明并实例化SQL连接；
            sqlConnection.ConnectionString =
                ConfigurationManager.ConnectionStrings["Sql"].ConnectionString;                                                 //配置管理器从配置文件读取连接字符串，并将之赋予SQL连接的连接字符串属性；
            sqlConnection.Open();
            SqlCommand cmd = new SqlCommand();                                       //声明并实例化SQL命令；
            cmd.Connection = sqlConnection;
            cmd.CommandText =
            "INSERT INTO Treat(RegNo," +
                        "SectionNo,Kind,Date,InspectPart,Doctor,Number,Sum,Part)"
                        + "values(" + regno + "," + sectionno.Text + ",'" + kind.Text
                        + "','" + date.Text +
                       "','" +part.Text + "','" + doctor.Text + "'," + number.Text + ","
                       + sum.Text +",'"+part.Text+"')";
            cmd.ExecuteNonQuery();
            sqlConnection.Close();
        }

        private void yzcl_sc_Click(object sender, EventArgs e)
        {
            SqlConnection sqlConnection = new SqlConnection();                                                                  //声明并实例化SQL连接；
            sqlConnection.ConnectionString =
                ConfigurationManager.ConnectionStrings["Sql"].ConnectionString;                                                 //配置管理器从配置文件读取连接字符串，并将之赋予SQL连接的连接字符串属性；
            sqlConnection.Open();
            SqlCommand cmd = new SqlCommand();                                       //声明并实例化SQL命令；
            cmd.Connection = sqlConnection;
            cmd.CommandText =
                "delete from Treat where SectionNo=" + sectionno.Text;
             cmd.ExecuteNonQuery();
            sqlConnection.Close();
        }

        private void toolStripButton2_Click(object sender, EventArgs e)
        {

        }
    }
}
