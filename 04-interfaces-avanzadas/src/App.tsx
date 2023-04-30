/* 👇 Componente: Funcionalidad principal para nuestra app.
 * Establece el estado de nuestras posts con un post predeterminado.
 */

import React, {useState, useEffect} from 'react';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import Post from './types/Post';

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  async function submitPost(post) {
    setPosts([...posts, post]);
  }

  useEffect(() => {
    // Hay un cambio de estructura en el `Post`
    setPosts([{
      id: posts.length + 1,
      // Un Post ahora contiene un `sender`
      sender: {
        id: posts.length + 1,
        name: "Ramón",
        handle: "hola_soy_milk",
      },
      body: "Eres genial!",
      timestamp: new Date,
    }]);
  }, []);

  return (
    <div className="App">
      <h1>Palabras Amables</h1>
      <main>
        <PostList posts={posts}/>
        <PostForm newPostId={posts.length + 1} submitPost={submitPost}/>
      </main>
    </div>
  );
}

export default App;
