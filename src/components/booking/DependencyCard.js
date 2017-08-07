import React from "react";
import {deepOrange300} from "material-ui/styles/colors";
import PropTypes from "prop-types";
import {List, ListItem} from 'material-ui/List';
import Paper from "material-ui/Paper";
import FontIcon from "material-ui/FontIcon";
import IconButton from "material-ui/IconButton";
import Avatar from "material-ui/Avatar";
import ListSubHeader from "./ListSubHeader";

class DependencyCard extends React.Component {
    render() {

        let d = this.props.dependency;

        return (
            <Paper style={{minHeight: 800}}>
                <ListSubHeader
                    title="Mais Detalhes:"
                    tooltip="Reservar Espaço"
                    badge="add_circle"
                    icon="event"
                />
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
                            leftAvatar={<Avatar icon={<FontIcon className="material-icons">attach_money</FontIcon>}/>}
                            primaryText={<div>Preço:</div>}
                            secondaryText={"R$: " + d.price}
                            style={{fontSize: 14, fontWeight: 'bold'}}
                        />
                        <ListItem
                            disabled
                            leftAvatar={<Avatar icon={<FontIcon className="material-icons">group</FontIcon>}/>}
                            primaryText={<div>Capacidade:</div>}
                            secondaryText={d.capacity + " pessoas"}
                            style={{fontSize: 14, fontWeight: 'bold'}}
                        />
                        <ListItem
                            disabled
                            leftAvatar={<Avatar icon={<FontIcon className="material-icons">event</FontIcon>}/>}
                            primaryText={<div>Dias da Semana Disponíveis:</div>}
                            secondaryText={d.weekDays}
                            style={{fontSize: 14, fontWeight: 'bold'}}
                        />
                        <ListItem
                            disabled
                            leftAvatar={<Avatar icon={<FontIcon className="material-icons">access_time</FontIcon>}/>}
                            primaryText={<div>Horários Disponiveis:</div>}
                            secondaryText={d.hours}
                            style={{fontSize: 14, fontWeight: 'bold'}}
                        />
                        <ListItem
                            disabled
                            leftAvatar={<Avatar icon={<FontIcon className="material-icons">warning</FontIcon>}/>}
                            primaryText={<div>Demais Restrições:</div>}
                            secondaryText={d.restrictions}
                            style={{fontSize: 14, fontWeight: 'bold'}}
                        />
                        <ListItem disabled style={{textAlign: "right"}}>
                            <span style={{fontSize: 14, fontWeight: 'bold'}}>Visualizar Termos de Uso:</span>
                            <IconButton tooltip="Editar" href={"#"}>
                                <FontIcon color={deepOrange300} className="material-icons">visibility</FontIcon>
                            </IconButton>
                        </ListItem>
                    </List>
                </div>
            </Paper>
        );
    }
}

DependencyCard.propTypes = {
    dependency: PropTypes.object.isRequired,
};

export default DependencyCard;
