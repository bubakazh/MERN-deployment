import './App.css';
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main';
import AddPirate from './pages/AddPirate';
import OnePirate from './pages/OnePirate';

function App() {
  return (
    <Routes>
      <Route path = "/pirates" element = {<Main/>}/>
      <Route path = "/pirate/new" element = {<AddPirate/>}/>
      <Route path = "/pirate/:pirate_id" element = {<OnePirate/>}/>
    </Routes>
  );
}

export default App;
