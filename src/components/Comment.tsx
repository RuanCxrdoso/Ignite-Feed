import styles from './Comment.module.css'
import { useState } from 'react'

import { ThumbsUp, Trash } from '@phosphor-icons/react'
import { Avatar } from './Avatar'

interface CommentProps {
  text: string,
  onDeleteComment: (text: string) => void,
}

export function Comment({ text, onDeleteComment }: CommentProps) {

  const [likeCounter, setLikeCounter] = useState(0)

  function handleUserCommentDelete() {
    onDeleteComment(text)
  }

  function handleLikeComment() {
    setLikeCounter(likeCounter + 1)
  }

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

            <button onClick={handleUserCommentDelete} title='Deletar comentário'>
              <Trash  size={20}/>
            </button>
          </header>
          <p>{text}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={24}/>
            Curtir <span>{likeCounter}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
