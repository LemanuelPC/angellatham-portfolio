import React, { useEffect } from 'react';
import FooterImage from '../assets/images/footer.svg';
import Lottie from 'lottie-web/build/player/lottie_light';
import Icon from './Icon';

export default ({
  absolute,
  bg,
  left = {
    name: 'go back',
    link: '/',
    onClick: () => {},
  },
  right = {
    name: 'just wanna say hi ',
    link: '/say-hi',
    onClick: () => {},
  },
  className = '',
  animatedCharacter = false,
  showCopyright = false,
}) => {
  useEffect(() => {
    if (!animatedCharacter) return;
    let cancelled = false;
    let instance;
    fetch('/animations/character.json', { cache: 'force-cache' })
      .then((r) => r.json())
      .then((animationData) => {
        if (cancelled) return;
        const container = document.querySelector('#character');
        if (!container) return;
        instance = Lottie.loadAnimation({
          container,
          animationData,
          renderer: 'svg',
          loop: true,
          autoplay: true,
        });
      })
      .catch(() => {});
    return () => {
      cancelled = true;
      instance?.destroy();
    };
  }, [animatedCharacter]);

  return (
    <footer className={`w-full sm:pt-[3vw] ${absolute ? 'absolute bottom-0' : ''} ${className}`}>
      <div className="relative w-full">
        {!showCopyright && (
          <>
            {animatedCharacter && (
              <div
                id="character"
                className="xl:w-3/12 lg:w-1/4 md:w-1/4 absolute -bottom-[3vw] xl:left-[28%] lg:left-[25%] md:left-[25%] z-10 sm:hidden"
              ></div>
            )}

            <img
              src={bg ? bg : FooterImage}
              alt=""
              className="absolute -bottom-[3vw] scale-[1.1] sm:scale-[2.3] w-full z-0"
            />
          </>
        )}

        {showCopyright && (
          <span className="text-default-dark opacity-50 font-light sm:flex-1 absolute sm:relative text-center w-full block xl:text-[0.8vw] sm:text-xs align-middle bottom-0 sm:mb-3">
            &copy; Angella Tham {new Date().getFullYear()}
          </span>
        )}

        <div className="flex justify-between items-center w-full relative bottom-0">
          <button
            onClick={left.onClick}
            className="btn xxl:text-[0.8vw] xxl:p-[0.7vw] xxl:px-[1vw] xxl:rounded-[0.25vw] xxl:gap-[0.5vw] group p-3 bg-default-pink rounded-sm px-5 sm:p-2.5 font-medium  flex items-center gap-1 hover:bg-default-dark transition-colors duration-200 text-default hover:text-white  xs:text-xs sm:font-medium tracking-wide"
          >
            <Icon name="arrow-left" className="xl:w-[0.6vw] w-[8px] sm:w-[8px] group-hover:contrast-200" /> {left.name}
          </button>

          <button
            onClick={right.onClick}
            className="btn xxl:text-[0.8vw] xxl:p-[0.7vw] xxl:px-[1vw] xxl:rounded-[0.25vw] xxl:gap-[0.5vw] group p-3 bg-default-pink rounded-sm px-5 sm:p-2.5 font-medium  flex items-center gap-1 hover:bg-default-dark transition-colors duration-200 text-default hover:text-white  xs:text-xs sm:font-medium tracking-wide"
          >
            {right.name}{' '}
            <Icon name="arrow-right" className="xl:w-[0.6vw] w-[8px] sm:w-[8px] group-hover:contrast-200" />
          </button>
        </div>
      </div>
    </footer>
  );
};
