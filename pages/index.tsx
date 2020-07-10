import * as React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_POSTS_QUERY = gql`
  query GetPosts {
    posts {
      id
      title
      text
      createdAt
      author {
        name
        email
      }
    }
  }
`;

function HomePage() {
  const { loading, data } = useQuery(GET_POSTS_QUERY);

  if (loading && !data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <pre>{JSON.stringify(data, undefined, 2)}</pre>
    </div>
  );
}

export default HomePage;
