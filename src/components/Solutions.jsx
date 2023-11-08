import { services } from "../constants";
import { Link } from "react-router-dom";
import GoToTop from "./GoToTop";

const Solutions = () => {
  return (
    <div className="h-auto bg-[#F8F8FF] flex flex-row gap-4 lg:gap-5 flex-wrap justify-center items-center px-[5vw] pb-[2.5%]">
      {services.map((solution) => (
        <div key={solution.id}>
          <div className="w-auto mt-0 lg:mt-[5vh]">
            <div className="h-auto lg:h-[40vh] w-[80vw] lg:w-[20vw] mb-[2vh] flex flex-col flex-1 text-xs text-white bg-[#10295B] hover:bg-white hover:text-black py-[5vh] px-[3vw] box-shadow2 drop-shadow-lg shadow-lg box-border justify-center place-content-center place-items-center text-center border-white rounded-[20px]">
              <h1 className="font-bold text-[20px] leading-[22px] pb-[3vh]">{solution.title}</h1>
              <p className="pb-[3vh]">{solution.short_desc}</p>
              <Link to={`/${solution.id}`} onClick={() => GoToTop()}>
                <p className="font-bold cursor-pointer hover:text-[#0ef]">
                  {" "}
                  Learn More &gt; &gt;
                </p>
              </Link>
            </div>
          </div>
          </div>
      ))}
    </div>
  );
};

export default Solutions;
