import styles from '../styles/Bandeau.module.css'


function Bandeau() {

  return (
    <div className={styles.background}>
    <h1>Le blog 100% manga !</h1>
    <p>Grandes annonces, nouveautés, critiques, sujets divers, on parle de tout ce qui entoure notre univers 🦄</p>
    <button 
    className={styles.join_us}>Rejoignez-nous !</button>
    </div>
  )
}

export default Bandeau