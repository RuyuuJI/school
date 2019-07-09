using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace HSXT
{
    class Dbconn
    {
        public static SqlConnection sqlconn()
        {
            string sqlconstr = "Data Source=WWW-HP\\ME;Initial Catalog=VV;Integrated Security=True";
            SqlConnection sqlconn = new SqlConnection(sqlconstr);
            return sqlconn;
        }

        internal void Open()
        {
            throw new NotImplementedException();
        }

        internal SqlCommand CreateCommand()
        {
            throw new NotImplementedException();
        }
    }
}
