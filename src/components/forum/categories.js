import React from "react";
import FontIcon from "material-ui/FontIcon";
import {blueGrey300, deepPurple300, lightBlue300, lightGreen300, yellow300} from "material-ui/styles/colors";

const style = {
    fontSize: 35
};

export const general = () => <FontIcon color={lightBlue300} style={style} className="material-icons">speaker_notes</FontIcon>;
export const management = () => <FontIcon color={blueGrey300} style={style} className="material-icons">business</FontIcon>;
export const commonspace = () => <FontIcon color={deepPurple300} style={style} className="material-icons">transfer_within_a_station</FontIcon>;
export const employees = () => <FontIcon color={lightGreen300} style={style} className="material-icons">assignment_ind</FontIcon>;
export const offtopic = () => <FontIcon color={yellow300} style={style} className="material-icons">speaker_notes_off</FontIcon>;