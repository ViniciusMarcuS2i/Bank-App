import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`

    background-color: #000;
    justify-content: center;
    align-items: center;
    margin-left: 16px;
    margin-right: 16px;
    border-radius: 4px;
    margin-top: 12px;
    height: 65px;


`;

export const Text = styled.Text`

    color: #FFF;
    font-size: 14px;
    font-weight: bold;
`;