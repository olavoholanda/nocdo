import React from "react";
import HeaderToolBar from "../components/common/HeaderToolBar";

class HomeView extends React.Component {

    render() {

        return (
            <div>
                <HeaderToolBar title="Início" icon="home"/>
                <h3>Home View</h3>
            </div>
        );
    }
}

export default HomeView;
