// to be rendered on the homepage as a preview section to journal log
import '../../Component Styles/Card.css'
import JournalLogCard from './JournalLogCard'

export default function JournalLogPreview() {
    return(
        <>
        <div className='componentCard'>
            <h1 className='label'>
            fearnot's log
            </h1>
            <JournalLogCard />
        </div>
        </>
    )
}