import React from "react";
import FlatButton from "material-ui/FlatButton";
import PropTypes from "prop-types";
import {blueGrey900, white} from "material-ui/styles/colors";
import FontIcon from "material-ui/FontIcon";
import IconButton from "material-ui/IconButton";

const customTitleStyle = {
    backgroundColor: blueGrey900,
    color: white,
    height: 35,
    padding: "0px 6px 0px",
};

class HeaderDialog extends React.Component {

    render() {
        return (
            <div style={customTitleStyle}>
                <FlatButton
                    label={this.props.title}
                    labelStyle={{color: white, textTransform: "capitalize"}}
                    disabled={true}
                    icon={<FontIcon style={{color: white}} className="material-icons">{this.props.icon}</FontIcon>}
                />
                <IconButton
                    onTouchTap={this.props.handler}
                    style={{float: 'right', padding: 0, height: 34, width: 34}}
                    iconStyle={{color: white}}
                    tooltip="Fechar">
                    <FontIcon className="material-icons">close</FontIcon>
                </IconButton>
            </div>
        );
    }
}

HeaderDialog.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired
};

export default HeaderDialog;
