import FavouriteListItem from "./FavouriteListItem"
import { useState, useEffect } from "react";
import '../../Component Styles/Card.css'
// import addFav from "../../AirTable/addFav";
const apiKey =
  "pat55QOu3yd823Utv.546f225dd594b97ce83db9d5a98f5dc9473321bce84ccb071c557d572f297395";
const baseId = "app1mVWq6wPqttmvG";
const tableName = "FavList";

export default function FavouriteListForm() {
    // const [searchedIdol, setSearchedIdol] = useState([]);
    const [name, setName] = useState('');
    const [favourites, setFavourites] = useState([]);
   
useEffect()
  
     const handleChange = function(event) {
        // const {value} = event.target;
        setName(event.target.value);
      
     }

     const handleAdd = async function(event) {
        console.log(name);
        event.preventDefault();
        

    const data = {
      "fields": {
        "Name": `${name}`
      }
  };
    const response = await fetch(
      `https://api.airtable.com/v0/${baseId}/${tableName}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
     await response.json();
  };
        

   return (
    <>
    <div className="componentCard">
    <form onSubmit={handleAdd}> 
        
        <label className='label'>Add a New Bias!</label>
        <br/>
        <input 
        value={name}
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
                item={item.name}
                />))}
        </table>
    </div>
    </>
   )
}