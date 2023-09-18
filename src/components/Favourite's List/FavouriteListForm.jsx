import FavouriteListItem from "./FavouriteListItem"
import { useState } from "react";
import tableStyle from "../../styleSheets/tableStyle";
import '../../Component Styles/Card.css'

export default function FavouriteListForm() {
    const [favourites, setFavourites] = useState([]);

  

     const handleRefresh = function(event) {
        event.preventDefault();
     }
   return (
    <>
    <div className="componentCard">
    <form > 
        <label className='label'>Add a New Bias!</label>
        <br/>
        <input></input>
        <button onClick={handleRefresh}>i choose you!</button>
    </form>
        <table style={tableStyle}>
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