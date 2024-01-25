import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";


export const Container = styled.View`

    flex: 1;
    background-color: #FAFAFA;

`;


export const Header = styled(SafeAreaView)`
    flex-direction: row;
    background-color: #000;
    justify-content: flex-start;
    align-items: center;
`;

export const Perfil = styled.Text`

    font-size: 16px;
    color: #FFF;
    font-weight: bold;
    padding-top: 12px;
    margin-left: 150px;
    padding-bottom: 9px;


`;


export const Info = styled.View`

    //border: 1px solid #000;
    margin-left: 16px;
    margin-right: 16px;
    background-color: #FFF;
    padding-left: 8px;
    padding-right: 8px;
    border-radius: 12px;
    justify-content: flex-start;
    margin-top: 12px;
    border-bottom-right-radius: 1px;
    border-bottom-left-radius: 1px;
    flex-direction: row;
    align-items: center;
    z-index: 99;
`;

export const BackIcon = styled(TouchableOpacity)`

    padding-top: 10px;
    justify-content: center;
    align-items: center;
    margin-left: 16px;
    
`;

export const ProfileIcon = styled.View`
    margin-top: 12px;
    //border: 1px solid #000;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
`;

export const View = styled.View`

   margin-left: 12px;

`;

export const Text = styled.Text`
    
    font-weight: bold;
    font-size: 16px;

`;

export const Text2 = styled.Text`
    font-weight: bold;
    font-size: 16px;
    margin-top: 16px;
`;

export const Cam = styled(TouchableOpacity)`

    margin-left: 50px;
    
`;

export const Coop = styled.Text`
    margin-top: 16px;
    font-size: 16px;
    font-weight: bold;

`;

export const Bank = styled.Text`
    font-weight: bold;
    margin-top: 4px;
    font-size: 16px;
    margin-bottom: 16px;


`;

export const Dados = styled.View`
    //border: 1px solid #000;
    background-color: #FFF;
    margin-left: 16px;
    margin-right: 16px;
    padding-left: 8px;
    padding-right: 8px;
    border-radius: 12px;
    border-top-right-radius: 1px;
    border-top-left-radius: 1px ;
    margin-top: -1px;
    justify-content: center;
    align-items: center;

`;



