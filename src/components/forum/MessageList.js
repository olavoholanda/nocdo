import React from "react";
import {Toolbar, ToolbarGroup} from "material-ui/Toolbar";
import FontIcon from "material-ui/FontIcon";
import {grey700} from "material-ui/styles/colors";
import {List} from "material-ui/List";
import Divider from "material-ui/Divider";
import IconButton from "material-ui/IconButton";
import FloatingActionButton from "material-ui/FloatingActionButton";
import MessageListItem from "./MessageListItem";
import DiscussionTitle from "./DiscussionTitle";
import MessageAnswer from "./MessageAnswer";
import Scroll from "react-scroll";

const style = {
    backgroundColor: "#eeeeee"
};

const floatingStyle = {
    float:"right",
    marginRight: 40,
    marginTop: -12
};

const SubHeader = () => (
    <Toolbar style={style}>
        <ToolbarGroup firstChild={true}>
            <IconButton style={{marginLeft: 20}} href="/forum/topics" tooltip="Voltar">
                <FontIcon className="material-icons">arrow_back</FontIcon>
            </IconButton>
            <span style={{marginLeft: 5, color: grey700, fontSize: 14}}>Discussão: Vida em condomínio: sonho ou pesadelo?</span>
        </ToolbarGroup>
    </Toolbar>
);

function isOdd(n) {
    return Math.abs(n % 2) === 1;
}

class MessageList extends React.Component {

    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        Scroll.animateScroll.scrollToBottom();
    }

    render() {
        return (
            <div>
                <SubHeader/>
                <FloatingActionButton onTouchTap={this.onClick} style={floatingStyle}>
                    <FontIcon className="material-icons">reply</FontIcon>
                </FloatingActionButton>
                <DiscussionTitle/>
                <List style={{margin: "8px 15px 15px 15px"}}>
                    <MessageListItem odd={false}/>
                    <Divider/>
                    <MessageListItem odd={true}/>
                    <Divider/>
                    <MessageListItem odd={false}/>
                    <Divider/>
                    <MessageListItem odd={true}/>
                    <Divider/>
                    <MessageListItem odd={false}/>
                    <Divider/>
                    <MessageListItem odd={true}/>
                    <Divider/>
                    <MessageListItem odd={false}/>
                    <Divider/>
                    <MessageListItem odd={true}/>
                    <Divider/>
                    <MessageListItem odd={false}/>
                    <MessageAnswer/>
                </List>
            </div>
        );
    }
}

export default MessageList;
