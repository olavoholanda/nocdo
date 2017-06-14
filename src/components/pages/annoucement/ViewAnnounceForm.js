import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import Paper from "material-ui/Paper";

import list from "./sample_data.json";

class ViewAnnounceForm extends React.Component {

    constructor(props) {
        super(props);

        if (this.props.params === undefined) {
            this.state = {
                title: '',
                text: '',
                data: undefined
            };
        } else {

            let data;
            for (let i = 0; i < list.size; i++) {
                if (list[i].id === this.props.params.id) {
                    data = list[i];
                }
            }

            this.state = {
                title: data.title,
                text: data.text,
                data: data
            };
        }
    }

    handleTitleChange = (e, newValue) => {
        e.preventDefault();
        this.setState({title: newValue});
    };

    handleTextChange = (e, newValue) => {
        e.preventDefault();
        this.setState({text: newValue});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let title = this.state.title.trim();
        let text = this.state.text.trim();
        if (!title || !text) {
            return;
        }
        // TODO: send request to the server
        if (this.props.params === undefined) {
            //updating an existing one
            console.log('creating announce');
        } else {
            //creating a new announce
            console.log('updating announce');
        }
        this.setState({title: '', text: '', data: undefined});
    };

    render() {
        return (
            <Paper style={{margin: 15, padding: 50}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        floatingLabelText="Título do Aviso: "
                        floatingLabelFixed={true}
                        value={this.state.title}
                        onChange={this.handleTitleChange}
                        fullWidth={true}
                        required
                    /><br />
                    <TextField
                        floatingLabelText="Aviso: "
                        floatingLabelFixed={true}
                        value={this.state.text}
                        onChange={this.handleTextChange}
                        fullWidth={true}
                        multiLine={true}
                        rows={10}
                        required
                    /><br />
                    <RaisedButton
                        style={{float: 'right'}}
                        label="Salvar"
                        type="submit"
                        value="Post"
                        primary={true}
                    />
                </form>
            </Paper>
        );
    }
}

export default ViewAnnounceForm;
