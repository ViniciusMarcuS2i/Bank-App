import styled from "styled-components/native";
import {FlatList} from "react-native";


export const Container = styled.View`

    flex: 1;
    background-color: #fafafa;

`;

export const Title = styled.Text`

    font-size: 18px;
    font-weight: bold;
    margin: 14px;

`;

export const Flat = styled(FlatList)`

    margin-left: 14px;
    margin-right: 14px;

`;