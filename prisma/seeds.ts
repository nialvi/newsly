import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function main() {
  const user = await db.user.create({
    data: {
      name: "User3",
      email: "user3@gmail.com",
      password: "root",
    },
  });

  // const post = await db.post.create({
  //   data: {
  //     title: "Goodbay",
  //     author: {
  //       connect: {
  //         id: 3,
  //       },
  //     },
  //   },
  // });

  // const comment = await db.comment.create({
  //   data: {
  //     text: "awesome",
  //     author: {
  //       connect: {
  //         id: 2,
  //       },
  //     },
  //     post: {
  //       connect: {
  //         id: 1,
  //       },
  //     },
  //   },
  // });

  console.log(user);
  // console.log(post);
  // console.log(comment);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await db.disconnect();
  });
