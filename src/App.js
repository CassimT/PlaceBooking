import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import BookingPage from './pages/BookingPage';
import ContactsPage from './pages/ContactsPage';
import HomePage from './pages/HomePage';
import PaymentsPage from './pages/PaymentsPage';
import MakePaymentPage from './pages/MakePaymentPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import DetailsPage from './pages/DetailsPage';
import SideBar from './componets/SideBar/SideBar';
import ProfilePage from './pages/ProfilePage';

function MainLayout() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/LoginPage' || 
  location.pathname === '/SignupPage' ||
  location.pathname === '/ProfilePage';

  return (
    <div className="App">
      {!isAuthPage && <SideBar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/BookingPage" element={<BookingPage />} />
        <Route path="/PaymentsPage" element={<PaymentsPage />} />
        <Route path="/ContactsPage" element={<ContactsPage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/MakePaymentPage" element={<MakePaymentPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/SignupPage" element={<SignupPage />} />
        <Route path="/Details" element={<DetailsPage />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

export default App;
