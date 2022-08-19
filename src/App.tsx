import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Page404 } from './Pages/404';
import { Auth } from './Pages/Auth';
import { Home } from './Pages/Home';
import { AuthProvider } from './providers';
import { ProtectedRoute } from './utils/router';
import './App.css';
import './Pages/assets/css/global.css';

function App() {
  return (
    <div className="app__main">
      <Router>
        <AuthProvider>
          <Routes>
            <Route
              index
              element={(
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              )}
            />
            <Route path="/auth" element={<Auth />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
