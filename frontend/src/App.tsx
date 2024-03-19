import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

import { BrowserRouter as Router } from "react-router-dom";
import { Nav } from "./Nav";

export const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Router>
          <Nav />
        </Router>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
