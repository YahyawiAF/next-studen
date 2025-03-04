// import { createClient } from '@supabase/supabase-js';
// var util = require("util");
// const supabaseUrl = "https://ptfjnohzgxoikiluhgjj.supabase.co";
// const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0Zmpub2h6Z3hvaWtpbHVoZ2pqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA3MzcxNzEsImV4cCI6MjA1NjMxMzE3MX0.iuRucPS13x3_MmdIB4pX6YFj_7YItc6pzDMyBAykSbQ"

// const pool = createClient(supabaseUrl, supabaseKey);

// pool.getConnection((err: any, conn: any) => {
//     if (err) {
//         if (err.code === "PROTOCOL_CONNECTION_LOST") {
//             console.error("Database connection was closed.");
//         }
//         if (err.code === "ER_CON_COUNT_ERROR") {
//             console.error("Database has too many connections.");
//         }
//         if (err.code === "ECONNREFUSED") {
//             console.error("Database connection was refused.");
//         }
//     }
//     if (conn) conn.release();
//     return;
// });

// pool.query = util.promisify(pool.query);
// module.exports = pool;
