/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

export const ModalContext = createContext({});

const ModalContextProvider = ({children}) => {
    const [modalOpen, setModalOpen] = useState(false);

    return(
        <ModalContext.Provider value={{modalOpen, setModalOpen}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error ("useModalContext can only be used in ModalContextprovider")
    }
    return context;
}

export default ModalContextProvider;

