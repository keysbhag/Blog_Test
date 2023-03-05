import React, { useState } from "react";
import "../App.css";
import parse from "html-react-parser";

export default function Main(props) {
  let data = props.results.objects

  console.log(data);

  return (
    <>
      <h1> The Wonderful Blog </h1>
      {data.map((post) => (
        <div key={post.id} className="post-box">
          <img className="hero" src={post.metadata.hero.imgix_url}></img>
          <h2>{post.title}</h2>
          <div className="author-tag">
            <img src={post.metadata.author.thumbnail} width={100}></img>
            <p> By: {post.metadata.author.title}</p>
          </div>
          {parse(post.content)}
        </div>
      ))}
    </>
  );
}
