import PostsDetails from "@/app/components/PostsDetais";
import React, { Suspense } from "react";

const page = async (props) => {
  const loadingJsx = (
    <div>
      <p>wait...</p>
    </div>
  );
  const id = props.params.title;

  return (
    <div>
      <h4>Posts details</h4>
      <Suspense fallback={loadingJsx}>
        <PostsDetails id={id} />
      </Suspense>
    </div>
  );
};

export default page;
