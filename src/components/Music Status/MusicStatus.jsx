import '../../Component Styles/Card.css'
import { useState, useEffect } from 'react';

export default function MusicStatus() {
    const [music, setMusic] = useState({});
    let gotMusic = false;
    const status = 'nothing';
    // const handleRefresh = function(event) {
    //     event.preventDefault();
    //  }

    const addMusic = async function(event) {
        event.preventDefault();
        const url = 'https://k-pop.p.rapidapi.com/songs/random';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '3a9180ad1fmsh49e80cc673aa29dp12e99djsn155fb5eeaa1f',
                'X-RapidAPI-Host': 'k-pop.p.rapidapi.com'
            }
        };

       
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        setMusic(result);
    }
    return(
        <>
        <div className="componentCard">
           <h3 className="label">rando bop!</h3>
           <br />
        <table className="musictable">
            <tbody>
            <tr>
                <td>
                <strong>SONG:</strong> {(Object.keys(music).length === 0)? status :  music.data[0]?.["Song Name"]}
                {/* {JSON.stringify(music.data?.[0])} */}
                {/* {JSON.stringify(Object.keys(music).length === 0)} */}
                </td>
            </tr>

            <tr>
                <td>
                <strong>ARTIST:</strong> {(Object.keys(music).length === 0)? status : music.data[0]?.Artist}
                </td>
            </tr>
            <tr>
                <td>
                <strong>LINK:</strong> <a href={(Object.keys(music).length === 0)? status : music.data[0]?.Video} target="_blank">listen here</a>
                </td>
            </tr>
            </tbody>
        </table>
        <br />
        <form>
{/*             
            <label><strong>update your song of the day here!</strong></label>
            <br />
            <input></input>
            <button onClick={handleRefresh}>update</button>
            <br /> */}
            <label style={{"fontSize":"18px"}}><strong><em>get your music rec here</em></strong></label>
            <br />
            <button onClick={addMusic}>random song!</button>
            
        </form>
        </div>
        </>
    )
}