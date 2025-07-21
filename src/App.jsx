import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';

import Home from './pages/Home';
import About from './pages/About';
import Doctors from './pages/Doctors'; // Keep one doctors page only
import Departments from './pages/Departments';
import Contact from './pages/Contact';
import BookAppointment from './pages/BookAppointment';
import Header from './components/Header';
import Footer from './components/Footer';
import InfoSection from './components/InfoSection';
import LabReports from './pages/LabReports';

import AdminLabUploadForm from './components/AdminLabUploadForm';
import AdminLogin from './pages/AdminLogin';

import { useAuth } from './context/AuthContext';

function App() {
  useEffect(() => {
    document.title = 'Hospital Management System';
  }, []);

  const { isAdmin } = useAuth();

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <InfoSection />
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/doctors" element={<Doctors />} /> {/* Only one doctors route */}
            <Route path="/departments" element={<Departments />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book" element={<BookAppointment />} />
            <Route path="/lab-reports" element={<LabReports />} />

            {/* Admin login page */}
            <Route path="/admin/login" element={<AdminLogin />} />

            {/* Protected Admin Lab Upload page */}
            <Route
              path="/admin/lab-upload"
              element={
                isAdmin ? (
                  <AdminLabUploadForm />
                ) : (
                  <Navigate to="/admin/login" replace />
                )
              }
            />

            {/* Catch all or 404 could be added here */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
