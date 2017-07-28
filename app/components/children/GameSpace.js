import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';
import update from 'react/lib/update';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import ItemTypes from '../../utils/ItemTypes';
import PropTypes from 'prop-types';

import Venn from './grandchildren/Venn';
import Piece from './grandchildren/Piece';
import Options from './grandchildren/Options';

class GameSpace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {
        a: { active: 'http://gph.to/2h3R26x', still: '', id: '', className: 'small piece', left: 50, top: 380, type: ItemTypes.PLANET },
        b: { active: 'http://gph.to/2vJycoB', still: '', id: '', className: 'small piece', left: 100, top: 380, type: ItemTypes.ALIEN },
        c: { active: 'http://gph.to/2tKtSbi', still: '', id: '', className: 'small piece', left: 150, top: 380, type: ItemTypes.SATELITE }
      }
    };
    this.moveItem = this.moveItem.bind(this);
  }

  moveItem(id, left, top) {
    this.setState(update(this.state, {
      items: {
        [id]: {
          $merge: { left, top }
        }
      }
    }));
  }
  render() {
    const { hideSourceOnDrag } = this.props;
    const { items } = this.state;

    return (
      <div>
        <Row>
        <Col sm={4}>
            {Object.keys(items).map((key) => {
            const { active, still, className, left, top, type } = items[key];
            return (
                <Piece
                    key={key}
                    id={key}
                    active={active}
                    still={still}
                    className={className}
                    left={left}
                    top={top}
                    type={type}
                    hideSourceOnDrag={hideSourceOnDrag}
                />
            );
            })}
        </Col>

        <Col sm={8}>

            <Venn accepts={ItemTypes.PLANET} id='category1' moveItem={this.moveItem}/>
            <Venn accepts={ItemTypes.ALIEN} id='category2' moveItem={this.moveItem}/>
            <Venn accepts={ItemTypes.SATELITE} id='category3' moveItem={this.moveItem}/>
            <Venn accepts={[ItemTypes.ALIEN, ItemTypes.PLANET]} id='category4' moveItem={this.moveItem} />
        </Col>
        </Row>
        <Options />
      </div>
    );
  }
}

GameSpace.propTypes = {
  hideSourceOnDrag: PropTypes.bool.isRequired
};

export default DragDropContext(HTML5Backend)(GameSpace);
