import styles from '../styles/Footer.module.css'

function Footer() {
  return (


    <div className= {styles.footerlist} > 
    
    
        <button className={styles.buttonNext}>Page Suivante</button>
    

    <p className= {styles.joinUsText} >Des milliers de passioné.e.s font partie de notre communauté, et toi? <br />
        <a href="blank"> Rejoins-nous 🤗 </a>
    </p>

    <div className= {styles.socialMediaIcons}>
    <img src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png" height = "30" width = "" alt="" />
    
    <img src="https://png.pngtree.com/png-clipart/20230401/original/pngtree-three-dimensional-instagram-icon-png-image_9015419.png" height = "30" alt="" />

    <img src="https://logodownload.org/wp-content/uploads/2017/11/discord-logo-4-1.png" height = "30" alt="" />

    <img src="https://assets.stickpng.com/images/602179070ad3230004b93c28.png" alt="" height= "30"/>

    </div>

    <div className={styles.footerUl}>
        <ul>
          <li>
            <p className={styles.title}>Tous nos mangas</p>
          </li>
          <li>Sheinen</li>
          <li>Shōnen</li>
          <li>Shōjo</li>
        </ul>

        <ul>
          <li>
            <p className={styles.title}> Mangasio </p></li>
          <li>L'équipe</li>
          <li>Mentions Légales</li>
          <li>Politique de protection des données</li>
          <li>Conditions générales d'utilisation</li>
          <li>Politique de cookies</li>
        </ul>

        <ul>
          <li> <p className={styles.title}> Liens utiles </p></li>
          <li>Aide</li>
          <li>Kit presse</li>
          <li>Proposer une fonctionnalité</li>
          <li>Signaler un bug ou une correction</li>
          <li>Livre blanc</li>
        </ul>

        <ul>
            <li><p className={styles.title}>Nous contacter</p></li>
          <li>SAV / Service clients</li>
          <li>Recrutements / Candidatures</li>
          <li>Medias / Influenceurs</li>
          <li>Partenariats / Professionnels</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer