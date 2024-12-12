const { Client } = require('@neondatabase/serverless');
const DATABASE_URL = process.env.DATABASE_URL || "";
const client = new Client(DATABASE_URL);


async function connectNeonDatabase() {
  
  try {
    console.log("Connecting to the database...");
    await client.connect();
    console.log("Connected to the database successfully.");

    const data = await client.query(
      `SELECT count(*) as num_tables FROM information_schema.tables WHERE table_schema='public'`
    );
    // console.log("Tables", data.rows[0].num_tables);
  } catch (error) {
    console.error("Error connecting to the database:", error);
    return new Response("Database connection error", { status: 500 });
  } 
  // finally {
  //   await client.end();
  //   console.log("Database connection closed.");
  // }
};
connectNeonDatabase();

module.exports  = { connectNeonDatabase };
