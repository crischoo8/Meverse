import EditJournalLogForm from "../components/Journal Log/EditJournalLogForm";
import '../Component Styles/Card.css';
import { useNavigate } from "react-router-dom";

export default function EditJournalPage() {
    const navigate = useNavigate();

    const handleClick = function() {
        navigate('/');
    };

    return(
        <>
        
        <span onClick={handleClick}>
            back to home! ◥█̆̈◤࿉∥
        </span>
        
        
       
         <EditJournalLogForm />
        </>
    )
}