import React from "react";
import FontIcon from "material-ui/FontIcon";
import {List, ListItem} from "material-ui/List";
import Drawer from "material-ui/Drawer";
import Divider from "material-ui/Divider";
import Avatar from "material-ui/Avatar";
import {blueGrey400, blueGrey900, deepOrangeA400, white} from "material-ui/styles/colors";
import logo from "../../logo.svg";

const styleDrawer = {
    backgroundColor: blueGrey900
};

const styleDivLogo = {
    height: 56,
    textAlign: "center",
};

const styleLogo = {
    height: 30,
    marginTop: 8
};

const styleWhite = {
    color: white
};

const styleAvatar = {
    margin: 20,
    float: "left"
};

const stylePersonalInfo = {
    color: white,
    fontSize: 15,
    fontWeight: "bold",
    paddingTop: 33
};

const styleRole = {
    color: deepOrangeA400,
    fontSize: 13,
    fontWeight: "normal",
    fontStyle: "italic"
};

const styleDivider = {
    backgroundColor: blueGrey400,
    width: "90%"
};

class NavDrawer extends React.Component {

    render() {
        return (
            <Drawer open={true} zDepth={1} containerStyle={styleDrawer}>
                <div style={styleDivLogo}>
                    <img src={logo} style={styleLogo} alt="logo"/>
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
                    <ListItem hoverColor={deepOrangeA400} style={styleWhite} primaryText="Início" href="/in/home"
                              leftIcon={<FontIcon style={styleWhite} className="material-icons">home</FontIcon>}/>
                    <ListItem hoverColor={deepOrangeA400} style={styleWhite} primaryText="Avisos" href="/in/announce"
                              leftIcon={<FontIcon style={styleWhite}
                                                  className="material-icons">announcement</FontIcon>}/>
                    <ListItem hoverColor={deepOrangeA400} style={styleWhite} primaryText="Enquetes" href="/in/poll"
                              leftIcon={<FontIcon style={styleWhite} className="material-icons">poll</FontIcon>}/>
                    <ListItem hoverColor={deepOrangeA400} style={styleWhite} primaryText="Forum" href="/in/forum"
                              leftIcon={<FontIcon style={styleWhite} className="material-icons">forum</FontIcon>}/>
                    <ListItem hoverColor={deepOrangeA400} style={styleWhite} primaryText="Portaria" href="/in/lobby"
                              leftIcon={<FontIcon style={styleWhite} className="material-icons">store</FontIcon>}/>
                    <ListItem hoverColor={deepOrangeA400} style={styleWhite} primaryText="Reservas" href="/in/booking"
                              leftIcon={<FontIcon style={styleWhite} className="material-icons">event</FontIcon>}/>
                    {/*<ListItem hoverColor={deepOrangeA400} style={styleWhite} primaryText="Colaboradores"*/}
                              {/*href="/in/collaborators"*/}
                              {/*leftIcon={<FontIcon style={styleWhite}*/}
                                                  {/*className="material-icons">recent_actors</FontIcon>}/>*/}
                    <ListItem hoverColor={deepOrangeA400} style={styleWhite} primaryText="Documentos" href="/in/documents"
                              leftIcon={<FontIcon style={styleWhite}
                                                  className="material-icons">account_balance</FontIcon>}/>
                </List>
            </Drawer>
        );
    }
}

export default NavDrawer;