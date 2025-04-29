import styles from "./HeaderFooter.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div class="contact-info">
        <div class="footer-brand">
          <h2>Pearson Hardman</h2>
          <p>O advogado certo para a sua empresa</p>
        </div>
        <p><i class="bi bi-geo-alt"></i> Rua dos Advogados, 1415</p>
        <p><i class="bi bi-telephone"></i> (99) 9999-9999</p>
        <p><i class="bi bi-envelope"></i> contato@pearsonhardman.com</p>
        <div class="social-networks">
          <p>Siga-nos:</p>
          <div class="networks">
            <a href="#"><i class="bi bi-facebook"></i></a>
            <a href="#"><i class="bi bi-twitter"></i></a>
            <a href="#"><i class="bi bi-linkedin"></i></a>
            <a href="#"><i class="bi bi-instagram"></i></a>
          </div>
        </div>
      </div>
      <div class="links-container">
        <h4>Outros serviços</h4>
        <nav>
          <a href="#">Propriedade intelectual</a>
          <a href="#">LGPD</a>
          <a href="#">Direito internacional</a>
          <a href="#">Processos</a>
        </nav>
      </div>
      <div class="links-container">
        <h4>Páginas</h4>
        <nav>
          <a href="#">Termos e condições</a>
          <a href="#">Política de privacidade</a>
          <a href="#">Fale com um especialista</a>
          <a href="#">FAQ</a>
        </nav>
      </div>
      <div class="links-container">
        <h4>Consulta grátis</h4>
        <div class="phone-number">
          <i class="bi bi-telephone"></i>
          <p>(99) 9999-9999</p>
        </div>
        <p class="phone-info">
          Este telefone é especial para tratar de casos já em andamento
        </p>
      </div>
    </footer>
  );
}


{/* <footer className={styles.footer}>
<div className={styles.contactInfo}>
  <div className={styles.footerBrand}>
    <h2>Pearson Hardman</h2>
    <p>O advogado certo para a sua empresa</p>
  </div>
  <p>
    <i className="bi bi-geo-alt"></i> Rua dos Advogados, 1415
  </p>
  <p>
    <i className="bi bi-telephone"></i> (99) 9999-9999
  </p>
  <p>
    <i className="bi bi-envelope"></i> contato@pearsonhardman.com
  </p>

  <div className={styles.socialNetworks}>
    <p>Siga-nos:</p>
    <div className={styles.networks}>
      <a href="#"><i className="bi bi-facebook"></i></a>
      <a href="#"><i className="bi bi-twitter"></i></a>
      <a href="#"><i className="bi bi-linkedin"></i></a>
      <a href="#"><i className="bi bi-instagram"></i></a>
    </div>
  </div>
</div>

<div className={styles.linksContainer}>
  <h4>Outros serviços</h4>
  <nav>
    <a href="#">Propriedade intelectual</a>
    <a href="#">LGPD</a>
    <a href="#">Direito internacional</a>
    <a href="#">Processos</a>
  </nav>
</div>

<div className={styles.linksContainer}>
  <h4>Páginas</h4>
  <nav>
    <a href="#">Termos e condições</a>
    <a href="#">Política de privacidade</a>
    <a href="#">Fale com um especialista</a>
    <a href="#">FAQ</a>
  </nav>
</div>

<div className={styles.linksContainer}>
  <h4>Consulta grátis</h4>
  <div className={styles.phoneNumber}>
    <i className="bi bi-telephone"></i>
    <p>(99) 9999-9999</p>
  </div>
  <p className={styles.phoneInfo}>
    Este telefone é especial para tratar de casos já em andamento
  </p>
</div>
</footer> */}