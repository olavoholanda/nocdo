import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import Paper from "material-ui/Paper";
import * as roles from "../../utils/roles";
import {Toolbar, ToolbarGroup} from "material-ui/Toolbar";
import {grey700} from "material-ui/styles/colors";

const SubHeader = () => (
    <Toolbar style={{backgroundColor: "transparent"}}>
        <ToolbarGroup firstChild={true}>
            <span style={{marginLeft: 20, color: grey700, fontSize: 14}}>Enviar Arquivo</span>
        </ToolbarGroup>
    </Toolbar>
);

class DocumentForm extends React.Component {

    constructor(props) {
        super(props);

        let role = localStorage.getItem("role");
        if(role !== roles.ROLE_MANAGER){
            window.location.replace('/forbidden');
        }

        this.state = {
            name: '',
            type: undefined,
            owner: undefined,
            date: undefined,
            size: undefined,
        };
    }

    handleNameChange = (e, newValue) => {
        e.preventDefault();
        this.setState({name: newValue});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let name = this.state.name.trim();
        if (!name) {
            return;
        }
        console.log('sending file');
        this.setState({
            name: '',
            type: undefined,
            owner: undefined,
            date: undefined,
            size: undefined
        });

        window.location.replace('/documents/list');
    };

    render() {
        return (
        <div>
            <SubHeader/>
            <Paper style={{margin: 15, padding: 50}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        floatingLabelText="Nome do Arquivo"
                        floatingLabelFixed={true}
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        fullWidth={true}
                        required
                    /><br />
                    <TextField
                        floatingLabelText="Caminho do Arquivo: "
                        floatingLabelFixed={true}
                        fullWidth={true}
                        required
                    /><br />
                    <RaisedButton
                        style={{float: 'left'}}
                        label="Descartar"
                        href="/documents/list"
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

export default DocumentForm;
