import styles from '../styles/Bandeau.module.css'

import backgroundImage from '../assets/images/manga-collection.jpg'



function Bandeau() {

  return (
    <div className={styles.background}>
        <img className={styles.backgroundImage} src={backgroundImage} alt="Bandeau Background" />
            <div className={styles.content}>
                 <h1>Le blog 100% manga !</h1>
                 <p>Grandes annonces, nouveautés, critiques, sujets divers, on parle de tout ce qui entoure notre univers 🦄</p>
                 <button 
                 className={styles.join_us}>Rejoignez-nous !</button>
            </div>
    </div>
  )
}

export default Bandeau