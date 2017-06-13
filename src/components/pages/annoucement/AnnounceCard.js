import React, {Component} from 'react'
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import PropTypes from 'prop-types';

class AnnounceCard extends Component {

    static propTypes = {
        announcement: PropTypes.object.isRequired
    };

    render() {
        const {announcement} = this.props
        return (
            <Card style={{margin: 15}}>
                <CardHeader
                    title={announcement.user.name}
                    subtitle={announcement.user.roleName}
                    avatar={announcement.user.avatarUrl}
                />
                <CardTitle title={announcement.title} subtitle="Aviso" />
                <CardText>
                    {announcement.text}
                </CardText>
            </Card>
        )
    }
}

AnnounceCard.propTypes = {
    announcement: PropTypes.object
}

export default AnnounceCard
