import EditJournalLogForm from "../components/Journal Log/EditJournalLogForm";
import '../Component Styles/Card.css';
import { useNavigate } from "react-router-dom";

export default function EditJournalPage() {
    const navigate = useNavigate();

    const goHome = function() {
        navigate('/');
    };

    const goJournal = function() {
        navigate('/Journal');
    };

    return(
        <>
        
        <span onClick={goHome}>
            back to home! ◥█̆̈◤࿉∥
        </span>
        <br />
        <span onClick={goJournal}>
            more journalling? ᕕ(︶‿︶)ᕗ
        </span>
        
       
         <EditJournalLogForm />
        </>
    )
}