import React from "react";
import AnnounceListExpanded from "./AnnounceListExpanded";
import AnnounceToolBar from "./AnnounceToolBar";


//TODO -- add the dialogs here
class ViewAnnounceAdmin extends React.Component {

    render() {

        return (
            <div>
                <AnnounceToolBar />
                <AnnounceListExpanded />
            </div>
        );
    }
}

export default ViewAnnounceAdmin;
