import { Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import LandingPage from './components/LandingPage/index.jsx'
// import NavBar from './components/NavBar/index.jsx'
import Details from './components/Details'
import CreateActivity from './components/CreateActivity'



function App() {
  return ( 
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/home" element={<Home/>} />
      {/* <Route path="/home" element={ <NavBar/>}/> */}
      <Route path="/home/details/:id" element={<Details/>}/>
      <Route path="/home/activities" element={<CreateActivity/>} />
    </Routes>
  );
}

export default App;
