import './App.scss';
import InputForm from './pages/InputForm'
import {Home} from './pages/landingpage'
import { Routes, Route } from 'react-router-dom';
import Contact from './pages/contacpage';
import About from './pages/aboutpage';
import Rick from './pages/Rick';
import ResponsiveAppBar from "./pages/nav";


function App() {

  return (
      <div className="App">
<ResponsiveAppBar/>
        <div className="header">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/form' element = {<InputForm/>} />
              <Route path ='/rick' element={ <Rick/>} />
          </Routes>
        </div>
      </div>
  );
}

export default App;