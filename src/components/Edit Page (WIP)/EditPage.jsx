import '../../Component Styles/Card.css'
import { useState, useEffect } from 'react'
import EditCard from './EditCard'
import JournalLogCard from '../Journal Log/JournalLogCard';
const apiKey =
  "pat55QOu3yd823Utv.546f225dd594b97ce83db9d5a98f5dc9473321bce84ccb071c557d572f297395";
const baseId = "app1mVWq6wPqttmvG";
const tableName = "JournalLogs";

export default function EditPage() {
    const initialData = {title: '', text: ''};
    const [formData, setFormData] = useState({...initialData});
    const [logData, setLogData] = useState([]);
    const [isEditing, setIsEditing] = useState(false);

    const toggleEditMode = function() {
        setIsEditing(!isEditing);
    }
    const updateFormData = function(event) {
        const {name, value} = event.target
        setFormData({
        ...formData,
        [name]: value,
        });
    }
    const fetchJournals = async () => {
        const response = await fetch(
            `https://api.airtable.com/v0/${baseId}/${tableName}`,
            {
                headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
                },
            }
            );
            const journalData = await response.json();
           
            setLogData(journalData.records);
          
    };
    useEffect( () => {
    fetchJournals();
    }, []);

    return(
        <>
        {isEditing ? ( logData.map((entry, index)=> (<EditCard
        key={index}
        title={entry.fields.title}
        text={entry.fields.text}
        initialData={initialData}
        formData={formData}
        setFormData={setFormData}
        updateFormData={updateFormData}
        button = {<button onClick={async () => {
           
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
                toggleEditMode();
                fetchJournals();
        
        }}>save</button>}
        />))) : ( logData.map((entry, index)=> (<JournalLogCard
            key={index}
            title={entry.fields.title}
            text={entry.fields.text}
            button = {<button onClick={() => {
                toggleEditMode();
            }}>edit</button>}
           
            />)))}
        
        
        </>
    )
}