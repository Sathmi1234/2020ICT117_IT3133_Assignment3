
export default function Profile({student}){
    
    return(
        <div>
            <table border='1'>
                <tr>
                    <td rowSpan={8}>
                        <img className="profile"
                            src={require(`../assets/img/${student.profilePic}`)}
                            alt="Profile"/>
                    </td>
                </tr>
                <tr>
                    <td>ID: {student.studentId}</td>
                </tr>
                <tr>
                    <td>Full Name: {student.firstName} {student.lastName}</td>
                </tr>
                <tr>
                    <td>Age: {student.age}</td>
                </tr>
                <tr>
                    <td>Course: {student.course}</td>
                </tr>
                <tr>
                    <td>Gender: {student.gender}</td>
                </tr>
                <tr>
                    <td>Address: {student.address.city}, {student.address.country}</td>
                </tr>
                <tr>
                    <td>Skill: {student.skills}</td>
                </tr>
            </table>
        </div>
    )
}