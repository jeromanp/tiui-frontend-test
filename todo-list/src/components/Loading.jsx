import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <Image src="/assets/loader.svg" width={50} height={50} alt="Loader" />
    </div>
  );
}
