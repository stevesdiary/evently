// require('dotenv').config();
// const { Pool } = require('pg');
// const url = process.env.DB_URL;
// const config = {
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   database: process.env.DB_NAME,
  // ssl: {
  //   require: true,
  //   rejectUnauthorized: false,
  // },
// };

// const db = new Pool(config);

// async function queryDatabase() {
//   const client = await db.connect();
//   try {
//     const res = await client.query("SELECT VERSION()");
//     console.log("Connected to:", res.rows[0].version.split(' ').slice(0, 2).join(' '));
//   } catch (err) {
//     console.error('Query error: ', err);
//   } finally {
//     client.release();
//   }
// }

// queryDatabase();

// process.on('SIGTERM', () => {
//   pool.end(() => {
//     console.log('Pool has ended');
//     process.exit(0);
//   });
// });

// module.exports = { db };
