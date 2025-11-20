import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Divisions from './pages/Divisions';
import About from './pages/About';
import Team from './pages/Team';
import News from './pages/News';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="divisions" element={<Divisions />} />
          <Route path="about" element={<About />} />
          <Route path="team" element={<Team />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
