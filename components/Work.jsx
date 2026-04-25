import React, { useEffect, useState } from 'react';

export default ({
  title = '',
  categories = [],
  thumbnail = '',
  thumbnailHover = '',
  onClick = () => {},
  titleColor,
}) => {
  const [itemStyle, setItemStyle] = useState({
    backgroundImage: `url(${thumbnail})`,
  });
  const [showTitle, setShowTitle] = useState(false);

  const handleMouseHoverIn = () => {
    setItemStyle({
      backgroundImage: `url(${thumbnailHover})`,
    });
    setShowTitle(true);
  };

  const handleMouseHoverOut = () => {
    setItemStyle({
      backgroundImage: `url(${thumbnail})`,
    });
    setShowTitle(false);
  };

  return (
    <div
      key={title}
      style={itemStyle}
      className={`xl:h-[15vw] lg:h-[15vw] md:h-60 h-40 xs:h-28 xl:rounded-[0.4vw] rounded-md  cursor-pointer bg-no-repeat bg-cover bg-center transition-all flex items-end `}
      onMouseEnter={handleMouseHoverIn}
      onMouseLeave={handleMouseHoverOut}
      onClick={onClick}
    >
      <div
        className={`text-center leading-tight w-full px-3 py-4 transition-all text-default-dark ${
          showTitle ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ color: titleColor }}
      >
        <h2 className="font-bold text-[1vw]">{title}</h2>
        <p className="font-light text-[0.8vw]">{categories.join(', ')}</p>
      </div>
    </div>
  );
};
