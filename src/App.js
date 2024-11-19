import { useState } from 'react';
import './App.css';
import {students} from './assets/data/StudentsDb'
import StudentTable from './components/StudentTable';

function App() {
  const [fontSize,setFontSize]=useState('20px');
  const handleFontSizeChange=(size)=>{
    const sizes = {small:'16px',medium:'20px',large:'24px'};
    setFontSize(sizes[size])
  }

  return (
    <div className="App" style={{ fontFamily: 'Arial', fontSize}}>
      <h1>Student Information Portal</h1>
      <hr/>
      <div>
        Font Size:
        <button onClick={()=>handleFontSizeChange('small')}>S</button>
        <button onClick={()=>handleFontSizeChange('medium')}>M</button>
        <button onClick={()=>handleFontSizeChange('large')}>L</button>
      </div>
      <table width="100%">
        <tbody>
          <tr>
            <td>
              <StudentTable students={students}/>              
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
