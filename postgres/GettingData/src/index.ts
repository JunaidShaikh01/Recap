import { Client } from "pg";
// import dotenv from "dotenv";
// require("dotenv").config();
// const dbConnectionString = process.env.connectionString;
// console.log("dbConnectionString", dbConnectionString);
const dbConnectionString =
  "postgresql://shaikhjunaid020801%40gmail.com:dlar45xQfUzi@ep-muddy-credit-a5c76gyc.us-east-2.aws.neon.tech/postrgres?sslmode=require";

async function getUser(email: string) {
  if (!dbConnectionString) {
    console.log("DB connection string is undefined");
    return;
  } else {
    console.log("Connected succesfully");
  }

  const client = new Client({
    connectionString: dbConnectionString,
  });

  try {
    await client.connect();
    const query = "SELECT * FROM users WHERE email = $1";
    const Values = [email];
    const result = await client.query(query, Values);

    if (result.rows.length > 0) {
      console.log("User found : - ", result.rows[0]);
      return result.rows[0];
    } else {
      console.log("No users found with the given eamil");
      return null;
    }
  } catch (error) {
    console.error(`Error during fetching users:`, error);
  } finally {
    await client.end();
  }
}

getUser("username2@gmail.com").catch(console.error);
