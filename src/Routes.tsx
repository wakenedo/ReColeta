// src/Routes.js
import { BrowserRouter as Router, Route, Routes as ReactRoutes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { UserAreaPage } from './pages/UserAreaPage';
import { NewCollectPage } from './pages/NewCollectPage';
import { WastePage } from './pages/WastePage';
import { WasteRegisterPage } from './pages/WasteRegisterPage';
import { SearchPointPage } from './pages/SearchPointPage';
import { RegistrationPage } from './pages/RegistrationPage';
import { ReportPage } from './pages/ReportScreenPage';

function Routes() {
  return (
    <Router>
      <ReactRoutes>
        <Route path="/*" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/dashboard" element={<UserAreaPage />} />
        <Route path="/newCollect" element={<NewCollectPage />} />
        <Route path="/waste" element={<WastePage />} />
        <Route path="/wasteRegister" element={<WasteRegisterPage />} />
        <Route path="/searchPoint" element={<SearchPointPage />} />
        <Route path="/reports" element={<ReportPage />} />
        {/* Define other routes as needed */}
      </ReactRoutes>
    </Router>
  );
}

export default Routes;
