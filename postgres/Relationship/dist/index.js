"use strict";
//creating the address table
// import { Client, Query } from "pg";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const pg_1 = require("pg");
const dbConnectionString = "postgresql://shaikhjunaid020801%40gmail.com:dlar45xQfUzi@ep-muddy-credit-a5c76gyc.us-east-2.aws.neon.tech/postrgres?sslmode=require";
function insertUsersAndAddress(username, email, password, city, country, street, pincode) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!dbConnectionString) {
            console.log("Connection String is invalid ");
            return;
        }
        else {
            console.log("Connection Successfull");
        }
        const client = new pg_1.Client({
            connectionString: dbConnectionString,
        });
        try {
            client.connect();
            //Start transaction
            yield client.query("BEGIN");
            //Insert user
            const insertUser = `
    INSERT INTO users (username , email , password ) VALUES ($1 , $2 , $3) RETURNING id
    `;
            const userRes = yield client.query(insertUser, [username, email, password]);
            const userId = yield userRes.rows[0].id;
            const insertAddress = `
    INSERT INTO addresses ( user_id , city , country , street , pincode ) VALUES ( $1 , $2 , $3 , $4 , $5);
    `;
            yield client.query(insertAddress, [userId, city, country, street, pincode]);
            yield client.query("COMMIT");
            console.log("User and address inserted successfully");
        }
        catch (error) {
            yield client.query("ROLLBACK");
            console.error("Error during transection , rolled back.", error);
        }
        finally {
            client.end();
        }
    });
}
insertUsersAndAddress("useranem3", "username3@gmail.com", "Password1234", "Mumbai", "India", "new Street", "123 123");
