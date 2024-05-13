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
const dbConnectionString = "postgresql://shaikhjunaid020801%40gmail.com:dlar45xQfUzi@ep-muddy-credit-a5c76gyc.us-east-2.aws.neon.tech/postrgres?sslmode=require";
function selectionUserAndAddres(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: dbConnectionString,
        });
        try {
            if (!dbConnectionString) {
                console.log("Connection string is not proper");
                return;
            }
            else {
                console.log("Connected successfully");
            }
            yield client.connect();
            const getData = `
    SELECT u.id , u.username , u.email , a.city , a.country , a.street , a.pincode FROM users u JOIN addresses a ON u.id = a.user_id WHERE u.id = $1
    `;
            const result = yield client.query(getData, [userId]);
            if (result.rows.length > 0) {
                console.log("User and address found :-", result.rows[0]);
                return result.rows[0];
            }
            else {
                console.log("No user and address found ");
                return null;
            }
        }
        catch (error) {
            console.error("Error during fetching user and address", error);
            throw error;
        }
        finally {
            yield client.end();
        }
    });
}
selectionUserAndAddres("5");
