import React from 'react';
import './card-list.styles.css';
import { Card } from './../card/card.component';

// export const CardList = () => {
//     return (
//         <div>Emad</div>
//     );
// } 

// export const CardList = (props) => {
// console.log(props.name) //// this props.name comes from <CardList name='xx' /> tag
//     return (
//         <div className='card-list'>
//             {props.children}
//         </div>
//     );
// } 

// export const CardList = (props) => (
//     <div className='card-list'>
//         { props.monsters.map(data => 
//           <h1 key={data.id}>{data.name}</h1>
//         )}
//     </div>
// );


export const CardList = props => (
    <div className='card-list'>
        {props.monsters.map(data => 
            <Card key={data.id} monster={data} />
        )}
    </div>
)