import React from 'react';
export default ({ children, className = '', ...props }) => {
  return (
    <div {...props} className={` pt-10 pb-10 ${className}`}>
      {children}
    </div>
  );
};
