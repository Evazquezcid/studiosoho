import './App.scss';
import Home from './pages/Home/Home';
import ContactUs from './pages/Form/Form';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/static/Navbar';
import Footer from './components/static/Footer';
import Guest from './pages/Guest/Guest';




function App() {
  return (
    <Router>
    <div className='App'>
     <Navbar></Navbar>
    
   
      <Routes>
      <Route path='/' element={<Home></Home>}>
     </Route>
    
      <Route path='/Guest' element={<Guest></Guest>}>
     </Route>

      
      <Route path='/Form' element={<ContactUs></ContactUs>}>
      </Route>
        
       
      </Routes>
      <Footer></Footer>
   
     
    </div>
    </Router>
  );
}

export default App;
