import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
    //border: 1px solid #000;
    background-color: #FFF;
    margin-right: 16px;
    border-radius: 6px;
    height: 75px;
    margin-left: 16px;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 12px;
    align-items: center;
    padding-left: 14px;
    padding-right: 14px;
    
`;

export const Text = styled.Text`
   
    font-size: 14px;
    font-weight: bold;
    color: #000;
`;
