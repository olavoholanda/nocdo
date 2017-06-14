import React from "react";
import Dialog from "material-ui/Dialog";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import PropTypes from "prop-types";
import HeaderDialog from "../common/HeaderDialog";

const customContentStyle = {
    width: '80%',
    maxWidth: 'none'
};

class NewAnnounceDialog extends React.Component {

    state = {
        title: '',
        text: ''
    };

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
        console.log('Title: ' + title + " - Text: " + text);
        this.setState({title: '', text: ''});
        this.props.handler();
    };

    render() {
        return (
            <div>
                <Dialog
                    title={<HeaderDialog title="Novo Aviso" icon="announcement" handler={this.props.handler}/>}
                    modal={false}
                    contentStyle={customContentStyle}
                    open={this.props.open}
                    onRequestClose={this.props.handler}
                    autoScrollBodyContent={true}
                >
                    <form onSubmit={this.handleSubmit}>
                        <TextField
                            floatingLabelText="Título do Aviso: "
                            floatingLabelFixed={true}
                            value={this.state.title}
                            onChange={this.handleTitleChange}
                            fullWidth={true}
                        /><br />
                        <TextField
                            floatingLabelText="Aviso: "
                            floatingLabelFixed={true}
                            value={this.state.text}
                            onChange={this.handleTextChange}
                            fullWidth={true}
                            multiLine={true}
                            rows={5}
                        /><br />
                        <RaisedButton
                            style={{float: 'right'}}
                            label="Criar"
                            type="submit"
                            value="Post"
                            primary={true}
                        />
                    </form>
                </Dialog>
            </div>
        );
    }
}

NewAnnounceDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    handler: PropTypes.func.isRequired
};

export default NewAnnounceDialog;