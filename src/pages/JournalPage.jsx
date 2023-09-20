import JournalLogCard from "../components/Journal Log/JournalLogCard"
import JournalLogForm from "../components/Journal Log/JournalLogForm"
import '../Component Styles/Card.css'
import { useNavigate } from "react-router-dom"

export default function JournalPage() {
    const navigate = useNavigate();

    const handleClick = function() {
        navigate('/');
    };

    return(
        <>
        
        <span onClick={handleClick}>
            back to home! ◥█̆̈◤࿉∥
        </span>
        
        
         {/* <JournalLogCard /> */}
         <JournalLogForm />
        </>
    )
}