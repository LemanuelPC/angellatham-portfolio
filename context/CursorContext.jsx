import React, { useEffect } from 'react';

export const CursorContext = React.createContext();

export const CursorProvider = ({ children }) => {
  useEffect(() => {
    const cursor = document.querySelector('#cursor');
    const moveCursor = (e) => {
      const mouseY = e.clientY;
      const mouseX = e.clientX;

      cursor.style = `top: ${mouseY - 20}px; left: ${mouseX - 20}px; `;

      const elem = e.target;
      const styles = window.getComputedStyle(elem);
      if (styles.getPropertyValue('cursor') === 'pointer') {
        cursor.src = '/icons/diamond-cursor-clicked.svg';
      } else {
        cursor.src = '/icons/diamond-cursor-notclicked.svg';
      }
    };

    const hideCursor = () => {
      // cursor.style.display = 'none'; // hide the cursor
      cursor.style.opacity = 0;
    };

    const showCursor = () => {
      // cursor.style.display = 'block'; // show the cursor
      cursor.style.opacity = 1;
    };

    const visibilityChange = () => {
      if (document.hidden) {
        hideCursor();
      } else {
        showCursor();
      }
    };

    document.addEventListener('visibilitychange', visibilityChange);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseleave', hideCursor);
    window.addEventListener('mouseenter', showCursor);

    return () => {
      document.removeEventListener('visibilitychange', visibilityChange);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseleave', hideCursor);
      window.removeEventListener('mouseenter', showCursor);
    };
  }, []);

  return (
    <CursorContext.Provider value={{}}>
      <img
        src="/icons/diamond-cursor-notclicked.svg"
        className="w-[2vw] fixed z-[999] -top-10 -left-10 right-0 pointer-events-none lg:block md:hidden sm:hidden"
        id="cursor"
        alt="<>"
      />
      {children}
    </CursorContext.Provider>
  );
};
