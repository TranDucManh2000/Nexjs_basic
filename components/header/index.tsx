import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <h1 style={{ marginTop: "50px", width: "100%", textAlign: "center" }}>
        Go{" "}
        <Link style={{ color: "blue" }} href="/">
          Home
        </Link>
      </h1>
    </div>
  );
};

export default Header;
