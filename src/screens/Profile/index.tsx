import { useNavigation } from "@react-navigation/native";
import { Container, Header, Info, Perfil, BackIcon, ProfileIcon, View, Text, Text2, Cam, Coop, Bank, Dados} from "./styles";
import {Feather} from '@expo/vector-icons'
import { Choose } from "../../components/Choose";
import { Exit } from "../../components/Exit";
import { ScrollView } from "native-base";
import { ProfilePicture } from "../../components/ProfilePicture";
import * as ImagePicker from 'expo-image-picker'
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export function Profile(){
    const Navigation = useNavigation();
    const {setProfileImage} = useContext(AppContext);

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,       
        });

        if (!result.canceled) {
            setProfileImage(result.assets[0].uri);
        }
    }


    return(

        <Container >
            <Header>
                <BackIcon onPress={() => Navigation.navigate('Home') }><Feather name="arrow-left" color="#FFF" size={24} /></BackIcon>
                <Perfil>PERFIL</Perfil>
            </Header>
            <ScrollView>
            <Info>
                <ProfileIcon>
                    <ProfilePicture size={20}/>
                </ProfileIcon>
                <View>
                    <Text>Marcus Nonato</Text>
                    <Text2>Conta corrente individual</Text2>
                </View>
                    <Cam onPress={pickImage}><Feather name="camera" size={25}/></Cam>
            </Info>
            <Dados>
                <Coop>Cooperativa: 4002 | Conta: 50625-6</Coop>
                <Bank>Banco 744 - Bco Federal Naum Tróko Tiru</Bank>
            </Dados>
            
            <Choose nome="MEUS DADOS" icon="user"/>
            <Choose nome="CONFIGURAÇÕES DA CONTA" icon="users"/>
            <Choose nome="NOTIFICAÇÕES" icon="message-square"/>
            <Choose nome="GESTÃO DE DADOS" icon="upload-cloud"/>
            <Choose nome="OFERTAS INCLUSAS" icon="dollar-sign"/>
            <Choose nome="CONFIGURAÇÕES DO APP" icon="settings"/>
            <Choose nome="TERMOS E CONDIÇÕES" icon="book-open"/>
            
            <Exit />
            </ScrollView>

        </Container>


    );
}