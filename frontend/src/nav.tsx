import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { UserSignup } from "./pages/UserSignup";
import { SignupChoose } from "./pages/SignupChoice";
import { ProviderSignup } from "./pages/ProviderSignup";
import  SearchService  from "./pages/SearchService"

export function Nav() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/userSignup" element={<UserSignup />} />
      <Route path="/signupChoose" element={<SignupChoose />} />
      <Route path="/providerSignup" element={<ProviderSignup />} />
      <Route path="/searchService" element={<SearchService />} />
    </Routes>
  );
}
