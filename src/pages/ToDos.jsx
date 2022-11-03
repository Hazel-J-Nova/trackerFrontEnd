import React from 'react';
import Cards from '../components/Cards';

function ToDos(props) {
    return (
        <div className='toDos__main'>
            <Cards></Cards>
            <Cards></Cards>
            <Cards></Cards>
        </div>
    );
}

export default ToDos;