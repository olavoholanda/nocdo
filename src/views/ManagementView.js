import React from "react";
import HeaderToolBar from "../components/common/HeaderToolBar";

class ForumView extends React.Component {

    render() {

        return (
            <div>
                <HeaderToolBar title="Gerenciamento" icon="question"/>
                <h3>Management View</h3>
            </div>
        );
    }
}

export default ForumView;
