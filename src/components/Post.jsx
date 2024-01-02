import styles from './Post.module.css'

export function Post() {
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/ruancxrdoso.png" />
          <div className={styles.authorInfo}>
            <strong>Ruan Cardoso</strong>
            <span>Front End Developer</span>
          </div>
        </div>

        <time title='11 de maio às 09:19h' dateTime='2024-05-11 09:19:05'>
          Publicado a 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href="#">jane.design/doctorcare</a></p>
        <p>
          <a href="#">#novoprojeto</a>{' '}
          <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe um comentário...'/>
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
    </article>
  )
}
