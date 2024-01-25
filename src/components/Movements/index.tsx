import { Container, Date, Content, Label, Value, Espenses, Skeleton } from "./styles";
import { useState } from "react";
import { AnimatePresence } from "moti";

interface MovementsProps {
    item: {
        date: string;
        label: string;
        value: string;
        type: number;
        id?: string;
    }
}

export function Movements({item}: MovementsProps){
    const [showValue, setShowValue] = useState(false);

    return(

        <Container onPress={() => setShowValue(!showValue)}>
            <Date>
                {item.date}
            </Date>
            <Content>
                <Label>{item.label}</Label>
                {showValue ? item.type === 1 ? <Value >R$ ${item.value}</Value> : <Espenses >R$ -{item.value}</Espenses> : 
                    <Skeleton />
                 }
            </Content>

        </Container>

    );
}