# Migration `20200703212438-init`

This migration has been generated by Nikolaev Viktor <maclauddd@gmail.com> at 7/3/2020, 9:24:38 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."User" (
"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,"email" text  NOT NULL ,"id" SERIAL,"name" text   ,"password" text  NOT NULL ,"updatedAt" timestamp(3)  NOT NULL ,
    PRIMARY KEY ("id"))

CREATE TABLE "public"."Post" (
"authorId" integer  NOT NULL ,"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,"id" SERIAL,"text" text   ,"title" text  NOT NULL ,"updatedAt" timestamp(3)  NOT NULL ,
    PRIMARY KEY ("id"))

CREATE TABLE "public"."Comment" (
"authorId" integer  NOT NULL ,"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,"id" SERIAL,"postId" integer  NOT NULL ,"replyToId" integer   ,"text" text  NOT NULL ,"updatedAt" timestamp(3)  NOT NULL ,
    PRIMARY KEY ("id"))

CREATE UNIQUE INDEX "User.email" ON "public"."User"("email")

ALTER TABLE "public"."Post" ADD FOREIGN KEY ("authorId")REFERENCES "public"."User"("id") ON DELETE CASCADE  ON UPDATE CASCADE

ALTER TABLE "public"."Comment" ADD FOREIGN KEY ("authorId")REFERENCES "public"."User"("id") ON DELETE CASCADE  ON UPDATE CASCADE

ALTER TABLE "public"."Comment" ADD FOREIGN KEY ("postId")REFERENCES "public"."Post"("id") ON DELETE CASCADE  ON UPDATE CASCADE

ALTER TABLE "public"."Comment" ADD FOREIGN KEY ("replyToId")REFERENCES "public"."Comment"("id") ON DELETE SET NULL  ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200703212438-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,47 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model User {
+  id        Int       @default(autoincrement()) @id
+  createdAt DateTime  @default(now())
+  updatedAt DateTime  @updatedAt
+  name      String?
+  email     String    @unique
+  password  String
+  Post      Post[]
+  Comment   Comment[]
+}
+
+model Post {
+  id        Int       @default(autoincrement()) @id
+  createdAt DateTime  @default(now())
+  updatedAt DateTime  @updatedAt
+  title     String
+  text      String?
+  authorId  Int
+  author    User      @relation(fields: [authorId], references: [id])
+  Comment   Comment[]
+}
+
+model Comment {
+  id        Int       @default(autoincrement()) @id
+  createdAt DateTime  @default(now())
+  updatedAt DateTime  @updatedAt
+  text      String
+  authorId  Int
+  postId    Int
+  replyToId Int?
+  author    User      @relation(fields: [authorId], references: [id])
+  post      Post      @relation(fields: [postId], references: [id])
+  replyTo   Comment?  @relation("CommentToComment", fields: [replyToId], references: [id])
+  replies   Comment[] @relation("CommentToComment")
+}
```


