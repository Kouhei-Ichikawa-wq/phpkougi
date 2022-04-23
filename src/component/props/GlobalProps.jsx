import { createContext } from "react";

export const GlobalSS = createContext();

export const GlobalSSProvider = (props) =>{
    const Mojiretsu = "しお";
    const {children} = props;
    return(
        <GlobalSS.Provider value={Mojiretsu}>
            {children}
        </GlobalSS.Provider>
    );
}
