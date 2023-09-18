import Socials from '../components/Social\'s Bar/socials'
import FavouriteListForm from '../components/Favourite\'s List/FavouriteListForm'
import MusicStatus from '../components/Music Status/MusicStatus'
import JournalLog from '../components/Journal Log/JournalLog'
import './HomePage.css'
export default function HomePage() {
    return (
        <>
        <h1 className="title">welcome home ( ˘▽˘)っ♨</h1>
        <br />
        <section className='container'>
        <div className='leftCheek'>
        <MusicStatus />
        <FavouriteListForm />
        </div>
        

        <div className='rightCheek'>
        <JournalLog />
        </div>
        </section>
        <footer>
        <Socials/>
        </footer>
        </>
    )
}