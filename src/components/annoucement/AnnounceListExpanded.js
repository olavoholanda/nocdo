import React from 'react'
import AnnounceCard from './AnnounceCard'
import data from './sample_data.json'
import {Toolbar, ToolbarGroup, ToolbarSeparator} from "material-ui/Toolbar";
import FontIcon from "material-ui/FontIcon";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import {grey700} from "material-ui/styles/colors";
import * as roles from "../../utils/roles";

let style = {
    backgroundColor: "#eeeeee"
};

class CustomToolBar extends React.Component {

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
            adminButton = <RaisedButton label="Novo Aviso" href="/announce/save" primary={true}/>;
        }

        return (
            <Toolbar style={style}>
                <ToolbarGroup firstChild={true}>
                    <span style={{marginLeft: 20, color: grey700, fontSize: 14}}>Avisos Recentes</span>
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

class AnnounceListExpanded extends React.Component {
    render() {

        let list = data.map(function(a) {
            return (
                <AnnounceCard key={a.id} announcement={a}/>
            );
        });

        return (
            <div>
                <CustomToolBar/>
                {list}
            </div>
        );
    }
}

export default AnnounceListExpanded;
