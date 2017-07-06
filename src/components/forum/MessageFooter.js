import React from "react";
import {Toolbar, ToolbarGroup} from "material-ui/Toolbar";
import FontIcon from "material-ui/FontIcon";
import {grey500} from "material-ui/styles/colors";
import IconButton from "material-ui/IconButton";


const styleAdminTools = {

};

class MessageFooter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            edit: true,
        };
    }

    render() {

        let adminTools;

        if(this.state.edit){
            adminTools = (
                <div>
                    <IconButton style={styleAdminTools} tooltip="Editar" onTouchTap={this.props.handlerFunction}>
                        <FontIcon className="material-icons">mode_edit</FontIcon>
                    </IconButton>
                    <IconButton style={styleAdminTools} tooltip="Remover">
                        <FontIcon className="material-icons">delete</FontIcon>
                    </IconButton>
                </div>
                );
        }

        return (
            <Toolbar style={{backgroundColor:"transparent", color: grey500}}>
                <ToolbarGroup firstChild={true}>
                    <span>Postado em 15/07/2017</span>
                </ToolbarGroup>
                {/*<ToolbarGroup>*/}
                    {/*<Checkbox*/}
                        {/*checkedIcon={<FontIcon style={{color: cyan500, fontSize: 20}} className="material-icons">thumb_up</FontIcon>}*/}
                        {/*uncheckedIcon={<FontIcon style={{color: grey500, fontSize: 20}} className="material-icons">thumb_up</FontIcon>}*/}
                        {/*inputStyle={{width:"100px"}}*/}
                        {/*labelPosition="left"*/}
                        {/*label={*/}
                            {/*<div>*/}
                                {/*<span style={{color: grey500}}>12</span>*/}
                                {/*<span style={{color: grey500, marginRight: 10}}>&nbsp;curtidas</span>*/}
                            {/*</div>*/}
                        {/*}*/}
                    {/*/>*/}
                {/*</ToolbarGroup>*/}
                <ToolbarGroup>
                    {adminTools}
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

export default MessageFooter;
