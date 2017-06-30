import React from "react";
import HeaderToolBar from "../components/common/HeaderToolBar";

class ReservationView extends React.Component {

    render() {

        return (
            <div>
                <HeaderToolBar title="Reservas" icon="event"/>
                <h3>Reservation View</h3>
            </div>
        );
    }
}

export default ReservationView;
