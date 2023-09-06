import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function NotFounf() {
  return (
    <div>
      <h2>Sorry</h2>
      <p>That page could not be found</p>
      <Link to="/">Click to return to home...</Link>
    </div>
  );
}
