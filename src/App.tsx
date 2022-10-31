import { useState, useEffect } from 'react';
import localForage from 'localforage';

import './App.css';

interface Portfolio {
  ticket: string;
  cotas: number;
  cotacaoAtual: number;
}

function App() {
  const [portfolio, setPortfolio] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);

  const getDataFromLocalForage = async () => {
    const data = await localForage.getItem('portfolio');
    if (Array.isArray(data)) {
      setPortfolio(data);
    }
  };

  useEffect(() => {
    getDataFromLocalForage();
    setLoading(false);
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold">Investment Portfolio Analysis</h1>
      <button type="button">Adicionar Ativo</button>
      {loading && <p>Loading...</p>}
      {!loading && (
        <table>
          <thead>
            <tr>
              <th>Ticket</th>
              <th>Cotas</th>
              <th>Cotação atual</th>
            </tr>
          </thead>
          <tbody>
            {portfolio.length === 0 && (
              <tr>
                <td colSpan={7}>Nenhum ativo adicionado</td>
              </tr>
            )}
            {portfolio.map((item) => (
              <tr key={item.ticket}>
                <td>{item.ticket}</td>
                <td>{item.cotas}</td>
                <td>{item.cotacaoAtual}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default App;
