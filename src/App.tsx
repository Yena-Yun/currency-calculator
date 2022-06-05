import { Route, Routes } from 'react-router-dom';
import { FirstCalculator } from './pages/FirstCalculator';
import { SecondCalculator } from './pages/SecondCalculator';

function App() {
  return (
    <Routes>
      <Route path='/' element={<FirstCalculator />} />
      <Route path='/second' element={<SecondCalculator />} />
    </Routes>
  );
}

export default App;
