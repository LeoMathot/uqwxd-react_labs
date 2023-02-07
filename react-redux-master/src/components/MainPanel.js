import React from 'react'
import MyButton from './MyButton'
import DivPanel from './DivPanel';
import '../styles/MainPanel.css'

const MainPanel = ()=>{
    return (
        <div className='main-panel-div'>
            <MyButton></MyButton>
            <DivPanel></DivPanel>
        </div>
    );
}
export default MainPanel;