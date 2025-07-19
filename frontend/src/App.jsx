// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importing Pages
import Home from './pages/Home';
import Search from './pages/Search';
import RoomList from './pages/RoomList';
import MessList from './pages/MessList';
import RoomDetails from './pages/RoomDetails';
import MessDetails from './pages/MessDetails';
import Reviews from './pages/Reviews';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserProfile from './pages/UserProfile';
import MyBookings from './pages/MyBookings';
import Favorites from './pages/Favorites';
import Contact from './pages/Contact';
import About from './pages/About';
import NotFound from './pages/NotFound';

// Importing Components
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="container mx-auto px-4 py-6">
        <Routes>
          {/* Define routes for each page */}
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/rooms" element={<RoomList />} />
          <Route path="/messes" element={<MessList />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/messes/:id" element={<MessDetails />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          {/* Handle 404 - Page Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
