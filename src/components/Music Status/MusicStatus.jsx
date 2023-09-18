import tableStyle from "../../styleSheets/tableStyle"
export default function MusicStatus() {

    return(
        <>
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
            <button>update</button>
            <h4>feeling frisky?</h4>
            <button>random!</button>
        </form>
        </>
    )
}