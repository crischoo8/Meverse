import tableStyle from "../../styleSheets/tableStyle"

export default function MusicStatus() {
    const handleRefresh = function(event) {
        event.preventDefault();
     }
    return(
        <>
        <div>
           <h3>lately, i feel...</h3>
        <table style={tableStyle}>
            <tbody>
            <tr>
                <td>
                <strong>SONG:</strong> between you, me and the lampost
                </td>
            </tr>

            <tr>
                <td>
                <strong>ARTIST:</strong> LSFM
                </td>
            </tr>
            </tbody>
        </table>

        <form>
            
            <label><strong>update your song of the day here!</strong></label>
            <br />
            <input></input>
            <button onClick={handleRefresh}>update</button>
            <h4>feeling frisky?</h4>
            <button onClick={handleRefresh}>random!</button>
            
        </form>
        </div>
        </>
    )
}