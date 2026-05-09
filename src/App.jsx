import { useState } from 'react'
import './App.css'
import { HashRouter, Route, Routes } from "react-router-dom";
import PrivacyPolicy from './componets/PrivacyPolicy'
import CrecePolicy from './componets/CrecePolicy';

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PrivacyPolicy />} />
        <Route path="/crece_seller_app/policy" element={<CrecePolicy />} />
      </Routes>
    </HashRouter>
  )
}

export default App
