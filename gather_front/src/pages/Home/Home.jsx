import "./home.css";
import Header from "../../components/molecules/Header/Header";
import Footer from "../../components/molecules/Footer/Footer";
import ScrollMenu from "../../components/molecules/ScrollMenu/ScrollMenu";
import Post from "../../components/molecules/Post/Post";
import { getUsuarios } from "../../components/services/UsersService";
import { getPosts, getPostsByTema } from "../../components/services/PostsService";
import { useEffect, useState } from "react"
import * as React from 'react'


const Home = ({route}) => {
 
  const [usuarios, setUsuarios] = useState();
  const [posts, setPosts] = useState();
  const [postsFiltrados,setPostsFiltrados] = useState()
  const [idTema, setIdTema] = useState()
  const [temaEsSeleccionado, setTemaEsSeleccionado] = useState(false)
  const bloquePosts = []
  const bloquePostsFiltrados = []

  const handleTemas = (e) => {
    setIdTema(e.id)
    setTemaEsSeleccionado(true)
  }

  const handleReiniciarTemas = () => {
    setTemaEsSeleccionado(false)
    console.log("aaaaaaaa")
  }

  if (posts != null) {
    posts.forEach(post => {
      bloquePosts.push(
        <>
            <Post
              className = "publicacion"
              postData={post}
              />
        </>
      )
    });  
  }

  if (postsFiltrados != null) {
    postsFiltrados.forEach(post => {
      bloquePostsFiltrados.push(
        <>
            <Post
              className = "publicacion"
              postData={post}
              />
        </>
      )
    });  
  }

  useEffect(() => {
    getUsuarios().then((res) => {
      setUsuarios(res);
    });
    getPosts().then((res) => {
      setPosts(res);
    })
    if (idTema != null) {
      getPostsByTema(idTema).then((res) => {
        setPostsFiltrados(res);
      }) 
    }
  }, [idTema]);

  return (
    <>
      <div className="container-home d-flex flex-column ">
        <Header />

        <ScrollMenu 
          className="my-4" 
          handleTemas={handleTemas}
          handleReiniciarTemas={handleReiniciarTemas}
          />

        <main className="my-auto">
          {temaEsSeleccionado ? (<>{bloquePostsFiltrados}</>) : (<>{bloquePosts}</>)}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
