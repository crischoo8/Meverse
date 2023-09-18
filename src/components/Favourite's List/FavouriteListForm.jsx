import FavouriteListItem from "./FavouriteListItem"


export default function FavouriteListForm() {
    const tableStyle = {
        "border": "2px solid black"
     };
   return (
    <>
    <form > 
        <label>Add a New Bias!</label>
        <br/>
        <input></input>
        <button>i choose you!</button>
    </form>
        <table style={tableStyle}>
            <thead>
            <tr>
                <th>Favourite's List</th>
            </tr>
            </thead>
            <FavouriteListItem />
        </table>
    </>
   )
}