import { makeSchema } from "@nexus/schema";
import { nexusSchemaPrisma } from "nexus-plugin-prisma/schema";
import * as path from "path";
import * as Post from "./Post";
import * as Query from "./Query";
import * as Comment from "./Comment";
import * as User from "./User";

export default makeSchema({
  types: [Query, Post, User, Comment],
  plugins: [nexusSchemaPrisma()],
  outputs: {
    typegen: path.join(
      __dirname,
      "../../../node_modules/@types/nexus-typegen/index.d.ts"
    ),
  },
  typegenAutoConfig: {
    contextType: "Context.Context",
    sources: [
      {
        source: "@prisma/client",
        alias: "prisma",
      },
      {
        source: require.resolve("../context"),
        alias: "Context",
      },
    ],
  },
});
