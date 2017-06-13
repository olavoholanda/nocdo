/* TODO: - Div of the avatar and personal operates like a button and links to the profile page
         - Move all styles to the appropriate .css
*/

import React from "react";
import FontIcon from "material-ui/FontIcon";
import {List, ListItem} from "material-ui/List";
import Drawer from "material-ui/Drawer";
import Divider from "material-ui/Divider";
import Avatar from "material-ui/Avatar";
import {blueGrey900, blueGrey400, deepOrangeA400, white} from "material-ui/styles/colors";
import logo from '../../../logo.svg';

var styleDrawer = {
    backgroundColor: blueGrey900
}

var styleDivLogo = {
    height: 56,
    textAlign: "center",
}

var styleLogo = {
    height: 30,
    marginTop: 8
}

var styleWhite = {
    color: white
}

var styleAvatar = {
    margin: 20,
    float: "left"
}

var stylePersonalInfo = {
    color: white,
    fontSize: 15,
    fontWeight: "bold",
    paddingTop: 33
}

var styleRole = {
    color: deepOrangeA400,
    fontSize: 13,
    fontWeight: "normal",
    fontStyle: "italic"
}

var styleDivider = {
    backgroundColor: blueGrey400,
    width: "90%"
}

class NavDrawer extends React.Component {

    render() {
        return (
            <Drawer open={true} zDepth={1} containerStyle={styleDrawer}>
                <div style={styleDivLogo}>
                    <img src={logo} style={styleLogo} alt="logo" />
                </div>
                <Divider style={styleDivider}/>
                <div>
                    <Avatar
                        src="/avatars/seth.jpg"
                        size={70}
                        style={styleAvatar}
                    />
                    <div style={stylePersonalInfo}>
                        <span>Seth Cohen</span>
                        <br/>
                        <span style={styleRole}>Morador</span>
                    </div>
                </div>
                <Divider style={styleDivider}/>
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
                              // nestedItems={[
                              //     <ListItem hoverColor={deepOrangeA400} style={styleWhite} key={1} primaryText="Visitas"
                              //               leftIcon={<FontIcon style={styleWhite} className="material-icons">assignment_turned_in</FontIcon>}/>,
                              //     <ListItem hoverColor={deepOrangeA400} style={styleWhite} key={2}
                              //               primaryText="Encomendas"
                              //               leftIcon={<FontIcon style={styleWhite} className="material-icons">assignment_returned</FontIcon>}/>,
                              //     <ListItem hoverColor={deepOrangeA400} style={styleWhite} key={3}
                              //               primaryText="Porteiros"
                              //               leftIcon={<FontIcon style={styleWhite} className="material-icons">assignment_ind</FontIcon>}/>,
                              // ]}
                    />
                    <ListItem hoverColor={deepOrangeA400} style={styleWhite} primaryText="Reservas"
                              leftIcon={<FontIcon style={styleWhite} className="material-icons">event</FontIcon>}/>
                    <ListItem hoverColor={deepOrangeA400} style={styleWhite} primaryText="Colaboradores"
                              leftIcon={<FontIcon style={styleWhite}
                                                  className="material-icons">recent_actors</FontIcon>}/>
                    <ListItem hoverColor={deepOrangeA400} style={styleWhite} primaryText="Documentos"
                              leftIcon={<FontIcon style={styleWhite}
                                                  className="material-icons">account_balance</FontIcon>}/>
                </List>
            </Drawer>
        );
    }
}

export default NavDrawer;