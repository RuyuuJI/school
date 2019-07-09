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
    public partial class 病人信息 : Form
    {
        public 病人信息()
        {
            InitializeComponent();
        }

        private void textBox8_TextChanged(object sender, EventArgs e)
        {

        }

        private void 病人信息_Load(object sender, EventArgs e)
        {

        }

        private void toolStripButton4_Click(object sender, EventArgs e)
        {
            Form sy = new 首页(); this.Hide();
            sy.ShowDialog();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            int no =int.Parse(regno.Text);
            Form sy = new 医嘱检查(no); this.Hide();
            sy.ShowDialog();
        }

        private void button_bc_Click(object sender, EventArgs e)
        {
            int no = int.Parse(regno.Text);
            Form sy = new 医嘱用药(no); this.Hide();
            sy.ShowDialog();
        }

        private void button_tc_Click(object sender, EventArgs e)
        {
            int no = int.Parse(regno.Text);
            Form sy = new 医嘱处理(no); this.Hide();
            sy.ShowDialog();
        }

        private void toolStripButton2_Click(object sender, EventArgs e)//查找
        {

            SqlConnection sqlConnection = new SqlConnection();                                                                  //声明并实例化SQL连接；
            sqlConnection.ConnectionString =
                ConfigurationManager.ConnectionStrings["Sql"].ConnectionString;                                                 //配置管理器从配置文件读取连接字符串，并将之赋予SQL连接的连接字符串属性；
            sqlConnection.Open();
            SqlCommand cmd = new SqlCommand();                                       //声明并实例化SQL命令；
            cmd.Connection = sqlConnection;
           
           
                cmd.CommandText = "select*from Patient where RegNo='" + textBox4.Text + "'";

                SqlDataReader dr = cmd.ExecuteReader();
                dr.Read();
                if (dr["RegNo"] != null)
                {
                docname.Text= (string)dr["DocName"];
                regno.Text = "" + dr["RegNo"];
                    name.Text = (string)dr["Name"];
                    sex.Text = (string)dr["Sex"];
                    age.Text = "" + dr["Age"];
                    date.Text = "" + dr["Date"];
                    selftalk.Text = ":" + dr["SelfTalk"];
                    history.Text = ":" + dr["History"];
                    checkafter.Text = ":" + dr["CheckAfter"];
                    suggestion.Text = ":" + dr["Suggestion"];
                sectionno.Text = ":" + dr["SectionNo"];
            }
                else { MessageBox.Show("没有该病人"); }
           
        }
        private void toolStripButton1_Click(object sender, EventArgs e)
        {
            this.Controls.Clear(); InitializeComponent();
        }

        private void toolStripButton3_Click(object sender, EventArgs e)
        {

        }
    }
}
