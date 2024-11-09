require('dotenv').config();
const { MongoClient } = require("mongodb");
const MONGODB_URL = process.env.MONGODB_URL;
const client = new MongoClient(MONGODB_URL);


const connection = async () => {
  try {
    await client.connect();
    console.log("Database connected!");
  } catch (error) {
    console.error(error);
    throw new Error("Connection Error", error);
  }
  finally {
    client.close();
  }
};

connection().catch(console.error);
