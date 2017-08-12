import React from "react";
import HeaderToolBar from "../components/common/HeaderToolBar";
import AnnounceListExpanded from "../components/annoucement/AnnounceListExpanded";
import AnnounceForm from "../components/annoucement/AnnounceForm";
import {Route, Redirect, Switch} from "react-router-dom";

class AnnounceView extends React.Component {
    render() {
        return (
            <div>
                <HeaderToolBar link="/in/announce" title="Avisos" icon="announcement"/>
                <Switch>
                    <Route exact path={"/in/announce/list"} component={AnnounceListExpanded}/>
                    <Route path={"/in/announce/save"} component={AnnounceForm}/>
                    <Route path={"/in/announce/edit/:id"} component={AnnounceForm}/>
                    <Redirect exact from="/in/announce" to="/in/announce/list"/>
                </Switch>
            </div>
        );
    }
}

export default AnnounceView;
