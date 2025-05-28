import { Header } from './components/Header';
import { Post } from './Post';
import './styles.css';


export function App() {
  return (
    <div>
      <Header />

      <Post 
        author="Gabriel Martins" 
        content="Olá, mundo!" 
      />
      <Post
        author="João Silva" 
        content="Um post legal!"
      />
    </div>
  )
}