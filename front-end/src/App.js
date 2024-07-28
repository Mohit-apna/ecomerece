
import './App.css';
import Nav from './components/Nav';
import Signup from './components/Signup'
 
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<h1>product listening component</h1>}></Route>
        <Route path='/add' element={<h1>product adding component</h1>}></Route>
        <Route path='/update' element={<h1>product updating component</h1>}></Route>
        <Route path='/delete' element={<h1>product deleting component</h1>}></Route>
        <Route path='/logout' element={<h1>product logging out component</h1>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
      </Routes>
      
      
     </BrowserRouter>
     <Footer/>
     
    </div>
    
  );
}

export default App;
