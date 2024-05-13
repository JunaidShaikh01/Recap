//creating the address table
// import { Client, Query } from "pg";

//

// client.connect();

// async function createUserTableAndAddress() {
//   const result = await client.query(
//     `

//         CREATE TABLE addresses (
//             id SERIAL PRIMARY KEY,
//             user_id INTEGER NOT NULL,
//             city VARCHAR(100) NOT NULL,
//             country VARCHAR(100) NOT NULL,
//             street VARCHAR(255) NOT NULL,
//             pincode VARCHAR(20),
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
//             FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
//         );
//         `
//   );

//   console.log(result);
// }

// createUserTableAndAddress();

// Inserting the user details and addresses

import { Client } from "pg";

const dbConnectionString =
  "postgresql://shaikhjunaid020801%40gmail.com:dlar45xQfUzi@ep-muddy-credit-a5c76gyc.us-east-2.aws.neon.tech/postrgres?sslmode=require";

async function insertUsersAndAddress(
  username: string,
  email: string,
  password: string,
  city: string,
  country: string,
  street: string,
  pincode: string
) {
  if (!dbConnectionString) {
    console.log("Connection String is invalid ");
    return;
  } else {
    console.log("Connection Successfull");
  }
  const client = new Client({
    connectionString: dbConnectionString,
  });

  try {
    client.connect();

    //Start transaction
    await client.query("BEGIN");

    //Insert user
    const insertUser = `
    INSERT INTO users (username , email , password ) VALUES ($1 , $2 , $3) RETURNING id
    `;

    const userRes = await client.query(insertUser, [username, email, password]);
    const userId = await userRes.rows[0].id;

    const insertAddress = `
    INSERT INTO addresses ( user_id , city , country , street , pincode ) VALUES ( $1 , $2 , $3 , $4 , $5);
    `;
    await client.query(insertAddress, [userId, city, country, street, pincode]);

    await client.query("COMMIT");
    console.log("User and address inserted successfully");
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Error during transection , rolled back.", error);
  } finally {
    client.end();
  }
}

insertUsersAndAddress(
  "useranem3",
  "username3@gmail.com",
  "Password1234",
  "Mumbai",
  "India",
  "new Street",
  "123 123"
);
