import axios from "axios";
import Constantes from "../../utils/Constantes";

const API_URL = Constantes.api_url;

// Primer peticion de ejemplo para traer usuarios

export async function getUsuarios() {
  return await axios({
    method: "GET",
    url: `${API_URL}/usuario/usuario/`,
  })
    .then((response) => {
        return response.data})
    .catch(function (error) {
      if (error.reponse) {
        return error.response;
      }
    });
    // return axios.get(`${API_URL}/usuario/usuario/`)
}
