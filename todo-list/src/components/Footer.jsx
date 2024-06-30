import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="container">
      <footer>
        <div className="text-center d-flex justify-content-center">
          <Link
            className="d-flex align-items-center justify-content-center py-3 text-decoration-none text-dark"
            href="https://www.jeromanp.website/"
            target="_blank"
          >
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-device-imac-code"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M11.5 17h-7.5a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v9"></path>
                <path d="M3 13h18"></path>
                <path d="M8 21h3.5"></path>
                <path d="M10 17l-.5 4"></path>
                <path d="M20 21l2 -2l-2 -2"></path>
                <path d="M17 17l-2 2l2 2"></path>
              </svg>
            </span>
            Realizado por: <i className="p-2">Jose Eduardo Roman</i>
          </Link>
        </div>
      </footer>
    </div>
  );
}
