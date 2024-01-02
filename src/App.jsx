import { Post } from './post'
import { Header } from './components/header.jsx'
import './styles.css';

export function App() {
  return (
    <div>
      <Header/>
      <h1>Hello World !</h1>
      <Post
        author="Ruan Cardoso"
        content="Em caminho de paca tatu caminha dentro !"
      />
      <Post
        author="Abne Viado"
        content="Paca da a volta e tatu caminha atrás !"
      />
      <Post
        author="Magmag"
        content="Cachorro cotó foi mijar e caiu !"
      />
    </div>
  )
}
