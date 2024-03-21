import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import OurWork from './Our_Work';
import About from './About';
import Get_Involved from './Get_Involved';
import Four0Four from './404';


function App() {
  return (
    <Router>
      <div className="App h-full">
        <div className="content">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/our-work' element={<OurWork/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/get-involved' element={<Get_Involved/>}/>
            <Route path='/404' element={<Four0Four/>}/>
          	<Route path="*" element={<Navigate to="/404" />}/>
          </Routes>
        </div>        
      </div>
    </Router>
  );
}

export default App;
