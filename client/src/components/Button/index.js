import React from "react";


function Button( { type = "default", className, children, click, value }) {
    return (
        <button
        onClick={click}
        className={["btn btn-lg", `btn-${type}`, className].join(" ")}
        value={value}
        > 
        {children}
        </button>

    );
}

export default Button;