import { useNavigation } from "@react-navigation/native";
import { Container, Text, Icone, Content } from "./styles";
import { ProfilePicture } from "../ProfilePicture";


type Props = {
    nome: string;
}

export function Header({nome}: Props){
    const Navigation = useNavigation();
    return(
    <Container>
        <Content
            from={{
                translateY: -150,
                opacity:0,
            }}
            animate={{
                translateY:0,
                opacity:1,
            }}
            transition={{
                type: "spring",
                duration: 800,
                delay: 300,
            }}
         >
            <Text 
            from={{
                translateX: -300
            }}
            animate={{
                translateX: 0
            }}
            transition={{
                type: "spring",
                duration: 800,
                delay: 800,
            }}
            >
                Olá, {nome}
            </Text>
            <Icone onPress={() => Navigation.navigate('Profile')}>
                <ProfilePicture size={16}/>
            </Icone>
        </Content>
    </Container>
);}