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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
//InSering data
// async function insertUser(
//   username: string,
//   password: string,
//   firstName: string,
//   lastname: string
// ) {
//   const response = await prisma.user.create({
//     data: {
//       username,
//       password,
//       firstName,
//       lastname,
//     },
//   });
//   console.log("Response ", response);
// }
// insertUser("Junaid@gmail.com", "Password", "Junaid", "Shaikh");
///Updating Data
// interface UpdateParams {
//   firstName: string;
//   lastname: string;
// }
// async function updateUser(id: number, { firstName, lastname }: UpdateParams) {
//   const res = await prisma.user.update({
//     where: { id },
//     data: {
//       firstName,
//       lastname,
//     },
//   });
//   console.log(res);
// }
// updateUser(1, { firstName: "Mohd Juanid", lastname: "Shaikh" });
///creating a new todo
// async function CreateTodo(userId: number, title: string, description: string) {
//   const todo = await prisma.todo.create({
//     data: {
//       title,
//       description,
//       userId,
//     },
//   });
//   console.log("Todo", todo);
// }
// CreateTodo(
//   1,
//   "Play Cricket",
//   "Tomorrow we have to go for cricket"
// );
/// Getting Todo
// async function getTodo(userid: number) {
//   const todos = await prisma.todo.findMany({
//     where: {
//       userId: userid,
//     },
//   });
//   console.log("todos", todos);
// }
///Updating Todo
function updateTodo(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.todo.update({
            where: { id },
            data: {
                done: true,
            },
        });
        console.log("updated Todo", response);
    });
}
updateTodo(1);
// getTodo(1);
///Getting Todos and user dateails
// async function getTodosAndUserDetails(userId: number) {
//   const todos = await prisma.todo.findMany({
//     where: {
//       userId: userId,
//     },
//     select: {
//       user: true,
//       title: true,
//       description: true,
//       done: true,
//     },
//   });
//   console.log("Todos", todos);
// }
// getTodosAndUserDetails(1);
