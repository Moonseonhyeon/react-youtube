import React, {PureComponent} from 'react';
import MostPopularCard from './mostPopularCard';

class MostPopularList extends PureComponent {
    
 


    render() {        
        return (
            <ul>
                {this.props.items.map(item => (
                    <MostPopularCard 
                        key = {item.id} 
                        
                        
                    />
                ))}
            </ul>
        );
    }
}

export default MostPopularList;