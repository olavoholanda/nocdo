import React from 'react'
import data from './sample_data.json'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import {deepOrangeA400} from 'material-ui/styles/colors'
import Paper from 'material-ui/Paper'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import AnnounceCard from "./AnnounceCard";

let customContentStyle = {
    width: '50%'
};
/*
 TODO - Change this view to a list with inline expandable of the card, not a modal one,
 because the actions of new/edit we are using modal
 */
class AnnounceListCollapsed extends React.Component {

    render() {

        let list = data.map(function(a) {
            return (
                <div>
                    <ListItem
                    key={a.id}
                    primaryText={a.title}
                    secondaryText={
                        <p>
                            <span style={{color: deepOrangeA400}}>{a.date}</span>:&nbsp;
                             {a.text}
                        </p>
                    }
                    secondaryTextLines={1}
                    />
                    <Divider />
                </div>
            )
        }, this);

        return (
            <Paper style={{margin: 15}}>
                <List>
                    {list}
                </List>
            </Paper>
        );
    }
}

export default AnnounceListCollapsed;
