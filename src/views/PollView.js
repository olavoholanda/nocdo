import React from "react";
import HeaderToolBar from "../components/common/HeaderToolBar";
import PollList from "../components/poll/PollList";
import {Route, Redirect, Switch} from "react-router-dom";

class ForumView extends React.Component {

    render() {

        return (
            <div>
                <HeaderToolBar link="/poll" title="Enquetes" icon="view_list"/>
                <Switch>
                    <Route exact path={"/poll/list"} component={PollList}/>
                    <Redirect exact from="/poll" to="/poll/list"/>
                </Switch>
            </div>
        );
    }
}

export default ForumView;
