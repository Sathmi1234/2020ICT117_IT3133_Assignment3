import { useState } from 'react';
import './App.css';
import {students} from './assets/data/StudentsDb'
import StudentTable from './components/StudentTable';

function App() {
  const [size,setSize]=useState(20);

  

  return (
    <div className="App">
      <h1>Student Information Portal</h1>
      <hr/>
      Font Size:
      <button onClick={()=>setSize(16)}>S</button>
      <button onClick={()=>setSize(20)}>M</button>
      <button onClick={()=>setSize(24)}>L</button>
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
