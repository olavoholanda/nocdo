import React from "react";
import {Toolbar, ToolbarGroup} from "material-ui/Toolbar";
import FontIcon from "material-ui/FontIcon";
import {cyan500, grey500, blueGrey50} from "material-ui/styles/colors";
import {Card, CardHeader, CardText} from "material-ui/Card";
import Checkbox from "material-ui/Checkbox";

class LikeButton extends React.Component {
    render() {
        return (
            <Toolbar style={{backgroundColor:"transparent", color: grey500}}>
                <ToolbarGroup firstChild={true}>
                    <span>Postado em 15/07/2017</span>
                </ToolbarGroup>
                <ToolbarGroup>
                    <Checkbox
                        checkedIcon={<FontIcon style={{color: cyan500, fontSize: 20}} className="material-icons">thumb_up</FontIcon>}
                        uncheckedIcon={<FontIcon style={{color: grey500, fontSize: 20}} className="material-icons">thumb_up</FontIcon>}
                        inputStyle={{width:"100px"}}
                        labelPosition="left"
                        label={
                            <div>
                                <span style={{color: grey500}}>12</span>
                                <span style={{color: grey500, marginRight: 10}}>&nbsp;curtidas</span>
                            </div>
                        }
                    />
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

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
                    <LikeButton/>
                </CardText>
            </Card>
        );
    }
}

export default MessageListItem;
