import React, { Component } from 'react';

class MostPopularCard extends Component {
   

    render() {
        const {id} = this.props.item;
        return (
            <div>
                {id}
            </div>
        );
    }
}

export default MostPopularCard;