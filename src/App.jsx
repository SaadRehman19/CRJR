import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LandingPage, MyCompaniesPage, WorkWithMePage } from './pages';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/companies" element={<MyCompaniesPage />} />
          <Route path="/work-with-me" element={<WorkWithMePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
