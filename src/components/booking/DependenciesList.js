import React from "react";
import PropTypes from "prop-types";
import {List, ListItem, makeSelectable} from "material-ui/List";
import Avatar from "material-ui/Avatar";
import Subheader from "material-ui/Subheader";

let SelectableList = makeSelectable(List);

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

        render() {

            return (
                <ComposedComponent
                    value={this.state.selectedIndex}
                    onChange={this.handleRequestChange}
                >
                    {this.props.children}
                </ComposedComponent>
            );
        }
    };
}

SelectableList = wrapState(SelectableList);

class DependenciesList extends React.Component {

    render() {
        const data = this.props.data;
        return (
            <SelectableList defaultValue={0}>
                {data.dependencies.map( (d, index) => (
                    <ListItem
                        key={index}
                        value={index}
                        rightAvatar={<Avatar src={d.img} size={45} />}
                        primaryText={d.title}
                        secondaryText={"Preço da Reserva: R$ " + d.price}
                    />
                ))}
            </SelectableList>
        );
    }
}

DependenciesList.propTypes = {
    data: PropTypes.object.isRequired,
};

export default DependenciesList;
