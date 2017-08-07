import React from "react";
import {Toolbar, ToolbarGroup} from "material-ui/Toolbar";
import {deepOrange300, grey700} from "material-ui/styles/colors";
import {Col, Grid, Row} from "react-flexbox-grid";
import {List, ListItem} from 'material-ui/List';
import Paper from "material-ui/Paper";
import FontIcon from "material-ui/FontIcon";
import IconButton from "material-ui/IconButton";
import Avatar from "material-ui/Avatar";
import Badge from 'material-ui/Badge';
import DependenciesList from "./DependenciesList";
import dataDependency from './dependencies_data.json';
import dataMyBooking from './my_booking_data.json';

const style = {
    backgroundColor: "#eeeeee"
};

const SubHeader = () => (
    <Toolbar style={style}>
        <ToolbarGroup firstChild={true}>
            <span style={{marginLeft: 20, color: grey700, fontSize: 14}}>Reservas de Dependências</span>
        </ToolbarGroup>
    </Toolbar>
);

const BookItem = (props) => (
    <ListItem
        rightAvatar={<div style={{fontWeight: 'bold', color: deepOrange300, fontSize: 22}}><span>{props.day}</span> <br/> <span
            style={{fontWeight: 'bold', fontSize: 12}}>{props.month}</span></div>}
        primaryText={props.dependency}
        secondaryText={props.hour}
    />
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
                            <Paper style={{minHeight: 800}}>
                                <List>
                                    <Toolbar style={{backgroundColor: 'transparent'}}>
                                        <ToolbarGroup firstChild={true}>
                                            <span style={{marginLeft: 20, color: grey700, fontSize: 14}}>Minhas Reservas: </span>
                                        </ToolbarGroup>
                                        <ToolbarGroup>
                                            <Badge
                                                badgeContent={<IconButton tooltip="Nova Reserva" href={"#"}>
                                                    <FontIcon className="material-icons">add_circle</FontIcon>
                                                </IconButton>}
                                                badgeStyle={{top: 12, right: 12}}
                                            >
                                                <FontIcon className="material-icons">event</FontIcon>
                                            </Badge>
                                        </ToolbarGroup>
                                    </Toolbar>
                                    {dataMyBooking.map( (b, index) => (
                                        <BookItem
                                            key={b.id}
                                            day={b.day}
                                            month={b.month}
                                            dependency={b.dependency}
                                            hour={b.hour}
                                        />
                                    ))}
                                </List>
                            </Paper>
                        </Col>
                        <Col md={4}>
                            <Paper style={{minHeight: 800}}>
                                <Toolbar style={{backgroundColor: 'transparent'}}>
                                    <ToolbarGroup firstChild={true}>
                                        <span style={{marginLeft: 20, color: grey700, fontSize: 14}}>Dependências do Condomínio: </span>
                                    </ToolbarGroup>
                                    <ToolbarGroup>
                                        <Badge
                                            badgeContent={<IconButton tooltip="Nova Dependência" href={"#"}>
                                                <FontIcon className="material-icons">add_circle</FontIcon>
                                            </IconButton>}
                                            badgeStyle={{top: 12, right: 12}}
                                        >
                                            <FontIcon className="material-icons">business</FontIcon>
                                        </Badge>
                                    </ToolbarGroup>
                                </Toolbar>
                                <DependenciesList handler={this.handleDependencyChange} data={dataDependency}/>
                            </Paper>
                        </Col>
                        <Col md={4}>
                            <Paper style={{minHeight: 800}}>
                                <Toolbar style={{backgroundColor: 'transparent'}}>
                                    <ToolbarGroup firstChild={true}>
                                        <span style={{marginLeft: 20, color: grey700, fontSize: 14}}>Mais Detalhes: </span>
                                    </ToolbarGroup>
                                    <ToolbarGroup>
                                        <Badge
                                            badgeContent={<IconButton tooltip="Reservar Espaço" href={"#"}>
                                                <FontIcon className="material-icons">add_circle</FontIcon>
                                            </IconButton>}
                                            badgeStyle={{top: 12, right: 12}}
                                        >
                                            <FontIcon className="material-icons">event</FontIcon>
                                        </Badge>
                                    </ToolbarGroup>
                                </Toolbar>
                                <div style={{textAlign: "center", color: deepOrange300, fontWeight: "bold"}}>
                                    <span>{d.title}</span>
                                </div>
                                <div style={{marginTop: 10, color: deepOrange300, marginLeft: "3em", marginRight: "3em", fontSize: 13}}>
                                    <span>{d.description}</span>
                                </div>
                                <div style={{textAlign: "center", marginTop: "2em"}}>
                                    <img src={d.img} style={{width: "50%"}}/>
                                </div>
                                <div style={{marginLeft: "3em", marginRight: "3em"}}>
                                    <List>
                                        <ListItem
                                            disabled
                                            leftAvatar={ <Avatar icon={<FontIcon className="material-icons">attach_money</FontIcon>} /> }
                                            primaryText={<div>Preço:</div>}
                                            secondaryText={"R$: " + d.price}
                                            style={{fontSize:14, fontWeight: 'bold'}}
                                        />
                                        <ListItem
                                            disabled
                                            leftAvatar={ <Avatar icon={<FontIcon className="material-icons">group</FontIcon>} /> }
                                            primaryText={<div>Capacidade:</div>}
                                            secondaryText={d.capacity + " pessoas"}
                                            style={{fontSize:14, fontWeight: 'bold'}}
                                        />
                                        <ListItem
                                            disabled
                                            leftAvatar={ <Avatar icon={<FontIcon className="material-icons">event</FontIcon>} /> }
                                            primaryText={<div>Dias da Semana Disponíveis:</div>}
                                            secondaryText={d.weekDays}
                                            style={{fontSize:14, fontWeight: 'bold'}}
                                        />
                                        <ListItem
                                            disabled
                                            leftAvatar={ <Avatar icon={<FontIcon className="material-icons">access_time</FontIcon>} /> }
                                            primaryText={<div>Horários Disponiveis:</div>}
                                            secondaryText={d.hours}
                                            style={{fontSize:14, fontWeight: 'bold'}}
                                        />
                                        <ListItem
                                            disabled
                                            leftAvatar={ <Avatar icon={<FontIcon className="material-icons">warning</FontIcon>} /> }
                                            primaryText={<div>Demais Restrições:</div>}
                                            secondaryText={d.restrictions}
                                            style={{fontSize:14, fontWeight: 'bold'}}
                                        />
                                        <ListItem disabled style={{textAlign: "right"}}>
                                            <span style={{fontSize:14, fontWeight: 'bold'}}>Visualizar Termos de Uso:</span>
                                            <IconButton tooltip="Editar" href={"#"}>
                                                <FontIcon color={deepOrange300} className="material-icons">visibility</FontIcon>
                                            </IconButton>
                                        </ListItem>
                                    </List>
                                </div>
                            </Paper>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Booking;
