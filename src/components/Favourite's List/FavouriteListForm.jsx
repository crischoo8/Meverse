import FavouriteListItem from "./FavouriteListItem"
import { useState, useEffect } from "react";
import '../../Component Styles/Card.css'

export default function FavouriteListForm() {
    const [searchedIdol, setSearchedIdol] = useState('');
    const [favourites, setFavourites] = useState([]);

//   put the preventDefault inside handleAdd (?)
    //  const handleRefresh = function(event) {
    //     event.preventDefault();
    //  }

     const handleChange = function(event) {
        // const {value} = event.target;
        setSearchedIdol(event.target.value);
        console.log(searchedIdol);
     }

     const handleAdd = function(event) {
        event.preventDefault();
        setFavourites({...favourites, searchedIdol});
        console.log(favourites);
     }

   return (
    <>
    <div className="componentCard">
    <form onSubmit={handleAdd}> 
        
        <label className='label'>Add a New Bias!</label>
        <br/>
        <input onChange={handleChange} ></input>
        <button>i choose you!</button>
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