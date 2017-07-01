import React from "react";
import HeaderToolBar from "../components/common/HeaderToolBar";
import AnnounceListExpanded from "../components/annoucement/AnnounceListExpanded";
import AnnounceForm from "../components/annoucement/AnnounceForm";
import {Route, Redirect, Switch} from "react-router-dom";

class AnnounceView extends React.Component {
    render() {
        return (
            <div>
                <HeaderToolBar link="/announce" title="Avisos" icon="announcement"/>
                <Switch>
                    <Route exact path={"/announce/list"} component={AnnounceListExpanded}/>
                    <Route path={"/announce/save"} component={AnnounceForm}/>
                    <Route path={"/announce/edit/:id"} component={AnnounceForm}/>
                    <Redirect exact from="/announce" to="/announce/list"/>
                </Switch>
            </div>
        );
    }
}

export default AnnounceView;
