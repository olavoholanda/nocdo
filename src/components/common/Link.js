import React from "react";
import PropTypes from "prop-types";

class Link extends React.Component {

    constructor(props) {
        super(props);

        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    handleMouseOver (e){
        e.target.style.color = this.props.hoverColor;
        e.target.style.textDecoration = "underline";
    }

    handleMouseOut (e){
        e.target.style.color = this.props.color;
        e.target.style.textDecoration = "none";
    }

    render() {
        return (
            <a style={{
                color: this.props.color,
                textDecoration: "none",
                fontWeight: "bold",
                cursor: 'pointer'
            }}
               onMouseOver={this.handleMouseOver}
               onMouseOut={this.handleMouseOut}
               href={this.props.link}
            >{this.props.text}</a>
        )
    }
}

Link.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    hoverColor: PropTypes.string.isRequired
};

export default Link;