import React, { Component } from 'react';

class ClickCounter extends Component {

    render() {
        const {count, handleClick}= this.props
        return (
            <div>
                <button onClick={handleClick}>Click {count}  counter</button>
            </div>
        );
    }
}

export default ClickCounter;