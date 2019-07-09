namespace HSXT
{
    partial class 转入
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
            this.groupBox2 = new System.Windows.Forms.GroupBox();
            this.button1 = new System.Windows.Forms.Button();
            this.zr_tc = new System.Windows.Forms.Button();
            this.zr_bc = new System.Windows.Forms.Button();
            this.zr_qp = new System.Windows.Forms.Button();
            this.zr_xxts = new System.Windows.Forms.GroupBox();
            this.textBox1 = new System.Windows.Forms.TextBox();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.listView1 = new System.Windows.Forms.ListView();
            this.columnHeader5 = ((System.Windows.Forms.ColumnHeader)(new System.Windows.Forms.ColumnHeader()));
            this.columnHeader1 = ((System.Windows.Forms.ColumnHeader)(new System.Windows.Forms.ColumnHeader()));
            this.columnHeader2 = ((System.Windows.Forms.ColumnHeader)(new System.Windows.Forms.ColumnHeader()));
            this.listView2 = new System.Windows.Forms.ListView();
            this.columnHeader3 = ((System.Windows.Forms.ColumnHeader)(new System.Windows.Forms.ColumnHeader()));
            this.columnHeader4 = ((System.Windows.Forms.ColumnHeader)(new System.Windows.Forms.ColumnHeader()));
            this.label3 = new System.Windows.Forms.Label();
            this.groupBox2.SuspendLayout();
            this.zr_xxts.SuspendLayout();
            this.SuspendLayout();
            // 
            // groupBox2
            // 
            this.groupBox2.Controls.Add(this.button1);
            this.groupBox2.Controls.Add(this.zr_tc);
            this.groupBox2.Controls.Add(this.zr_bc);
            this.groupBox2.Controls.Add(this.zr_qp);
            this.groupBox2.ForeColor = System.Drawing.Color.Red;
            this.groupBox2.Location = new System.Drawing.Point(287, 253);
            this.groupBox2.Name = "groupBox2";
            this.groupBox2.Size = new System.Drawing.Size(406, 54);
            this.groupBox2.TabIndex = 8;
            this.groupBox2.TabStop = false;
            this.groupBox2.Text = "功能选择";
            // 
            // button1
            // 
            this.button1.ForeColor = System.Drawing.Color.Black;
            this.button1.Location = new System.Drawing.Point(127, 20);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(75, 23);
            this.button1.TabIndex = 3;
            this.button1.Text = "详细资料";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // zr_tc
            // 
            this.zr_tc.ForeColor = System.Drawing.Color.Black;
            this.zr_tc.Location = new System.Drawing.Point(325, 20);
            this.zr_tc.Name = "zr_tc";
            this.zr_tc.Size = new System.Drawing.Size(75, 23);
            this.zr_tc.TabIndex = 2;
            this.zr_tc.Text = "返回";
            this.zr_tc.UseVisualStyleBackColor = true;
            this.zr_tc.Click += new System.EventHandler(this.zr_tc_Click);
            // 
            // zr_bc
            // 
            this.zr_bc.ForeColor = System.Drawing.Color.Black;
            this.zr_bc.Location = new System.Drawing.Point(221, 20);
            this.zr_bc.Name = "zr_bc";
            this.zr_bc.Size = new System.Drawing.Size(75, 23);
            this.zr_bc.TabIndex = 1;
            this.zr_bc.Text = "转入";
            this.zr_bc.UseVisualStyleBackColor = true;
            this.zr_bc.Click += new System.EventHandler(this.zr_bc_Click);
            // 
            // zr_qp
            // 
            this.zr_qp.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(0)))), ((int)(((byte)(0)))), ((int)(((byte)(64)))));
            this.zr_qp.Location = new System.Drawing.Point(27, 20);
            this.zr_qp.Name = "zr_qp";
            this.zr_qp.Size = new System.Drawing.Size(75, 23);
            this.zr_qp.TabIndex = 0;
            this.zr_qp.Text = "刷新";
            this.zr_qp.UseVisualStyleBackColor = true;
            this.zr_qp.Click += new System.EventHandler(this.zr_qp_Click);
            // 
            // zr_xxts
            // 
            this.zr_xxts.Controls.Add(this.textBox1);
            this.zr_xxts.ForeColor = System.Drawing.Color.Red;
            this.zr_xxts.Location = new System.Drawing.Point(11, 252);
            this.zr_xxts.Name = "zr_xxts";
            this.zr_xxts.Size = new System.Drawing.Size(221, 55);
            this.zr_xxts.TabIndex = 7;
            this.zr_xxts.TabStop = false;
            this.zr_xxts.Text = "选挂号号添加至我的患者";
            // 
            // textBox1
            // 
            this.textBox1.Location = new System.Drawing.Point(34, 23);
            this.textBox1.Name = "textBox1";
            this.textBox1.Size = new System.Drawing.Size(134, 21);
            this.textBox1.TabIndex = 0;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(388, 9);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(29, 12);
            this.label1.TabIndex = 10;
            this.label1.Text = "医生";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(459, 9);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(41, 12);
            this.label2.TabIndex = 11;
            this.label2.Text = "的患者";
            // 
            // listView1
            // 
            this.listView1.Columns.AddRange(new System.Windows.Forms.ColumnHeader[] {
            this.columnHeader5,
            this.columnHeader1,
            this.columnHeader2});
            this.listView1.Location = new System.Drawing.Point(45, 50);
            this.listView1.Name = "listView1";
            this.listView1.Size = new System.Drawing.Size(187, 174);
            this.listView1.TabIndex = 12;
            this.listView1.UseCompatibleStateImageBehavior = false;
            this.listView1.View = System.Windows.Forms.View.Details;
            // 
            // columnHeader5
            // 
            this.columnHeader5.Text = "挂号号";
            // 
            // columnHeader1
            // 
            this.columnHeader1.Text = "序号";
            // 
            // columnHeader2
            // 
            this.columnHeader2.Text = "病人姓名";
            // 
            // listView2
            // 
            this.listView2.Columns.AddRange(new System.Windows.Forms.ColumnHeader[] {
            this.columnHeader3,
            this.columnHeader4});
            this.listView2.Location = new System.Drawing.Point(390, 50);
            this.listView2.Name = "listView2";
            this.listView2.Size = new System.Drawing.Size(143, 174);
            this.listView2.TabIndex = 13;
            this.listView2.UseCompatibleStateImageBehavior = false;
            this.listView2.View = System.Windows.Forms.View.Details;
            // 
            // columnHeader3
            // 
            this.columnHeader3.Text = "挂号号";
            // 
            // columnHeader4
            // 
            this.columnHeader4.Text = "病人姓名";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(43, 21);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(53, 12);
            this.label3.TabIndex = 14;
            this.label3.Text = "候诊病人";
            // 
            // 转入
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(705, 318);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.listView2);
            this.Controls.Add(this.listView1);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.groupBox2);
            this.Controls.Add(this.zr_xxts);
            this.Name = "转入";
            this.Text = "转入";
            this.Load += new System.EventHandler(this.转入_Load);
            this.groupBox2.ResumeLayout(false);
            this.zr_xxts.ResumeLayout(false);
            this.zr_xxts.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.GroupBox groupBox2;
        private System.Windows.Forms.Button zr_tc;
        private System.Windows.Forms.Button zr_bc;
        private System.Windows.Forms.Button zr_qp;
        private System.Windows.Forms.GroupBox zr_xxts;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.ListView listView1;
        private System.Windows.Forms.ColumnHeader columnHeader1;
        private System.Windows.Forms.ColumnHeader columnHeader2;
        private System.Windows.Forms.ListView listView2;
        private System.Windows.Forms.ColumnHeader columnHeader3;
        private System.Windows.Forms.ColumnHeader columnHeader4;
        private System.Windows.Forms.TextBox textBox1;
        private System.Windows.Forms.ColumnHeader columnHeader5;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Label label3;
    }
}

