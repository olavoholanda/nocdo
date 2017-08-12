import React from 'react'
import {Toolbar, ToolbarGroup, ToolbarSeparator} from "material-ui/Toolbar";
import FontIcon from "material-ui/FontIcon";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import {grey700} from "material-ui/styles/colors";
import * as roles from "../../utils/roles";
import {Table, TableBody, TableHeaderColumn, TableRow, TableRowColumn,} from 'material-ui/Table';
import Paper from "material-ui/Paper";
import fixedData from "./documents_data.json";
import FileTypeIcon from "../common/FileTypeIcon";

class SubHeader extends React.Component {

    constructor(props) {
        super(props);

        let role = localStorage.getItem("role");
        if(role === null){
            this.state = {
                role: roles.ROLE_RESIDENT
            };
        } else {
            this.state = {
                role: role
            };
        }
    }

    render() {

        let adminButton = '';
        if(this.state.role === roles.ROLE_MANAGER){
            adminButton = <RaisedButton label="Enviar Documento" href="/in/documents/upload" primary={true}/>;
        }

        return (
            <Toolbar style={{backgroundColor: 'transparent'}}>
                <ToolbarGroup firstChild={true}>
                    <span style={{marginLeft: 20, color: grey700, fontSize: 14}}>Documentos do Condomínio: </span>
                </ToolbarGroup>
                <ToolbarGroup>
                    <TextField hintText="Buscar"/>
                    <FontIcon className="material-icons">search</FontIcon>
                    <ToolbarSeparator/>
                    {adminButton}
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

class DocumentsList extends React.Component {
    render() {
        return (
            <div>
                <SubHeader/>
                <Paper style={{margin: 15}}>
                    <Table style={{tableLayout: 'auto'}}>
                        <TableBody displayRowCheckbox={false}>
                            <TableRow selectable={false}>
                                <TableHeaderColumn>Tipo</TableHeaderColumn>
                                <TableHeaderColumn>Nome do Arquivo</TableHeaderColumn>
                                <TableHeaderColumn>Criador</TableHeaderColumn>
                                <TableHeaderColumn>Data</TableHeaderColumn>
                                <TableHeaderColumn>Tamanho</TableHeaderColumn>
                            </TableRow>
                            {fixedData.map( (document) => (
                                <TableRow key={document.id}>
                                    <TableRowColumn>
                                        <FileTypeIcon type={document.type}/>
                                    </TableRowColumn>
                                    <TableRowColumn>{document.name}</TableRowColumn>
                                    <TableRowColumn>{document.owner}</TableRowColumn>
                                    <TableRowColumn>{document.date}</TableRowColumn>
                                    <TableRowColumn>{document.size}</TableRowColumn>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}

export default DocumentsList;
