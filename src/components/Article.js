import React from "react";

function Article ({ id, title, date, preview }) {
    return (
        <article>
            <h3>{title}</h3>
            {date ? <small>{date}</small> : <small>January 1, 1970</small>}
            <p>{preview}</p>
        </article>
    )
}

export default Article;