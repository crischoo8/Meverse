import '../../Component Styles/Card.css'

export default function FavouriteListItem({item, button, profileButton}) {
    const handleClick = function(event) {
        console.log(event.target);
    }
    return(
        <>
        <tbody>
        <tr>
            <td className='tableData' style={{backgroundColor: '#FFF8F1'}}> 
                {/* yun ๑(◕‿◕)๑ */}
                ♡  {item} 
                <br/>
                {button} {profileButton}
            </td>
            
        </tr>
        </tbody>
        </>
    )
};