/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import EligibilityAndCosts from "./pages/EligibilityAndCosts";
import ChecklistAndStay from "./pages/ChecklistAndStay";
import Schedule from "./pages/Schedule";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";

export default function App() {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="eligibility" element={<EligibilityAndCosts />} />
            <Route path="checklist" element={<ChecklistAndStay />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="contact" element={<Contact />} />
            <Route path="legal" element={<Legal />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}
