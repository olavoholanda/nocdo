import React from "react";
import PropTypes from "prop-types";
import {List, ListItem, makeSelectable} from "material-ui/List";
import Avatar from "material-ui/Avatar";
import Paper from "material-ui/Paper";
import ListSubHeader from "./ListSubHeader";

let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
    return class SelectableList extends React.Component {
        static propTypes = {
            children: PropTypes.node.isRequired,
            defaultValue: PropTypes.number.isRequired,
            handler: PropTypes.func.isRequired,
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
            this.props.handler(event, index);
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
            <Paper style={{minHeight: 800}}>
                <ListSubHeader
                    title="Dependências do Condomínio:"
                    tooltip="Nova Dependência"
                    badge="add_circle"
                    icon="business"
                />
                <SelectableList defaultValue={0} handler={this.props.handler}>
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
            </Paper>
        );
    }
}

DependenciesList.propTypes = {
    data: PropTypes.object.isRequired,
    handler: PropTypes.func.isRequired,
};

export default DependenciesList;
