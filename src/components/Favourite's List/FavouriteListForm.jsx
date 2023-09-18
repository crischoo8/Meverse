import FavouriteListItem from "./FavouriteListItem"
import { useState, useEffect } from "react";
import '../../Component Styles/Card.css'

export default function FavouriteListForm() {
    const [searchedIdol, setSearchedIdol] = useState([]);
    const [favourites, setFavourites] = useState([]);

  
     const handleRefresh = function(event) {
        event.preventDefault();
     }

     const handleChange = function(event) {
        const {value} = event.target;
        setSearchedIdol({value});
        console.log(searchedIdol);
     }

   return (
    <>
    <div className="componentCard">
    <form > 
        
        <label className='label'>Add a New Bias!</label>
        <br/>
        <input onChange={handleChange}></input>
        <button onClick={handleRefresh}>i choose you!</button>
    </form>
        <table className="table">
            <thead>
            <tr>
                <th>Favourite's List</th>
            </tr>
            </thead>
            <FavouriteListItem />
        </table>
    </div>
    </>
   )
}