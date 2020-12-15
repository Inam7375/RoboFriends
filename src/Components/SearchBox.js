import React from 'react';

const SearchBox = ({stateUpdate}) => {
    return(
        <div className=' tc pa2'>
            <input
            className='pa3 ba b--blue bg-lightest-blue' 
            type='search'
            placeholder='Search Robots..'
            onChange={stateUpdate}
            />
        </div>
    )
}

export default SearchBox;