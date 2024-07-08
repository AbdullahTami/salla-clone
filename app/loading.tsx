import React from "react";
import Spinner from "./_components/Spinner";

export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Spinner />
    </div>
  );
}
