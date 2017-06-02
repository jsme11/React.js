import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';
import Snack from './Snack';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class Container extends Component {
  render() {
    return (
      <div>
        <Snack name='Poka&Chips'/>
        <Snack name='cornsomepopcorns'/>
        <Snack name='POKI'/>
        <Snack name='shrimpggang'/>
        <Snack name='whale bob'/>
        <ShoppingCart/>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Container);
