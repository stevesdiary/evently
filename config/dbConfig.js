require('dotenv').config();
// const { MongoClient } = require("mongodb");
// const MONGODB_URL = process.env.MONGODB_URL;
// const client = new MongoClient(MONGODB_URL);


// const connection = async () => {
//   try {
//     await client.connect();
//     console.log("Database connected!");
//   } catch (error) {
//     console.error(error);
//     throw new Error("Connection Error", error);
//   }
//   finally {
//     client.close();
//   }
// };

// connection().catch(console.error);

const { Pool } = require('pg');
const url = require('url');

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: true,
    ca: process.env.CERTIFICATE,
  },
};

const db = new Pool(config);

async function queryDatabase() {
  const client = await db.connect();
  try {
    const res = await client.query("SELECT VERSION()");
    console.log("Connected to:", res.rows[0].version);
  } catch (err) {
    console.error('Query error: ', err);
  } finally {
    client.release();
  }
}

queryDatabase();

process.on('SIGTERM', () => {
  pool.end(() => {
    console.log('Pool has ended');
    process.exit(0);
  });
});

module.exports = { db };
