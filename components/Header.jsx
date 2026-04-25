import React from 'react';
import Lottie from 'lottie-web/build/player/lottie_light';
import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/animations/logo.json';

export default ({ absolute = false, nav = false, className = '' }) => {
  useEffect(() => {
    const logoInstance = Lottie.loadAnimation({
      container: document.querySelector('#logo'),
      animationData: Logo,
      renderer: 'svg',
      loop: true,
      autoplay: true,
    });
    // Return clean up function here
    return () => {
      logoInstance.destroy();
    };
  }, []);

  return (
    <header
      className={`w-full flex items-center justify-between ${
        absolute ? 'absolute left-0 right-0 top-0' : ''
      } ${className}`}
    >
      <div>
        <div className={``}>
          <Link to="/">
            <div id="logo" className="xxl:w-[10vw] w-44 sm:w-28"></div>
          </Link>
        </div>
      </div>
      <div>
        {nav && (
          <div className="text-default-pink font-medium flex gap-10 sm:text-xs xl:text-[1vw] xl:gap-[2vw] sm:gap-3">
            <NavLink to="/works" className="link link-default flash">
              work
            </NavLink>
            <NavLink to="/fun-stuff" className="link link-default  flash">
              fun stuff
            </NavLink>
            <NavLink to="/say-hi" className="link link-default  flash">
              say hi
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
};
