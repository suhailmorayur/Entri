import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Routes,Route } from "react-router";
import Layout from './components/Layout.jsx';
import PanNumber from './routes/PanNumber.jsx';
import { Provider } from 'react-redux';
import store from './app/store.js';
import OtpValidation from './routes/OtpValidation.jsx';
import OtpValidation2 from './routes/OtpValidation2.jsx';
import ValidateAdhaarDetails from './routes/ValidateAdhaarDetails.jsx';

createRoot(document.getElementById('root')).render(
   <Provider store={store}>
   <BrowserRouter>
    <Routes>
      <Route  element={<Layout/>}>
      <Route path="/" element={<PanNumber/>}/>
            <Route path="/otpValidation" element={<OtpValidation/>}/>
            <Route path="/otpValidation2" element={<OtpValidation2/>}/>
            <Route path="/validateAdhaarDetails" element={<ValidateAdhaarDetails/>}/>

      </Route>
    </Routes>
  </BrowserRouter>
  </Provider>
)
