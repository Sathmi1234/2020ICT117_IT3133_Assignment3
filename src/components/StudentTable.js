import '../assets/css/compo.css'
export default function StudentTable(props){
    return(
        <div className="outerDiv">
            <div className='leftDiv'>
                <table>
                    <tbody>
                        <th>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Course</td>
                            <td>Country</td>
                        </th>
                    </tbody>
                </table>
            </div>
        </div>
    );
}