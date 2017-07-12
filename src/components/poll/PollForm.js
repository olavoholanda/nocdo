import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import Paper from "material-ui/Paper";
import {Toolbar, ToolbarGroup} from "material-ui/Toolbar";
import {grey700} from "material-ui/styles/colors";
import DatePicker from 'material-ui/DatePicker';
import areIntlLocalesSupported from 'intl-locales-supported';
import FontIcon from "material-ui/FontIcon";
import {Col, Grid, Row} from "react-flexbox-grid";

const style = {
    backgroundColor: "#eeeeee"
};

const textColor = "rgba(0, 0, 0, 0.3)";

let DateTimeFormat;

/**
 * Use the native Intl.DateTimeFormat if available, or a polyfill if not.
 */
if (areIntlLocalesSupported(['pt-BR'])) {
    DateTimeFormat = global.Intl.DateTimeFormat;
} else {
    const IntlPolyfill = require('intl');
    DateTimeFormat = IntlPolyfill.DateTimeFormat;
    require('intl/locale-data/jsonp/pt-BR');
}

class SubHeader extends React.Component {

    render() {

        let title = "Nova Enquete";
        if (this.props.edit) {
            title = "Editar Enquete";
        }

        return (
            <Toolbar style={style}>
                <ToolbarGroup firstChild={true}>
                    <span style={{marginLeft: 20, color: grey700, fontSize: 14}}>{title}</span>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

class PollForm extends React.Component {

    constructor(props) {
        super(props);

        if (this.props.match.params.id === undefined) {
            this.state = {
                title: '',
                optionsSize: 2,
                options: [{option: ''}, {option: ''}],
                startDate: new Date(),
                endDate: undefined,
                edit: false,
                data: undefined
            };
        } else {

            let data = {
                "id": "4",
                "title": "Vocês aprovam ou reprovam o projeto de asfaltar todas as ruas do condomínio?",
                "options": [
                    {
                        "id": "16",
                        "option": "Aprovar",
                        "votes": "24",
                        "percentage": "75"
                    },
                    {
                        "id": "17",
                        "option": "Reprovar",
                        "votes": "8",
                        "percentage": "25"
                    }
                ],
                "closed": "false",
                "startDate": "01/07/2017",
                "endDate": "31/07/2017",
                "totalVotes": "32",
                "author": {
                    "name": "Sandy Cohen",
                    "username": "sandy"
                }
            };

            this.state = {
                title: data.title,
                optionsSize: data.options.length,
                options: data.options,
                startDate: data.startDate,
                endDate: data.endDate,
                edit: true,
                data: data
            };
        }
    }

    handleTitleChange = (e, newValue) => {
        e.preventDefault();
        this.setState({title: newValue});
    };

    handleEndDateChange = (e, newValue) => {
        this.setState({endDate: newValue});
    };

    handleAddOption = () => {
        this.setState({options: this.state.options.concat([{option: ''}])});
    };

    handleDiscardOption = (index) => {
        let modifiedOptions = this.state.options;
        modifiedOptions.splice(index, 1);
        this.setState({options: modifiedOptions});
    };

    handleOptionChange = (index, e, newValue) => {
        e.preventDefault();

        let modifiedOptions = this.state.options;
        modifiedOptions[index].option = newValue;

        this.setState({
            options: modifiedOptions,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let title = this.state.title.trim();
        if (!title) {
            return;
        }
        // TODO: send request to the server
        if (this.props.params === undefined) {
            //updating an existing one
            console.log('creating topic');
        } else {
            //creating a new announce
            console.log('updating topic');
        }
        this.setState({
            title: '',
            optionsSize: undefined,
            options: {},
            startDate: undefined,
            endDate: undefined,
            edit: false,
            data: undefined
        });
    };

    render() {
        return (
        <div>
            <SubHeader edit={this.state.edit}/>
            <Paper style={{margin: 15, padding: 50}}>
                <Grid fluid style={{paddingLeft: 15, paddingRight: 15}}>
                    <Row>
                        <Col md={12}>
                            <form onSubmit={this.handleSubmit}>
                                <Row>
                                    <Col md={12}>
                                        <TextField
                                            floatingLabelText="Título da Enquete: "
                                            floatingLabelFixed={true}
                                            value={this.state.title}
                                            onChange={this.handleTitleChange}
                                            fullWidth={true}
                                            required
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <DatePicker
                                            floatingLabelText="Data de fim da votação:"
                                            floatingLabelFixed={true}
                                            hintText="dd/mm/aaaa"
                                            DateTimeFormat={DateTimeFormat}
                                            okLabel="Selecionar"
                                            cancelLabel="Cancelar"
                                            locale="pt-BR"
                                            minDate={this.state.startDate}
                                            value={this.state.endDate}
                                            onChange={this.handleEndDateChange}
                                        />
                                    </Col>
                                </Row>
                                <Row style={{
                                    fontSize: 13,
                                    color: textColor,
                                    marginTop: 15,
                                }}>
                                    <Col md={12}>
                                        Opções:
                                    </Col>
                                </Row>
                                {this.state.options.map( (option, index) => (
                                <Row key={(index+1)}>
                                    <Col md={1}>
                                        <div style={{textAlign: "right", marginTop: 37}}>
                                            <FontIcon className="material-icons">radio_button_unchecked</FontIcon>
                                        </div>
                                    </Col>
                                    <Col md={10}>
                                        <TextField
                                            ref={'option_' + (index + 1)}
                                            floatingLabelText={"Opção " + (index + 1) + " :"}
                                            fullWidth={true}
                                            value={option.option}
                                            onChange={(e, n) => this.handleOptionChange(index, e, n)}
                                            required
                                        />
                                    </Col>
                                    <Col md={1} style={{cursor: "pointer"}} onClick={()=>this.handleDiscardOption(index)}>
                                        <div style={{marginTop: 37}}>
                                            <FontIcon className="material-icons">delete</FontIcon>
                                        </div>
                                    </Col>
                                </Row>
                                ))}
                                <Row>
                                    <Col md={1}>
                                        <div style={{textAlign: "right", marginTop: 37}}>
                                            <FontIcon className="material-icons">radio_button_unchecked</FontIcon>
                                        </div>
                                    </Col>
                                    <Col md={10} style={{cursor: "pointer", marginTop: 40, color: textColor, fontWeight: "bold"}}
                                    onClick={this.handleAddOption}>
                                        <span >Adicionar Opção...</span>
                                    </Col>
                                    <Col md={1}/>
                                </Row>
                                <Row style={{marginTop: 50}}>
                                    <Col md={6}>
                                        <RaisedButton
                                            style={{float: 'left'}}
                                            label="Descartar"
                                            href="/poll/list"
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <RaisedButton
                                            style={{float: 'right'}}
                                            label="Salvar"
                                            type="submit"
                                            value="Post"
                                            primary={true}
                                        />
                                    </Col>
                                </Row>
                            </form>
                        </Col>
                    </Row>
                </Grid>
            </Paper>
        </div>

        );
    }
}

export default PollForm;
