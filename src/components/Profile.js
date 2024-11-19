
export default function Profile({selectedStudent}){    
    return(
        <div className="rightDiv">
            <table border='1'>
                <tr>
                    <td rowSpan={8}>
                        <img className="profile"
                            src={require(`../assets/img/${selectedStudent.profilePic}`)}
                            alt="Profile"/>
                    </td>
                </tr>
                <tr>
                    <td>ID: {selectedStudent.studentId}</td>
                </tr>
                <tr>
                    <td>Full Name: {selectedStudent.firstName} {selectedStudent.lastName}</td>
                </tr>
                <tr>
                    <td>Age: {selectedStudent.age}</td>
                </tr>
                <tr>
                    <td>Course: {selectedStudent.course}</td>
                </tr>
                <tr>
                    <td>Gender: {selectedStudent.gender}</td>
                </tr>
                <tr>
                    <td>Address: {selectedStudent.address.city}, {selectedStudent.address.country}</td>
                </tr>
                <tr>
                    <td>Skill: {selectedStudent.skills.join(', ')}</td>
                </tr>
            </table>
        </div>
    )
}