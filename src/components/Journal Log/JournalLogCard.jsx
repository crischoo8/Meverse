import '../../Component Styles/Card.css'
import { useNavigate } from 'react-router-dom';

const apiKey =
  "pat55QOu3yd823Utv.546f225dd594b97ce83db9d5a98f5dc9473321bce84ccb071c557d572f297395";
const baseId = "app1mVWq6wPqttmvG";
const tableName = "JournalLogs";

    
export default function JournalLogCard({title, text, entry, refresh}) {
    const handleDelete = async function() {
        const response = await fetch(`https://api.airtable.com/v0/${baseId}/${tableName}/${entry.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
        },
        });
        await response.json();
        refresh();
    }
    const navigate = useNavigate();
    const goEdit = function() {
        navigate('/EditJournal');
    };
    
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
                <button onClick={handleDelete}>delete</button>
                <button onClick={goEdit}>edit</button>
            </td>
        </tr>
        
    </tbody>
    </table>
    </>
    )
}