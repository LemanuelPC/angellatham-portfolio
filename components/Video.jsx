import React, { useRef } from 'react';

export default ({ src }) => {
  const videoRef = useRef();
  return (
    <div className="relative lg:p-20 md:p-5 sm:p-5">
      <video ref={videoRef} width="320" height="240" controls className=" w-full">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <button className="absolute h-20 w-20 bg-gray-50 bg-opacity-30 rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <span className=" border-l-[60px] border-r-[60px] border-r-red-400 border-t-[60px]   border-b-[60px] border-b-default border-t-default box-border"></span>
      </button> */}
    </div>
  );
};
