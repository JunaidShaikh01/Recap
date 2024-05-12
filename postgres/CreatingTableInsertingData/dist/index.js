"use strict";
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
const pg_1 = require("pg");
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
function insertData() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://shaikhjunaid020801%40gmail.com:dlar45xQfUzi@ep-muddy-credit-a5c76gyc.us-east-2.aws.neon.tech/postrgres?sslmode=require",
        });
        yield client.connect();
        try {
            //Insafe way of Inserting the data into database
            // const insertQuery =
            //   "INSERT INTO users (username , email , password ) VALUES ('username123' , 'username@gmail.com' , 'password123')";
            // const res = await client.query(insertQuery);
            // Safe way of Insersting data into database
            const username = "username2";
            const email = "username2@gmail.com";
            const password = "password@123";
            const insertQuery = "INSERT INTO users (username , email, password) VALUES ($1 , $2 , $3)";
            const Values = [username, email, password];
            const res = yield client.query(insertQuery, Values);
            console.log("Insertion Successfull :- ", res);
        }
        catch (error) {
            console.error("Error during the insertion", error);
        }
        finally {
            yield client.end();
        }
    });
}
insertData();
