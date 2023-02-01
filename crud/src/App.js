import './App.css';
import Create from './Component/Create';
import Read from './Component/Read';
import Update from './Component/Update';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        CRUD Operation
        <BrowserRouter>
        <Routes>
          <Route exact path="/create" element={<Create/>}/>
          <Route exact path="/read" element={<Read/>}/>
          <Route exact path="/update" element={<Update/>}/>

        </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
