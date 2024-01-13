import styles from './App.module.css';

import { Header } from './components/Header.jsx'
import { Sidebar } from './components/Sidebar.jsx'
import { Post, PostType } from './components/Post.jsx'

import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO Rocketseat"
    },
    content: [
      { type: "paragraph", content: "Fala galera 😁" },
      { type: "paragraph", content: "O curso de React + Typescript + Next da Rocketseat foi lançado ! 🚀" },
      { type: "link", content: "diego3g.job/Rckt" },
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
      { type: "paragraph", content: "Como posso integrar um banco de dados desenvolvido em python com meu app web feito com Js ?" },
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
          {posts.map((posts) => {
            return (
              <Post 
                key={posts.id}
                post={posts}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
