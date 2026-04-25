import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrivateRoutes } from './PrivateRoutes';
import { AuthRoutes } from './AuthRoutes';
import { Authentication, FunStuff, HomeAlternative, NotFound, Resume, SayHi, Works } from '../pages';

export default function AppRouter() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route index element={<HomeAlternative />} />
        <Route path="/home-alternative" element={<HomeAlternative />} />
        <Route path="say-hi" element={<SayHi />} />
        <Route path="resume" element={<Resume />} />
        <Route element={<AuthRoutes />}>
          <Route path="auth" element={<Authentication />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path="works" element={<Works />} />
          <Route path="fun-stuff" element={<FunStuff />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
