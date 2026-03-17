import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.tsx';
import Projects from './pages/Projects.tsx';
import Contact from './pages/Contact.tsx';
import NotFound from './pages/NotFound.tsx';

function App(){
  return(
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;