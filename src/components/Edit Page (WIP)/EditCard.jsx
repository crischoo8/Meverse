export default function EditCard({title, text, button, initialData,formData, setFormData, updateFormData}) {
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
                    <strong>title:</strong><input name='title' value={formData}  onChange={updateFormData}></input>
                   
                </td>
           </tr>
           <tr>
                <td>
                    <textarea name='text' value={formData} onChange={updateFormData
                    }></textarea>
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