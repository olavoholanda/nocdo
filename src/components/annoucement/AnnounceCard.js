import React, {Component} from "react";
import {Card, CardHeader, CardText} from "material-ui/Card";
import PropTypes from "prop-types";
import {deepOrangeA400} from "material-ui/styles/colors";
import FontIcon from "material-ui/FontIcon";
import IconButton from "material-ui/IconButton";
import * as roles from "../../utils/roles";

const styleAdminTools = {
    float: 'right',
    marginTop: -30,
    padding: 0,
    height: 34,
    width: 34
};

class AnnounceCard extends Component {

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
        const {announcement} = this.props;
        const subtitle = "Postado em " + announcement.date;

        let adminTools = null;
        if(this.state.role === roles.ROLE_MANAGER){
            adminTools = (
                <div>
                    <IconButton style={styleAdminTools} tooltip="Remover" href={"/announce/list"}>
                        <FontIcon className="material-icons">delete</FontIcon>
                    </IconButton>
                    <IconButton style={styleAdminTools} tooltip="Editar" href={"/announce/edit/" + announcement.id}>
                        <FontIcon className="material-icons">mode_edit</FontIcon>
                    </IconButton>
                </div>
            )
        }

        return (
            <Card style={{margin: 15}}>
                <CardHeader titleColor={deepOrangeA400} titleStyle={{fontWeight: "bold"}} title={announcement.title}
                    subtitle={subtitle} subtitleStyle={{fontSize: 12}} children={adminTools}/>
                <CardText>
                    {announcement.text}
                </CardText>
            </Card>
        )
    }
}

AnnounceCard.propTypes = {
    announcement: PropTypes.object.isRequired
};

export default AnnounceCard
