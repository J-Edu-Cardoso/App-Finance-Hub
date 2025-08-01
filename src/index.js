import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import FinancialDashboard from './Finance-Hub';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <FinancialDashboard />
  </React.StrictMode>
);
