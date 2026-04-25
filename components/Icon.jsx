import React, { useState } from 'react';

export default ({ className = '', name = '', size, onClick = () => {}, hoverIcon, disabled = false }) => {
  const [icon, setIcon] = useState(`/icons/${name}.svg`);
  const handleMouseHoverIn = () => {
    if (hoverIcon && !disabled) {
      setIcon(`/icons/${hoverIcon}.svg`);
    }
  };

  const handleMouseHoverOut = () => {
    setIcon(`/icons/${name}.svg`);
  };
  return (
    <img
      src={icon}
      alt="Icon"
      className={`${className} ${disabled ? 'opacity-60' : 'cursor-pointer'} `}
      onClick={onClick}
      onMouseEnter={handleMouseHoverIn}
      onMouseLeave={handleMouseHoverOut}
    />
  );
};
