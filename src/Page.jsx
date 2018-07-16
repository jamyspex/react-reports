import React, { Component } from 'react';
import Measure, { withContentRect } from 'react-measure';
import Box from './Box';
import Table from './Table';

class Page extends Component {
    render() {

        const style = {
            width: this.props.config.width + this.props.config.unit,
            height: this.props.config.height + this.props.config.unit,
            position: 'absolute',
            left: '0px',
            top: (this.props.pageNumber * this.props.config.height) + this.props.config.unit,
            borderColor: 'red',
            borderWidth: '2px',
            borderStyle: 'solid',
            boxSizing: 'border-box'

        }
        const measureBoxes = [];

        for (var i = 0; i < 15; i++) {
            measureBoxes.push(<Box height={i * 10 + "px"} width="50px" top="0px" left={50 + i * 50 + "px"} />)
        }


        return (
            <div style={style}>
                {measureBoxes}
                <Box height="100px" width="200px" top="60px" left="100px" />
                <Box height="80px" width="180px" top="60px" left="100px" />
                <Table rows={40} top="400px" left="40px" pageNum={this.props.pageNumber} />
            </div>
        );
    }
}

export default Page;
