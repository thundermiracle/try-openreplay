import React from 'react';
import ReactDOM from 'react-dom';

import Tracker from "@openreplay/tracker/cjs";
import trackerAssist from "@openreplay/tracker-assist/cjs";

import App from './App';
import reportWebVitals from './reportWebVitals';

const tracker = new Tracker({
  __DISABLE_SECURE_MODE: true,
  projectKey: process.env.REACT_APP_OPEN_REPLAY_KEY,
  onStart: () => {
    tracker.setUserID("test@test.com");
  },
});
tracker.use(
  trackerAssist({ confirmText: "Accept the help call from service center?" })
);
tracker.start();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
