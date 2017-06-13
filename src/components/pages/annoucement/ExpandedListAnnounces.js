import React from 'react'
import AnnounceCard from './AnnounceCard'
import data from './sample_data.json'

class ExpandedListAnnounces extends React.Component {
    render() {

        let list = data.map(function(a) {
            return (
                <AnnounceCard key={a.id} announcement={a} modal={false}/>
            );
        });

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default ExpandedListAnnounces;
