import React from "react";
import HeaderToolBar from "../components/common/HeaderToolBar";
import {Route, Redirect, Switch} from "react-router-dom";
import AuthorizationList from "../components/lobby/AuthorizationList";

class LobbyView extends React.Component {

    render() {

        return (
            <div>
                <HeaderToolBar link="/in/lobby" title="Portaria" icon="store"/>
                <Switch>
                    <Route exact path={"/in/lobby/list"} component={AuthorizationList}/>
                    <Redirect exact from="/in/lobby" to="/in/lobby/list"/>
                </Switch>
            </div>
        );
    }
}

export default LobbyView;
