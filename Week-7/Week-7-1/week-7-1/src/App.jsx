import {Suspense,lazy} from "react"
import {useNavigate, BrowserRouter,Routes,Route } from 'react-router-dom'

const Dashboard = lazy(()=> import('./components/Dashboard'))
const Landing = lazy(()=> import('./components/Landing'))

function App() {

  // Suspense API
  return (
 <div>
     <BrowserRouter>
     <Appbar/>
       <Routes>
        <Route path="/Dashboard" element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
        <Route path="/" element={<Suspense fallback={"loading..."}><Landing/></Suspense>} />

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
