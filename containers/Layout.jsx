import React from 'react';
export default ({ children, className = '', border = false, ...props }) => {
  return (
    <div
      {...props}
      className={`relative min-h-screen overflow-hidden ${className} ${
        border
          ? 'xxl:border-[1vw] border-[20px] sm:border-[16px] border-default xxl:p-[2.5vw] p-[52px] sm:p-[24px]'
          : 'xxl:p-[3.5vw] p-[72px] sm:p-[40px]'
      }`}
    >
      {children}
    </div>
  );
};
