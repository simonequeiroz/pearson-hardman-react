import { Link } from "react-router-dom";
import styles from "./HeaderFooter.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.innerHeader}>
        <h2 className={styles.brand}>Pearson Hardman</h2>
        <nav className={styles.navbar}>
            <Link to="/">Início</Link>
            <Link to="/servicos">Serviços</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/time">Time</Link>
            <Link to="/contato">Contato</Link>
        </nav>
        {/* <i class="bi bi-list" id="menu"></i>
        <nav id="mobile-navbar">
          <i class="bi bi-x-lg" id="close-menu"></i>
          <a href="index.html">Início</a>
          <a href="servicos.html">Serviços</a>
          <a href="sobre.html">Sobre</a>
          <a href="time.html">Time</a>
          <a href="contato.html">Contato</a>
        </nav> */}
      </div>
      <div className={`${styles.banner} ${styles.active}`}>
        <span className={styles.square}></span>
        <h2>Melhores experts em direito do país</h2>
        <p>
          Os advogados mais bem qualificados estão aqui, agende uma reunião e
          conheça nosso time
        </p>
      </div>
      <div className={styles.banner}>
        <span className={styles.square}></span>
        <h2>Conheça o nosso time</h2>
        <p>
          Veja as especialidades dos nossos advogados, e entenda como eles podem
          lhe ajudar
        </p>
      </div>
      <div className={styles.banner}>
        <span className={styles.square}></span>
        <h2>Os nossos resultados</h2>
        <p>
          Confira as nossas métricas e conheça os resultados que já obtivemos
        </p>
      </div>
      <div className={styles.dots}>
        <div className={`${styles.dot} ${styles.active}`}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </header>
  );
}


// {/* <header className={styles.header}>
// <div className={styles.innerHeader}>
//   <h2 className={styles.brand}>Pearson Hardman</h2>
//   <nav className={styles.navbar}>
//     <Link to="/">Início</Link>
//     <Link to="/servicos">Serviços</Link>
//     <Link to="/sobre">Sobre</Link>
//     <Link to="/time">Time</Link>
//     <Link to="/contato">Contato</Link>
//   </nav>
// </div>

// {/* BANNERS */}
// <div className={`${styles.banner} ${styles.active}`}>
//   <span className={styles.square}></span>
//   <h2>Melhores experts em direito do país</h2>
//   <p>
//     Os advogados mais bem qualificados estão aqui, agende uma reunião e
//     conheça nosso time
//   </p>
// </div>
// <div className={styles.banner}>
//   <span className={styles.square}></span>
//   <h2>Conheça o nosso time</h2>
//   <p>
//     Veja as especialidades dos nossos advogados, e entenda como eles podem
//     lhe ajudar
//   </p>
// </div>
// <div className={styles.banner}>
//   <span className={styles.square}></span>
//   <h2>Os nossos resultados</h2>
//   <p>
//     Confira as nossas métricas e conheça os resultados que já obtivemos
//   </p>
// </div>

// {/* DOTS */}
// <div className={styles.dots}>
//   <div className={`${styles.dot} ${styles.active}`}></div>
//   <div className={styles.dot}></div>
//   <div className={styles.dot}></div>
// </div>
// </header> */}