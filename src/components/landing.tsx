import * as React from "react";
import Frame from "./three/frame";

export default function Landing(params) {
  const global = params.data;
  return (
    <>
      <div className="relative min-h-full ">
        <Frame data={global} />

        <div className="h-full text-4xl font-bold text-neutral-200 md:text-6xl lg:text-9xl">
          <div className="container absolute inset-x-0 bottom-0 mx-auto h-full">
            <h1 className="absolute top-0">{global.title}</h1>
            <p className="absolute bottom-0 right-0 mb-8">
              {global.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
