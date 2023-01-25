import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Houseware from './components/pages/Houseware';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      
      <main>
        <Routes>
          <Route 
          path='/'
          element={<Home />}
          />
          <Route 
          path='/about'
          element={<About />}
          />
          <Route 
          path='/houseware'
          element={<Houseware />}
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
