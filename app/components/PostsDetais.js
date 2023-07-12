import React from "react";
import { resolve } from "styled-jsx/css";

const PostsDetails = async ({ id }) => {
  await  new Promise(resolve=>{
     setTimeout(()=>{
      resolve()
    },2000)
  })
  const results = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const post = await results.json();

  return (
    <div
      style={{
        background: "#14d5d4",
        marginTop: "15px",
        borderRadius: "7px",
        padding: "10px",
      }}
    >
      <p>{post.body}</p>
    </div>
  );
};

export default PostsDetails;
