import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import {Card, CardHeader, CardText} from "material-ui/Card";

class MessageAnswer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "Marissa Copper",
            role: 'Moradora',
            username: "marissa",
            text: ""
        };
    }

    componentDidMount(){
        this.responseInput.focus();
    }

    handleTextChange = (e, newValue) => {
        e.preventDefault();
        this.setState({text: newValue});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let text = this.state.text.trim();
        if (!text) {
            return;
        }
        // TODO: send request to the server
        console.log('creating message');
        this.setState({text: ''});
    };

    render() {
        return (
            <Card style={{marginTop: 15}}>
                <CardHeader
                    title={this.state.name}
                    subtitle={this.state.role}
                    avatar={"/avatars/"+this.state.username + ".jpg"}
                />
                <CardText>
                    <form onSubmit={this.handleSubmit}>
                        <TextField ref={(input) => { this.responseInput = input; }}
                                   floatingLabelText="Resposta: "
                                   floatingLabelFixed={true}
                                   value={this.state.text}
                                   onChange={this.handleTextChange}
                                   fullWidth={true}
                                   multiLine={true}
                                   required
                        /><br />
                        <RaisedButton
                            label="Publicar"
                            type="submit"
                            value="Post"
                            primary={true}
                        />
                    </form>
                </CardText>
            </Card>
        );
    }
}

export default MessageAnswer;
