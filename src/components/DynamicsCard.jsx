/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { dynamics_module } from "../constants";
import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "grey", borderRadius: "100px" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "grey", borderRadius: "100px"}}
        onClick={onClick}
      />
    );
  }

export default  class DynamicsCards extends Component {
    render() {
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
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
              }
            },
            {
                breakpoint: 300,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  dots: false,
                }
              }
          ]
      };
      return (
        <div className="w-[100vw] mt-[5vh]">
          <h2 className="font-bold"> See Available Offerings &gt; &gt; </h2>
          <Slider {...settings}>
          {
            dynamics_module.map((module) => (
                <div key={module.id} className="w-[100vw] mt-[5vh]">
                <div className="h-[40vh] lg:h-[25vw] w-[45vw] lg:w-[20vw] mb-[2vh] flex flex-col flex-1 text-xs bg-white py-[5vh] px-[3vw] box-shadow2 shadow-lg box-border justify-center place-content-center place-items-center text-center border-white">
                    <img
                    src={module.icon}
                    alt="Dynamics 365 Icon"
                    className="w-[50px] h-[50px] inline  object-contain pb-[2vh]"
                  />
                  <h1 className="font-bold pb-[3vh]">{module.title}</h1>
                  <p className="pb-[3vh]">{module.short_desc}</p>
                  <p className="font-bold cursor-pointer">Learn More &gt; &gt;</p>
                  {/* <div className="w-[100%] ml-[30%] absolute bottom-0 mb-[3vh]"><SmallRoundedButton>Learn More</SmallRoundedButton></div> */}
                  
                </div>
                </div>
                
            ))
        }
          </Slider>
        </div>
      );
    }
  }

// export default DynamicsCard