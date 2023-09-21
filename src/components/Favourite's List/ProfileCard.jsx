import '../../Component Styles/Card.css'


export default function ProfileCard({StageName, FullName, DOB, Group, Former}) {
    return(
    <>
    
       <tbody className='profileCard'>
       <tr>
            <td className='labelv4'>
                ♫꒰･‿･๑꒱
            </td>
       </tr>
       <tr>
            <td className='title'>
                <strong>Stage Name:</strong> {StageName}
            </td>
       </tr>
       <tr>
            <td className='title'>
                <strong>Full Name:</strong> {FullName}
            </td>
       </tr>
       <tr>
            <td className='title'>
                <strong>Date of Birth:</strong> {DOB}
            </td>
       </tr>
       <tr>
            <td className='title'>
                <strong>Group:</strong> {Group}
            </td>
       </tr>
       <tr>
            <td className='title'>
                <strong>Former Group:</strong> {Former}
            </td>
       </tr>
       </tbody>
        
   
    
    </>
    )
}