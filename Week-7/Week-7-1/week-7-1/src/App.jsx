
import {useNavigate, BrowserRouter,Routes,Route } from 'react-router-dom'

import {Dashboard} from './components/Dashboard'
import {Landing} from './components/Landing'

function App() {
  return (
 <div>
     <BrowserRouter>
     <Appbar/>
       <Routes>
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/" element={<Landing/>} />

       </Routes>
       
    </BrowserRouter>
    </div>
  )
}

  function Appbar() {
    const navigate=useNavigate(); 
    return <div>
      <div>
      <button onClick={()=> {
         navigate("/");
      }}>Landing page</button>
        <button onClick={()=> {
          navigate("/Dashboard");
        }}>Dashboard</button>
    </div>
    </div>
  }
export default App
