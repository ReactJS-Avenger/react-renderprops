import React, { Component } from 'react';

class HoverCouner extends Component {

    render() {
        const {count, handleClick} = this.props
        return (
            <div>
                <h2 onMouseOver={handleClick}>Hovered  {count} times</h2>
            </div>
        );
    }
}

export default HoverCouner;