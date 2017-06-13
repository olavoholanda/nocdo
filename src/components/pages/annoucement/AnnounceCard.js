import React, {Component} from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import PropTypes from 'prop-types'
import {deepOrangeA400} from 'material-ui/styles/colors'

class AnnounceCard extends Component {

    render() {
        const {announcement} = this.props;
        let subtitle = "Postado em " + announcement.date;
        return (
            <Card style={{margin: 15}}>
                <CardHeader titleColor={deepOrangeA400} titleStyle={{fontWeight: "bold"}} title={announcement.title}
                    subtitle={subtitle} subtitleStyle={{fontSize: 12}}
                />
                <CardText>
                    {announcement.text}
                </CardText>
            </Card>
        )
    }
}

AnnounceCard.propTypes = {
    announcement: PropTypes.object.isRequired
};

export default AnnounceCard
