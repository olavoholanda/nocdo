import React from "react";
import HeaderToolBar from "../components/common/HeaderToolBar";
import Booking from "../components/booking/Booking";
import {Route, Redirect, Switch} from "react-router-dom";

class ReservationView extends React.Component {

    render() {

        return (
            <div>
                <HeaderToolBar link="/booking" title="Reservas" icon="event"/>
                <Switch>
                    <Route exact path={"/booking/dependencies"} component={Booking}/>
                    <Redirect exact from="/booking" to="/booking/dependencies"/>
                </Switch>
            </div>
        );
    }
}

export default ReservationView;
