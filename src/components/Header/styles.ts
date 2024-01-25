import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import {MotiView, MotiText} from 'moti';
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`

    background-color: #000;
    flex-direction: row;
    padding-top: 15px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 30px;
    justify-content: space-between;
    align-items: center;

`;

export const Text = styled(MotiText)`

    font-size: 20px;
    color: #FFF;
    font-weight: bold;

`;

export const Icone = styled(TouchableOpacity)`

    justify-content: center;
    align-items: center;

`;

export const Content = styled(MotiView)`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`;