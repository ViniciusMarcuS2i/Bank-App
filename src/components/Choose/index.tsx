import { Container, Text } from "./styles";
import {Feather} from "@expo/vector-icons"

type Props = {
    nome: string;
    icon: string;
}

export function Choose ({nome, icon}: Props){
    return(
    <Container>
        <Text>{nome}</Text>
        <Feather name={icon} color="#000" size={28} />
    </Container>);
}