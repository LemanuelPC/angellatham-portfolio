import React from 'react';
import AppRouter from './routes';
import { AuthProvider, CursorProvider } from './context';

const Main = () => {
  return (
    <CursorProvider>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </CursorProvider>
  );
};

export default Main;
