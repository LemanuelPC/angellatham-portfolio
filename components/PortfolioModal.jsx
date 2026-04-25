import React from 'react';
import Icon from './Icon';
import Modal from './Modal';
import Video from './Video';

export default function PortfolioModal({
  open,
  onClose = () => {},
  next = () => {},
  prev = () => {},
  images = [],
  videos = [],
  title = '',
  description = '',
  role = [],
  deliverable = [],
  team = [],
  created = '',
  disabled,
}) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex lg:h-[92vh] md:h-[90vh] w-full lg:overflow-hidden lg:flex-row md:flex-col sm:flex-col lg:m-[2vw] md:m-5 sm:m-5 ">
        <div className=" bg-white lg:p-[5vw] md:p-10 sm:p-10 w-full md:overflow-y-auto sm:overflow-y-auto  no-scrollbar  md:flex md:flex-col sm:flex sm:flex-col lg:mr-[2vw] h-full">
          <div className="mb-10 lg:hidden">
            <Icon
              name="close"
              className="cursor-pointer transition-all ml-auto w-[20px]"
              onClick={onClose}
              hoverIcon="close-hover"
            />
          </div>
          {/* This section is for small screen */}
          <div className="mb-5 block lg:hidden md:overflow-y-auto sm:overflow-y-auto no-scrollbar">
            <h2 className="text-default-dark font-medium xl:leading-[2.5vw] xl:text-[2.5vw] lg:text-[2.5vw] md:text-2xl sm:text-xl xl:mb-[2vw] mb-3 sm:mb-3">
              {title}
            </h2>
            <p className="text-default-dark font-light xl:leading-[1.65vw] xl:text-[1vw] sm:text-xs">{description}</p>
          </div>
          {/* This section is for small screen end */}

          <div className="w-full flex lg:flex-row flex-col xl:gap-[3vw] gap-10 lg:overflow-hidden h-full md:overflow-y-auto sm:overflow-y-auto  no-scrollbar">
            <div className="lg:w-2/3 md:w-full lg:overflow-y-auto bg-white no-scrollbar">
              {images.map((image) => (
                <img key={image} src={image} alt="Product" className="w-full" />
              ))}
              {videos.map((video) => (
                <Video key={video} src={video} />
              ))}
            </div>
            <div className="lg:w-1/3 md:w-full  flex flex-col">
              <div className="flex-1 lg:overflow-y-auto no-scrollbar">
                <div className="lg:block hidden">
                  <h2 className="text-default-dark font-bold xl:leading-[2.5vw] xl:text-[2.5vw] lg:text-[2.5vw] md:text-2xl sm:text-xl xl:mb-[2vw] mb-10 sm:mb-3">
                    {title}
                  </h2>
                  <p className="text-default-dark font-light xl:leading-[1.6vw] xl:text-[1vw] sm:text-xs">
                    {description}
                  </p>
                </div>

                <div className="mt-16">
                  <p className="text-default-pink leading-normal xl:text-[1.3vw] text-lg">deliverables</p>
                  <p className="text-default-dark font-light  xl:leading-[1.65vw] xl:text-[1vw] sm:text-xs">
                    {deliverable.join(', ')}
                  </p>
                </div>

                <div className="mt-10">
                  <p className="text-default-pink leading-normal xl:text-[1.3vw] text-lg">role</p>
                  <p className="text-default-dark font-light  xl:leading-[1.65vw] xl:text-[1vw] sm:text-xs">
                    {role.join(', ')}
                  </p>
                </div>

                <div className="mt-10">
                  <p className="text-default-pink leading-normal xl:text-[1.3vw] text-lg">team</p>
                  {team.length > 0 ? (
                    team.map((t) => (
                      <p key={t} className="text-default-dark font-light  xl:leading-[1.65vw] xl:text-[1vw] sm:text-xs">
                        {t.role}: {t.name}
                      </p>
                    ))
                  ) : (
                    <p className="text-default-dark font-light  xl:leading-[1.65vw] xl:text-[1vw] sm:text-xs">N/A</p>
                  )}
                </div>
              </div>
              <div className="mt-5 text-right">
                <p className="text-default-pink xl:text-[0.8vw] text-sm group cursor-pointer relative inline-block link link-default leading-normal">
                  created in {created}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" p-5  md:p-10  sm:p-10  lg:w-[10vw] lg:px-[1vw] w-full flex flex-col justify-between items-center lg:bg-transparent md:bg-white sm:bg-white">
          <div className="md:hidden sm:hidden lg:block">
            <Icon
              name="close"
              className="cursor-pointer transition-all w-[20px] lg:w-[1.3vw]"
              onClick={onClose}
              hoverIcon="close-hover"
            />
          </div>
          <div className="md:hidden sm:hidden lg:block">
            <Icon name="scroll" hoverIcon="scroll-hover" className="w-[40px] lg:w-[2.8vw] " />
          </div>
          <div className="flex justify-between w-full ">
            <Icon
              name="arrow-left"
              hoverIcon="arrow-left-hover"
              className={`lg:w-[1.3vw] w-[20px]`}
              onClick={() => {
                if (disabled === 'prev') {
                  return;
                }
                prev();
              }}
              disabled={disabled === 'prev'}
            />
            <Icon
              name="arrow-right"
              hoverIcon="arrow-right-hover"
              className={`lg:w-[1.3vw] w-[20px] `}
              disabled={disabled === 'next'}
              onClick={() => {
                if (disabled === 'next') {
                  return;
                }
                next();
              }}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}
