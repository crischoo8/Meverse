import '../../Component Styles/Card.css'


export default function JournalLogCard({title, text, button}) {
    return(
    <>
    <table className='card'>
        <tbody> 
       <tr>
            <td className='labelv3'>
                <p>Ⴚტ◕‿◕ტჂ</p>
            </td>
       </tr>
       <tr>
            <td className='title'>
                <strong>title:</strong> {title}
               
            </td>
       </tr>
       <tr>
            <td>
                {text}
               
            </td>
        </tr>
        <tr>
            <td>
                {button}
            </td>
        </tr>
        
    </tbody>
    </table>
    </>
    )
}