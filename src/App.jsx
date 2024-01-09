import { Header } from './components/Header.jsx'
import { Sidebar } from './components/Sidebar.jsx'
import { Post } from './components/Post.jsx'

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/puacorreia.png",
      name: "Mike Santos",
      role: "Engenheira da Computação"
    },
    content: [
      { type: "paragraph", content: "Fala galera 😁" },
      { type: "paragraph", content: "Acabei de receber um SIM para um cargo de Engenheira da Computação ! Será uma jornada incrível 🚀" },
      { type: "link", content: "mike.job/engComp" },
    ],
    publishedAt: new Date('2023-12-29 10:36:16')
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/Marleyhub.png",
      name: "Gabriel Santos",
      role: "Ciências da Computação"
    },
    content: [
      { type: "paragraph", content: "Olá rede, tenho uma dúvida 🤔 " },
      { type: "paragraph", content: "Como posso integrar um banco de dados desenvolvido python com meu app web feito cm Js ?" },
      { type: "link", content: "marley.edu/CC" },
    ],
    publishedAt: new Date('2023-12-31 08:12:10')
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/ruancxrdoso.png",
      name: "Ruan Cardoso",
      role: "Front End Developer"
    },
    content: [
      { type: "paragraph", content: "Fala meu povo 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no curso de React da Rockeseat. O nome do projeto é Ignite Feed 🚀" },
      { type: "link", content: "ruan.design/igniteFeed" },
    ],
    publishedAt: new Date('2024-01-04 00:24:46')
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(({ id, author, content, publishedAt }) => {
            return (
              <Post 
                key={id}
                author={author}
                content={content}
                publishedAt={publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
