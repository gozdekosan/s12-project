import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Skills />
            <Profile />
            <Footer />
          </>
        } />
        <Route path="/projects" element={
          <>
            <Header />
            <Projects />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
