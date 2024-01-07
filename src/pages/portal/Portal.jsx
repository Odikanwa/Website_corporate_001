
import "react-toastify/dist/ReactToastify.css";
// import RoundedButton from "../components/RoundedButton";
import { crm } from "../../constants";


const Portal = () => {

  return (
    <div className="h-auto w-[100vw]  text-[15px] bg-[#F8F8FF]">
      <div className="h-[10vh] flex-col bg-[#10295B] opacity-90"></div>
      <div className="h-Screen w-[100vw] flex flex-row">
        <div className="h-[100vh] basis-1/5 bg-[#10295B] my-[2vh] ml-[1vw] pl-[1.5vw] pt-[2vh] rounded-xl">
          <p>DASHBOARD</p>
          <p>CRM</p>
          <div className="h-auto w-[100%] flex flex-col place-items-start gap-3">
          {crm.map((item) => (
            <div key={item.id} className="h-auto w-auto flex flex-row gap-2">
              <div className="text-white">{item.icon}</div>
              <p className="text-white text-[13px]">{item.title}</p>
            </div>
          ))}
          </div>

          {/* {crm.map((benefit) => (
        <div
          key={benefit.id}
          className="w-full flex flex-row "
        >
          <div className="text-white">{crm.icon}</div>
          <p className="text-white">{crm.title}</p>
        </div>
      ))} */}
          <p>MARKET PLACE</p>
          <p>COMPANY</p>
          <p>SYSTEM</p>
        </div>
        <div className="h-[100vh] basis-4/5 bg-white"></div>
      </div>
    </div>
  );
};

export default Portal;
