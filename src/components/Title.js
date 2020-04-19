import React from "react";
import { Link } from "react-router-dom";

export default function Title({ url, title, id }) {
  return url ? (
    <a className="link" href={url}>
      {title}
    </a>
  ) : (
    <Link className="link" to={`/post?id=${id}`}>
      {title}
    </Link>
  );
}
