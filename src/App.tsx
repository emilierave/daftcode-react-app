

import './App.scss';

import InputForm from './pages/InputForm'

import {Navbar} from './pages/Nav/Navbar'
import {Home} from './pages/landingpage'
import { Routes, Route } from 'react-router-dom';
import Contact from './pages/contacpage'
import About from './pages/aboutpage'

function App() {

  return (
      <div className="App">
<Navbar/>
        <div className="header">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/form' element = {<InputForm  defaultValue={'Hello There'}/>} />
          </Routes>
        </div>

      </div>
  );
}

export default App;