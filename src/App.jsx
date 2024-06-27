import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from './pages/signUpPage/SignUpPage';
import SignInPage from './pages/signInPage/SignInPage';
import HomePage from './pages/homePage/HomePage';

function App() {
  return (
    <Router>
      <Routes>  {/* Use Routes instead of Switch in v6 */}
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;