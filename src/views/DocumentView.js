import React from "react";
import HeaderToolBar from "../components/common/HeaderToolBar";

class DocumentView extends React.Component {

    render() {

        return (
            <div>
                <HeaderToolBar title="Documentos" icon="account_balance"/>
                <h3>Documentos</h3>
            </div>
        );
    }
}

export default DocumentView;
