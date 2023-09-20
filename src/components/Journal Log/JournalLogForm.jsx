import '../../Component Styles/Card.css'
import JournalLogCard from './JournalLogCard';
import { useState, useEffect } from 'react';

const apiKey =
  "pat55QOu3yd823Utv.546f225dd594b97ce83db9d5a98f5dc9473321bce84ccb071c557d572f297395";
const baseId = "app1mVWq6wPqttmvG";
const tableName = "JournalLogs";

export default function JournalLogForm() {
    const initialData = {title: '', text: ''};
    const [formData, setFormData] = useState({...initialData});
    const [logData, setLogData] = useState([]);
    
    const handleChange = function(event) {
        const {name, value} = event.target
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleAdd = async function(event) {
        // console.log(name);
        event.preventDefault();
        
        const data = {
        "fields": {
            "title": formData.title,
            "text": formData.text
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
            // console.log(favListData);
            // const journalId = journalData.records.map((record) => ({
            //     ...record.fields,
            //     id: record.id,
            //   }));
            //   console.log(favListId)
            setLogData(journalData.records);
            // console.log(favListData.records[0].id);
    };
    useEffect( () => {
    fetchJournals();
    }, []);

    return(
        <>
        <div className='componentCard'>
        <form onSubmit={handleAdd}>
            
            <label className='label'>
                fearnot's log
            </label>
            
            <div className='smallLabel'>
            <label>enter journal title here!</label>
            <br/>
            <input name='title' value={formData.title} onChange={handleChange}></input>
            </div>
            
            <div className='smallLabel'>
            <label>jot your thoughts here!</label>
            <br/>
            <textarea name='text' value={formData.text} onChange={handleChange}></textarea>
            </div>

            <button>update log!</button>
            
        </form>
        </div>

        {logData.map((entry, index)=> (<JournalLogCard
        key={index}
        title={entry.fields.title}
        text={entry.fields.text}
        />))}
        </>
    )
};

// onClick={function(event) { 
//     event.preventDefault();
//     console.log(event.target)}}