import { Client } from "pg";

// FRO CRAETING THE USER TABLE
// const client = new Client({
//   connectionString:
//     "postgresql://shaikhjunaid020801%40gmail.com:dlar45xQfUzi@ep-muddy-credit-a5c76gyc.us-east-2.aws.neon.tech/postrgres?sslmode=require",
// });

// client.connect();

// async function createUserTable() {
//   const result = await client.query(`
//   CREATE TABLE users (
//     id SERIAL PRIMARY KEY,
//     username VARCHAR(50) UNIQUE NOT NULL,
//     email VARCHAR(255) UNIQUE NOT NULL,
//     password VARCHAR(255) NOT NULL,
//     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
// );
// `);
//   console.log(result);
// }

// createUserTable();

//FOR INSERTING THE USER INTO TABLE

async function insertData() {
  const client = new Client({
    connectionString:
      "postgresql://shaikhjunaid020801%40gmail.com:dlar45xQfUzi@ep-muddy-credit-a5c76gyc.us-east-2.aws.neon.tech/postrgres?sslmode=require",
  });
  await client.connect();
  try {
    //Insafe way of Inserting the data into database
    // const insertQuery =
    //   "INSERT INTO users (username , email , password ) VALUES ('username123' , 'username@gmail.com' , 'password123')";
    // const res = await client.query(insertQuery);

    // Safe way of Insersting data into database
    const username = "username2";
    const email = "username2@gmail.com";
    const password = "password@123";
    const insertQuery =
      "INSERT INTO users (username , email, password) VALUES ($1 , $2 , $3)";
    const Values = [username, email, password];
    const res = await client.query(insertQuery, Values);
    console.log("Insertion Successfull :- ", res);
  } catch (error) {
    console.error("Error during the insertion", error);
  } finally {
    await client.end();
  }
}
insertData();
