import * as React from "react";
import Frame from "./three/frame";

export default function Landing(params) {
  const global = params.data;
  return (
	<>
	
      <div className="min-h-full relative">
	  <Frame/>

        <div className="absolute container mx-auto mb-8 inset-x-0 bottom-0">
			
          <div className="font-bold text-9xl text-neutral-200">
			<h1 className="">
			  {global.title}
			</h1>
			<p className="text-right">{global.description}</p>
		  </div>
  		</div>
      </div>
	  </>
  );
}
