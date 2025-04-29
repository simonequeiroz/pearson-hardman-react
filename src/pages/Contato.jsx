import styles from "./Contato.module.css";

export function Contato() {
  return (
    <section id="contact" className={styles.contato}>
      <div className={styles.imageContainer}>
        <img src="images/office.jpg" alt="Advogados no escritório" />
      </div>
      <div className={styles.informacoesContato}>
        <i className={`bi bi-envelope ${styles.iconeContato}`}></i>
        <p className={styles.subtituloContato}>Entre em contato</p>
        <form className={styles.formulario}>
          <div className={styles.grupoCampos}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nome"
              className={styles.campo}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              className={styles.campo}
            />
          </div>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Telefone"
            className={styles.campo}
          />
          <textarea
            name="message"
            id="message"
            placeholder="Sua mensagem..."
            className={styles.mensagem}
          ></textarea>
          <input type="submit" value="Enviar" className={styles.botao} />
        </form>
      </div>
    </section>
  );
}
