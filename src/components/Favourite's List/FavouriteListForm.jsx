import FavouriteListItem from "./FavouriteListItem"
import ProfileCard from "./ProfileCard";
import { useState, useEffect } from "react";
import '../../Component Styles/Card.css'

const apiKey =
  "pat55QOu3yd823Utv.546f225dd594b97ce83db9d5a98f5dc9473321bce84ccb071c557d572f297395";
const baseId = "app1mVWq6wPqttmvG";
const tableName = "FavList";

export default function FavouriteListForm() {
    const [name, setName] = useState('');
    const [favourites, setFavourites] = useState([]);
    const [profiles, setProfiles] = useState({});
    const reply = 'no profiles checked rn!';
  
     const handleChange = function(event) {
        setName(event.target.value);
     }

     const handleAdd = async function(event) {
        // console.log(name);
        event.preventDefault();
        
        const data = {
        "fields": {
            "Name": name
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
        fetchFavs();
    };
        
    
        const fetchFavs = async () => {
            const response = await fetch(
                `https://api.airtable.com/v0/${baseId}/${tableName}`,
                {
                    headers: {
                    Authorization: `Bearer ${apiKey}`,
                    "Content-Type": "application/json",
                    },
                }
                );
                const favListData = await response.json();
                // console.log(favListData);
                const favListId = favListData.records.map((record) => ({
                    ...record.fields,
                    id: record.id,
                  }));
                //   console.log(favListId)
                setFavourites(favListData.records);
                // console.log(favListData.records[0].id);
        };
        useEffect( () => {
        fetchFavs();
        }, []);

       

    // const deleteThisAirtableData = async function() {
    //     const response = await fetch(`https://api.airtable.com/v0/${baseId}/${tableName}/${item.id}`, {
    //       method: "DELETE",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${apiKey}`,
    //       },
    //     });
    //     await response.json();
    //   };

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
        <table className="table" style={{backgroundColor: ' #B1BDD5'}}>
            <thead>
            <tr>
                <th>Favourite's List</th>
            </tr>
            </thead>
        
            {favourites.map((item, index) => (<FavouriteListItem 
                key={index} 
                item={item.fields.Name}
                button = {<button onClick={async () => {
                    const response = await fetch(`https://api.airtable.com/v0/${baseId}/${tableName}/${item.id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${apiKey}`,
                },
                });
                await response.json();
                fetchFavs();
                }}>x</button>}
                profileButton = {<button onClick={async () => {
                    const url = `https://k-pop.p.rapidapi.com/idols?q=${item.fields.Name}&by=Stage%20Name`;
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
                    setProfiles(result)
                
                }}>check out profiles!</button>}
                />))} 
                
                {/* {JSON.stringify((Object.keys(profiles).length === 0)? reply : profiles.data[0]?.["Former Group"])} */}
                {/* {JSON.stringify(typeof mappedArray)} */}
                {(Object.keys(profiles).length === 0)? (
                    <tbody>
                    <tr>
                    <td colSpan="5">{reply}</td>
                    </tr>
                    </tbody>
          ): profiles.data.map((profile, index) => (<ProfileCard 
                key = {index}
                StageName = {(Object.keys(profiles).length === 0)? reply : profile?.["Stage Name"]}
                FullName = {(Object.keys(profiles).length === 0)? reply : profile?.["Full Name"]}
                DOB = {(Object.keys(profiles).length === 0)? reply : profile?.["Date of Birth"]}
                Group = {(Object.keys(profiles).length === 0)? reply : profile?.Group}
                Former = {(Object.keys(profiles).length === 0)? reply : profile?.["Former Group"]}
                />))} 
            
                
        </table>
    </div>
    </>
   )
}

// console.log(item.id)