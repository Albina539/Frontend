import axios from "axios";
import React, { useEffect } from "react";
import Post from "./Post";

const Posts = ({ posts, setPosts, search}) => {
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts");
    setPosts(response.data.slice(0, 10));
  };

  const filtredPosts = posts.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      {filtredPosts.map((post) => (
        <Post key={post.id} post={post} posts={posts} setPosts={setPosts} />
      ))}
    </div>
  );
};

export default Posts;
