import React from 'react'
import { useSelector } from 'react-redux';
import '../styles/DivPanel.css'

const DivPanel = () =>{
    let counterVal = useSelector(state => state.counter)
    return (
        <div className='counter-val'>
            {counterVal}
        </div>
    );
}

export default DivPanel;