import React from "react";
import HeaderToolBar from "../components/common/HeaderToolBar";

class AnnounceView extends React.Component {

    render() {

        return (
            <div>
                <HeaderToolBar title="Avisos" icon="announcement"/>
                <h3>Announce View</h3>
            </div>
        );
    }
}

export default AnnounceView;
