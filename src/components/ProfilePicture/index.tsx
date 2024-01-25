import { Image } from "native-base";
import { useContext } from "react";
import { AppProvider } from "../../context/AppContext";
import { AppContext } from "../../context/AppContext";

interface PictureSize {
    size: number;
}


export function ProfilePicture({size} :PictureSize){
    
    const { profileImage } = useContext(AppContext)
    return(
        <AppProvider>
        <Image
            source={{uri: profileImage}}
            w={size}
            h={size}
            resizeMode="cover"
            rounded="full"
            alt="Imagem de perfil"
        />
        </AppProvider>
    );
}