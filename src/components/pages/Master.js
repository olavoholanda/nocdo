import React from "react";
import NavDrawer from "./common/NavDrawer";
import HeaderToolBar from "./common/HeaderToolBar";
import AnnounceCard from "./annoucement/AnnounceCard";

var styleContent = {
    paddingLeft: 255
}

var user = {
    name: "Caleb Nichol",
    roleName: "Administrador",
    avatarUrl: "./avatars/caleb.jpg"
}

var announcement = {
    user: user,
    id: "1",
    title: "Arraiá do Horto 2017",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
}

var announcementTwo = {
    user: user,
    id: "2",
    title: "Desligamento de Energia",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
}

var announcementThree = {
    user: user,
    id: "3",
    title: "Teste de vazão dos poços",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
}

var announces = [announcement, announcementTwo, announcementThree]

class Master extends React.Component {

    render() {

        var listAnnounces = announces.map(function(a) {
            return (
            <AnnounceCard key={a.id} announcement={a}/>
            );
        });


        return (
            <div>
                {/*left nav bar with the menu application*/}
                <NavDrawer />
                {/*the content itself with a padding left from the nav bar */}
                <div style={styleContent}>
                    <HeaderToolBar />
                    {listAnnounces}
                </div>
            </div>
        );
    }
}

export default Master;