import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import Paper from "material-ui/Paper";
import * as roles from "../../utils/roles";
import {Toolbar, ToolbarGroup} from "material-ui/Toolbar";
import {grey700} from "material-ui/styles/colors";

import list from "./sample_data.json";

const style = {
    backgroundColor: "#eeeeee"
};

class SubHeader extends React.Component {

    render() {

        let title = "Novo Aviso";
        if (this.props.edit) {
            title = "Editar Aviso";
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

class AnnounceForm extends React.Component {

    constructor(props) {
        super(props);

        let role = localStorage.getItem("role");
        if(role !== roles.ROLE_MANAGER){
            window.location.replace('/forbidden');
        }

        if (this.props.match.params.id === undefined) {
            this.state = {
                title: '',
                text: '',
                edit: false,
                data: undefined
            };
        } else {

            let data;

            for (let i = 0; i < list.length; i++) {
                if (list[i].id === this.props.match.params.id) {
                    data = list[i];
                }
            }

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
            console.log('creating announce');
        } else {
            //creating a new announce
            console.log('updating announce');
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
                        floatingLabelText="Título do Aviso: "
                        floatingLabelFixed={true}
                        value={this.state.title}
                        onChange={this.handleTitleChange}
                        fullWidth={true}
                        required
                    /><br />
                    <TextField
                        floatingLabelText="Aviso: "
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
                        href="/in/announce/list"
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

export default AnnounceForm;
