import React from 'react'
import NavDrawer from './common/NavDrawer'
import HeaderToolBar from './common/HeaderToolBar'
import Subheader from 'material-ui/Subheader'
import ExpandedListAnnounces from './annoucement/ExpandedListAnnounces'
import CollapsedListAnnounces from './annoucement/CollapsedListAnnounces'
import AnnounceToolBar from './annoucement/AnnounceToolBar'

let styleContent = {
    paddingLeft: 255
};

class Master extends React.Component {

    render() {

        return (
            <div>
                {/*left nav bar with the menu application*/}
                <NavDrawer />
                {/*the content itself with a padding left from the nav bar */}
                <div style={styleContent}>
                    <HeaderToolBar title="Avisos" icon="announcement"/>
                    <AnnounceToolBar />
                    <ExpandedListAnnounces />
                </div>
            </div>
        );
    }
}

export default Master;