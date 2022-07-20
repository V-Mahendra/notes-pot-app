// import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home';
import Create from './pages/Creation/Create';
import Edit from './components/Edit/Edit';

import "./style/dark.scss"
function App() {



  return (
    <div className="app">
      <BrowserRouter>

      <Routes>
         <Route path="/" element={<Home />}   /> 
         <Route path="/create" element={ <Create /> }  /> 
         <Route path="/edit/:id" element={ <Edit /> }  /> 
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
