import '../../Component Styles/Card.css'

const apiKey =
  "pat55QOu3yd823Utv.546f225dd594b97ce83db9d5a98f5dc9473321bce84ccb071c557d572f297395";
const baseId = "app1mVWq6wPqttmvG";
const tableName = "FavList";

export default function FavouriteListItem({itemName, item, refresh, loadProfile}) {
   const handleDelete = async function() {
    const response = await fetch(`https://api.airtable.com/v0/${baseId}/${tableName}/${item.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
        },
        });
        await response.json();
        refresh();
   }

   const loadProfiles = async function() {
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
            // console.log(result);
            loadProfile(result);
   }
    return(
        <>
        <tbody>
        <tr>
            <td className='tableData' style={{backgroundColor: '#FFF8F1'}}> 
                {/* yun ๑(◕‿◕)๑ */}
                ♡  {itemName} 
                <br/>
                <button onClick={handleDelete}>x</button>
                {<button onClick={loadProfiles}>check out profiles!</button>}
            </td>
            
        </tr>
        </tbody>
        </>
    )
};

 // const handleClick = function(event) {
    //     console.log(event.target);
    // }