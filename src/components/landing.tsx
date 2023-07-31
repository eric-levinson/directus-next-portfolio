import * as React from "react";
import Frame from "./three/frame";

export default function Landing(params) {
  const global = params.data;
  return (
    <>
      <div className="relative min-h-full ">
        <Frame data={global} />

        <div className="h-full font-bold text-neutral-200 text-4xl md:text-6xl lg:text-9xl">
          <div className="absolute container mx-auto h-full inset-x-0 bottom-0">
			<h1 className="absolute top-0 mt-8">{global.title}</h1>
			<p className="absolute bottom-0 right-0 mb-8">{global.description}</p>
		  </div>
        </div>
      </div>
    </>
  );
}
