import React from "react";
import NavDrawer from "./common/NavDrawer";
import HeaderToolBar from "./common/HeaderToolBar";
import ViewAnnounceAdmin from "./annoucement/ViewAnnounceAdmin";
import ViewAnnounce from "./annoucement/ViewAnnounce";
import ViewAnnounceForm from "./annoucement/ViewAnnounceForm";

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
                    <ViewAnnounceForm />
                </div>
            </div>
        );
    }
}

export default Master;