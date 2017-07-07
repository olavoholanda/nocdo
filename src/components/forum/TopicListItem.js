import React from "react";
import FontIcon from "material-ui/FontIcon";
import {indigo900, deepOrangeA400, blueGrey50} from "material-ui/styles/colors";
import {Col, Row} from "react-flexbox-grid";
import * as categories from "./categories";
import Link from "../common/Link";
import PropTypes from "prop-types";
import {ListItem} from "material-ui/List";

class TopicListItem extends React.Component {

    render() {
        const topic = this.props.topic;

        let stripe = {};

        if(this.props.odd){
            stripe = {backgroundColor: blueGrey50};
        }

        return (
        <ListItem disabled style={stripe}>
            <Row key={topic.id} style={{paddingTop: 10}}>
                <Col md={1} style={{textAlign: 'center'}}>{categories.management()}</Col>
                <Col md={7}>
                    <div>
                        <Link color={indigo900} hoverColor={deepOrangeA400} text={topic.title} link="/forum/messages"/>
                    </div>
                    <div style={{fontSize: 12, paddingTop: 5, paddingBottom: 5}}>
                        por <Link color={indigo900} hoverColor={deepOrangeA400} text="Ryan Atwood" link="href"/>
                        , em {topic.date}
                    </div>
                </Col>
                <Col md={2} style={{textAlign: 'center', fontSize: 12}}>15</Col>
                <Col md={2}>
                    <div style={{fontSize: 12}}>
                        por <Link color={indigo900} hoverColor={deepOrangeA400} text="Seth Cohen" link="href"/>,
                        <br/>
                        em {topic.date}
                    </div>
                </Col>
            </Row>
        </ListItem>
        );
    }
}

TopicListItem.propTypes = {
    topic: PropTypes.object.isRequired,
    odd:  PropTypes.bool
};

export default TopicListItem;
