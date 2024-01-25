import { Container, Text, Itens, AreaButton} from "./styles";
import {AntDesign} from "@expo/vector-icons"

export function Actions(){
    return( 
        <Container horizontal={true} showsHorizontalScrollIndicator={false}>
            <Itens>
                <AreaButton>
                    <AntDesign name="addfolder" size={26} color={"#000"}/>
                </AreaButton>
                <Text>Entradas</Text>
            </Itens>

            <Itens>
                <AreaButton>
                    <AntDesign name="tagso" size={26} color={"#000"}/>
                </AreaButton>
                <Text>Compras</Text>
            </Itens>

            <Itens>
                <AreaButton>
                    <AntDesign name="creditcard" size={26} color={"#000"}/>
                </AreaButton>
                <Text>Carteira</Text>
            </Itens>

            <Itens>
                <AreaButton>
                    <AntDesign name="barcode" size={26} color={"#000"}/>
                </AreaButton>
                <Text>Boletos</Text>
            </Itens>

            <Itens>
                <AreaButton>
                    <AntDesign name="setting" size={26} color={"#000"}/>
                </AreaButton>
                <Text>Conta</Text>
            </Itens>

        </Container>

    );

}