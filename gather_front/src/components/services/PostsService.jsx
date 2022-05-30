import axios from "axios";
import Constantes from "../../utils/Constantes";

const API_URL = Constantes.api_url;

// Primer peticion de ejemplo para traer usuarios

export async function getPosts() {
  return await axios({
    method: "GET",
    url: `${API_URL}/posts/posts/`,
  })
    .then((response) => {
        return response.data})
    .catch(function (error) {
      if (error.reponse) {
        return error.response;
      }
    });
}

export async function getPostsByTema(idtema) {
  return await axios({
    method: "GET",
    url: `${API_URL}/posts/posts/${idtema}/`,
  })
    .then((response) => {
        return response.data})
    .catch(function (error) {
      if (error.reponse) {
        return error.response;
      }
    });
}


export async function getTemas() {
  return await axios({
    method: "GET",
    url: `${API_URL}/posts/temas/`,
  })
    .then((response) => {
        return response.data})
    .catch(function (error) {
      if (error.reponse) {
        return error.response;
      }
    });
}