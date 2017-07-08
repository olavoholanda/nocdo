import React from "react";
import {cyan100, cyan300, black, white, cyan800} from "material-ui/styles/colors";
import PropTypes from "prop-types";
import {ListItem} from "material-ui/List";
import FontIcon from "material-ui/FontIcon";

class PollOptionListItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            color: cyan100,
            selected: false,
            showIcon: false,
        };
    }

    handleTouchTap = (event) => {
        // This prevents ghost click.
        event.preventDefault();
        if (!this.state.selected) {
            this.setState({
                color: cyan300,
                selected: true,
                showIcon: true,
            });
        }
    };

    onMouseOver = () => {
        if (!this.state.selected) {
            this.setState({
                color: cyan300,
                showIcon: true,
            });
        }
    };

    onMouseLeave = () => {
        if (!this.state.selected) {
            this.setState({
                color: cyan100,
                showIcon: false,
            });
        }
    };

    render() {
        const option = this.props.option;

        let percentage = option.percentage + "% (" + option.votes + ")";

        return (
            <ListItem primaryText={
                <div>
                    <div>
                        <span style={{fontSize: 12, fontWeight: "bold"}}>{option.option}</span>
                    </div>
                    <div style={{float: "right", marginTop: -12, width: "50%"}}>
                        <div style={{float: "left", marginTop: -4}}>
                            <span style={{fontSize: 12, fontWeight: "bold"}}>{percentage}</span>
                        </div>
                        <div style={{float: "right", width: "80%", height: 12, backgroundColor: white, borderRadius: 5}}>
                            <div style={{width: option.percentage + "%", height: 12, backgroundColor: cyan800, borderRadius: 5}}/>
                        </div>
                    </div>
                </div>
            }
                      innerDivStyle={{
                          backgroundColor: this.state.color,
                          borderTop: "1px solid",
                          borderColor: white,
                      }}
                      leftIcon={<FontIcon style={this.state.showIcon ? {color: black} : {color: this.state.color}}
                                          className="material-icons">done</FontIcon>}
                      onMouseOver={this.onMouseOver}
                      onMouseLeave={this.onMouseLeave}
                      onTouchTap={this.handleTouchTap}
            />
        );
    }
}

PollOptionListItem.propTypes = {
    option: PropTypes.object.isRequired,
};

export default PollOptionListItem;
