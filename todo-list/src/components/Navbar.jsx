import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    // <!-- Just an image -->
    <div className="container">
      <nav className="navbar p-3 d-flex justify-content-center navbar-light bg-light">
        <Link className="navbar-brand" href="/">
          <img src="/logo.png" width="120" height="120" alt="" />
        </Link>
      </nav>
    </div>
  );
}
