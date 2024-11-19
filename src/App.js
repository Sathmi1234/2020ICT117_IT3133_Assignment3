import { useState } from 'react';
import './App.css';
import {students} from './assets/data/StudentsDb'
import StudentTable from './components/StudentTable';
import Profile from './components/Profile';

function App() {
  const [fontSize,setFontSize]=useState('20px');
  const fontSizeChange=(size)=>{
    const sizes = {small:'16px',medium:'20px',large:'24px'};
    setFontSize(sizes[size])
  }
  const [stu, setStu] = useState(students[0]);
  const handleStudentProfile = (student) => {
    setStu(student);
  };


  return (
    <div className="App" style={{ fontFamily: 'Arial', fontSize}}>
      <h1>Student Information Portal</h1>
      <hr/>
      <div></div>
      Font Size:
      <button onClick={()=>fontSizeChange('small')}>S</button>
      <button onClick={()=>fontSizeChange('medium')}>M</button>
      <button onClick={()=>fontSizeChange('large')}>L</button>
      <table width="100%">
        <tbody>
          <tr>
            <td>
            <div className='outerDiv'>
              <StudentTable students={students} studentProfile={handleStudentProfile} />
              <Profile selectedStudent={stu}/>
            </div>           
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
