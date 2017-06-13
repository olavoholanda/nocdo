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

class CollapsedListAnnounces extends React.Component {

    state = {
        open: false,
        item: undefined
    };

    handleOpen = (item) => {
        this.setState({open: true, item: item});
    };

    handleClose = () => {
        this.setState({open: false, item: undefined});
    };

    render() {

        const actions = [
            <FlatButton
                label="Fechar"
                primary={true}
                onTouchTap={this.handleClose}
            />,
        ];

        let list = data.map(function(a) {
            return (
                <div>
                    <ListItem
                    key={a.id}
                    primaryText={a.title}
                    onTouchTap={() => this.handleOpen(a)}
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
                <Dialog
                    modal={false}
                    actions={actions}
                    contentStyle={customContentStyle}
                    open={this.state.open}
                    bodyStyle={{padding: 0}}
                    onRequestClose={this.handleClose}
                >
                    <AnnounceCard announcement={this.state.item} modal={true}/>
                </Dialog>
            </Paper>
        );
    }
}

export default CollapsedListAnnounces;
