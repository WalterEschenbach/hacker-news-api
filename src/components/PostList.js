import React from "react";
import PostMetaInfo from "./PostMetaInfo";
import Title from "./Title";

export default function PostList({ posts }) {
  if (posts.length === 0) {
    return <p>This user hasen't posted yet</p>;
  }

  return (
    <ul>
      {posts.map((post) => {
        return (
          <li key={post.id} className="post">
            <Title url={post.url} title={post.title} id={post.id} />
            <PostMetaInfo
              by={post.by}
              time={post.time}
              id={post.id}
              descendants={post.descendants}
            />
          </li>
        );
      })}
    </ul>
  );
}
