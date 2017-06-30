import React from "react";
import HeaderToolBar from "../components/common/HeaderToolBar";

class CollaboratorView extends React.Component {

    render() {

        return (
            <div>
                <HeaderToolBar title="Colaboradores" icon="recent_actors"/>
                <h3>Collaborator View</h3>
            </div>
        );
    }
}

export default CollaboratorView;
