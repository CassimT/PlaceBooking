import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './componets/SideBar/SideBar'
import AboutPage from './pages/AboutPage';
import BookingPage from './pages/BookingPage';
import ContactsPage from './pages/ContactsPage';
import HomePage from './pages/HomePage';
import PaymentsPage from './pages/PaymentsPage';
import MakePaymentPage from './pages/MakePaymentPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';


function App() {
  return (
    <div className="App">
      <Router>
        <SideBar />
        <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/BookingPage" element={<BookingPage/>} />
          <Route path="/PaymentsPage" element={<PaymentsPage/>} />
          <Route path="/ContactsPage" element={<ContactsPage/>} />
          <Route path="/AboutPage" element={<AboutPage/>} />
          <Route path="/MakePaymentPage" element={<MakePaymentPage/>}/>
          <Route path='/LoginPage' element={<LoginPage/>}/>
          <Route path='/SignupPage' element={<SignupPage/>}/>
        </Routes>
      </Router>                                                             
    </div>
  );
}

export default App;