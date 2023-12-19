import styles from '../styles/Actualites.module.css'

function ActualitesList ({ blogs }) {
    return (
        <div className= {styles.blogcard}>
             <img className={styles.jujutsu} alt="blogging" src={blogs.img} />
            <article className={styles.articles}>
                <h3>{blogs.titre}</h3>
                <p>{blogs.paragraphe}</p>
                <p>{blogs.date}</p>
            </article>
        </div>
    )
}

export default ActualitesList