import FavouriteListItem from "./FavouriteListItem"
import { useState } from "react";
import tableStyle from "../../styleSheets/tableStyle";

export default function FavouriteListForm() {
    const [favourites, setFavourites] = useState([]);

  

     const noRefresh = function(event) {
        event.preventDefault();
     }
   return (
    <>
    <form > 
        <label>Add a New Bias!</label>
        <br/>
        <input></input>
        <button onClick={noRefresh}>i choose you!</button>
    </form>
        <table style={tableStyle}>
            <thead>
            <tr>
                <th>Favourite's List</th>
            </tr>
            </thead>
            <FavouriteListItem />
        </table>
    </>
   )
}