import JournalLogCard from "../components/Journal Log/JournalLogCard"
import JournalLogForm from "../components/Journal Log/JournalLogForm"
import '../Component Styles/Card.css'
import { useNavigate } from "react-router-dom"

export default function JournalPage() {
    const navigate = useNavigate();

    const goHome = function() {
        navigate('/');
    };
    const goEdit = function() {
        navigate('/EditJournal');
    };

    return(
        <>
        
        <span onClick={goHome}>
            back to home! ◥█̆̈◤࿉∥
        </span>
        <br/>
        <span onClick={goEdit}>
            wanna fix something? ᕙ(⇀‸↼‶)ᕗ
        </span>
        
         {/* <JournalLogCard /> */}
         <JournalLogForm />
        </>
    )
}