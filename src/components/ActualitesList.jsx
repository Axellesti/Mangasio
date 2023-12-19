import styles from '../styles/Actualites.module.css'
import { useState } from 'react'

function ActualitesList ({ blogs }) {
    const [isHovered, setIsHovered] = useState(false);


    return (
     <div className={isHovered ? `${styles.blogcard} ${styles.hovered}`: styles.blogcard}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <div className= {styles.blogcard}>
             <img className={styles.jujutsu} alt="blogging" src={blogs.img} />
            <article className={styles.articles}>
                <h3>{blogs.titre}</h3>
                <p>{blogs.paragraphe}</p>
                <p>{blogs.date}</p>
            </article>
    </div>
        </div>
    )
}

export default ActualitesList