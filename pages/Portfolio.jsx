import React from 'react';
import { Footer, Header, Icon, Work } from '../components';
import Content from '../containers/Content';
import Layout from '../containers/Layout';

import { useEffect, useState } from 'react';
import PortfolioModal from '../components/PortfolioModal';
import { useNavigate } from 'react-router-dom';
import { isMobile } from '../lib/ua';

export default function Portfolio({ title = '', icon = '', banner = '', description = '', data = [] }) {
  const navigate = useNavigate();
  const [portfolio, setPortfolio] = useState();
  const [index, setIndex] = useState();
  const [disabled, setDisabled] = useState();

  const onNext = () => {
    setIndex(index + 1);
  };

  const onPrev = () => {
    setIndex(index - 1);
  };

  useEffect(() => {
    if (index >= 0) {
      if (index < data.length) {
        setPortfolio(data[index]);
      }
      if (index === 0) {
        setDisabled('prev');
      } else if (index === data.length - 1) {
        setDisabled('next');
      } else {
        setDisabled();
      }
    } else {
      setPortfolio();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <Layout className="flex flex-col justify-between items-center sm:h-screen" border={true}>
      <div className="h-[85%]">
        <Header nav={true} className="" />
        <Content className="sm:p-5 sm:pt-10 lg:pt-[4vw] sm:flex sm:flex-col h-full">
          <div className="grid grid-cols-2 xl:gap-[4vw] gap-16 items-center mb-4 lg:mb-[2.5vw] ">
            <div className="sm:hidden relative">
              <img
                src={banner}
                alt="Banner"
                className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <div className="sm:col-span-2">
              <div className="flex items-center xl:mb-[1.2vw] lg:mb-4 mb-3">
                <h2 className="text-default-dark font-bold leading-normal xl:text-[3vw] lg:text-[3vw] md:text-[3vw] sm:text-xl">
                  {title}
                </h2>
                <Icon className="xl:w-[2.2vw] md:w-[2.2vw] w-14 sm:w-5 ml-2" name={icon} />
              </div>

              <p className="text-default-dark font-light lg:leading-[1.8] xl:leading-normal md:leading-[1.5] leading-5 xl:text-[1vw] lg:text-[1.1vw] md:text-[1.5vw] sm:text-xs ">
                {description}
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 sm:gap-4 xl:gap-[2vw] overflow-y-auto ">
            {data.map((work, index) => (
              <Work
                key={work.title}
                title={work.title}
                categories={work.categories}
                thumbnail={work.thumbnail}
                thumbnailHover={work.thumbnail_hover}
                titleColor={work.title_color}
                onClick={() => {
                  setIndex(index);
                }}
              />
            ))}
          </div>
        </Content>
      </div>

      <Footer
        showCopyright={true}
        left={{ name: 'go back', onClick: () => navigate('/say-hi') }}
        right={{
          name: 'see my resume',
          onClick: () => {
            const a = document.createElement('a');
            if (isMobile) {
              a.download = 'angella_tham.pdf';
              a.href = '/resume.pdf';
              a.target = '_blank';
              a.click();
            } else {
              a.href = '/resume';
              a.target = '_blank';
              a.click();
            }
          },
        }}
      />

      {portfolio && (
        <PortfolioModal
          open={portfolio}
          onClose={() => {
            setIndex();
          }}
          next={onNext}
          prev={onPrev}
          images={portfolio.images}
          videos={portfolio.videos}
          title={portfolio.title}
          description={portfolio.description}
          role={portfolio.role}
          team={portfolio.team}
          deliverable={portfolio.deliverable}
          created={portfolio.created}
          disabled={disabled} // next | prev | both
        />
      )}
    </Layout>
  );
}
