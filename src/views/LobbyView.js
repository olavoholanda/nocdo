import React from "react";
import HeaderToolBar from "../components/common/HeaderToolBar";
import {Route, Redirect, Switch} from "react-router-dom";
import AuthorizationList from "../components/lobby/AuthorizationList";

class LobbyView extends React.Component {

    render() {

        return (
            <div>
                <HeaderToolBar link="/lobby" title="Portaria" icon="store"/>
                <Switch>
                    <Route exact path={"/lobby/list"} component={AuthorizationList}/>
                    <Redirect exact from="/lobby" to="/lobby/list"/>
                </Switch>
            </div>
        );
    }
}

export default LobbyView;
