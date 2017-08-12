import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
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
                    <Route path="/in/home" component={HomeView}/>
                    <Route path="/in/announce" component={AnnounceView}/>
                    <Route path="/in/poll" component={PollView}/>
                    <Route path="/in/forum" component={ForumView}/>
                    <Route path="/in/lobby" component={LobbyView}/>
                    <Route path="/in/booking" component={BookingView}/>
                    <Route path="/in/collaborators" component={CollaboratorView}/>
                    <Route path="/in/documents" component={DocumentView}/>
                </Switch>
            </div>
        )
    }
}

export default Routes;



