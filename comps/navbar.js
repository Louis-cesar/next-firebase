import Link from "next/link";
import React from "react";
import { UserAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logOut } = UserAuth();
  return (
    <div className="nav">
      <Link href="/">TekSwipe</Link>
      <div className="nav1">
        {user?.displayName ? (
          <button className="button1">Logout</button>
        ) : (
          <Link href="/signin">SignIn</Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
