import { ReactNode, createContext, useState } from "react";

interface AppProviderProps {
    children: ReactNode;
}

interface AppContextTypes {
    profileImage: string;
    setProfileImage: (url:string) => void;
}

export const AppContext = createContext({} as AppContextTypes)

export const AppProvider = ({children}: AppProviderProps) => {
    const [profileImage, setProfileImage] = useState("https://github.com/ViniciusMarcuS2i.png");
    return(
        <AppContext.Provider value={{
            profileImage,
            setProfileImage
        }}>
            {children}
        </AppContext.Provider>
    );
}