import React, { Component } from 'react';

import GameSpace from './children/GameSpace';

class DragContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideSourceOnDrag: true
        };
        this.handleHideSourceClick = this.handleHideSourceClick.bind(this);
    }

    handleHideSourceClick() {
        this.setState({
            hideSourceOnDrag: !this.state.hideSourceOnDrag
        });
    }

    render() {
        const { hideSourceOnDrag } = this.state;

        return (
            <GameSpace hideSourceOnDrag={hideSourceOnDrag} />
        )
    }
}

export default DragContainer;
    