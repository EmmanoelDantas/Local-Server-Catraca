const mysql = require('../configs/database');

const access_logs_schemas = mysql.execute("SELECT * FROM access_logs");

