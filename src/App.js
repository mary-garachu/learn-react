import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About'
import Contact from './pages/Contact'
import Socials from './pages/Socials'
import User from './pages/User'
import Form from './pages/Form';

function App() {
  return (
    <div className="App">
      <Routes>
       <Route exact path="/" element={<Home />}></Route>
       <Route exact path="/about" element={<About/>}></Route>
       <Route exact path="/socials" element={<Socials/>}></Route>
       <Route exact path="/contact" element={<Contact/>}></Route>
       <Route exact path="/form" element={<Form/>}></Route>
       <Route path = "/user/:id" component = {User} />
</Routes>
    </div>
    
  );
}

export default App;
