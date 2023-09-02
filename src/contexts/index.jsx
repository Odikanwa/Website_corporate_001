/* eslint-disable react/prop-types */
import DropdownContextProvider from "./DropdownContext";
import ModalContextProvider from "./ModalContext";

const ContextProvider = ({children}) => {
    return (
        <ModalContextProvider>
            <DropdownContextProvider>
                {children}
            </DropdownContextProvider>
        </ModalContextProvider>
    )
}

export default ContextProvider;