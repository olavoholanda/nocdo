import React from "react";
import {blueGrey50} from "material-ui/styles/colors";
import {Card, CardHeader, CardText} from "material-ui/Card";
import MessageFooter from "./MessageFooter";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

const messageText = "Com seus altos muros, portaria equipada e uma proposta de maior segurança e melhor qualidade de vida, os chamados" +
    "“condomínios fechados” têm sido, cada vez mais, a opção de moradia das famílias das classes média e alta brasileiras." +
    "Os grandes loteamentos, com casas confortáveis, quintais amplos e farta área de lazer, são encontrados nos arredores" +
    "de praticamente todas as grandes e médias cidades. O que vocês acham?";

class MessageListItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "Ryan Atwood",
            role: 'Morador',
            username: "ryan",
            text: messageText,
            editText: messageText,
            edit: false,
        };
    }

    handleTextChange = (e, newValue) => {
        e.preventDefault();
        this.setState({editText: newValue});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let text = this.state.editText.trim();
        if (!text) {
            return;
        }
        // TODO: send request to the server
        console.log('updating message');
        this.setState({text: text, editText: text, edit: false});
    };

    onTouchEdit = () => {
        this.setState({edit: true});
    };

    onTouchCancelEdit = () => {
        this.setState({edit: false, editText: this.state.text});
    };

    render() {

        let stripe = {};

        if(this.props.odd){
            stripe = {backgroundColor: blueGrey50};
        }

        let body;

        if(this.state.edit){
            body = (
                <CardText style={{paddingBottom: 50}}>
                    <form onSubmit={this.handleSubmit}>
                        <TextField floatingLabelText="Mensagem: "
                                   floatingLabelFixed={true}
                                   value={this.state.editText}
                                   onChange={this.handleTextChange}
                                   fullWidth={true}
                                   multiLine={true}
                                   required
                        /><br />
                        <RaisedButton
                            style={{float: 'left'}}
                            label="Descartar"
                            onTouchTap={this.onTouchCancelEdit}
                        />
                        <RaisedButton
                            style={{float: 'right'}}
                            label="Salvar"
                            type="submit"
                            value="Post"
                            primary={true}
                        />
                    </form>
                </CardText>
            );
        } else {
            body = (
                <CardText>
                    {this.state.text}
                    <MessageFooter handlerFunction={this.onTouchEdit}/>
                </CardText>
            );
        }

        return (
            <Card style={stripe}>
                <CardHeader
                    title={this.state.name}
                    subtitle={this.state.role}
                    avatar={"/avatars/" + this.state.username + ".jpg"}
                />
                {body}
            </Card>
        );
    }
}

export default MessageListItem;
