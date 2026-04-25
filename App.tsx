import React from 'react';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Home from './src/pages/Home.tsx';
import Facilities from './src/pages/Facilities.tsx';
import FacilityDetail from './src/pages/FacilityDetail.tsx';
import About from './src/pages/About.tsx';
import Emergency from './src/pages/Emergency.tsx';
import SupportWOS from './src/pages/SupportWOS.tsx';
import InvestorDatabank from './src/pages/InvestorDatabank.tsx';
import ScheduleDelegationTour from './src/pages/ScheduleDelegationTour.tsx';
import NotFound from './src/pages/NotFound.tsx';

const ScrollToTopOnRouteChange: React.FC = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Theme appearance="light" radius="large" scaling="100%">
      <Router>
        <ScrollToTopOnRouteChange />
        <main className="min-h-screen font-sans selection:bg-teal-100 selection:text-teal-900">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/facility/:id" element={<FacilityDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/support-wos" element={<SupportWOS />} />
            <Route path="/investor-databank" element={<InvestorDatabank />} />
            <Route path="/schedule-delegation-tour" element={<ScheduleDelegationTour />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/Emergency" element={<Emergency />} />
            <Route path="/emergency-care" element={<Emergency />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </main>
      </Router>
    </Theme>
  );
}

export default App;