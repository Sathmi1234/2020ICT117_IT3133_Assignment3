export default function Profile(){
    return(
        <div className="rightDiv">
            <table border='1'>
                <tr>
                    <td rowSpan={8}>
                        <img className="profile"
                            //src={require('../assets/profilepic/'+props.student.profilePic)}
                            alt="Profile"/>
                    </td>
                </tr>
                <tr>
                    <td>ID</td>
                </tr>
                <tr>
                    <td>Full Name</td>
                </tr>
                <tr>
                    <td>Age</td>
                </tr>
                <tr>
                    <td>Course</td>
                </tr>
                <tr>
                    <td>Gender</td>
                </tr>
                <tr>
                    <td>Address</td>
                </tr>
                <tr>
                    <td>Skill</td>
                </tr>
            </table>
        </div>
    )
}