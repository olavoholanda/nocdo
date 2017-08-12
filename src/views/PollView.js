import React from "react";
import HeaderToolBar from "../components/common/HeaderToolBar";
import PollList from "../components/poll/PollList";
import PollForm from "../components/poll/PollForm";
import {Route, Redirect, Switch} from "react-router-dom";

class PollView extends React.Component {

    render() {

        return (
            <div>
                <HeaderToolBar link="/in/poll" title="Enquetes" icon="view_list"/>
                <Switch>
                    <Route exact path={"/in/poll/list"} component={PollList}/>
                    <Route exact path={"/in/poll/new"} component={PollForm}/>
                    <Route exact path={"/in/poll/edit/:id"} component={PollForm}/>
                    <Redirect exact from="/in/poll" to="/in/poll/list"/>
                </Switch>
            </div>
        );
    }
}

export default PollView;
