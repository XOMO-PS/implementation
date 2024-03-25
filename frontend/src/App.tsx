import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router } from "react-router-dom";
import { Nav } from "./nav";

export const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Router>
          <Nav />
          <ToastContainer draggable theme={"dark"} />
        </Router>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
