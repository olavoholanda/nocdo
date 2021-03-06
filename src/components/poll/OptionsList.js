import React from "react";
import {blueGrey100, cyan100, cyan500, white} from "material-ui/styles/colors";
import PropTypes from "prop-types";
import {List, ListItem, makeSelectable} from "material-ui/List";
import FontIcon from "material-ui/FontIcon";
import RaisedButton from "material-ui/RaisedButton";
import IconButton from "material-ui/IconButton";
import Subheader from "material-ui/Subheader";

let SelectableList = makeSelectable(List);

const styleAdminTools = {
    float: 'right',
    marginTop: -30,
    padding: 0,
    height: 34,
    width: 34
};

function wrapState(ComposedComponent) {
    return class SelectableList extends React.Component {
        static propTypes = {
            children: PropTypes.node.isRequired,
            defaultValue: PropTypes.number.isRequired,
        };

        componentWillMount() {
            this.setState({
                selectedIndex: this.props.defaultValue,
            });
        }

        handleRequestChange = (event, index) => {
            this.setState({
                selectedIndex: index,
            });
        };

        onSubmitVote = () => {
            console.log("Votado na opção: " + this.state.selectedIndex);
        };

        render() {

            let adminTools = (
                <div>
                    <IconButton style={styleAdminTools} tooltip="Remover" href="/poll">
                        <FontIcon className="material-icons">delete</FontIcon>
                    </IconButton>
                    <IconButton style={styleAdminTools} tooltip="Editar" href={"/poll/edit/" + this.props.pollId}>
                        <FontIcon className="material-icons">mode_edit</FontIcon>
                    </IconButton>
                </div>
            );

            return (
                <ComposedComponent
                    value={this.state.selectedIndex}
                    onChange={this.handleRequestChange}
                >
                    <Subheader>Opções:</Subheader>
                    {this.props.children}
                    <div style={{textAlign: "center", marginTop: 10}}>
                        <RaisedButton onTouchTap={this.onSubmitVote} label="Votar"  disabled={this.state.selectedIndex===0} primary={true} />
                        {adminTools}
                    </div>
                </ComposedComponent>
            );
        }
    };
}

SelectableList = wrapState(SelectableList);

class OptionsList extends React.Component {

    render() {
        const poll = this.props.poll;
        return (
            <SelectableList defaultValue={0}>
                {poll.options.map( (option, index) => (
                    <ListItem primaryText={
                        <div>
                            <div>
                                <span style={{fontSize: 12, fontWeight: "bold"}}>{option.option}</span>
                            </div>
                            <div style={{float: "right", marginTop: -12, width: "50%"}}>
                                <div style={{float: "left", width: "80%", height: 12, backgroundColor: cyan100, borderRadius: 0}}>
                                    <div style={{width: option.percentage + "%", height: 12, backgroundColor: cyan500, borderRadius: 0}}/>
                                </div>
                                <div style={{float: "right", marginTop: -4}}>
                                    <span style={{fontSize: 12, fontWeight: "bold"}}>{option.percentage + "% (" + option.votes + ")"}</span>
                                </div>
                            </div>
                        </div>
                    }
                              innerDivStyle={{
                                  marginTop: -1,
                                  border: "1px solid",
                                  borderColor: blueGrey100,
                              }}
                              leftIcon={<FontIcon style={{color: white}}
                                                  className="material-icons">done</FontIcon>}
                              value={option.id}
                              key={option.id}
                    />
                ))}
            </SelectableList>
        );
    }
}

OptionsList.propTypes = {
    poll: PropTypes.object.isRequired,
};

export default OptionsList;
