import React from "react";
import {Route, Switch} from "react-router-dom";
import HomeView from "../views/HomeView";
import AnnounceView from "../views/AnnounceView";
import ForumView from "../views/ForumView";
import PollView from "../views/PollView";
import LobbyView from "../views/LobbyView";
import DocumentView from "../views/DocumentView";
import BookingView from "../views/BookingView";
import CollaboratorView from "../views/CollaboratorView";

class Routes extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/home" component={HomeView}/>
                    <Route path="/announce" component={AnnounceView}/>
                    <Route path="/poll" component={PollView}/>
                    <Route path="/forum" component={ForumView}/>
                    <Route path="/lobby" component={LobbyView}/>
                    <Route path="/booking" component={BookingView}/>
                    <Route path="/collaborators" component={CollaboratorView}/>
                    <Route path="/documents" component={DocumentView}/>
                </Switch>
            </div>
        )
    }
}

export default Routes;



