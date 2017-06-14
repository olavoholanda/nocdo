import React from "react";
import AnnounceListExpanded from "./AnnounceListExpanded";
import {Toolbar, ToolbarGroup, ToolbarSeparator} from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import FontIcon from "material-ui/FontIcon";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import {grey700} from "material-ui/styles/colors";

//TODO - Change this to a material color
let style = {
    backgroundColor: "#eeeeee"
};

class CustomToolBar extends React.Component {

    render() {
        return (
            <Toolbar style={style}>
                <ToolbarGroup firstChild={true}>
                    <span style={{marginLeft: 20, color: grey700, fontSize: 14}}>Avisos Recentes</span>
                    {/*TODO - when click this button change from expanded to collapsed */}
                    <IconButton touch={true}>
                        <FontIcon className="material-icons">view_headline</FontIcon>
                    </IconButton>
                </ToolbarGroup>
                <ToolbarGroup>
                    <TextField hintText="Buscar"/>
                    <FontIcon className="material-icons">search</FontIcon>
                    <ToolbarSeparator/>
                    <RaisedButton label="Novo Aviso" secondary={true} onTouchTap={this.props.handler}/>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

class ViewAnnounceAdmin extends React.Component {

    render() {
        return (
            <div>
                <CustomToolBar/>
                <AnnounceListExpanded />
            </div>
        );
    }
}

export default ViewAnnounceAdmin;
