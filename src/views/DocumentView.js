import React from "react";
import HeaderToolBar from "../components/common/HeaderToolBar";
import DocumentList from "../components/document/DocumentsList";
import DocumentForm from "../components/document/DocumentForm";
import {Route, Redirect, Switch} from "react-router-dom";

class DocumentView extends React.Component {

    render() {

        return (
            <div>
                <HeaderToolBar link="/documents" title="Documentos" icon="account_balance"/>
                <Switch>
                    <Route exact path={"/documents/list"} component={DocumentList}/>
                    <Route exact path={"/documents/upload"} component={DocumentForm}/>
                    <Redirect exact from="/documents" to="/documents/list"/>
                </Switch>
            </div>
        );
    }
}

export default DocumentView;
