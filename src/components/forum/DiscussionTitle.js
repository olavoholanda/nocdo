import React from "react";
import {Toolbar, ToolbarGroup} from "material-ui/Toolbar";
import FontIcon from "material-ui/FontIcon";
import {cyan500, grey500} from "material-ui/styles/colors";
import Divider from "material-ui/Divider";
import {Card, CardHeader, CardText, CardTitle} from "material-ui/Card";
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

const MessageTitleCard = () => (
    <Card style={{margin: 15}}>
        <CardTitle title="Vida em condomínio: sonho ou pesadelo?" subtitle={
            <div style={{color: grey500, display: "inline-flex"}}>
                <span style={{margin: "2px 0 0 0"}}>Tópico criado em 15/07/2017 - </span>
                <FontIcon style={{color: grey500, marginLeft: 5, fontSize: 20}} className="material-icons">question_answer</FontIcon>
                <span style={{margin: "2px 0 0 5px"}}>15 Respostas</span>
            </div>
        }/>
        <Divider />
        <CardHeader
            title="Kimmy Copper"
            subtitle="Morador"
            avatar="/avatars/kimmy.jpg"
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

export default MessageTitleCard;
