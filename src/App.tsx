import { useState, useEffect } from 'react';
import localForage from 'localforage';

import './styles/App.css';

import { AddPortfolio } from 'components/AddPortfolio';
import { Portfolio } from 'schema';

function App() {
  const [portfolio, setPortfolio] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);

  const getDataFromLocalForage = async () => {
    const data = await localForage.getItem('portfolio');
    if (Array.isArray(data)) {
      setPortfolio(data);
    }
  };

  const addPortfolio = async (data: Portfolio) => {
    const newData = [...portfolio, data];
    setPortfolio(newData);
    await localForage.setItem('portfolio', newData);
  };

  useEffect(() => {
    getDataFromLocalForage();
    setLoading(false);
  }, []);

  return (
    <>
      <h1>Investment Portfolio Analysis</h1>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          {loading && <p>Loading...</p>}
          {!loading && (
            <div>
              <table>
                <thead>
                  <tr>
                    <th className="p-2 text-base">Ticket</th>
                    <th className="p-2 text-base">Cotas</th>
                    <th className="p-2 text-base">Cotação atual</th>
                  </tr>
                </thead>
                <tbody>
                  {portfolio.length === 0 && (
                    <tr>
                      <td className='text-stone' colSpan={7}>Nenhum ativo adicionado</td>
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
            </div>
          )}
          <AddPortfolio addPortfolio={addPortfolio} />
        </div>
      </div>
    </>
  );
}

export default App;
