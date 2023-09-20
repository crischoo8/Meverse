// to be rendered on the homepage as a preview section to journal log
import '../../Component Styles/Card.css'
import JournalLogCard from './JournalLogCard'
import { useNavigate } from 'react-router-dom'

export default function JournalLogPreview() {
    const navigate = useNavigate();

    const handleClick = function() {
        navigate('/Journal');
    };

    return(
        <>
        <div className='componentCard'>
            <h1 className='label'>
            fearnot's log
            </h1>
            <br/>
            <div className='dummyCard'>

            <p className='labelv2' onClick={handleClick}>Ⴚტ◕‿◕ტჂ
            <br/>
            have you written today?</p>
            
            {/* <p className='labelv3'>have you written today?</p> */}
            </div>
        </div>
        </>
    )
}