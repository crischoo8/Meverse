import FavouriteListItem from "./FavouriteListItem"
import { useState, useEffect } from "react";
import '../../Component Styles/Card.css'

export default function FavouriteListForm() {
    // const [searchedIdol, setSearchedIdol] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [favourites, setFavourites] = useState([]);
   

  
     const handleChange = function(event) {
        // const {value} = event.target;
        setUserInput(event.target.value);
      
        // console.log(searchedIdol);
      
     }

     const handleAdd = function(event) {
        event.preventDefault();
        // const name = "me"
        // const name = userInput;
        setFavourites({...favourites, userInput});
        console.log(favourites);
     }

   return (
    <>
    <div className="componentCard">
    <form onSubmit={handleAdd}> 
        
        <label className='label'>Add a New Bias!</label>
        <br/>
        <input 
        value={userInput}
        onChange={handleChange} ></input>
        <button>i choose you!</button>
    </form>
        <table className="table">
            <thead>
            <tr>
                <th>Favourite's List</th>
            </tr>
            </thead>
            {/* <FavouriteListItem /> */}
            {[favourites].map((item, index) => (<FavouriteListItem 
                key={index} 
                item={item.userInput}
                />))}
        </table>
    </div>
    </>
   )
}