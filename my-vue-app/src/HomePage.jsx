import { Link } from 'react-router-dom';
import './HomePage.css';

// Importa l'immagine del logo
import logo from './academy.png';

function HomePage() {
  return (
    <div className="home-container">
      <img src={logo} alt="Logo" className="home-logo" />

      <header className="home-header">
        <h1>Benvenuto in Gestione DataBase dell&apos;Accademia!</h1>
        <p>Qui puoi organizzare e modificare le tue tabelle!</p>
      </header>

      <section className="home-content">
        <div className="home-card">
          <h2>Lista WP</h2>
          <p>Tutti i WP</p>
          <Link to="/wp" className="home-link">Vai a WP</Link>
        </div>

        <div className="home-card">
          <h2>Lista Assenze</h2>
          <p>Tutte le assenze registrate</p>
          <Link to="/assenza" className="home-link">Vai ad Assenze</Link>
        </div>

        <div className="home-card">
          <h2>Lista Progetti</h2>
          <p>Tutti i progetti correnti</p>
          <Link to="/progetto" className="home-link">Vai a Progetti</Link>
        </div>

        <div className="home-card">
          <h2>Lista Docenti</h2>
          <p>Tutti i docenti nel sistema</p>
          <Link to="/docente" className="home-link">Vai a Docenti</Link>
        </div>

        <div className="home-card">
          <h2>Lista Corsi</h2>
          <p>Tutti i corsi presenti</p>
          <Link to="/corso" className="home-link">Vai a Corsi</Link>
        </div>

        <div className="home-card">
          <h2>Lista Esami</h2>
          <p>Tutti gli esami fatti dai corsisti</p>
          <Link to="/esame" className="home-link">Vai a Esami</Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
