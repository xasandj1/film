import React from "react";
import images from "../../constants/images";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="mt-24 footer">
        <div className="container">
          <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-6 xl:flex justify-between">
            <Link to={"/"}>
              <a href="#!" className=" w-full h-full">
                <img src={images.biglogo} alt="" className="max-w-[300px] min-h-[140px] w-full h-full" />
              </a>
            </Link>
            <div className="">
              <ul className="">
                <li>
                  <a href="#!" className="font-bold text-lg text-white">
                    Меню
                  </a>
                </li>
                <li>
                  <a href="#!" className="font-normal text-lg text">
                    Подборки
                  </a>
                </li>
                <li>
                  <a href="#!" className="font-normal text-lg text">
                    По жанру
                  </a>
                </li>
                <li>
                  <a href="#!" className="font-normal text-lg text">
                    Фильмы
                  </a>
                </li>
                <li>
                  <a href="#!" className="font-normal text-lg text">
                    Сериалы
                  </a>
                </li>
                <li>
                  <a href="#!" className="font-normal text-lg text">
                    Мультфильмы
                  </a>
                </li>
                <li>
                  <a href="#!" className="font-normal text-lg text">
                    Аниме
                  </a>
                </li>
                <li>
                  <a href="#!" className="font-normal text-lg text">
                    Актеры
                  </a>
                </li>
              </ul>
            </div>
            <div className="left md:block hidden">
              <h3 className="font-bold text-white text-lg">О нас</h3>
              <p className="font-normal text-lg color max-w-4xl sm:text-sm">
                Зная всё о кино, хочется поделиться этим с другими. Делитесь
                фильмами, трейлерами, персонами и новостями в социальных сетях,
                присваивайте рейтинги фильмам и обсуждайте их с друзьями и
                подписчиками!
              </p>
              <p className="font-normal text-lg color max-w-4xl">
                Интересные фильмы, ближайшие кинотеатры и любимых актеров можно
                добавлять в «Избранное». Система покажет все связанные с ними
                новости и новые трейлеры, подскажет, когда можно купить билет в
                кино на интересующую премьеру. Присоединяйтесь!
              </p>
            </div>
          </div>
          <div className="flex justify-between top flex-wrap">
            <h2 className="title font-normal text-lg">
              ©Все права защищены MovieDB.ru 2021
            </h2>
            <div className="flex">
              <a href="#!">
                <FaFacebookF fontSize={30} color="#858585" className="icons" />
              </a>
              <a href="#!">
                <AiFillInstagram
                  fontSize={30}
                  color="#858585"
                  className="icons"
                />
              </a>
              <a href="#!">
                <BsTelegram fontSize={30} color="#858585" className="icons" />
              </a>
            </div>
            <p className="title font-normal text-lg">
              Политика конфиденциальности
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
