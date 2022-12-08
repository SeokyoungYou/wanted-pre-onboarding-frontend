import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import TodoScreen from './routes/TodoScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/todo" element={<TodoScreen />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
