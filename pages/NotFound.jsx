import React from 'react';
export default function NotFound() {
  return (
    <div className="bg-red-500 h-screen flex items-center justify-center flex-col">
      <h1 className="text-[20vw] font-bold uppercase text-white text-center leading-[20vw]">404</h1>
      <h1 className="text-[2vw] font-normal uppercase text-white text-center tracking-[0.6vw]">
        Error - Page Not Found
      </h1>
    </div>
  );
}
