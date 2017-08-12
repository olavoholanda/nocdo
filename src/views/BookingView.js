import React from "react";
import HeaderToolBar from "../components/common/HeaderToolBar";
import Booking from "../components/booking/Booking";
import {Route, Redirect, Switch} from "react-router-dom";

class ReservationView extends React.Component {

    render() {

        return (
            <div>
                <HeaderToolBar link="/in/booking" title="Reservas" icon="event"/>
                <Switch>
                    <Route exact path={"/in/booking/dependencies"} component={Booking}/>
                    <Redirect exact from="/in/booking" to="/in/booking/dependencies"/>
                </Switch>
            </div>
        );
    }
}

export default ReservationView;
