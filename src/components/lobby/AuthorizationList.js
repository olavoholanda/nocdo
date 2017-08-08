import React from 'react'
import {Toolbar, ToolbarGroup, ToolbarSeparator} from "material-ui/Toolbar";
import FontIcon from "material-ui/FontIcon";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import {grey700} from "material-ui/styles/colors";
import {Table, TableBody, TableHeaderColumn, TableRow, TableRowColumn,} from 'material-ui/Table';
import Paper from "material-ui/Paper";
import Avatar from "material-ui/Avatar";
import ListItem from "material-ui/List/ListItem";
import fixedData from "./authorizations_data.json";

const SubHeader = () => (
    <Toolbar style={{backgroundColor: 'transparent'}}>
        <ToolbarGroup firstChild={true}>
            <span style={{marginLeft: 20, color: grey700, fontSize: 14}}>Lista de Autorizados: </span>
        </ToolbarGroup>
        <ToolbarGroup>
            <TextField hintText="Buscar"/>
            <FontIcon className="material-icons">search</FontIcon>
            <ToolbarSeparator/>
            <RaisedButton label="Nova Autorização" href="/doorway/new" primary={true}/>
        </ToolbarGroup>
    </Toolbar>
);

const AvatarColumn = (props) => (
    <ListItem
        disabled={true}
        leftAvatar={<Avatar style={{left: 0}} size={30} src={"/avatars/" + props.img + ".jpg"}/>}
        primaryText={<div style={{fontSize: 13}}>{props.name}</div>}
        style={{padding: "15px 0px 12px 40px"}}
    />
);

class AuthorizationList extends React.Component {
    render() {
        return (
            <div>
                <SubHeader/>
                <Paper style={{margin: 15}}>
                    <Table style={{tableLayout: 'auto'}}>
                        <TableBody displayRowCheckbox={false}>
                            <TableRow selectable={false}>
                                <TableHeaderColumn>Nome</TableHeaderColumn>
                                <TableHeaderColumn>Descrição</TableHeaderColumn>
                                <TableHeaderColumn>Autorizado Por</TableHeaderColumn>
                                <TableHeaderColumn>Duração da Autorização</TableHeaderColumn>
                                <TableHeaderColumn>Data da Autorização</TableHeaderColumn>
                            </TableRow>
                            {fixedData.map((auth) => (
                                <TableRow key={auth.id}>
                                    <TableRowColumn>
                                        <AvatarColumn img={auth.authorizedImg} name={auth.authorizedName} />
                                    </TableRowColumn>
                                    <TableRowColumn>{auth.authDescription}</TableRowColumn>
                                    <TableRowColumn>
                                        <AvatarColumn img={auth.ownerUsername} name={auth.owner} />
                                    </TableRowColumn>
                                    <TableRowColumn>{auth.authDuration}</TableRowColumn>
                                    <TableRowColumn>{auth.date}</TableRowColumn>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}

export default AuthorizationList;
