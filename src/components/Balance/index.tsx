import { useState } from "react";
import { Container, Text, Item, View, Simbolo, Money, Expenses, HideExpenses, HideMoney, NoSimbolo  } from "./styles";

type Props = {
    saldo: string;
    gastos: string;
}

export function Balance({saldo, gastos}: Props){
    const [showMoney, setShowMoney] = useState(false);
    const [showExpenses, setShowExpenses] = useState(false);

    return(
        <Container 
            from = {{
                rotateX: '-100deg',
                opacity: 0,
            }}
            animate= {{
                rotateX: '0deg',
                opacity: 1,
            }}
            transition={{
                type: 'timing',
                delay: 300,
                duration: 900
            }}


           
        >
            <Item>
                <Text>
                  Saldo
                </Text>
                <View >
                    <Simbolo>R$</Simbolo>
                    {showMoney ? <Money onPress={() => setShowMoney(!showMoney)} >{saldo}</Money> : <HideMoney onPress={() => setShowMoney(!showMoney)}>****</HideMoney>}

                </View>
                
            </Item>

            <Item>
                <Text>
                  Gastos
                </Text>
                <View >
                    <Simbolo >R$</Simbolo>
                    {showExpenses ? <Expenses onPress={() => setShowExpenses(!showExpenses)}>-{gastos}</Expenses> : <HideExpenses onPress={() => setShowExpenses(!showExpenses)}>****</HideExpenses>}

                </View>
                
            </Item>
            
        </Container>
    );
}