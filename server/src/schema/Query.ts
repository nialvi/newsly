import { queryType } from "@nexus/schema";

export const Query = queryType({
  definition(t) {
    t.field("posts", {
      type: "Post",
      list: true,
      resolve: () => {
        return [
          {
            id: 1,
            title: "Title",
            text: "Text",
          },
        ];
      },
    });
  },
});
