import Link from "next/link";
import React from "react";

const page = async (props) => {
  const results = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });
  const posts = await results.json();
  const myPost = posts.map((post) => {
    return (
      <div  style={{
        background: "#14d5d4",
        marginTop: "15px",
        borderRadius: "7px",
        padding:"10px"
      }}>
      <Link href={`/posts/${post.id}`}>
        <h4>{post.title}</h4>
      </Link></div>
    );
  });
  return (
    <>
      <h1>posts</h1>
      <div
       
      >
        {myPost}
      </div>
    </>
  );
};

export default page;
