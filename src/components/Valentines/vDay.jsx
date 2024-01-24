// to be rendered on the homepage as a preview section to vday card
import '../../Component Styles/Card.css'
import JournalLogCard from '../Journal Log/JournalLogCard';
import { useNavigate } from 'react-router-dom'

export default function VDayPreview() {
    const navigate = useNavigate();

    const handleClick = function() {
        navigate('/Journal');
    };

    return(
        <>
        <div className='componentCard'>
            <h1 className='label'>
            valentine's day ♡ 
            </h1>
            <br/>
            <div className='dummyCard' style={{
            backgroundColor: '#fff0f0',
        }}>

            <p className='labelv2' onClick={handleClick} style={{
            backgroundColor: '#f3cece',
            color: 'black',
        }}>\_ (w♡ ____ ♡w) _/ 
            <br/>
            <br />
            hello cutie!
            <br/>
            </p>
            
            
            {/* <p className='labelv3'>have you written today?</p> */}
            </div>
        </div>
        </>
    )
}