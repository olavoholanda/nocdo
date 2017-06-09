import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import Drawer from 'material-ui/Drawer';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {blueGrey900, white, deepOrangeA400} from 'material-ui/styles/colors';

var styleDrawer = {
    backgroundColor: '#1a292c'
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
                {/*left nav bar with the menu application*/}
                <Drawer open={true} zDepth={1} containerStyle={styleDrawer}>
                    <List>
                        <ListItem hoverColor={deepOrangeA400} style={styleWhite} primaryText="Início" leftIcon={<FontIcon style={styleWhite} className="material-icons">home</FontIcon>} />
                        <ListItem hoverColor={deepOrangeA400} style={styleWhite} primaryText="Avisos" leftIcon={<FontIcon style={styleWhite} className="material-icons">announcement</FontIcon>} />
                        <ListItem hoverColor={deepOrangeA400} style={styleWhite} primaryText="Enquetes" leftIcon={<FontIcon style={styleWhite} className="material-icons">view_list</FontIcon>} />
                        <ListItem hoverColor={deepOrangeA400} style={styleWhite} primaryText="Forum" leftIcon={<FontIcon style={styleWhite} className="material-icons">forum</FontIcon>} />
                        <ListItem hoverColor={deepOrangeA400} style={styleWhite} primaryText="Portaria" leftIcon={<FontIcon style={styleWhite} className="material-icons">store</FontIcon>}
                              nestedItems={[
                                  <ListItem hoverColor={deepOrangeA400} style={styleWhite} key={1} primaryText="Visitas" leftIcon={<FontIcon style={styleWhite} className="material-icons">assignment_turned_in</FontIcon>} />,
                                  <ListItem hoverColor={deepOrangeA400} style={styleWhite} key={2} primaryText="Encomendas" leftIcon={<FontIcon style={styleWhite} className="material-icons">assignment_returned</FontIcon>} />,
                                  <ListItem hoverColor={deepOrangeA400} style={styleWhite} key={3} primaryText="Porteiros" leftIcon={<FontIcon style={styleWhite} className="material-icons">assignment_ind</FontIcon>} />,
                              ]}
                        />
                        <ListItem hoverColor={deepOrangeA400} style={styleWhite} primaryText="Reservas" leftIcon={<FontIcon style={styleWhite} className="material-icons">event</FontIcon>} />
                        <ListItem hoverColor={deepOrangeA400} style={styleWhite} primaryText="Colaboradores" leftIcon={<FontIcon style={styleWhite} className="material-icons">recent_actors</FontIcon>} />
                        <ListItem hoverColor={deepOrangeA400} style={styleWhite} primaryText="Administração" leftIcon={<FontIcon style={styleWhite} className="material-icons">account_balance</FontIcon>} />
                    </List>
                </Drawer>
                {/*the content itself with a padding left from the nav bar */}
                <div style={styleContent}>
                    <Toolbar>
                        <ToolbarGroup firstChild={true}>
                            {/*disable this icon and put an screent title icon*/}
                            <FlatButton
                                label="Feed"
                                labelStyle={labelStyle}
                                icon={<FontIcon className="material-icons">rss_feed</FontIcon>}
                            />
                        </ToolbarGroup>
                        <ToolbarGroup>

                            <IconMenu
                                iconButtonElement={
                                    <IconButton touch={true}>
                                        <FontIcon className="material-icons">notifications</FontIcon>
                                    </IconButton>
                                }>
                                {/*aqui tem que ser um popover com os avatares e as ações deles*/}
                            </IconMenu>

                            <IconMenu
                                iconButtonElement={
                                    <IconButton touch={true}>
                                        <FontIcon className="material-icons">person</FontIcon>
                                    </IconButton>
                                }>
                                <MenuItem primaryText="Perfil"
                                          rightIcon={<FontIcon className="material-icons">account_circle</FontIcon>}/>
                                <MenuItem primaryText="Ajuda"
                                          rightIcon={<FontIcon className="material-icons">help</FontIcon>}/>
                                <Divider/>
                                <MenuItem primaryText="Sair"
                                          rightIcon={<FontIcon className="material-icons">exit_to_app</FontIcon>}/>
                            </IconMenu>
                        </ToolbarGroup>
                    </Toolbar>
                </div>
            </div>
        );
    }
}

export default Master;