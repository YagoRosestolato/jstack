import React, { useState } from "react"
import Post from "./Post";
import Header from "./Header";


export default function App() {
  
    const [posts, setPosts] = useState([
      { id: Math.random(), title: 'Titulo 01', subtitle: 'Subtitulo 01', likes: 20, read:false },
      { id: Math.random(), title: 'Titulo 02', subtitle: 'Subtitulo 02', likes: 10, read:true },
      { id: Math.random(), title: 'Titulo 03', subtitle: 'Subtitulo 03', likes: 50, read:false },
      { id: Math.random(), title: 'Titulo 04', subtitle: 'Subtitulo 04', likes: 20, read:false },
    ]);
    function handleRefresh(){
      setPosts((prevState)=>[
        ...prevState,
        {
          id: Math.random(),
          title: `Title 0${prevState.length + 1}`,
          subtitle: `Subtitle 0${prevState.length + 1}`,
          likes: 50
        }
      ])
    }

    function handleRemovePost(postId){
      setPosts((prevState) => (
        prevState.filter(post => post.id !== postId)
      ));

    }

  return (
    <>
      <Header title='Blog do Jstack'>
        <h2>Uma string qualquer</h2>
      </Header>
      <button onClick={handleRefresh}>Atualizar</button>
      <hr />

      {posts.map(post => (
        <Post
          key={post.id}
          onRemove={handleRemovePost}
          likes={post.likes}
          post={post}
        />
      ))}

    </>
  )
}