import Game from './views/Game';
import Home from './views/Home';
import Rules from './views/Rules';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<Game />} />
        <Route path='/rules' element={<Rules />} />
      </Routes>
    </div>
  );
}

export default App;
