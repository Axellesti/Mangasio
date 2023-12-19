import ActualitesList from './ActualitesList'
import styles from '../styles/Actualites.module.css'
import React from 'react'

import jujutsu from "../assets/images/jujutsu-kaisen.jpeg"
import collection from '../assets/images/manga-collection.jpg'
import attack from '../assets/images/snk.jpg'



function Actualites() {

  const actuList = [
  {
    titre: "La fin de Jujutsu Kaisen ❌",
    img: jujutsu,
    paragraphe: "En effet, il a annoncé que son manga devrait se terminer en fin 2024.",
    date: "| 7 novembre 2023",
  },

  {
    titre: "Les actus manga du mois de Novembre 2023 ! 🤩",
    img: collection,
    paragraphe: "Découvrez juste ici les actus mangas du mois !",
    date: "| 29 octobre 2023",
  },
  {
    titre: "C'est fini pour l'Attaque des Titans... 😭",
    img: attack,
    paragraphe: "Les histoires d'Eren sont enfin terminées...",
    date: "| 3 octobre 2023",
  },
  ];


  return (
    <div className= {styles.actus}>
    <h2>À la une !</h2>
      {actuList.map((actualites, index) => (
        <React.Fragment key = {index}>
        <ActualitesList blogs={actualites}/>
        <div className={styles.line}></div>
        </React.Fragment>
      ))}
    </div>
  )
}

export default Actualites