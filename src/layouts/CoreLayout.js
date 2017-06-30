import React from "react";
import NavDrawer from "../components/common/NavDrawer";
import PropTypes from "prop-types";
import InnerRoutes from "../routes/InnerRoutes";

let styleContent = {
    paddingLeft: 255
};

// CoreLayout is a pure function of its props, so we can
// define it with a plain javascript function...
function CoreLayout({children}) {
    return (
        <div>
            {/*left nav bar with the menu application*/}
            <NavDrawer />
            {/*the content itself with a padding left from the nav bar */}
            <div style={styleContent}>
                <InnerRoutes/>
            </div>
        </div>
    )
}

CoreLayout.propTypes = {
    children: PropTypes.element
};

export default CoreLayout