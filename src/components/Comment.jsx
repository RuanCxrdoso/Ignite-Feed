/* eslint-disable react/prop-types */
import styles from './Comment.module.css'

import { ThumbsUp, Trash } from '@phosphor-icons/react'
import { Avatar } from './Avatar'

export function Comment({ text }) {
  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/ruancxrdoso.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Ruan Cardoso</strong>
              <time title='30 de março de 2024 às 11:24h' dateTime='2024-03-30 11:24:02'>Cerca de 2h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash  size={20}/>
            </button>
          </header>
          <p>{text}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={24}/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}