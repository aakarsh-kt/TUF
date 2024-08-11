import React from "react";

import { UserProvider } from "./contexts/userContext.jsx";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import LandingPage from "./screens/LandingPage.jsx";
import { useLocation } from "react-router-dom";
export const  App=() =>{
  return (
    <UserProvider user={playerInfo} setUser={setPlayerInfo}>
      <div className="bg-slate-800 h-screen">
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={300} classNames="fade">
            <Routes location={location}>
              <Route path="/" element={<LandingPage />} />
              {/* <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/landing" element={<LandingPage />} />
              <Route path="/game" element={<Game />} />
              <Route path="/spectate" element={<Spectate />} /> */}
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </UserProvider>
  );
}

// Wrapping the App with BrowserRouter
const WrappedApp = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default WrappedApp;

