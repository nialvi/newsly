import { queryType } from "@nexus/schema";

export const Query = queryType({
  definition(t) {
    t.crud.post();
    t.crud.posts({ filtering: true, ordering: true });
    t.crud.user();
    t.crud.users({ filtering: true, ordering: true });
    t.crud.comment();
    t.crud.comments({ filtering: true, ordering: true });
  },
});
