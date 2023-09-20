import '../../Component Styles/Card.css'

export default function FavouriteListItem({item, button}) {
    const handleClick = function(event) {
        console.log(event.target);
    }
    return(
        <>
        <tbody>
        <tr>
            <td className='tableData'> 
                {/* yun ๑(◕‿◕)๑ */}
                ♡  {item} 
                <br/>
                {button}
            </td>
            
        </tr>
        </tbody>
        </>
    )
};