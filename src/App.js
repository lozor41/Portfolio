import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppLayout from './AppLayout';
import Projects from './components/Explore/Projects';
import Tools from './components/Explore/Tools';
import About from './components/Explore/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Projects />} />
          <Route path="tools" element={<Tools />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
