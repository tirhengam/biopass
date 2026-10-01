"use client";

import React from "react";
import App from "./App.jsx";
import { BioPassProvider } from "./context/BioPassContext.jsx";
import "./index.css";

export default function BioPassAppRoot() {
  return (
    <BioPassProvider>
      <App />
    </BioPassProvider>
  );
}
