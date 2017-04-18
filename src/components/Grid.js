import React, { Component } from 'react';
import Cell from './cell';

export default class Grid extends Component {

    renderCells() {
        let theCells = [];
        for(let i = 0; i < 50*30; i++) {
            theCells.push(
              <Cell key={i}></Cell>
            );
        }
        return theCells;
    }

    render() {
        return (
            <div className="default-grid">
                {this.renderCells()}
            </div>
        );
    }
}
