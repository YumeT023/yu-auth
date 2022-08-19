import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Auth, Home } from './Pages';
import { AuthProvider } from './providers';
import { ProtectedRoute } from './utils/router';

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
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
