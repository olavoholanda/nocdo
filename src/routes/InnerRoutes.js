import React from 'react'
import {Route} from 'react-router-dom'
import HomeView from "../views/HomeView";
import AnnounceView from "../views/AnnounceView";
import ForumView from "../views/ForumView";
import PoolView from "../views/PoolView";
import LobbyView from "../views/LobbyView";
import DocumentView from "../views/DocumentView";
import ReservationView from "../views/ReservationView";
import CollaboratorView from "../views/CollaboratorView";

class Routes extends React.Component {
    render() {
        return (
            <div>
                <Route path="/home" component={HomeView}/>
                <Route path="/announce" component={AnnounceView}/>
                <Route path="/pool" component={PoolView}/>
                <Route path="/forum" component={ForumView}/>
                <Route path="/lobby" component={LobbyView}/>
                <Route path="/reservations" component={ReservationView}/>
                <Route path="/collaborators" component={CollaboratorView}/>
                <Route path="/documents" component={DocumentView}/>
            </div>
        )
    }
}

export default Routes;



