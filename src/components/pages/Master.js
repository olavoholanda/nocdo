import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {blueGrey900, white} from 'material-ui/styles/colors';

var styleDrawer = {
    backgroundColor: blueGrey900
}

var styleWhite = {
    color: white
}

var styleContent = {
    paddingLeft: 255
}

var labelStyle = {
    textTransform: "capitalize",
    fontSize: 16
}

class Master extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 3,
        };
    }

    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
        <div>
            <Drawer open={true} zDepth={1} containerStyle={styleDrawer}>
                <MenuItem style={styleWhite} >Menu Item</MenuItem>
                <MenuItem style={styleWhite} >Menu Item 2</MenuItem>
            </Drawer>
            <div style={styleContent}>
            <Toolbar>
                <ToolbarGroup firstChild={true}>
                    {/*disable this icon and put an screent title icon*/}
                    <FlatButton
                        label="Feed"
                        labelStyle={labelStyle}
                        primary={true}
                        icon={<FontIcon className="material-icons" >rss_feed</FontIcon>}
                    />
                </ToolbarGroup>
                <ToolbarGroup>

                    <IconMenu
                        iconButtonElement={
                            <IconButton touch={true}>
                                <FontIcon className="material-icons" >notifications</FontIcon>
                            </IconButton>
                        }>
                        {/*aqui tem que ser um popover com os avatares e as ações deles*/}
                    </IconMenu>

                    <IconMenu
                        iconButtonElement={
                            <IconButton touch={true}>
                                <FontIcon className="material-icons" >person</FontIcon>
                            </IconButton>
                        }>
                        <MenuItem primaryText="Perfil" rightIcon={<FontIcon className="material-icons">account_circle</FontIcon>}/>
                        <MenuItem primaryText="Ajuda" rightIcon={<FontIcon className="material-icons">help</FontIcon>}/>
                        <Divider/>
                        <MenuItem primaryText="Sair" rightIcon={<FontIcon className="material-icons">exit_to_app</FontIcon>}/>
                    </IconMenu>
                </ToolbarGroup>
            </Toolbar>
            </div>
        </div>
        );
    }
}

export default Master;