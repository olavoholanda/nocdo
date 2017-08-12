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
                <HeaderToolBar link="/in/forum" title="Fórum" icon="forum"/>
                <Switch>
                    <Route exact path={"/in/forum/topics"} component={TopicList}/>
                    <Route path={"/in/forum/topics/:page"} component={TopicList}/>
                    <Route path={"/in/forum/messages"} component={MessageList}/>
                    <Route path={"/in/forum/topic/new"} component={TopicForm}/>
                    <Route path={"/in/forum/topic/edit/:id"} component={TopicForm}/>
                    <Redirect exact from="/in/forum" to="/in/forum/topics"/>
                </Switch>
            </div>
        );
    }
}

export default ForumView;
