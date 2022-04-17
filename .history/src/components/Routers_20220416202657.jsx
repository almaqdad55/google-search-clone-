import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Results from './Results';

const Routers = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/">
          <Route path="/" element={<Navigate replace to="/search" />} />
        </Route>
        {['/images', '/news', '/videos'].map((path) => (
          <Route key="Results" path={path} element={<Results />} />
        ))}
      </Routes>
    </div>
  );
};

export default Routers;
