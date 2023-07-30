import { services } from "../constants"

const Dropdown = () => {
  return (
    <div>
        <ul className={`h-auto w-[25vw] list-none xs:hidden lg:flex flex-col py-[8px] text-sm text-center bg-white text-black rounded-2xl fixed z-20`}>
            {services.map((service) => (
                <li key={service.id} className="py-[5px] cursor-pointer hover:text-[#0ef] hover:font-bold hover:underline hover:underline-offset-8">
                    <a href={`#${service.id}`}>{service.title}</a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Dropdown