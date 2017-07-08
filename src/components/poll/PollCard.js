import React from "react";
import {blueGrey900, cyan500, deepOrangeA400, indigo900} from "material-ui/styles/colors";
import Link from "../common/Link";
import PropTypes from "prop-types";
import FontIcon from "material-ui/FontIcon";
import Avatar from "material-ui/Avatar";
import {Card, CardHeader, CardText} from "material-ui/Card";
import OptionsList from "./OptionsList";

class PollCard extends React.Component {

    render() {
        const poll = this.props.poll;

        let avatarIcon = <Avatar backgroundColor={cyan500} icon={<FontIcon className="material-icons">done_all</FontIcon>} />;

        const closed = (poll.closed === "true");

        if(closed){
            avatarIcon = <Avatar icon={<FontIcon className="material-icons">lock</FontIcon>} />;
        }

        return (
            <Card style={{marginBottom: 15}} initiallyExpanded={!closed}>
                <CardHeader
                    title={<span style={{color: blueGrey900, fontWeight: "bold"}}>{poll.title}</span>}
                    subtitle={
                        <div style={{fontSize: 12, paddingTop: 5, paddingBottom: 5}}>
                            por <Link color={indigo900} hoverColor={deepOrangeA400} text={poll.author.name} link="href"/>
                            . Ínicio: {poll.startDate} - Fim: {poll.endDate}. Total de votos: {poll.totalVotes}
                        </div>
                    }
                    avatar={avatarIcon}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText expandable={true}>
                    <OptionsList poll={poll}/>
                </CardText>
            </Card>
        );
    }
}

PollCard.propTypes = {
    poll: PropTypes.object.isRequired,
    odd:  PropTypes.bool
};

export default PollCard;
