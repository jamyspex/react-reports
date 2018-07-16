import React, { Component } from 'react';
import { getRandomColour } from './utils';

class Box extends Component {
    render() {

        console.log(this.props);

        const style = {
            width: this.props.width,
            height: this.props.height,
            position: 'absolute',
            left: this.props.left,
            top: this.props.top,
            backgroundColor: getRandomColour(),
            borderWidth: '2px',
            borderStyle: 'solid',
            boxSizing: 'border-box'
        }

        return (
            <div ref={this.props.measureRef} style={style}>

            </div>
        );
    }
}

export default Box;
