import React from 'react';

function Main() {
    return (
        <div className='container'>
            <h1 className='text-center'>Main</h1>
            <div className='row'>
                <Card name='booger'/>
                <Card name='bob' />
                <Card name='draco' />
            </div>
        </div>

    )
}

function Card(props) {
    return (
        <div className='col-4'>
            <h1 className='text-center'>{props.name} Card</h1>
        </div>
    )
}

export default Main