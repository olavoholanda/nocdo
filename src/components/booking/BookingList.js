import React from "react";
import PropTypes from "prop-types";
import {deepOrange300} from "material-ui/styles/colors";
import {List, ListItem} from 'material-ui/List';
import Paper from "material-ui/Paper";
import ListSubHeader from "./ListSubHeader";


const BookItem = (props) => (
    <ListItem
        rightAvatar={<div style={{fontWeight: 'bold', color: deepOrange300, fontSize: 22}}><span>{props.day}</span> <br/> <span
            style={{fontWeight: 'bold', fontSize: 12}}>{props.month}</span></div>}
        primaryText={props.dependency}
        secondaryText={props.hour}
    />
);

class BookingList extends React.Component {
    render() {
        let books = this.props.books;
        return (
            <Paper style={{minHeight: 800}}>
                <List>
                    <ListSubHeader
                        title="Minhas Reservas:"
                        tooltip="Nova Reserva"
                        badge="add_circle"
                        icon="event"
                    />
                    {books.map( (b, index) => (
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
        );
    }
}

BookingList.propTypes = {
    books: PropTypes.array.isRequired,
};

export default BookingList;
