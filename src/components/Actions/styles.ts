import styled from "styled-components/native";
import { TouchableOpacity, ScrollView } from "react-native";

export const Container = styled(ScrollView)`

    max-height: 84px;
    margin-bottom: 14px;
    margin-top: 18px;
    padding-left: 14px;
    padding-right: 14px;

`;

export const Text = styled.Text`

    margin-top: 4px;
    text-align: center;
    font-weight: bold;

`;

export const Itens = styled(TouchableOpacity)`

    align-items: center;
    margin-right: 32px; 


`;

export const AreaButton = styled.View`

    background-color: #ECF0F1;
    height: 60px;
    width: 60px;
    justify-content: center;
    align-items: center;
    border-radius: 30px;

`; 