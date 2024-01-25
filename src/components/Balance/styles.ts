import styled from "styled-components/native";
import { MotiView } from "moti";

export const Container = styled(MotiView)`

    background-color: #FFF;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 18px;
    padding-right: 18px;
    margin-top: -24px;
    margin-left: 14px;
    margin-right: 14px;
    border-radius: 4px;
    padding-top: 22px;
    padding-bottom: 22px;
    z-index: 99;
`;

export const Item = styled.View`



`;

export const Text = styled.Text`

    font-size: 20px;
    color: #DADADA;


`;

export const View = styled.View`

    flex-direction: row;
    align-items: center;

`;

export const Simbolo = styled.Text`

    color: #DADADA;
    margin-right: 6px;

`;

export const NoSimbolo = styled.Text`
    display: none;
    color: #DADADA;
    margin-right: 6px;

`;

export const Money = styled.Text`

    font-size: 22px;
    color: #2ECC71;

`;

export const Expenses = styled.Text`

    font-size: 22px;
    color: #E74C3C;

`;

export const HideMoney = styled.Text`
font-size: 22px;
color: #DADADA;



`;

export const HideExpenses = styled.Text`
font-size: 22px;
color: #DADADA;

`;