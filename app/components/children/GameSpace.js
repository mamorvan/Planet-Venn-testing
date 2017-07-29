import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import update from 'react/lib/update';
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
        a: { active: 'https://github.com/Mission-probable/Planet-Venn/blob/master/public/images/sun.gif?raw=true', still: 'https://github.com/Mission-probable/Planet-Venn/blob/master/public/images/sun_still.gif?raw=true', id: 'sunRedSmall', className: 'small piece', left: 50, top: 380, type: ItemTypes.SUNREDSMALL},
        b: { active: 'https://github.com/Mission-probable/Planet-Venn/blob/master/public/images/sun.gif?raw=true', still: 'https://github.com/Mission-probable/Planet-Venn/blob/master/public/images/sun_still.gif?raw=true', id: 'sunBlueSmall', className: 'small piece', left: 50, top: 380, type: ItemTypes.SUNBLUESMALL },
        c: { active: 'https://github.com/Mission-probable/Planet-Venn/blob/master/public/images/sun.gif?raw=true', still: 'https://github.com/Mission-probable/Planet-Venn/blob/master/public/images/sun_still.gif?raw=true', id: 'sunGreenSmall', className: 'small piece', left: 50, top: 380, type: ItemTypes.SUNGREENSMALL },
        d: { active: 'https://github.com/Mission-probable/Planet-Venn/blob/master/public/images/sun.gif?raw=true', still: 'https://github.com/Mission-probable/Planet-Venn/blob/master/public/images/sun_still.gif?raw=true', id: 'sunRedBig', className: 'big piece', left: 50, top: 380, type: ItemTypes.SUNREDBIG },
        e: { active: 'https://github.com/Mission-probable/Planet-Venn/blob/master/public/images/sun.gif?raw=true', still: 'https://github.com/Mission-probable/Planet-Venn/blob/master/public/images/sun_still.gif?raw=true', id: 'sunBlueBig', className: 'big piece', left: 50, top: 380, type: ItemTypes.SUNBLUEBIG },
        f: { active: 'https://github.com/Mission-probable/Planet-Venn/blob/master/public/images/sun.gif?raw=true', still: 'https://github.com/Mission-probable/Planet-Venn/blob/master/public/images/sun_still.gif?raw=true', id: 'sunGreenBig', className: 'big piece', left: 50, top: 380, type: ItemTypes.SUNGREENBIG },

        g: { active: 'https://github.com/Mission-probable/Planet-Venn/blob/master/public/images/alien.gif?raw=true', still: 'https://github.com/Mission-probable/Planet-Venn/blob/master/public/images/alien_still.gif?raw=true', id: 'alienRedSmall', className: 'small piece', left: 100, top: 380, type: ItemTypes.ALIENREDSMALL},
        h: { active: 'https://github.com/Mission-probable/Planet-Venn/blob/master/public/images/alien.gif?raw=true', still: 'https://github.com/Mission-probable/Planet-Venn/blob/master/public/images/alien_still.gif?raw=true', id: 'alienBlueSmall', className: 'small piece', left: 100, top: 380, type: ItemTypes.ALIENBLUESMALL }, 
        i: { active: 'https://github.com/Mission-probable/Planet-Venn/blob/master/public/images/alien.gif?raw=true', still: 'https://github.com/Mission-probable/Planet-Venn/blob/master/public/images/alien_still.gif?raw=true', id: 'alienGreenSmall', className: 'small piece', left: 100, top: 380, type: ItemTypes.ALIENGREENSMALL }, 
        j: { active: 'https://github.com/Mission-probable/Planet-Venn/blob/master/public/images/alien.gif?raw=true', still: 'https://github.com/Mission-probable/Planet-Venn/blob/master/public/images/alien_still.gif?raw=true', id: 'alienRedBig', className: 'big piece', left: 100, top: 380, type: ItemTypes.ALIENREDBIG }, 
        k: { active: 'https://github.com/Mission-probable/Planet-Venn/blob/master/public/images/alien.gif?raw=true', still: 'https://github.com/Mission-probable/Planet-Venn/blob/master/public/images/alien_still.gif?raw=true', id: 'alienBlueBig', className: 'big piece', left: 100, top: 380, type: ItemTypes.ALIENBLUEBIG }, 
        l: { active: 'https://github.com/Mission-probable/Planet-Venn/blob/master/public/images/alien.gif?raw=true', still: 'https://github.com/Mission-probable/Planet-Venn/blob/master/public/images/alien_still.gif?raw=true', id: 'alienGreenBig', className: 'big piece', left: 100, top: 380, type: ItemTypes.ALIENGREENBIG },

        m: { active: 'https://github.com/Mission-probable/Planet-Venn/blob/master/public/images/sat.gif?raw=true', still: 'https://github.com/Mission-probable/Planet-Venn/blob/master/public/images/sat_still.gif?raw=true', id: 'satRedSmall', className: 'small piece', left: 150, top: 380, type: ItemTypes.SATREDSMALL },
        n: { active: 'https://github.com/Mission-probable/Planet-Venn/blob/master/public/images/sat.gif?raw=true', still: 'https://github.com/Mission-probable/Planet-Venn/blob/master/public/images/sat_still.gif?raw=true', id: 'satBlueSmall', className: 'small piece', left: 150, top: 380, type: ItemTypes.SATBLUESMALL },
        o: { active: 'https://github.com/Mission-probable/Planet-Venn/blob/master/public/images/sat.gif?raw=true', still: 'https://github.com/Mission-probable/Planet-Venn/blob/master/public/images/sat_still.gif?raw=true', id: 'satGreenSmall', className: 'small piece', left: 150, top: 380, type: ItemTypes.SATGREENSMALL },
        p: { active: 'https://github.com/Mission-probable/Planet-Venn/blob/master/public/images/sat.gif?raw=true', still: 'https://github.com/Mission-probable/Planet-Venn/blob/master/public/images/sat_still.gif?raw=true', id: 'satRedBig', className: 'big piece', left: 150, top: 380, type: ItemTypes.SATREDBIG },
        q: { active: 'https://github.com/Mission-probable/Planet-Venn/blob/master/public/images/sat.gif?raw=true', still: 'https://github.com/Mission-probable/Planet-Venn/blob/master/public/images/sat_still.gif?raw=true', id: 'satBlueBig', className: 'big piece', left: 150, top: 380, type: ItemTypes.SATBLUEBIG },
        r: { active: 'https://github.com/Mission-probable/Planet-Venn/blob/master/public/images/sat.gif?raw=true', still: 'https://github.com/Mission-probable/Planet-Venn/blob/master/public/images/sat_still.gif?raw=true', id: 'satGreenBig', className: 'big piece', left: 150, top: 380, type: ItemTypes.SATGREENBIG },
      }
    };
    this.moveItem = this.moveItem.bind(this);
  }

  moveItem(id, left, top) {
    console.log(id, left, top);
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
        <div id="pieces-container">
            {Object.keys(items).map((key) => {
            const { active, still, id, className, left, top, type } = items[key];
            return (
                <Piece
                    key={key}
                    id={id}
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
        </div>
        </Col>
        
        <Col sm={8}>

            <Venn accepts= {[ItemTypes.SUNREDBIG, ItemTypes.SUNGREENBIG, ItemTypes.SUNBLUEBIG, ItemTypes.SUNREDSMALL, ItemTypes.SUNGREENSMALL, ItemTypes.SUNBLUESMALL ]} id='category1' moveItem={this.moveItem}/>
            <Venn accepts={ItemTypes.ALIENGREENSMALL} id='category2' moveItem={this.moveItem}/>
            <Venn accepts={[ItemTypes.SATREDBIG, ItemTypes.SATBLUEBIG]} id='category3' moveItem={this.moveItem}/>
            <Venn accepts={[ItemTypes.ALIENREDSMALL, ItemTypes.SUNGREENBIG]} id='category4' moveItem={this.moveItem} />
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
