import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-web/build/player/lottie_light';
import { Footer, Header } from '../components';
import Preloader from '../components/Preloader';
import Layout from '../containers/Layout';
import Hello from '../assets/animations/hello.json';
import Intro from '../assets/images/intro-bg.svg';
import IntroMobile from '../assets/images/intro-bg-mobile.svg';
import { useNavigate } from 'react-router-dom';

export default function HomeAlternative() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    if (loading) return;
    const container = document.querySelector('#hello');
    if (!container) return;
    const helloInstance = Lottie.loadAnimation({
      container,
      animationData: Hello,
      renderer: 'svg',
      loop: true,
      autoplay: true,
    });
    return () => helloInstance.destroy();
  }, [loading]);

  return (
    <Layout border={true} className=" flex flex-col justify-between relative">
      <Header className={`z-[999] ${loading ? 'fixed' : ''}`} />

      <Preloader className={`${loading ? 'opacity-100' : 'opacity-0 invisible transition-all duration-300'}`} />

      {!loading && (
        <div className="grid grid-cols-12 items-center justify-between xl:px-[5vw] xl:pb-[7vw] lg:px-20 md:px-0 sm:px-0 py-20 ">
          <div className="xl:col-span-1 hidden xl:block"></div>
          <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 lg:block sm:hidden">
            <div id="hello" className="xl:w-2/3 lg:w-4/5 md:w-full"></div>
          </div>

          <div className="xl:col-span-6 lg:col-span-8 sm:col-span-12 md:col-span-8">
            <div className="relative w-full">
              <img src={Intro} className="sm:hidden md:hidden lg:block w-full md:scale-105" alt='Intro' />
              <img src={IntroMobile} className="lg:hidden sm:block md:block " alt='Intro Mobile'/>
              <div
                className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full xxl:p-[15%] xl:p-[15%] lg:p-[15%] md:p-[15%]  md:px-[12%] xs:p-[15%] px-14 transition-all`}
              >
                <h2 className="text-default-dark font-bold lg:text-[2.7vw] md:text-[4vw] text-[5.5vw] xs:text-[5vw] xs:mb-3 md:mb-[5%] mb-6 ">
                  I’m Angella Tham —
                </h2>
                <p
                  className={`font-light lg:leading-[1.8vw] md:leading-relaxed  sm:leading-normal transition-all lg:text-[1vw] md:text-sm text-xs xs:text-xs `}
                >
                  Brand and marketing designer making things feel clear, engaging, and a little more alive. I design,
                  and occasionally sneak in a doodle. Currently working my magic @{' '}
                  <a href="#/" className="link link-default">
                    GREEN DOT
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer
        left={{ name: 'say hi', onClick: () => navigate('/say-hi') }}
        right={{ name: 'see my design', onClick: () => navigate('/works') }}
        // className="xxl:mt-[10vw] xl:mt-52"
        animatedCharacter={true}
      />
    </Layout>
  );
}
