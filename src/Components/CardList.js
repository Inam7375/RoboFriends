import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    const robotList = robots.map( (user, i)  => {
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
        
    }
    );
    return (
        <div>
            {robotList}
        </div>
    )
}

export default CardList;