const apiKey =
  "pat55QOu3yd823Utv.546f225dd594b97ce83db9d5a98f5dc9473321bce84ccb071c557d572f297395";
const baseId = "app1mVWq6wPqttmvG";
const tableName = "JournalLogs";


export default function EditJournalCard({title, text, entry, refresh, formData, setFormData}) {
 
   
    const handleEdit = async function() {
        const data = {
            "records": [ 
             {
             "id": entry.id, 
             "fields": {
                 "title": formData.title,
                 "text": formData.text
             }
             }]
                 };
     
             const response = await fetch(
             `https://api.airtable.com/v0/${baseId}/${tableName}`,
             {
                 method: "PATCH",
                 headers: {
                 Authorization: `Bearer ${apiKey}`,
                 "Content-Type": "application/json",
                 },
                 body: JSON.stringify(data),
             }
             );
             await response.json();
             setFormData({title: '', text: ''})
             refresh;
    }
    
    return(
    <>
    <table className='card'>
        <tbody> 
       <tr>
            <td className='labelv3'>
                <p>Ⴚტ◕‿◕ტჂ</p>
            </td>
       </tr>
       <tr>
            <td className='title'>
                <strong>title:</strong> {title}
               
            </td>
       </tr>
       <tr>
            <td>
                {text}
               
            </td>
        </tr>
        <tr>
            <td>
                {<button onClick={handleEdit}>make changes</button>}
            </td>
        </tr>
        
    </tbody>
    </table>
    </>
    )
}