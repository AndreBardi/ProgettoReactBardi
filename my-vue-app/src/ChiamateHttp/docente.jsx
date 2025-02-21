import { useState, useEffect } from 'react';

function Docente() {
  const [docenteData, setDocenteData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5004/docente') // La tua API Flask per docente
      .then(response => response.json())
      .then(data => setDocenteData(data))
      .catch(error => console.error('Errore nel recupero dei dati: ', error));
  }, []);

  return (
    <div>
      <h2>Lista Docenti</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Materia</th>
          </tr>
        </thead>
        <tbody>
          {docenteData.map((docente, index) => (
            <tr key={index}>
              <td>{docente.id}</td>
              <td>{docente.nome}</td>
              <td>{docente.materia}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Docente;
