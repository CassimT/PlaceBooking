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
import PrivateRouters from './componets/utills/PrivateRouters';

function MainLayout() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/LoginPage' || 
  location.pathname === '/SignupPage' ||
  location.pathname === '/ProfilePage'||
  location.pathname === '/MakePaymentPage'||
  location.pathname === '/DetailsPage' || 
  location.pathname === '/PaymentsPage'
  ;

  return (
    <div className="App">
      {!isAuthPage && <SideBar />}
      <Routes>
        <Route element = {<PrivateRouters/>}>
          <Route path="/PaymentsPage" element={<PaymentsPage />} />          
        </Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/BookingPage" element={<BookingPage />} />        
        <Route path="/ContactsPage" element={<ContactsPage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/SignupPage" element={<SignupPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/DetailsPage" element={<DetailsPage />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
        <Route path="/MakePaymentPage" element={<MakePaymentPage />} />
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
