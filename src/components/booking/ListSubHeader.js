import React from "react";
import PropTypes from "prop-types";
import {Toolbar, ToolbarGroup} from "material-ui/Toolbar";
import {grey700} from "material-ui/styles/colors";
import FontIcon from "material-ui/FontIcon";
import IconButton from "material-ui/IconButton";
import Badge from 'material-ui/Badge';

class ListSubHeader extends React.Component {
    render() {
        return (
            <Toolbar style={{backgroundColor: 'transparent'}}>
                <ToolbarGroup firstChild={true}>
                    <span style={{marginLeft: 20, color: grey700, fontSize: 14}}>{this.props.title}</span>
                </ToolbarGroup>
                <ToolbarGroup>
                    <Badge
                        badgeContent={<IconButton tooltip={this.props.tooltip} href={"#"}>
                            <FontIcon className="material-icons">{this.props.badge}</FontIcon>
                        </IconButton>}
                        badgeStyle={{top: 12, right: 12}}
                    >
                        <FontIcon className="material-icons">{this.props.icon}</FontIcon>
                    </Badge>
                </ToolbarGroup>
            </Toolbar>)
    }
}

ListSubHeader.propTypes = {
    title: PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired,
    badge: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

export default ListSubHeader;
