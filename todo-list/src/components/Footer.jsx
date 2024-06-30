import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="container">
      <div className="p-1 d-flex justify-content-center bg-dark">
        <p className="text-white">
          💻Creado por{" "}
          <Link href="https://www.jeromanp.website" className="text-white">
            {" "}
            Jose Eduardo Roman{" "}
          </Link>
          💻
        </p>
      </div>
    </div>
  );
}
