namespace HSXT
{
    partial class 登录
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(登录));
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.button_qx = new System.Windows.Forms.Button();
            this.button_qd = new System.Windows.Forms.Button();
            this.hsxtdl_yhmm = new System.Windows.Forms.TextBox();
            this.hsxtdl_yhdm = new System.Windows.Forms.TextBox();
            this.label3 = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            this.SuspendLayout();
            // 
            // pictureBox1
            // 
            this.pictureBox1.Image = ((System.Drawing.Image)(resources.GetObject("pictureBox1.Image")));
            this.pictureBox1.Location = new System.Drawing.Point(13, 13);
            this.pictureBox1.Name = "pictureBox1";
            this.pictureBox1.Size = new System.Drawing.Size(488, 79);
            this.pictureBox1.TabIndex = 0;
            this.pictureBox1.TabStop = false;
            // 
            // button_qx
            // 
            this.button_qx.Location = new System.Drawing.Point(410, 248);
            this.button_qx.Name = "button_qx";
            this.button_qx.Size = new System.Drawing.Size(75, 23);
            this.button_qx.TabIndex = 16;
            this.button_qx.Text = "取消";
            this.button_qx.UseVisualStyleBackColor = true;
            // 
            // button_qd
            // 
            this.button_qd.Location = new System.Drawing.Point(328, 249);
            this.button_qd.Name = "button_qd";
            this.button_qd.Size = new System.Drawing.Size(75, 23);
            this.button_qd.TabIndex = 15;
            this.button_qd.Text = "确定";
            this.button_qd.UseVisualStyleBackColor = true;
            this.button_qd.Click += new System.EventHandler(this.button_qd_Click);
            // 
            // hsxtdl_yhmm
            // 
            this.hsxtdl_yhmm.Location = new System.Drawing.Point(207, 182);
            this.hsxtdl_yhmm.Name = "hsxtdl_yhmm";
            this.hsxtdl_yhmm.PasswordChar = '*';
            this.hsxtdl_yhmm.Size = new System.Drawing.Size(218, 21);
            this.hsxtdl_yhmm.TabIndex = 14;
            // 
            // hsxtdl_yhdm
            // 
            this.hsxtdl_yhdm.Location = new System.Drawing.Point(207, 111);
            this.hsxtdl_yhdm.Name = "hsxtdl_yhdm";
            this.hsxtdl_yhdm.Size = new System.Drawing.Size(218, 21);
            this.hsxtdl_yhdm.TabIndex = 12;
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(113, 185);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(53, 12);
            this.label3.TabIndex = 11;
            this.label3.Text = "医生密码";
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(113, 114);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(53, 12);
            this.label1.TabIndex = 9;
            this.label1.Text = "医生账号";
            // 
            // 登录
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(517, 305);
            this.Controls.Add(this.button_qx);
            this.Controls.Add(this.button_qd);
            this.Controls.Add(this.hsxtdl_yhmm);
            this.Controls.Add(this.hsxtdl_yhdm);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.pictureBox1);
            this.Name = "登录";
            this.Text = "EMR系统登录";
            this.Load += new System.EventHandler(this.登录_Load);
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.PictureBox pictureBox1;
        private System.Windows.Forms.Button button_qx;
        private System.Windows.Forms.Button button_qd;
        private System.Windows.Forms.TextBox hsxtdl_yhmm;
        private System.Windows.Forms.TextBox hsxtdl_yhdm;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label1;
    }
}

