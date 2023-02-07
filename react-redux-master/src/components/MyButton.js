import React from 'react'
import { useDispatch } from 'react-redux';
import increment from '../action'
import '../styles/MyButton.css'

const MyButton = ()=>{
    let dispatch = useDispatch();
    return (
        <button className='increment-btn' onClick={()=>dispatch(increment(1))}>+</button>
    );
}

export default MyButton;