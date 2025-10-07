import { createContext, useContext, useState } from 'react';

const MeuContexto = createContext();

export function MeuProvider({ children }) {
  const valorInicial = 'Olá Mundo';
  const [estado, setEstado] = useState(valorInicial);
  
  return (
    <MeuContexto.Provider value={{ estado, setEstado }}>
      {children}
    </MeuContexto.Provider>
  );
}

export const useMeuContexto = () => useContext(MeuContexto);
