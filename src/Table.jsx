import React, { Component } from 'react';
import { getRandomColour } from './utils';
import faker from 'faker/locale/en_GB';
import Measure from 'react-measure';

const Table = ({ top, left, pageNum, rows }) => {
    const style = {
        position: 'absolute',
        backgroundColor: getRandomColour(),
        borderWidth: '2px',
        top,
        left,
        borderStyle: 'solid',
        boxSizing: 'border-box'
    };

    const rowElements = [];

    for (var i = 0; i < rows; i++) {
        rowElements.push(
            <tr>
                <td>{faker.fake("{{name.firstName}} {{name.lastName}}")}</td>
                <td>{faker.fake("{{address.streetName}}, {{address.zipCode}}")}</td>
                <td>{faker.fake("{{phone.phoneNumber}}")}</td>
            </tr>
        );
    }


    return (<Measure offset>
        {({ measureRef, contentRect }) => {

            console.log(`pageNum: ${pageNum}: ${JSON.stringify(contentRect)}`)

            return (<div ref={measureRef} style={style}>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                    </tr>
                    {rowElements}
                </table>
            </div>);
        }}
    </Measure>);

}

export default Table;
