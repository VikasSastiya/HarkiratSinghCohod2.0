
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import {Dashboard} from './components/Dashboard'
import {Landing} from './components/Landing'

function App() {
  //  const router= [{
  //       route:'/',
  //       component:Dashboard
  //  }]
  return (
 <div>
    <div>
      <button onClick={()=> {
          window.location.href="/";
      }}>Landing page</button>
        <button onClick={()=> {
          window.location.href="/Dashboard";
        }}>Dashboard</button>
    </div>
     <BrowserRouter>
       <Routes>
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/" element={<Landing/>} />

       </Routes>
       
    </BrowserRouter>
    </div>
  )
}

export default App
