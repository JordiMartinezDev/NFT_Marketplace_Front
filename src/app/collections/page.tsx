import Link from "next/link";
import React from "react";
type Props = {};

function Collections({}: Props) {
  return (
    <div>
      <div>Collections Page</div> <Link href="/collections/123"> Link</Link>
    </div>
  );
}

export default Collections;
