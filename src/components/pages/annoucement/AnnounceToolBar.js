import React from 'react'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import {Toolbar, ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar'
import {grey700} from 'material-ui/styles/colors'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import AnnounceDialog from './AnnounceDialog'

let style = {
    backgroundColor: "#eeeeee"
};

class AnnounceToolBar extends React.Component {

    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        return (
            <div>
                <Toolbar style={style}>
                    <ToolbarGroup firstChild={true}>
                        <span style={{marginLeft: 20, color: grey700, fontSize: 14}}>Avisos Recentes</span>
                        <IconButton touch={true}>
                            <FontIcon className="material-icons">view_headline</FontIcon>
                        </IconButton>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <TextField hintText="Buscar"/>
                        <FontIcon className="material-icons">search</FontIcon>
                        <ToolbarSeparator />
                        <RaisedButton label="Novo Aviso" secondary={true} onTouchTap={() => this.handleOpen()}/>
                    </ToolbarGroup>
                </Toolbar>
                <AnnounceDialog open={this.state.open} handler={this.handleClose}/>
            </div>
        );
    }
}

export default AnnounceToolBar;
