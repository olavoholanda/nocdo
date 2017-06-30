import React from "react";
import Dialog from "material-ui/Dialog";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import PropTypes from "prop-types";
import HeaderDialog from "../../common/HeaderDialog";

const customContentStyle = {
    width: '80%',
    maxWidth: 'none'
};

class AnnounceDialog extends React.Component {

    constructor(props) {
        super(props);

        if(this.props.data === undefined){
            this.state = {
                title: '',
                text: '',
                data: undefined
            };
        } else {
            this.state = {
                title: this.props.data.title,
                text: this.props.data.text,
                data: this.props.data
            };
        }
    }

    handleClose = (e) => {
        e.preventDefault();
        this.setState({title: '', text: '', data: undefined});
        this.props.handler();
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
        if(this.props.data === undefined){
            //updating an existing one
            console.log('creating announce');
        } else {
            //creating a new announce
            console.log('updating announce');
        }
        this.setState({title: '', text: '', data: undefined});
        this.props.handler();
    };

    render() {
        return (
            <div>
                <Dialog
                    title={<HeaderDialog title="Novo Aviso" icon="announcement" handler={this.handleClose}/>}
                    modal={false}
                    contentStyle={customContentStyle}
                    open={this.props.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                >
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
                            rows={5}
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
                </Dialog>
            </div>
        );
    }
}

AnnounceDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    handler: PropTypes.func.isRequired,
    data: PropTypes.object
};

export default AnnounceDialog;