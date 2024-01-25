import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import {MotiView,  MotiText} from 'moti';

export const Container = styled(TouchableOpacity)`

    flex: 1;
    margin-bottom: 24px;
    border-bottom-width: 0.5px;
    border-bottom-color: #DADADA ;

`;

export const Date = styled.Text`

    color: #DADADA;
    font-weight: bold;

`;

export const Content = styled.View`

    flex-direction: row;
    justify-content: space-between;
    margin-top: 2px;
    margin-bottom: 8px;

`;

export const Label = styled.Text`

    font-weight: bold;
    font-size: 16px;

`;

export const Value = styled(MotiText)`

    font-size: 16px;
    color: #2ECC71;
    font-weight: bold;

`;

export const Espenses = styled(MotiText)`

    font-size: 16px;
    color: #E74C3C;
    font-weight: bold;

`;

export const Skeleton = styled.View`

    margin-top: 6px;
    height: 10px;
    width: 80px;
    border-radius: 8px;
    background-color: #DADADA;

`;