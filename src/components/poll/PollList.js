import React from "react";
import {Toolbar, ToolbarGroup, ToolbarSeparator} from "material-ui/Toolbar";
import FontIcon from "material-ui/FontIcon";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import {grey700} from "material-ui/styles/colors";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import {Col, Grid, Row} from "react-flexbox-grid";
import data from "./polls_data.json";
import PollCard from "./PollCard";

const style = {
    backgroundColor: "#eeeeee"
};

class SubHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: 1};
    }

    handleMenuChange = (event, index, value) => {
        this.setState({value});
    };

    render() {
        return (
            <Toolbar style={style}>
                <ToolbarGroup firstChild={true}>
                    <DropDownMenu style={{color: grey700, fontSize: 14}} value={this.state.value} onChange={this.handleMenuChange}>
                        <MenuItem value={1} primaryText="Enquetes Ativas" />
                        <MenuItem value={2} primaryText="Enquetes Encerradas" />
                        <MenuItem value={3} primaryText="Todas as Enquetes" />
                    </DropDownMenu>
                </ToolbarGroup>
                <ToolbarGroup>
                    <TextField hintText="Buscar Enquete"/>
                    <FontIcon className="material-icons">search</FontIcon>
                    <ToolbarSeparator/>
                    <RaisedButton label="Nova Enquete" href="/poll/new" primary={true}/>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

function isOdd(n) {
    return Math.abs(n % 2) === 1;
}

class PollList extends React.Component {
    render() {
        return (
            <div>
                <SubHeader/>
                <Grid fluid style={{paddingLeft: 15, paddingRight: 15}}>
                    <Row style={{marginTop: 5}}>
                        <Col md={12}>
                            {data.map( (poll, index) => (
                                <PollCard key={poll.id} odd={isOdd(index)} poll={poll}/>
                            ))}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default PollList;
