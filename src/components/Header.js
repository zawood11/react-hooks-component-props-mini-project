import React from "react";

function Header({ name }) {
    return (
        <header id="header">
            <h1 id = {"h1" + {name}}>{name}</h1>
        </header>
    )
}

export default Header;