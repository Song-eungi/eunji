const mysql = require('mysql');

const db = mysql.createPool({
    host: 'db-blog.c7t0ixkrn99j.us-west-1.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: 'asas4041',
    database: 'exapmle'
});

module.exports = db;

