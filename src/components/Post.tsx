import styles from './Post.module.css'

import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
// import ptBR from 'date-fns/locale/pt-BR'

import { Comment } from './Comment.jsx'
import { Avatar } from './Avatar.jsx'

interface Author {
  avatarUrl: string;
  name: string;
  role: string;
}

interface Content {
  type: 'paragraph' | 'link',
  content: string
}

export interface PostType {
  id: number,
  author: Author,
  content: Content[],
  publishedAt: Date
}

interface PostProps {
  post: PostType
}

export function Post({ post }: PostProps) {
  const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    // locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    // locale: ptBR,
    addSuffix: true
  })

  const [newComment, setNewComment] = useState<string>('')

  const [comments, setComments] = useState<string[]>([])

  const isNewCommentEmpty = newComment === '' ? true : false

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório !')
  }

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()

    setComments([...comments, newComment])

    setNewComment('')
  }

  function handleNewCommentText(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewComment(event.target.value)
  }

  function deleteComment(comment: string) {
    const commentsWithoutDeletedOne = comments.filter(otherComments => otherComments !== comment)

    setComments(commentsWithoutDeletedOne)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map(line => {
          if (line.type == "paragraph") {
            return (
              <p key={line.content}>{line.content}</p>
            )
          } else {
            return (
              <p key={line.content}><a href="#">{line.content}</a></p>
            )
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          onChange={handleNewCommentText} 
          name='comment'
          value={newComment}
          placeholder='Deixe um comentário...'
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment 
              key={comment} 
              text={comment} 
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}
