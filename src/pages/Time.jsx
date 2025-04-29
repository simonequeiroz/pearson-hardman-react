import styles from "./Time.module.css"
export function Time() {
  return (
    <>
        <section >
        <span className={styles.square}></span>
        <div className={styles.container}>
            <h2>
                A <span className="red-text">Pearson Hardman</span> tem um time de <br/>
                especialistas a sua disposição
            </h2>
          <div className={styles.employees}>
            <div className={styles.employee}>
            <img src="images/mike.jpg" alt="Mike Ross" />
              <p className={styles.employeename}>Mike Ross</p>
              <p className={styles.employeerole}>Advogado</p>
          </div>
            <div className={styles.employee}>
            <img src="images/harvey.png" alt="Harvey Specter" />
              <p className={styles.employeename}>Harvey Specter</p>
              <p className={styles.employeerole}>Advogado Sênior</p>
          </div>
            <div className={styles.employee}>
            <img src="images/louis.jpg" alt="Louis Litt" />
              <p className={styles.employeename}>Louis Litt</p>
              <p className={styles.employeerole}>Advogado</p>
          </div>
            <div className={styles.employee}>
            <img src="images/jessica.jpg" alt="Jessica Pearson" />
              <p className={styles.employeename}>Jessica Pearson</p>
              <p className={styles.employeerole}>CEO</p>
          </div>
          </div>
          </div>
      </section>
    </>

  )
}