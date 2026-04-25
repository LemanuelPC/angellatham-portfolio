import React, { createContext, useState, useCallback } from 'react';
import { decryptProtected, loadCachedData, cacheData, clearCachedData } from '../lib/protectedData';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => loadCachedData());

  const unlock = useCallback(async (password) => {
    const decrypted = await decryptProtected(password);
    cacheData(decrypted);
    setData(decrypted);
  }, []);

  const lock = useCallback(() => {
    clearCachedData();
    setData(null);
  }, []);

  return (
    <AuthContext.Provider value={{ data, isLoggedIn: !!data, unlock, lock }}>
      {children}
    </AuthContext.Provider>
  );
};
