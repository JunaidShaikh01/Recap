import { Client } from "pg";

const dbConnectionString =
  "postgresql://shaikhjunaid020801%40gmail.com:dlar45xQfUzi@ep-muddy-credit-a5c76gyc.us-east-2.aws.neon.tech/postrgres?sslmode=require";

async function selectionUserAndAddres(userId: string) {
  const client = new Client({
    connectionString: dbConnectionString,
  });
  try {
    if (!dbConnectionString) {
      console.log("Connection string is not proper");
      return;
    } else {
      console.log("Connected successfully");
    }

    await client.connect();

    const getData = `
    SELECT u.id , u.username , u.email , a.city , a.country , a.street , a.pincode FROM users u JOIN addresses a ON u.id = a.user_id WHERE u.id = $1
    `;

    const result = await client.query(getData, [userId]);

    if (result.rows.length > 0) {
      console.log("User and address found :-", result.rows[0]);
      return result.rows[0];
    } else {
      console.log("No user and address found ");
      return null;
    }
  } catch (error) {
    console.error("Error during fetching user and address", error);
    throw error;
  } finally {
    await client.end();
  }
}

selectionUserAndAddres("5");
