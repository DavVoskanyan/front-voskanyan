import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";

import "./styles/fonts.css";
import "./styles/variables.css";
import "./styles/resetBrowserDeafultStyles.css";
import "./styles/modalStyles.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

