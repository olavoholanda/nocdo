import React, {Component} from "react";
import {Card, CardHeader, CardText} from "material-ui/Card";
import PropTypes from "prop-types";
import {deepOrangeA400} from "material-ui/styles/colors";
import FontIcon from "material-ui/FontIcon";
import IconButton from "material-ui/IconButton";

class AnnounceCard extends Component {

    render() {
        const {announcement} = this.props;
        let subtitle = "Postado em " + announcement.date;
        return (
            <Card style={{margin: 15}}>
                <CardHeader titleColor={deepOrangeA400} titleStyle={{fontWeight: "bold"}} title={announcement.title}
                    subtitle={subtitle} subtitleStyle={{fontSize: 12}}
                >
                    <IconButton
                        style={{float: 'right', padding: 0, height: 34, width: 34}}
                        tooltip="Remover"
                    >
                        <FontIcon className="material-icons">delete</FontIcon>
                    </IconButton>
                    <IconButton
                        style={{float: 'right', padding: 0, height: 34, width: 34}}
                        tooltip="Editar"
                    >
                        <FontIcon className="material-icons">mode_edit</FontIcon>
                    </IconButton>
                </CardHeader>
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
