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
// import dotenv from "dotenv";
// require("dotenv").config();
// const dbConnectionString = process.env.connectionString;
// console.log("dbConnectionString", dbConnectionString);
const dbConnectionString = "postgresql://shaikhjunaid020801%40gmail.com:dlar45xQfUzi@ep-muddy-credit-a5c76gyc.us-east-2.aws.neon.tech/postrgres?sslmode=require";
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!dbConnectionString) {
            console.log("DB connection string is undefined");
            return;
        }
        else {
            console.log("Connected succesfully");
        }
        const client = new pg_1.Client({
            connectionString: dbConnectionString,
        });
        try {
            yield client.connect();
            const query = "SELECT * FROM users WHERE email = $1";
            const Values = [email];
            const result = yield client.query(query, Values);
            if (result.rows.length > 0) {
                console.log("User found : - ", result.rows[0]);
                return result.rows[0];
            }
            else {
                console.log("No users found with the given eamil");
                return null;
            }
        }
        catch (error) {
            console.error(`Error during fetching users:`, error);
        }
        finally {
            yield client.end();
        }
    });
}
getUser("username2@gmail.com").catch(console.error);
