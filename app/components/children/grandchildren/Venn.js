import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import PropTypes from 'prop-types';
import ItemTypes from '../../../utils/ItemTypes';

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

const vennTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    const delta = monitor.getDifferenceFromInitialOffset();
    const left = Math.round(item.left + delta.x);
    const top = Math.round(item.top + delta.y);

    component.props.moveItem(item.id, left, top);
  }
};

class Venn extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = isOver && canDrop;

    return connectDropTarget(
      <div id={this.props.id} className="venn-div">
        {isActive? 'release to drop' : 'drag an item here'}
      </div>
    );
  }
}

Venn.propTypes = {
  id: PropTypes.string.isRequired,
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool.isRequired,
  connectDropTarget: PropTypes.func.isRequired
};

export default DropTarget(props => props.accepts, vennTarget, collect)(Venn);
