import React from "react";
import FontIcon from "material-ui/FontIcon";
import {List, ListItem} from "material-ui/List";
import Drawer from "material-ui/Drawer";
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from "material-ui/Toolbar";
import {blueGrey900, deepOrangeA400, white} from "material-ui/styles/colors";

var styleDrawer = {
    backgroundColor: blueGrey900
}

var styleWhite = {
    color: white
}

class NavDrawer extends React.Component {

    render() {
        return (
            <Drawer open={true} zDepth={1} containerStyle={styleDrawer}>
                <List>
                    <ListItem hoverColor={deepOrangeA400} style={styleWhite} primaryText="Início"
                              leftIcon={<FontIcon style={styleWhite} className="material-icons">home</FontIcon>}/>
                    <ListItem hoverColor={deepOrangeA400} style={styleWhite} primaryText="Avisos"
                              leftIcon={<FontIcon style={styleWhite}
                                                  className="material-icons">announcement</FontIcon>}/>
                    <ListItem hoverColor={deepOrangeA400} style={styleWhite} primaryText="Enquetes"
                              leftIcon={<FontIcon style={styleWhite} className="material-icons">view_list</FontIcon>}/>
                    <ListItem hoverColor={deepOrangeA400} style={styleWhite} primaryText="Forum"
                              leftIcon={<FontIcon style={styleWhite} className="material-icons">forum</FontIcon>}/>
                    <ListItem hoverColor={deepOrangeA400} style={styleWhite} primaryText="Portaria"
                              leftIcon={<FontIcon style={styleWhite} className="material-icons">store</FontIcon>}
                              nestedItems={[
                                  <ListItem hoverColor={deepOrangeA400} style={styleWhite} key={1} primaryText="Visitas"
                                            leftIcon={<FontIcon style={styleWhite} className="material-icons">assignment_turned_in</FontIcon>}/>,
                                  <ListItem hoverColor={deepOrangeA400} style={styleWhite} key={2}
                                            primaryText="Encomendas"
                                            leftIcon={<FontIcon style={styleWhite} className="material-icons">assignment_returned</FontIcon>}/>,
                                  <ListItem hoverColor={deepOrangeA400} style={styleWhite} key={3}
                                            primaryText="Porteiros"
                                            leftIcon={<FontIcon style={styleWhite} className="material-icons">assignment_ind</FontIcon>}/>,
                              ]}
                    />
                    <ListItem hoverColor={deepOrangeA400} style={styleWhite} primaryText="Reservas"
                              leftIcon={<FontIcon style={styleWhite} className="material-icons">event</FontIcon>}/>
                    <ListItem hoverColor={deepOrangeA400} style={styleWhite} primaryText="Colaboradores"
                              leftIcon={<FontIcon style={styleWhite}
                                                  className="material-icons">recent_actors</FontIcon>}/>
                    <ListItem hoverColor={deepOrangeA400} style={styleWhite} primaryText="Administração"
                              leftIcon={<FontIcon style={styleWhite}
                                                  className="material-icons">account_balance</FontIcon>}/>
                </List>
            </Drawer>
        );
    }
}

export default NavDrawer;