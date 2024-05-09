import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './componets/SideBar/SideBar'
import AboutPage from './pages/AboutPage';
import BookingPage from './pages/BookingPage';
import ContactsPage from './pages/ContactsPage';
import HomePage from './pages/HomePage';
import PaymentsPage from './pages/PaymentsPage';

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;