import React from 'react'
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ Component }) {
    const isAuthenticated = false;

  return (
    isAuthenticated ? Component : <Navigate to="/"/>
  )
}
