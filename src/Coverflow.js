import React from 'react';
import './App.css';

class Coverflow extends React.Component{
    super();

    changeCover() {

    }

    render() {
        return (
            <div id="coverflow-container">
                <div className='covers'>
                    <img alt='cover1'/>
                </div>
                <div className='covers'>
                    <img alt='cover2' />
                </div>
                <div className='covers'>
                    <img alt='cover3' />
                </div>
                <div className='covers'>
                    <img alt='cover4' />
                </div>
            </div>
        )
    }
   
}

export default Coverflow;