import React from 'react';
import Lottie from 'lottie-web/build/player/lottie_light';
import { useEffect } from 'react';
import Loader from '../assets/animations/loader.json';
import Layout from '../containers/Layout';
import Header from './Header';

export default ({ className = '' }) => {
  useEffect(() => {
    const preloaderInstance = Lottie.loadAnimation({
      container: document.querySelector('#loaderOwl'),
      animationData: Loader,
      renderer: 'svg',
      loop: true,
      autoplay: true,
    });

    // Return clean up function here
    return () => {
      preloaderInstance.destroy();
    };
  }, []);

  return (
    <Layout className={'bg-default !fixed h-screen top-0 left-0 right-0 bottom-0 z-50 ' + className}>
      <div
        id="loaderOwl"
        className="w-full scale-[3.5] md:scale-100 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
      ></div>
    </Layout>
  );
};
