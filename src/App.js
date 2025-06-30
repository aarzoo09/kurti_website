import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowcasePage from './components/ShowcasePage';
import BuyPage from './components/BuyPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowcasePage />} />
        <Route path="/buy" element={<BuyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
