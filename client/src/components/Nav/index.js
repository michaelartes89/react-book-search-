

import React from "react";
import "./style.css"

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <a className="navbar-item" href="/">
        Search
      </a>
      <a className="navbar-item" href="/saved">
        Saved
      </a>
    </nav>
  );
}

export default Nav;