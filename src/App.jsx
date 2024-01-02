import { Header } from './components/Header.jsx'
import { Sidebar } from './components/Sidebar.jsx';
import { Post } from './Post'

import styles from './App.module.css';

import './global.css';


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Ruan Cardoso"
            content="Texto do Ruan..."
          />
          <Post
            author="Abne"
            content="Texto do Abne"
          />
          <Post
            author="Brendo"
            content="Texto do Brendo"
          />
        </main>
      </div>
    </div>
  )
}
