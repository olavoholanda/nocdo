import React from "react";
import data from "./topics_data.json";
import fixedData from "./fixed_topics_data.json";
import {Toolbar, ToolbarGroup, ToolbarSeparator} from "material-ui/Toolbar";
import FontIcon from "material-ui/FontIcon";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import {grey700} from "material-ui/styles/colors";
import {List} from "material-ui/List";
import Paper from "material-ui/Paper";
import {Col, Grid, Row} from "react-flexbox-grid";
import TopicListItem from "./TopicListItem";

const style = {
    backgroundColor: "#eeeeee"
};

const topicHeader = {
    fontSize: 14,
    fontWeight: "bold"
};

const SubHeader = () => (
    <Toolbar style={style}>
        <ToolbarGroup firstChild={true}>
            <span style={{marginLeft: 20, color: grey700, fontSize: 14}}>Lista de Tópicos</span>
        </ToolbarGroup>
        <ToolbarGroup>
            <TextField hintText="Buscar Tópico"/>
            <FontIcon className="material-icons">search</FontIcon>
            <ToolbarSeparator/>
            <RaisedButton label="Novo Tópico" href="/forum/topic/new" primary={true}/>
        </ToolbarGroup>
    </Toolbar>
);

const ListHeader = (props) => (
    <Row style={{marginTop: 15}}>
        <Col md={7}>
            <span style={topicHeader}>{props.title}</span>
        </Col>
        <Col md={2} style={{textAlign:'center'}}>
            <span style={topicHeader}>Respostas</span>
        </Col>
        <Col md={3}>
            <span style={topicHeader}>Última Mensagem</span>
        </Col>
    </Row>
);

class TopicList extends React.Component {
    render() {
        return (
            <div>
                <SubHeader/>
                <Grid fluid>
                    <ListHeader title="Tópicos Fixos:"/>
                    <Row style={{marginTop: 5}}>
                        <Col md={12}>
                            <Paper>
                                <List>
                                    {fixedData.map( (topic) => (
                                        <TopicListItem key={topic.id} topic={topic}/>
                                    ))}
                                </List>
                            </Paper>
                        </Col>
                    </Row>
                    <ListHeader title="Tópicos Recentes:"/>
                    <Row style={{marginTop: 5}}>
                        <Col md={12}>
                            <Paper>
                                <List>
                                    {data.map( (topic) => (
                                        <TopicListItem key={topic.id} topic={topic}/>
                                    ))}
                                </List>
                            </Paper>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default TopicList;
