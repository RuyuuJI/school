using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace HSXT
{
    public partial class 首页 : Form
    {
        public string docname;
        public 首页()
        {
           
            InitializeComponent();
           
        }
        public 首页(string docname)
        {

            InitializeComponent();
            this.docname = docname;
            label1.Text = docname;
        }



        private void 首页_Load(object sender, EventArgs e)
        {
           
        }

        private void 病人信息ToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Form sy = new 病人信息(); this.Hide();
            sy.ShowDialog();
        }

        private void 转入ToolStripMenuItem_Click(object sender, EventArgs e)
        {
           
            Form sy = new 转入(docname); this.Hide();
            sy.ShowDialog();
        }

        private void 摆药申请ToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Form sy = new 医嘱用药(); this.Hide();
            sy.ShowDialog();
        }

        private void 医嘱处理ToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Form sy = new 医嘱检查(); this.Hide();
            sy.ShowDialog();
        }

        private void 遗嘱处理ToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Form sy = new 医嘱处理(); this.Hide();
            sy.ShowDialog();
        }

        private void 模板病历管理_Click(object sender, EventArgs e)
        {
            Form sy = new 模板病历管理(); this.Hide();
            sy.ShowDialog();
        }

        private void 录入电子病历_Click(object sender, EventArgs e)
        {
            Form sy = new 录入电子病历(); this.Hide();
            sy.ShowDialog();
        }

        private void 帮助ToolStripMenuItem1_Click(object sender, EventArgs e)
        {
            MessageBox.Show("我也帮不了你");
        }

        private void 关于系统ToolStripMenuItem_Click(object sender, EventArgs e)
        {
            MessageBox.Show("version 1.0.0.0 by xl");
        }

        private void 注销ToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Form sy = new 登录(); this.Hide();
            sy.ShowDialog();
        }

        private void 退出系统ToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }
    }
}
