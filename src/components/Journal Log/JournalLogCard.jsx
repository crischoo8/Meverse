import '../../Component Styles/Card.css'


export default function JournalLogCard({title, text}) {
    return(
    <>
    <table className='card'>
        <tbody> 
       <tr>
            <td>
                <strong>Ⴚტ◕‿◕ტჂ</strong>
            </td>
       </tr>
       <tr>
            <td className='title'>
                <strong>title:</strong> {title}
                {/* why is CSS so hard */}
            </td>
       </tr>
       <tr>
            <td>
                {text}
                {/* im so tired, i want a nap and a blanket sleeeep only */}
            </td>
    </tr>
    </tbody>
    </table>
    </>
    )
}