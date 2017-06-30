import React from "react";
import NavDrawer from "../common/NavDrawer";
import HeaderToolBar from "../common/HeaderToolBar";
import ViewAnnounceAdmin from "./annoucement/ViewAnnounceAdmin";
import ViewAnnounce from "./annoucement/ViewAnnounce";
import ViewAnnounceForm from "./annoucement/ViewAnnounceForm";
import {Route} from "react-router-dom";

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
                    <Route
                        path={this.props.match.url + '/admin/avisos'}
                        component={ViewAnnounceAdmin}
                    />
                    <Route
                        path={this.props.match.url + '/avisos'}
                        component={ViewAnnounce}
                    />
                    <Route
                        path={this.props.match.url + '/admin/avisos/salvar/:id'}
                        component={ViewAnnounceForm}
                    />
                </div>
            </div>
        );
    }
}

export default Master;