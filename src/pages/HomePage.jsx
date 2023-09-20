import Socials from '../components/Social\'s Bar/socials'
import FavouriteListForm from '../components/Favourite\'s List/FavouriteListForm'
import MusicStatus from '../components/Music Status/MusicStatus'
import JournalLogPreview from '../components/Journal Log/JournalLogPreview'

import './HomePage.css'
export default function HomePage() {
    return (
        <>
        <h1 className="title">welcome home (づ ◕‿◕ )づ</h1>
        <br />
        <section className='container'>
        <div className='leftCheek'>
        <MusicStatus />
        <FavouriteListForm />
        </div>
        

        <div className='rightCheek'>
        {/* <JournalLogCard /> */}
        <JournalLogPreview />
        </div>
        </section>
        <footer>
        <Socials/>
        </footer>
        </>
    )
}