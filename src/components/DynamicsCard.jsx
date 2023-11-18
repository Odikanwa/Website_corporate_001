/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { dynamics_module } from "../constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useModalContext } from "../contexts/ModalContext";
import Modal from "./Modal";
import { useState } from "react";
import RoundedButton from "./RoundedButton";
import { NavLink } from "react-router-dom";
import GoToTop from "./GoToTop";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "grey",
        borderRadius: "100px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "grey",
        borderRadius: "100px",
      }}
      onClick={onClick}
    />
  );
}

const DynamicsCards = () => {
  const { setModalOpen } = useModalContext();
  const [modal, setModal] = useState({
    id: 0,
    icon: null,
    title: "",
    desc: "",
  });

  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    // arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="w-[100vw] mt-[5vh]">
      <Slider {...settings}>
        {dynamics_module.map((module) => (
          <>
            <div key={module.id} className="w-[100vw] mt-[5vh]">
              <div className="h-[50vh] md:h-[50vh] xl:h-[25vw] w-[45vw] xl:w-[20vw] mb-[2vh] flex flex-col flex-1 text-xs bg-white py-[5vh] px-[3vw] box-shadow2 drop-shadow-lg shadow-lg box-border justify-center place-content-center place-items-center text-center border-white rounded-[20px]">
                <img
                  src={module.icon}
                  alt="Dynamics 365 Icon"
                  className="w-[50px] h-[50px] inline  object-contain pb-[2vh]"
                />
                <h1 className="font-bold pb-[3vh]">{module.title}</h1>
                <p className="pb-[3vh]">{module.short_desc}</p>
                <p
                  className="font-bold cursor-pointer"
                  onClick={() => {
                    setModalOpen(true);
                    setModal({
                      id: module.id,
                      icon: module.icon,
                      title: module.title,
                      desc: module.long_desc,
                    });
                  }}
                >
                  Learn More &gt; &gt;
                </p>
                
              </div>
            </div>
          </>
        ))}
      </Slider>
      <Modal>
        <div className="bg-white text-black h-auto w-[97vw] lg:h-[75vh] lg:w-[60vw] rounded-2xl flex flex-col justify-center place-content-center text-center px-[5%] py-[5%] lg:py-[2%] text-[14px]">
          <img
            src={modal.icon}
            alt="Dynamics 365 Icon"
            className="w-[70px] h-[70px] inline  object-contain pb-[2vh] place-self-center"
          />
          <p className="font-bold pt-[%] pb-[4%]">{modal.title}</p>
          <p className="text-black">{modal.desc}</p>
          <div className="flex flex-row justify-center text-center">
            <NavLink to="/contact" onClick={() => GoToTop()}>
            <RoundedButton>Buy Now</RoundedButton>
            </NavLink>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DynamicsCards;
