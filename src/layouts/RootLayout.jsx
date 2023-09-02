import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
// import { DropdownContext } from "../contexts/DropdownContext";
// import { useState } from "react";
import Dropdown from "../components/Dropdown";
import DropdownContextProvider from "../contexts/DropdownContext";
// import { ContextProvider } from "../stateMgt/context";
import ContextProvider from "../contexts";

const RootLayout = () => {
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  // const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      {/* <DropdownContextProvider> */}
      <ContextProvider>
        <header>
          <Navbar />
        </header>

        <div className="hidden lg:flex m-0 absolute inset-0 top-[9%] left-[70%] text-center max-w-0 lg:max-w-7xl items-start">
          <Dropdown />
        </div>

        <main>
          <Outlet />
        </main>

        <footer>
          <Footer />
        </footer>
        </ContextProvider>
      {/* </DropdownContextProvider> */}
    </div>
  );
};

export default RootLayout;

{/* <ThemeProvider>
  <FunctionContextComponent/>
</ThemeProvider> */}
