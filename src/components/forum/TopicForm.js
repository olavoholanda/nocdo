import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import Paper from "material-ui/Paper";
import {Toolbar, ToolbarGroup} from "material-ui/Toolbar";
import {grey700} from "material-ui/styles/colors";

const style = {
    backgroundColor: "#eeeeee"
};

class SubHeader extends React.Component {

    render() {

        let title = "Novo Tópico";
        if (this.props.edit) {
            title = "Editar Tópico";
        }

        return (
            <Toolbar style={style}>
                <ToolbarGroup firstChild={true}>
                    <span style={{marginLeft: 20, color: grey700, fontSize: 14}}>{title}</span>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

class NewTopicForm extends React.Component {

    constructor(props) {
        super(props);

        if (this.props.match.params.id === undefined) {
            this.state = {
                title: '',
                text: '',
                edit: false,
                data: undefined
            };
        } else {

            let data = {
                "id": "14",
                "title": "Para os novos moradores. Boas vindas!",
                "date": "05/01/2017",
                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            };

            this.state = {
                title: data.title,
                text: data.text,
                edit: true,
                data: data
            };
        }
    }

    handleTitleChange = (e, newValue) => {
        e.preventDefault();
        this.setState({title: newValue});
    };

    handleTextChange = (e, newValue) => {
        e.preventDefault();
        this.setState({text: newValue});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let title = this.state.title.trim();
        let text = this.state.text.trim();
        if (!title || !text) {
            return;
        }
        // TODO: send request to the server
        if (this.props.params === undefined) {
            //updating an existing one
            console.log('creating topic');
        } else {
            //creating a new announce
            console.log('updating topic');
        }
        this.setState({title: '', text: '', data: undefined});
    };

    render() {
        return (
        <div>
            <SubHeader edit={this.state.edit}/>
            <Paper style={{margin: 15, padding: 50}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        floatingLabelText="Título do Tópico: "
                        floatingLabelFixed={true}
                        value={this.state.title}
                        onChange={this.handleTitleChange}
                        fullWidth={true}
                        required
                    /><br />
                    <TextField
                        floatingLabelText="Mensagem: "
                        floatingLabelFixed={true}
                        value={this.state.text}
                        onChange={this.handleTextChange}
                        fullWidth={true}
                        multiLine={true}
                        rows={10}
                        required
                    /><br />
                    <RaisedButton
                        style={{float: 'left'}}
                        label="Descartar"
                        href="/in/forum/topics"
                    />
                    <RaisedButton
                        style={{float: 'right'}}
                        label="Salvar"
                        type="submit"
                        value="Post"
                        primary={true}
                    />
                </form>
            </Paper>
        </div>

        );
    }
}

export default NewTopicForm;
