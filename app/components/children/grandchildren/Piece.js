import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import PropTypes from 'prop-types';

const pieceSource = {
  beginDrag: function (props) {
console.log(props);
    const { id, top, left } = props;
    return { id, top, left };
  },
  endDrag: function (props, monitor) {
      const item = monitor.getItem();
      const dropResult = monitor.getDropResult();
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Piece extends Component {

  render() {
console.log(this.props);
    const { id, active, still, className, left, top, hideSourceOnDrag, isDragging, connectDragSource } = this.props;

    if (isDragging && hideSourceOnDrag) {
      return null;
    }

    return connectDragSource(
 
        <img id={id} src={still} data-active={active} data-still={still} className={className} alt={id} />
  
    );
  }
}

Piece.propTypes = {
  active: PropTypes.string.isRequired,
  still: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  id: PropTypes.any.isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  hideSourceOnDrag: PropTypes.bool.isRequired,
  children: PropTypes.node
};

export default DragSource(props => props.type, pieceSource, collect)(Piece);
