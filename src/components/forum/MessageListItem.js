import React from "react";
import {blueGrey50} from "material-ui/styles/colors";
import {Card, CardHeader, CardText} from "material-ui/Card";
import MessageFooter from "./MessageFooter";

class MessageListItem extends React.Component {
    render() {

        let stripe = {};

        if(this.props.odd){
            stripe = {backgroundColor: blueGrey50};
        }

        return (
            <Card style={stripe}>
                <CardHeader
                    title="Ryan Atwood"
                    subtitle="Morador"
                    avatar="/avatars/ryan.jpg"
                />
                <CardText>
                    Com seus altos muros, portaria equipada e uma proposta de maior segurança e melhor qualidade de vida, os chamados
                    “condomínios fechados” têm sido, cada vez mais, a opção de moradia das famílias das classes média e alta brasileiras.
                    Os grandes loteamentos, com casas confortáveis, quintais amplos e farta área de lazer, são encontrados nos arredores
                    de praticamente todas as grandes e médias cidades. O que vocês acham?
                    <MessageFooter/>
                </CardText>
            </Card>
        );
    }
}

export default MessageListItem;
