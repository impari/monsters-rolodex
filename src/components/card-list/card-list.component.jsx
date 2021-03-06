import React from 'react';
import './card-list.styles.css';

import{ Card } from '../card/card.component';

export const CardList = props => (
    // console.log(props.myMonsters),
 <div className='card-list'>
     {props.myMonsters.map(monster => (
         <Card key={monster.id} monster={monster} />
     ))}
</div>
);