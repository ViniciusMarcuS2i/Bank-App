import { Container, Title, Flat } from "./styles";
import { Header } from "../../components/Header";
import { Balance } from "../../components/Balance";
import { Movements } from "../../components/Movements";
import { Actions } from "../../components/Actions";

const list = [
    {
        id: 1,
        label: 'Boleto conta luz',
        value: '300,90',
        date : '05/10/2023', 
        type : 0 // despesas
    },
    {
        id: 2,
        label: 'Pix Cliente X',
        value: '2.500,00',
        date : '13/10/2023', 
        type : 1 // receitas / entradas
    },
    {
        id: 3,
        label: 'Salário',
        value: '7.200,00',
        date : '17/10/2023', 
        type : 1 // receitas / entradas
    },
]

export function Home(){
    return(
        <Container>
            <Header nome="Marcus Vinicius" />
            <Balance saldo="15.000,00" gastos="390,00" />
            <Actions />
            <Title>Últimas movimentações</Title>
            <Flat 
            data={list}
            keyExtractor={ (item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <Movements item={item}/>}
            />
        </Container>
        
    );
}