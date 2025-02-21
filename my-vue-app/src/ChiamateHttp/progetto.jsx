import { useState, useEffect } from 'react';
import './stile.css';

function Progetto() {
  const [progettoData, setProgettoData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5004/progetto') // La tua API Flask per progetto
      .then(response => response.json())
      .then(data => setProgettoData(data))
      .catch(error => console.error('Errore nel recupero dei dati: ', error));
  }, []);

  return (
    <div>
      <h2>Lista Progetti</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome Progetto</th>
            <th>Data Inizio</th>
          </tr>
        </thead>
        <tbody>
          {progettoData.map((progetto, index) => (
            <tr key={index}>
              <td>{progetto.id}</td>
              <td>{progetto.nome}</td>
              <td>{progetto.data_inizio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Progetto;
