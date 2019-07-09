namespace HSXT
{
    partial class 首页
    {
        /// <summary>
        /// 必需的设计器变量。
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// 清理所有正在使用的资源。
        /// </summary>
        /// <param name="disposing">如果应释放托管资源，为 true；否则为 false。</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows 窗体设计器生成的代码

        /// <summary>
        /// 设计器支持所需的方法 - 不要
        /// 使用代码编辑器修改此方法的内容。
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.contextMenuStrip1 = new System.Windows.Forms.ContextMenuStrip(this.components);
            this.menuStrip1 = new System.Windows.Forms.MenuStrip();
            this.日常业务ToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.转入ToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.病人信息ToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.医嘱信息ToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.医嘱用药 = new System.Windows.Forms.ToolStripMenuItem();
            this.医嘱检查 = new System.Windows.Forms.ToolStripMenuItem();
            this.医嘱处理 = new System.Windows.Forms.ToolStripMenuItem();
            this.查询统计ToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.模板病历管理 = new System.Windows.Forms.ToolStripMenuItem();
            this.录入电子病历 = new System.Windows.Forms.ToolStripMenuItem();
            this.系统ToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.密码修改ToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.打印机ToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.帮助ToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.帮助ToolStripMenuItem1 = new System.Windows.Forms.ToolStripMenuItem();
            this.关于系统ToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.退出ToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.注销ToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.退出系统ToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.label7 = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            this.menuStrip1.SuspendLayout();
            this.SuspendLayout();
            // 
            // contextMenuStrip1
            // 
            this.contextMenuStrip1.Name = "contextMenuStrip1";
            this.contextMenuStrip1.Size = new System.Drawing.Size(61, 4);
            // 
            // menuStrip1
            // 
            this.menuStrip1.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.日常业务ToolStripMenuItem,
            this.医嘱信息ToolStripMenuItem,
            this.查询统计ToolStripMenuItem,
            this.系统ToolStripMenuItem,
            this.帮助ToolStripMenuItem,
            this.退出ToolStripMenuItem});
            this.menuStrip1.Location = new System.Drawing.Point(0, 0);
            this.menuStrip1.Name = "menuStrip1";
            this.menuStrip1.Size = new System.Drawing.Size(644, 25);
            this.menuStrip1.TabIndex = 1;
            this.menuStrip1.Text = "menuStrip1";
            // 
            // 日常业务ToolStripMenuItem
            // 
            this.日常业务ToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.转入ToolStripMenuItem,
            this.病人信息ToolStripMenuItem});
            this.日常业务ToolStripMenuItem.Name = "日常业务ToolStripMenuItem";
            this.日常业务ToolStripMenuItem.Size = new System.Drawing.Size(68, 21);
            this.日常业务ToolStripMenuItem.Text = "接诊业务";
            // 
            // 转入ToolStripMenuItem
            // 
            this.转入ToolStripMenuItem.Name = "转入ToolStripMenuItem";
            this.转入ToolStripMenuItem.Size = new System.Drawing.Size(124, 22);
            this.转入ToolStripMenuItem.Text = "接诊转入";
            this.转入ToolStripMenuItem.Click += new System.EventHandler(this.转入ToolStripMenuItem_Click);
            // 
            // 病人信息ToolStripMenuItem
            // 
            this.病人信息ToolStripMenuItem.Name = "病人信息ToolStripMenuItem";
            this.病人信息ToolStripMenuItem.Size = new System.Drawing.Size(124, 22);
            this.病人信息ToolStripMenuItem.Text = "病人信息";
            this.病人信息ToolStripMenuItem.Click += new System.EventHandler(this.病人信息ToolStripMenuItem_Click);
            // 
            // 医嘱信息ToolStripMenuItem
            // 
            this.医嘱信息ToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.医嘱用药,
            this.医嘱检查,
            this.医嘱处理});
            this.医嘱信息ToolStripMenuItem.Name = "医嘱信息ToolStripMenuItem";
            this.医嘱信息ToolStripMenuItem.Size = new System.Drawing.Size(68, 21);
            this.医嘱信息ToolStripMenuItem.Text = "医嘱信息";
            // 
            // 医嘱用药
            // 
            this.医嘱用药.Name = "医嘱用药";
            this.医嘱用药.Size = new System.Drawing.Size(124, 22);
            this.医嘱用药.Text = "医嘱用药";
            this.医嘱用药.Click += new System.EventHandler(this.摆药申请ToolStripMenuItem_Click);
            // 
            // 医嘱检查
            // 
            this.医嘱检查.Name = "医嘱检查";
            this.医嘱检查.Size = new System.Drawing.Size(124, 22);
            this.医嘱检查.Text = "医嘱检查";
            this.医嘱检查.Click += new System.EventHandler(this.医嘱处理ToolStripMenuItem_Click);
            // 
            // 医嘱处理
            // 
            this.医嘱处理.Name = "医嘱处理";
            this.医嘱处理.Size = new System.Drawing.Size(124, 22);
            this.医嘱处理.Text = "医嘱处理";
            this.医嘱处理.Click += new System.EventHandler(this.遗嘱处理ToolStripMenuItem_Click);
            // 
            // 查询统计ToolStripMenuItem
            // 
            this.查询统计ToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.模板病历管理,
            this.录入电子病历});
            this.查询统计ToolStripMenuItem.Name = "查询统计ToolStripMenuItem";
            this.查询统计ToolStripMenuItem.Size = new System.Drawing.Size(68, 21);
            this.查询统计ToolStripMenuItem.Text = "门诊病历";
            // 
            // 模板病历管理
            // 
            this.模板病历管理.Name = "模板病历管理";
            this.模板病历管理.Size = new System.Drawing.Size(148, 22);
            this.模板病历管理.Text = "模板病历管理";
            this.模板病历管理.Click += new System.EventHandler(this.模板病历管理_Click);
            // 
            // 录入电子病历
            // 
            this.录入电子病历.Name = "录入电子病历";
            this.录入电子病历.Size = new System.Drawing.Size(148, 22);
            this.录入电子病历.Text = "录入电子病历";
            this.录入电子病历.Click += new System.EventHandler(this.录入电子病历_Click);
            // 
            // 系统ToolStripMenuItem
            // 
            this.系统ToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.密码修改ToolStripMenuItem,
            this.打印机ToolStripMenuItem});
            this.系统ToolStripMenuItem.Name = "系统ToolStripMenuItem";
            this.系统ToolStripMenuItem.Size = new System.Drawing.Size(44, 21);
            this.系统ToolStripMenuItem.Text = "系统";
            // 
            // 密码修改ToolStripMenuItem
            // 
            this.密码修改ToolStripMenuItem.Name = "密码修改ToolStripMenuItem";
            this.密码修改ToolStripMenuItem.Size = new System.Drawing.Size(124, 22);
            this.密码修改ToolStripMenuItem.Text = "密码修改";
            // 
            // 打印机ToolStripMenuItem
            // 
            this.打印机ToolStripMenuItem.Name = "打印机ToolStripMenuItem";
            this.打印机ToolStripMenuItem.Size = new System.Drawing.Size(124, 22);
            this.打印机ToolStripMenuItem.Text = "打印机";
            // 
            // 帮助ToolStripMenuItem
            // 
            this.帮助ToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.帮助ToolStripMenuItem1,
            this.关于系统ToolStripMenuItem});
            this.帮助ToolStripMenuItem.Name = "帮助ToolStripMenuItem";
            this.帮助ToolStripMenuItem.Size = new System.Drawing.Size(44, 21);
            this.帮助ToolStripMenuItem.Text = "帮助";
            // 
            // 帮助ToolStripMenuItem1
            // 
            this.帮助ToolStripMenuItem1.Name = "帮助ToolStripMenuItem1";
            this.帮助ToolStripMenuItem1.Size = new System.Drawing.Size(124, 22);
            this.帮助ToolStripMenuItem1.Text = "帮助";
            this.帮助ToolStripMenuItem1.Click += new System.EventHandler(this.帮助ToolStripMenuItem1_Click);
            // 
            // 关于系统ToolStripMenuItem
            // 
            this.关于系统ToolStripMenuItem.Name = "关于系统ToolStripMenuItem";
            this.关于系统ToolStripMenuItem.Size = new System.Drawing.Size(124, 22);
            this.关于系统ToolStripMenuItem.Text = "关于系统";
            this.关于系统ToolStripMenuItem.Click += new System.EventHandler(this.关于系统ToolStripMenuItem_Click);
            // 
            // 退出ToolStripMenuItem
            // 
            this.退出ToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.注销ToolStripMenuItem,
            this.退出系统ToolStripMenuItem});
            this.退出ToolStripMenuItem.Name = "退出ToolStripMenuItem";
            this.退出ToolStripMenuItem.Size = new System.Drawing.Size(44, 21);
            this.退出ToolStripMenuItem.Text = "退出";
            // 
            // 注销ToolStripMenuItem
            // 
            this.注销ToolStripMenuItem.Name = "注销ToolStripMenuItem";
            this.注销ToolStripMenuItem.Size = new System.Drawing.Size(124, 22);
            this.注销ToolStripMenuItem.Text = "注销";
            this.注销ToolStripMenuItem.Click += new System.EventHandler(this.注销ToolStripMenuItem_Click);
            // 
            // 退出系统ToolStripMenuItem
            // 
            this.退出系统ToolStripMenuItem.Name = "退出系统ToolStripMenuItem";
            this.退出系统ToolStripMenuItem.Size = new System.Drawing.Size(124, 22);
            this.退出系统ToolStripMenuItem.Text = "退出系统";
            this.退出系统ToolStripMenuItem.Click += new System.EventHandler(this.退出系统ToolStripMenuItem_Click);
            // 
            // label7
            // 
            this.label7.AutoSize = true;
            this.label7.ForeColor = System.Drawing.Color.Black;
            this.label7.Location = new System.Drawing.Point(408, 402);
            this.label7.Name = "label7";
            this.label7.Size = new System.Drawing.Size(59, 12);
            this.label7.TabIndex = 20;
            this.label7.Text = "欢迎医生:";
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.ForeColor = System.Drawing.Color.Black;
            this.label1.Location = new System.Drawing.Point(485, 402);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(59, 12);
            this.label1.TabIndex = 21;
            this.label1.Text = "欢迎医生:";
            // 
            // 首页
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(644, 467);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.label7);
            this.Controls.Add(this.menuStrip1);
            this.MainMenuStrip = this.menuStrip1;
            this.Name = "首页";
            this.Text = "首页";
            this.Load += new System.EventHandler(this.首页_Load);
            this.menuStrip1.ResumeLayout(false);
            this.menuStrip1.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.ContextMenuStrip contextMenuStrip1;
        private System.Windows.Forms.MenuStrip menuStrip1;
        private System.Windows.Forms.ToolStripMenuItem 日常业务ToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem 转入ToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem 病人信息ToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem 医嘱信息ToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem 医嘱用药;
        private System.Windows.Forms.ToolStripMenuItem 医嘱检查;
        private System.Windows.Forms.ToolStripMenuItem 查询统计ToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem 系统ToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem 密码修改ToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem 打印机ToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem 帮助ToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem 帮助ToolStripMenuItem1;
        private System.Windows.Forms.ToolStripMenuItem 关于系统ToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem 退出ToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem 注销ToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem 退出系统ToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem 模板病历管理;
        private System.Windows.Forms.ToolStripMenuItem 录入电子病历;
        private System.Windows.Forms.ToolStripMenuItem 医嘱处理;
        private System.Windows.Forms.Label label7;
        private System.Windows.Forms.Label label1;
    }
}

