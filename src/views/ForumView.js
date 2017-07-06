import React from "react";
import HeaderToolBar from "../components/common/HeaderToolBar";
import {Route, Redirect, Switch} from "react-router-dom";
import TopicList from "../components/forum/TopicList";
import MessageList from "../components/forum/MessageList";
import TopicForm from "../components/forum/TopicForm";

class ForumView extends React.Component {

    render() {

        return (
            <div>
                <HeaderToolBar title="Fórum" icon="forum"/>
                <Switch>
                    <Route exact path={"/forum/topics"} component={TopicList}/>
                    <Route path={"/forum/topics/:page"} component={TopicList}/>
                    <Route path={"/forum/messages"} component={MessageList}/>
                    <Route path={"/forum/topic/new"} component={TopicForm}/>
                    <Route path={"/forum/topic/edit/:id"} component={TopicForm}/>
                    <Redirect exact from="/forum" to="/forum/topics"/>
                </Switch>
            </div>
        );
    }
}

export default ForumView;
