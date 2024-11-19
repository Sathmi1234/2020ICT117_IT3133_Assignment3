export default function Profile(){
    return(
        <div className="rightDiv">
            <table>
                <tr>
                    <td colSpan={7}>
                        <img className="profile"
                            src={require('../assets/profilepic/'+props.student.profilePic)}
                            alt="Profile"/>
                    </td>
                </tr>
            </table>
        </div>
    )
}