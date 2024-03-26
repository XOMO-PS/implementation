import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { SignupChoose } from "./pages/SignupChoice";
import { ProviderSignup } from "./pages/ProviderSignup";
import SearchService from "./pages/SearchService";
import { UserSignupPage } from "./pages/UserSignupPage";
import Login from "./pages/Login";

export function Nav() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/userSignup" element={<UserSignupPage />} />
      <Route path="/signupChoose" element={<SignupChoose />} />
      <Route path="/providerSignup" element={<ProviderSignup />} />
      <Route path="/searchService" element={<SearchService />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
