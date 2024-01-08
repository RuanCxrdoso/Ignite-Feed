/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import styles from './Post.module.css'

import { useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Comment } from './Comment.jsx'
import { Avatar } from './Avatar.jsx'

export function Post({ author, content, publishedAt }) {
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  const [newComment, setNewComment] = useState('')

  const [comments, setComments] = useState([])

  function handleCreateNewComment() {
    event.preventDefault()

    setComments([...comments, newComment])

    setNewComment('')
  }

  function newCommentText() {
    setNewComment(event.target.value)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type == "paragraph") {
            return (
              <p>{line.content}</p>
            )
          } else {
            return (
              <p><a href="#">{line.content}</a></p>
            )
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          onChange={newCommentText} 
          name='comment'
          value={newComment}
          placeholder='Deixe um comentário...'
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment text={comment}/>
        })}
      </div>
    </article>
  )
}
