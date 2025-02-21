import React, { useState, useEffect } from 'react';

function Studente() {
  const [studenteData, setStudenteData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5004/studente') // La tua API Flask per studente
      .then(response => response.json())
      .then(data => setStudenteData(data))
      .catch(error => console.error('Errore nel recupero dei dati: ', error));
  }, []);

  return (
    <div>
      <h2>Lista Studenti</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Data di Nascita</th>
          </tr>
        </thead>
        <tbody>
          {studenteData.map((studente, index) => (
            <tr key={index}>
              <td>{studente.id}</td>
              <td>{studente.nome}</td>
              <td>{studente.data_nascita}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Studente;
