import React from "react";
import {Toolbar, ToolbarGroup} from "material-ui/Toolbar";
import {grey700} from "material-ui/styles/colors";
import {Col, Grid, Row} from "react-flexbox-grid";
import DependenciesList from "./DependenciesList";
import BookingList from "./BookingList";
import dataDependency from './dependencies_data.json';
import dataMyBooking from './my_booking_data.json';
import DependencyCard from "./DependencyCard";

const SubHeader = () => (
    <Toolbar style={{backgroundColor: 'transparent'}}>
        <ToolbarGroup firstChild={true}>
            <span style={{marginLeft: 20, color: grey700, fontSize: 14}}>Reservas de Dependências</span>
        </ToolbarGroup>
    </Toolbar>
);

class Booking extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDependency: 0,
        };
    }

    handleDependencyChange = (e, newValue) => {
        e.preventDefault();
        this.setState({selectedDependency: newValue});
    };

    render() {

        let d = dataDependency.dependencies[this.state.selectedDependency];

        return (
            <div>
                <SubHeader/>
                <Grid fluid style={{paddingLeft: 15, paddingRight: 15}}>
                    <Row style={{marginTop: 15}}>
                        <Col md={4}>
                            <BookingList books={dataMyBooking}/>
                        </Col>
                        <Col md={4}>
                            <DependenciesList handler={this.handleDependencyChange} data={dataDependency}/>
                        </Col>
                        <Col md={4}>
                            <DependencyCard dependency={d}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Booking;
