import '../../Component Styles/Card.css'
import JournalLogCard from './JournalLogCard';
import { useState, useEffect } from 'react';

export default function JournalLogForm() {
    
    return(
        <>
        <div className='componentCard'>
        <form>
            
            <label className='label'>
                fearnot's log
            </label>
            
            <div className='smallLabel'>
            <label>enter journal title here!</label>
            <br/>
            <input></input>
            </div>
            
            <div className='smallLabel'>
            <label>jot your thoughts here!</label>
            <br/>
            <textarea />
            </div>

            <button onClick={function(event) { 
                event.preventDefault();
                console.log(event.target)}}>update log!</button>
            
        </form>
        </div>

        <JournalLogCard/>
        </>
    )
};