import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
    const postElement = posts.map((post) => (
        <Article 
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}/>
    ))
    return (
        <main id="main">{postElement}</main>
    )
}

export default ArticleList;