import React from 'react'
import AnnounceCard from './AnnounceCard'
import data from './sample_data.json'

class AnnounceListExpanded extends React.Component {
    render() {

        let list = data.map(function(a) {
            return (
                <AnnounceCard key={a.id} announcement={a}/>
            );
        });

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default AnnounceListExpanded;
