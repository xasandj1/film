import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdOutlineWatchLater } from "react-icons/md";
import cards from "../../src/data/cards";
import slider from "../../src/data/slider";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const Aside = () => {
  return (
    <>
      <aside className="w-1/4 rounded border-color aside-bg absolute hidden lg:block right-[1%] top-40">
        <div className="flex flex-col">
          <div className="dark-bg p-5 rounded-t-md">
            <p className="text-white font-medium text-2xl">Новые коллекции</p>
          </div>
          <div className="bg-color">
            {cards.map(({ id, img, time, title }) => (
              <div
                className="p-4 border-x-2 border-b-2 border-color flex items-center"
                key={id}
              >
                <div className="">
                  <img src={img} alt="" className="aside-img" />
                </div>
                <div className="ml-4">
                  <div className="flex items-center">
                    <div>
                      <MdOutlineWatchLater color="white" fontSize={18} />
                    </div>
                    <p className="text-base font-normal text-color">{time}</p>
                  </div>
                  <p className="aside-text font-normal text-white text-base xl:text-xl">
                    {title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col mt-10">
          <div className="dark-bg p-5 rounded-t-md">
            <p className="text-white font-medium text-2xl">
              Популярные коллекции
            </p>
          </div>
          <div className="">
              <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
                >
                {slider.map(({ id, img, title }) => (
                <SwiperSlide key={id}>
                   <a href="#!" className=""> <img src={img} alt="" className="w-full h-full top-0 left-0"/></a>
                    <p className="absolute top-36 left-14 text-white font-medium text-4xl leading-10 text-width">{title}</p>
                </SwiperSlide>
                ))}
              </Swiper>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Aside;
