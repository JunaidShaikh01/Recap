import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();



async function insertUser(
  username: string,
  password: string,
  firstname: string,
  lastname: string
) {
  const res = await prisma.user.create({
    data: {
      email: username,
      password,
      firstname,
      lastname,
    },
    select: {
      id: true,
      email: true,
      password: true,
      firstname: true,
      lastname: true,
    },
  });

  console.log("Response", res);
}
insertUser("Junaid@gmail.com", "Password", "Junaid", "Shaikh");
