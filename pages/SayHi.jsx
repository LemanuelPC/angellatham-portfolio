import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer, Header } from '../components';
import Layout from '../containers/Layout';
import Icon from '../components/Icon';
import Lottie from 'lottie-web/build/player/lottie_light';
import Tealeaf from '../assets/animations/tealeaf.json';
import Winterberry from '../assets/animations/winterberry.json';
import GirlImage from '../assets/images/girl.webp';
import SayhiFooter from '../assets/images/sayhi-footer.svg';

export default function SayHi() {
  const navigate = useNavigate();

  useEffect(() => {
    const tealeafInstance = Lottie.loadAnimation({
      container: document.querySelector('#tealeaf'),
      animationData: Tealeaf,
      renderer: 'svg',
      loop: true,
      autoplay: true,
    });

    const winterberryInstance = Lottie.loadAnimation({
      container: document.querySelector('#winterberry'),
      animationData: Winterberry,
      renderer: 'svg',
      loop: true,
      autoplay: true,
    });

    // Return clean up function here
    return () => {
      tealeafInstance.destroy();
      winterberryInstance.destroy();
    };
  }, []);

  return (
    <Layout className="flex flex-col justify-between items-center" border={true}>
      <Header nav={true} />
      <div className="grid grid-cols-12 sm:gap-5 gap-12 xxl:gap-[2.5vw] items-center xl:px-40 lg:px-20 md:px-20 sm:px-5 py-20 sm:py-5 xxl:px-[10vw] lg:py-[1vw] md:pb-0 sm:pb-0">
        <div className="xl:col-span-3 lg:col-span-4 md:col-span-12 sm:col-span-12">
          <div className="relative lg:w-full md:w-2/5 sm:w-2/5 mx-auto">
            <div
              id="tealeaf"
              className="xxl:w-[5vw] xxl:-bottom-[2.5vw] xxl:-left-[3vw] lg:w-24 md:w-16 sm:w-12 absolute lg:-left-14 lg:-bottom-12 md:-left-10 md:-bottom-8 sm:-left-7 sm:-bottom-6"
            ></div>

            <div
              id="winterberry"
              className="xxl:w-[5vw] xxl:top-[5%] lg:w-24 md:w-16 sm:w-12 absolute xxl:-left-[3vw] xl:-left-[55px] lg:-left-[70px] md:-left-10  sm:-left-8 top-[5%]"
            ></div>

            <img className="w-full relative " src={GirlImage} alt="Angella Tham" />
          </div>
        </div>

        <div className="xl:col-span-9 lg:col-span-8 md:col-span-12 sm:col-span-12">
          <div className="flex items-center mb-[2vw] sm:mb-2 lg:mb-[2vw]">
            <h2 className="text-default-dark font-bold md:text-[4.5vw] sm:text-xl lg:text-5xl xxl:text-[3.5vw]">
              hi, nice to meet you.
            </h2>
            <Icon name="wave" className="xl:w-[2.3vw] lg:w-[2.3vw] md:w-[4vw] sm:w-5 ml-2" />
          </div>

          <p className="text-default-dark font-light sm:text-xs xxl:text-[1vw]  md:leading-8 sm:leading-normal lg:leading-[2.5vw] xl:leading-[1.8vw]">
            My name is Angella — creative designer and illustrator living in the big apple. I bring brands to life and
            create designs in a wide range of disciplines including visual communication, branding, marketing design, and
            illustration. My artworks are always completed with a detailed focus and imaginative concepts to create
            whimsical visual images.
            <br />
            <br />
            When the sun goes down, you will find me either doing passion projects late into the night, relaxing with a
            cup of tea, munching on comfort foods, or sky gazing.
            <br />
            <br />
            I'm always down for a creative adventure.
            <br />
            <br />
            <span className="text-default-pink font-medium lg:text-xl md:text-xl sm:text-sm xxl:text-[1.4vw]">
              want to create something fun? let's chat.
            </span>
            <br />
            <a
              href="mailto:thamangella@gmail.com"
              // className="text-default-dark font-light sm:text-xs mt-2 inline-block underline decoration-transparent hover:decoration-default-dark  transition-all duration-300 "
              className="link"
            >
              thamangella@gmail.com
            </a>
          </p>

          <div className="flex mt-2 gap-2 xxl:gap-[0.7vw] ">
            <a href="https://www.linkedin.com/in/angellatham/" target="_blank" rel="noreferrer">
              <Icon className="w-[35px] xxl:w-[2vw] transition-all" name="linkedin" hoverIcon="linkedin-hover" />
            </a>
            <a href="mailto:thamangella@gmail.com" target="_blank" rel="noreferrer">
              <Icon className="w-[35px] xxl:w-[2vw]  transition-all" name="email" hoverIcon="email-hover" />
            </a>
          </div>
        </div>
      </div>
      <Footer
        bg={SayhiFooter}
        left={{ name: 'go back', onClick: () => navigate('/') }}
        right={{ name: 'see my design', onClick: () => navigate('/auth') }}
        className=" mt-10 "
      />
    </Layout>
  );
}
