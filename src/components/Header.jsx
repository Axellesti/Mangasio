import styles from "../styles/Header.module.css"
import logoImg from "../assets/images/1145.png"
import logoLoupe from "../assets/images/loupe.png"
import profil from "../assets/images/logoprofil.png"

function Header() {
  return (
    <header className={styles.header}>
    <img className={styles.logoImg} src={logoImg} alt="logoImg"/>
    <button className={styles.sub}>M'abonner</button>
    <img className={styles.logoLoupe} src={logoLoupe} alt="logoLoupe"/>
    <img className={styles.profil} src={profil} alt="profil"/>
    </header>
  )
}

export default Header